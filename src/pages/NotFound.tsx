import { Link } from 'react-router-dom';
import { Home, BookOpen, Activity } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-700 mb-4">404</h1>
          <div className="flex justify-center gap-4 mb-6">
            <BookOpen size={48} className="text-red-700 opacity-50" />
            <BookOpen size={48} className="text-red-700 opacity-75" />
            <BookOpen size={48} className="text-red-700" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-gray-800 mb-4">الصفحة غير موجودة</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition font-bold text-lg shadow-lg hover:shadow-xl"
          >
            <Home size={24} />
            العودة إلى الصفحة الرئيسية
          </Link>
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 bg-white text-red-700 border-2 border-red-700 px-8 py-4 rounded-lg hover:bg-red-50 transition font-bold text-lg shadow-lg hover:shadow-xl"
          >
            <Activity size={24} />
            تصفح النشاطات
          </Link>
        </div>

        <div className="mt-12 text-gray-500">
          <p>أو يمكنك استخدام القائمة في الأعلى للتنقل</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
