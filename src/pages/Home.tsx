import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCounter } from '../hooks/useCounter';
import { activities, books, spaces, libraryInfo } from '../data/mockData';
import { ChevronLeft, ChevronRight, BookOpen, Users, BookMarked, Award, Plus } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length);
  };

  return (
    <div>
      <HeroSection />
      <ActivitiesSlider
        activities={activities}
        currentSlide={currentSlide}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
      <BooksSection books={books} />
      <SpacesGallery spaces={spaces} />
      <StatsSection stats={libraryInfo.stats} />
    </div>
  );
};

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative h-[500px] bg-cover bg-center ${isVisible ? 'animate-on-scroll' : ''}`}
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">المكتبة الرئيسية للمطالعة العمومية</h1>
          <p className="text-2xl">محمد حمودة بن ساعي - ولاية باتنة</p>
        </div>
      </div>
    </div>
  );
};

const ActivitiesSlider = ({ activities, currentSlide, nextSlide, prevSlide }: any) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`py-16 bg-gray-50 ${isVisible ? 'animate-on-scroll' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">آخر النشاطات</h2>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(${currentSlide * -100}%)` }}
            >
              {activities.map((activity: any) => (
                <div key={activity.id} className="min-w-full px-2">
                  <Link to={`/activities/${activity.id}`}>
                    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition duration-300 transform hover:-translate-y-1">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <p className="text-gray-500 text-sm mb-2">{activity.date}</p>
                        <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                        <p className="text-gray-600 line-clamp-3">{activity.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {activities.map((_: any, index: number) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? 'bg-red-700' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const BooksSection = ({ books }: any) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`py-16 ${isVisible ? 'animate-on-scroll' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">أشهر الكتب المتاحة</h2>
          <Link
            to="/add-book"
            className="flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition shadow-lg hover:shadow-xl"
          >
            <Plus size={20} />
            إضافة كتاب
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book: any) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transition duration-300 transform hover:-translate-y-1"
            >
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{book.author}</p>
                <p className="text-gray-500 text-xs">{book.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SpacesGallery = ({ spaces }: any) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`py-16 bg-gray-50 ${isVisible ? 'animate-on-scroll' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">فضاءات المكتبة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space: any) => (
            <div key={space.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src={space.image}
                alt={space.name}
                className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{space.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatsSection = ({ stats }: any) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`py-16 bg-gradient-to-r from-red-50 to-orange-50 ${isVisible ? 'animate-on-scroll' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">إحصائيات المكتبة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<BookMarked size={48} className="text-red-700" />}
            value={stats.titles}
            label="عدد العناوين"
          />
          <StatCard
            icon={<BookOpen size={48} className="text-red-700" />}
            value={stats.copies}
            label="عدد النسخ"
          />
          <StatCard
            icon={<Users size={48} className="text-red-700" />}
            value={stats.members}
            label="عدد المنخرطين"
          />
          <StatCard
            icon={<Award size={48} className="text-red-700" />}
            value={stats.editions}
            label="عدد الطبعات"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }: any) => {
  const animatedValue = useCounter(value, 2000);

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl p-8 text-center transition duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl font-bold text-red-700 mb-2">{animatedValue.toLocaleString()}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};


export default Home;
