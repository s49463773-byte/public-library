import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Upload } from 'lucide-react';

const AddBook = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publisher: '',
    publishYear: new Date().getFullYear().toString(),
    pages: '',
    isbn: '',
    description: '',
    image: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({
        ...formData,
        image: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم إضافة الكتاب بنجاح!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">أضف كتاب</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">العنوان *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="أدخل عنوان الكتاب"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">المؤلف *</label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="أدخل اسم المؤلف"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">النوع *</label>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="مثال: أدب، تاريخ"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">الناشر</label>
                <input
                  type="text"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="أدخل اسم الناشر"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">سنة النشر</label>
                <input
                  type="number"
                  name="publishYear"
                  value={formData.publishYear}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">عدد الصفحات</label>
                <input
                  type="number"
                  name="pages"
                  value={formData.pages}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">ISBN</label>
              <input
                type="text"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                placeholder="رقم ISBN"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">الوصف</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                rows={5}
                placeholder="أدخل وصف الكتاب"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">صورة الكتاب</label>
              <label className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-700 hover:bg-red-50 transition">
                <div className="flex flex-col items-center justify-center">
                  <Upload size={32} className="text-gray-400 mb-2" />
                  <span className="text-gray-600">
                    {formData.image?.name || 'اختر صورة أو اسحبها هنا'}
                  </span>
                </div>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition font-bold text-lg shadow-lg hover:shadow-xl"
              >
                إضافة الكتاب
              </button>
              <button
                type="button"
                onClick={() => navigate('/')}
                className="flex-1 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition font-bold text-lg"
              >
                إلغاء
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
