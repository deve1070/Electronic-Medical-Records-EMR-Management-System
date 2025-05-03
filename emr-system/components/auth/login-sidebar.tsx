import { Hexagon } from 'lucide-react';

export default function LoginSidebar() {
  return (
    <div className="relative hidden min-h-screen w-full flex-col bg-gradient-to-b from-purple-600 to-purple-800 p-10 text-white md:flex md:w-1/2 lg:w-2/5">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <Hexagon className="h-8 w-8" />
        <span>MedFlow</span>
      </div>
      
      <div className="my-auto flex flex-col">
        <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
          Healthcare <br />
          reimagined for <br />
          the digital age
        </h1>
        
        <p className="mt-6 max-w-sm text-base lg:text-lg">
          Experience the next generation of electronic medical records. Secure, intuitive, and designed for modern healthcare professionals.
        </p>
      </div>
      
      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-4">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Doctor profile" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Doctor profile" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-gray-200">
              <img 
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Doctor profile" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="text-sm font-light">
            Trusted by over 10,000+ healthcare professionals
          </p>
        </div>
        <p className="text-xs opacity-70">© 2025 MedFlow. All rights reserved.</p>
      </div>
    </div>
  );
}