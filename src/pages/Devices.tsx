import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { devices } from '../data/mockData';
import { Check } from 'lucide-react';

const Devices = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">الأجهزة التكنولوجية المتاحة بالمكتبة</h1>

        <div className="space-y-12">
          {devices.map((device, index) => (
            <div
              key={device.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } md:flex`}
            >
              <div className="md:w-1/2">
                <img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl font-bold text-red-700 mb-4">{device.name}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{device.description}</p>
                <h3 className="font-bold mb-4">المواصفات والإمكانيات:</h3>
                <ul className="space-y-2">
                  {device.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check size={20} className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Devices;
