export default function LabTechnicianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Laboratory Management</h1>
            <div className="flex space-x-4">
              <a href="/lab-technician" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="/lab-technician/orders" className="text-gray-600 hover:text-gray-900">Orders</a>
              <a href="/lab-technician/results" className="text-gray-600 hover:text-gray-900">Results</a>
              <a href="/lab-technician/history" className="text-gray-600 hover:text-gray-900">History</a>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
} 