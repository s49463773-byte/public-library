import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { activities } from '../data/mockData';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MapPin, Phone, Users, Tag } from 'lucide-react';

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === Number(id));
  const { ref, isVisible } = useScrollAnimation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const images = activity.images || [activity.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <Link
          to="/activities"
          className="inline-flex items-center gap-2 text-red-700 hover:underline mb-8 font-semibold"
        >
          <ArrowRight size={20} />
          العودة إلى النشاطات
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={images[currentImageIndex]}
                  alt={activity.title}
                  className="w-full h-[500px] object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition"
                    >
                      <ChevronLeft size={24} />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="p-4 bg-gray-50 flex justify-center gap-2 overflow-x-auto">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition ${
                        index === currentImageIndex ? 'border-red-700' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`صورة ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">{activity.title}</h1>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-red-700">تفاصيل النشاط</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b">
                  <Calendar className="text-red-700 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">التاريخ والوقت</h3>
                    <p className="text-gray-700">{formatDate(activity.date)}</p>
                    {activity.startTime && activity.endTime && (
                      <p className="text-gray-600 text-sm mt-1">
                        من {activity.startTime} إلى {activity.endTime}
                      </p>
                    )}
                  </div>
                </div>

                {activity.location && (
                  <div className="flex items-start gap-3 pb-4 border-b">
                    <MapPin className="text-red-700 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">الموقع</h3>
                      <p className="text-gray-700">{activity.location}</p>
                    </div>
                  </div>
                )}

                {activity.category && (
                  <div className="flex items-start gap-3 pb-4 border-b">
                    <Tag className="text-red-700 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">نوع النشاط</h3>
                      <p className="text-gray-700">{activity.category}</p>
                    </div>
                  </div>
                )}

                {activity.audience && (
                  <div className="flex items-start gap-3 pb-4 border-b">
                    <Users className="text-red-700 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">الجمهور المستهدف</h3>
                      <p className="text-gray-700">{activity.audience}</p>
                    </div>
                  </div>
                )}

                {activity.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="text-red-700 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">للاستفسار</h3>
                      <a href={`tel:${activity.phone}`} className="text-gray-700 hover:text-red-700 transition">
                        {activity.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <Link
                  to="/activities"
                  className="block w-full bg-red-700 text-white text-center px-6 py-3 rounded-lg hover:bg-red-800 transition font-bold"
                >
                  العودة إلى جميع النشاطات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;
