import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم تسجيل الدخول بنجاح!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`w-full max-w-md ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">تسجيل الدخول</h1>
              <p className="text-gray-600 mt-2">مرحباً بك في المكتبة الرئيسية</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                  كلمة المرور
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-red-700 focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
                    placeholder="أدخل كلمة المرور"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-700 transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-red-700 focus:ring-red-700 border-gray-300 rounded cursor-pointer"
                  />
                  <label htmlFor="rememberMe" className="mr-2 text-gray-700 text-sm cursor-pointer">
                    تذكرني
                  </label>
                </div>
                <a href="#" className="text-red-700 hover:text-red-800 text-sm font-semibold transition">
                  هل نسيت كلمة المرور؟
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition font-bold text-lg shadow-lg hover:shadow-xl"
              >
                تسجيل الدخول
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">أو</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                ليس لديك حساب؟{' '}
                <Link
                  to="/membership"
                  className="text-red-700 hover:text-red-800 font-semibold transition"
                >
                  انخرط الآن
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
