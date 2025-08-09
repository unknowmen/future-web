'use client';

import React from 'react';

// ไม่จำเป็นต้องใช้ Link ถ้าไม่ได้นำไปที่หน้าอื่น
// import Link from 'next/link'; 

export default function BookingForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    // รวบรวมข้อมูลจากฟอร์ม
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // ส่งข้อมูลไปยัง Next.js API route ที่เราจะสร้างขึ้น
      const res = await fetch('/api/BookingForm/APIRoute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('Booking successful!');
        e.currentTarget.reset(); // ล้างฟอร์มหลังจากส่งข้อมูลสำเร็จ
      } else {
        const errorData = await res.json();
        alert(`Booking failed: ${errorData.error}`);
      }
    } catch (error) {
      alert('An unexpected error occurred.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Book a Reading</h1>
      <p className="text-gray-600 mb-8">Book a reading with one of our expert astrologers</p>
      
      <form onInput={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-color-black"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-color-black"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-color-black"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-color-black"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Book Reading
        </button>
      </form>
    </div>
  );
}