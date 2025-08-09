// app/api/bookings/route.tsx
import Booking from '../model/booking'; // import Mongoose Model
import { NextResponse, NextRequest } from 'next/server';
import { MongoClient } from 'mongodb';
// กำหนด Interface สำหรับข้อมูลที่คาดว่าจะได้รับจากฟอร์ม
interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: Date;
}

export async function POST(req: NextRequest) {
  // เชื่อมต่อฐานข้อมูลก่อนการดำเนินการ
  const url = "mongodb://localhost:27017";
  const client = new MongoClient(url);
  await client.connect();

  try {
    // กำหนด type ให้กับ body ที่ได้รับมาเพื่อความปลอดภัยของข้อมูล
    const body: BookingData = await req.json();
    
    // ใช้วิธีสร้าง instance ใหม่ของ model ก่อน
    const newBookingInstance = new Booking(body);
    // แล้วจึงบันทึกข้อมูลลงในฐานข้อมูลด้วยเมธอด save()
    const newBooking = await newBookingInstance.save();
    
    // ส่ง response กลับเมื่อบันทึกข้อมูลสำเร็จ
    return NextResponse.json({ success: true, data: newBooking }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating booking:', error);
    // ส่ง response กลับพร้อมข้อความ error
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
