import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">حول</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-red-400 transition">
                  بطاقة فنية
                </Link>
              </li>
              <li>
                <Link to="/director-message" className="hover:text-red-400 transition">
                  كلمة المديرة
                </Link>
              </li>
              <li>
                <Link to="/regulations" className="hover:text-red-400 transition">
                  النظام الداخلي
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">موارد</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/activities" className="hover:text-red-400 transition">
                  النشاطات
                </Link>
              </li>
              <li>
                <Link to="/devices" className="hover:text-red-400 transition">
                  الأجهزة التكنولوجية
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-red-400 transition">
                  تأجير الهياكل
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">الدعم</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/lending" className="hover:text-red-400 transition">
                  الإعارة
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-red-400 transition">
                  الانخراط
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">bplpbatna@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm">033 86 40 60</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-sm">Hamla1, Batna, Algeria</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-red-400 transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-red-400 transition">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-red-400 transition">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-400 transition">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} المكتبة الرئيسية للمطالعة العمومية محمد حمودة بن ساعي. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
