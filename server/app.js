// app.mjs
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';  // Import routes
import contactroutes from './routes/contact.js'

dotenv.config();

const app = express();

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use(cors());  // Enable Cross-Origin Requests (CORS)

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/contact', contactroutes);
app.use('/api/auth', authRoutes);  // Auth routes (register and login)

export default app;  // Export app for use in server.mjs
