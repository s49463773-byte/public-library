import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Search, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 order-3 md:order-1">
            <BookOpen size={36} />
            <span className="text-xl font-bold hidden sm:inline">المكتبة الرئيسية</span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-red-600 order-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center gap-1 order-2">
            <Link to="/" className="px-4 py-2 rounded-md hover:bg-red-600 transition">
              الرئيسية
            </Link>

            <div className="relative group">
              <button
                className="px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center gap-1"
                onClick={() => toggleDropdown('about')}
              >
                عن المكتبة
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/about"
                  className="block px-4 py-2 hover:bg-gray-100 border-b"
                >
                  بطاقة فنية
                </Link>
                <Link
                  to="/director-message"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  كلمة المديرة
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button
                className="px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center gap-1"
                onClick={() => toggleDropdown('services')}
              >
                خدمات
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  to="/lending"
                  className="block px-4 py-2 hover:bg-gray-100 border-b"
                >
                  الإعارة
                </Link>
                <Link
                  to="/membership"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  الانخراط
                </Link>
              </div>
            </div>

            <Link to="/regulations" className="px-4 py-2 rounded-md hover:bg-red-600 transition">
              النظام الداخلي
            </Link>

            <Link to="/activities" className="px-4 py-2 rounded-md hover:bg-red-600 transition">
              النشاطات
            </Link>

            <Link to="/devices" className="px-4 py-2 rounded-md hover:bg-red-600 transition">
              الأجهزة
            </Link>

            <Link to="/videos" className="px-4 py-2 rounded-md hover:bg-red-600 transition">
              فيديوهات
            </Link>

            <Link to="/facilities" className="px-4 py-2 rounded-md hover:bg-red-600 transition">
              تأجير
            </Link>
          </div>

          <div className="flex items-center gap-2 order-1 md:order-3">
            <button className="p-2 rounded-md hover:bg-red-600 transition">
              <Search size={24} />
            </button>
            <Link to="/login" className="p-2 rounded-md hover:bg-red-600 transition flex items-center gap-1">
              <LogIn size={24} />
              <span className="hidden sm:inline text-sm">دخول</span>
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <Link
              to="/"
              className="block px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>

            <div>
              <button
                className="w-full text-right px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center justify-between"
                onClick={() => toggleDropdown('about-mobile')}
              >
                عن المكتبة
                <ChevronDown size={16} />
              </button>
              {openDropdown === 'about-mobile' && (
                <div className="pr-4 space-y-1">
                  <Link
                    to="/about"
                    className="block px-4 py-2 hover:bg-red-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    بطاقة فنية
                  </Link>
                  <Link
                    to="/director-message"
                    className="block px-4 py-2 hover:bg-red-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    كلمة المديرة
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full text-right px-4 py-2 rounded-md hover:bg-red-600 transition flex items-center justify-between"
                onClick={() => toggleDropdown('services-mobile')}
              >
                خدمات
                <ChevronDown size={16} />
              </button>
              {openDropdown === 'services-mobile' && (
                <div className="pr-4 space-y-1">
                  <Link
                    to="/lending"
                    className="block px-4 py-2 hover:bg-red-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    الإعارة
                  </Link>
                  <Link
                    to="/membership"
                    className="block px-4 py-2 hover:bg-red-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    الانخراط
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/regulations"
              className="block px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              النظام الداخلي
            </Link>

            <Link
              to="/activities"
              className="block px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              النشاطات
            </Link>

            <Link
              to="/devices"
              className="block px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              الأجهزة
            </Link>

            <Link
              to="/videos"
              className="block px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              فيديوهات
            </Link>

            <Link
              to="/facilities"
              className="block px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              تأجير الهياكل
            </Link>

            <Link
              to="/contact"
              className="block px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              تواصل معنا
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
