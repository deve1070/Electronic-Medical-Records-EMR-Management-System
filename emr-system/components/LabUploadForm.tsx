'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Patient {
  full_name: string;
  phone_number: string;
}

interface Order {
  order_id: number;
  test_type: string;
  patient: Patient;
}

interface Props {
  order: Order | null;
}

export default function LabUploadForm({ order }: Props) {
  const [orderId, setOrderId] = useState(order?.order_id.toString() || '');
  const [resultValue, setResultValue] = useState('');
  const [unit, setUnit] = useState('');
  const [testDate, setTestDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/lab/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: parseInt(orderId),
          resultValue: parseFloat(resultValue),
          unit,
          testDate,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to upload lab result');
      }

      setSuccess('Lab result uploaded successfully');
      setOrderId('');
      setResultValue('');
      setUnit('');
      setTestDate('');
      setTimeout(() => router.push('/lab/orders'), 2000);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
            Order ID
          </label>
          <input
            id="orderId"
            type="number"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
            disabled={!!order}
          />
          {order && (
            <p className="mt-1 text-sm text-gray-600">
              Patient: {order.patient.full_name} ({order.patient.phone_number}), Test: {order.test_type}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="resultValue" className="block text-sm font-medium text-gray-700">
            Result Value
          </label>
          <input
            id="resultValue"
            type="number"
            step="0.01"
            value={resultValue}
            onChange={(e) => setResultValue(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="unit" className="block text-sm font-medium text-gray-700">
            Unit
          </label>
          <input
            id="unit"
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="testDate" className="block text-sm font-medium text-gray-700">
            Test Date
          </label>
          <input
            id="testDate"
            type="datetime-local"
            value={testDate}
            onChange={(e) => setTestDate(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Upload Result
        </button>
      </form>
    </div>
  );
}