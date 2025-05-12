'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface LabOrder {
  order_id: number;
  test_type: string;
  order_date: string;
  patient: { full_name: string; phone_number: string };
  orderedBy: { full_name: string };
}

export default function LabOrders() {
  const [orders, setOrders] = useState<LabOrder[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/lab/orders');
        if (!res.ok) {
          throw new Error('Failed to fetch lab orders');
        }
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        setError('Error fetching lab orders');
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {orders.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Order ID</th>
              <th className="p-2 text-left">Patient</th>
              <th className="p-2 text-left">Test Type</th>
              <th className="p-2 text-left">Order Date</th>
              <th className="p-2 text-left">Ordered By</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id} className="border-b">
                <td className="p-2">{order.order_id}</td>
                <td className="p-2">{order.patient.full_name} ({order.patient.phone_number})</td>
                <td className="p-2">{order.test_type}</td>
                <td className="p-2">{new Date(order.order_date).toLocaleDateString()}</td>
                <td className="p-2">{order.orderedBy.full_name}</td>
                <td className="p-2">
                  <Link
                    href={`/lab/upload?id=${order.order_id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Upload Result
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No pending lab orders.</p>
      )}
    </div>
  );
}