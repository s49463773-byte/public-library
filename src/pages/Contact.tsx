import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-4">تواصل معنا</h1>
        <p className="text-center text-gray-600 mb-12">
          لا تتردد في التواصل معنا بأي استفسار أو اقتراح
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-8">معلومات الاتصال</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <Mail className="text-red-700 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">البريد الإلكتروني</h3>
                    <a
                      href="mailto:bplpbatna@gmail.com"
                      className="text-gray-600 hover:text-red-700 transition"
                    >
                      bplpbatna@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <Phone className="text-red-700 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">الهاتف</h3>
                    <a
                      href="tel:+213338640060"
                      className="text-gray-600 hover:text-red-700 transition"
                    >
                      033 86 40 60
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <MapPin className="text-red-700 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">العنوان</h3>
                    <p className="text-gray-600">Hamla1, Batna, Algeria 05000</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <Clock className="text-red-700 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">ساعات العمل</h3>
                    <p className="text-gray-600 mb-2">من الإثنين إلى الجمعة</p>
                    <p className="text-gray-600">8:00 صباحاً - 6:00 مساءً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">الاسم *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">الهاتف</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="أدخل رقم الهاتف"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">الموضوع *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="أدخل الموضوع"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">الرسالة *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                  placeholder="أدخل رسالتك"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition font-bold text-lg shadow-lg hover:shadow-xl"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
