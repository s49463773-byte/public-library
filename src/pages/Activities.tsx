import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { activities } from '../data/mockData';
import { Calendar } from 'lucide-react';

const Activities = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">النشاطات</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Link
              key={activity.id}
              to={`/activities/${activity.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{activity.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3">{activity.title}</h2>
                <p className="text-gray-600 line-clamp-3">{activity.description}</p>
                <div className="mt-4 text-red-700 font-semibold">اقرأ المزيد ←</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
