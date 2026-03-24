import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error: ', err));

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide name, email, and message' });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
