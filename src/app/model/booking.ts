// models/Booking.js
// ไฟล์นี้ใช้สร้าง Schema และ Model สำหรับข้อมูลการจองใน MongoDB
import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide an email.'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number.'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide a booking date.'],
  },
});

// ตรวจสอบว่ามี Model ที่ชื่อ Booking อยู่แล้วหรือไม่
// ถ้ามีให้ใช้ตัวเดิม ถ้าไม่มีให้สร้างใหม่
export default mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
