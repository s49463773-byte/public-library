import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { facilities } from '../data/mockData';
import { Users, DollarSign, MapPin } from 'lucide-react';

const Facilities = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  const availableFacilities = facilities.filter(f => f.available);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-4">لحجز واستغلال هياكل و فضاءات المكتبة</h1>
        <p className="text-center text-gray-600 mb-12">الرجاء تعبئة النموذج أدناه</p>

        {availableFacilities.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <MapPin size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-2">لا يوجد مرفق متاح للتأجير حالياً</h2>
            <p className="text-gray-500">نعتذر، جميع المرافق محجوزة في الوقت الحالي. يرجى التحقق مرة أخرى لاحقاً.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {availableFacilities.map((facility) => (
                <div
                  key={facility.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">{facility.name}</h2>
                    <p className="text-gray-700 mb-4">{facility.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users size={20} className="text-red-700" />
                        <span>السعة: {facility.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign size={20} className="text-red-700" />
                        <span>التعريفة: {facility.price}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedFacility(facility.id)}
                      className="w-full bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition font-bold"
                    >
                      حجز هذا المرفق
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {selectedFacility && (
              <BookingForm
                facility={availableFacilities.find(f => f.id === selectedFacility)!}
                onClose={() => setSelectedFacility(null)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const BookingForm = ({ facility, onClose }: any) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    duration: '',
    purpose: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم تقديم طلب الحجز بنجاح! سيتم التواصل معك قريباً.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full my-8">
        <h2 className="text-2xl font-bold mb-6">إستمارة طلب حجز القاعة</h2>
        <p className="text-gray-600 mb-6">المرفق المختار: <span className="font-bold">{facility.name}</span></p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">إسم الجهة</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">عنوان الجهة</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">الفاكس</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">ماهي الفضاءات المطلوب حجزها</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700"
            >
              <option value="">اختر...</option>
              <option value="قاعة المحاضرات">قاعة المحاضرات</option>
              <option value="قاعة الإعلام الآلي">قاعة الإعلام الآلي</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Facilities;
