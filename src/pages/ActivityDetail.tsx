import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { activities } from '../data/mockData';
import { Calendar, ArrowRight } from 'lucide-react';

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === Number(id));
  const { ref, isVisible } = useScrollAnimation();

  if (!activity) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">النشاط غير موجود</h1>
          <Link to="/activities" className="text-red-700 hover:underline">
            العودة إلى النشاطات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <Link
          to="/activities"
          className="inline-flex items-center gap-2 text-red-700 hover:underline mb-8"
        >
          <ArrowRight size={20} />
          العودة إلى النشاطات
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center gap-2 text-gray-500 mb-4">
              <Calendar size={20} />
              <span>{activity.date}</span>
            </div>
            <h1 className="text-3xl font-bold mb-6">{activity.title}</h1>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {activity.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
