import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { libraryInfo } from '../data/mockData';
import { Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">بطاقة فنية</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-red-700 mb-4">{libraryInfo.name}</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-red-700 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">العنوان</h3>
                <p className="text-gray-600">{libraryInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-red-700 mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                <p className="text-gray-600">{libraryInfo.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-red-700 mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold mb-1">الهاتف</h3>
                <p className="text-gray-600">{libraryInfo.phone}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold mb-4">الموقع على Google Maps</h3>
            <a
              href={libraryInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition"
            >
              عرض على الخريطة
            </a>
          </div>

          <div className="mt-8 pt-8 border-t">
            <h3 className="font-bold mb-6 text-xl">تعريف بالمكتبة الرئيسية للمطالعة العمومية لولاية باتنة</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                المكتبة الرئيسية للمطالعة العمومية لولاية باتنة هي مؤسسة عمومية ذات طابع إداري، تتمتع بالشخصية
                المعنوية والاستقلال المالي، نشأت بموجب المرسوم التنفيذي رقم 13-180 المؤرخ في 24 جمادى الثانية عام
                1434 الموافق لـ 05 مايو سنة 2013 يتضمن إنشاء مكتبات رئيسية للمطالعة العمومية بالولايات الآتية:
                تمارست، سوق أهراس، تندوف، و باتنة.
              </p>
              <p>
                و طبقا للقرار الوزاري المشترك المؤرخ في 15 جمادى الثانى عام 1435 الموافق لـ 15 أفريل سنة 2014، الذي
                يتضمن إنشاء مكتبات للمطالعة العمومية، و وفقا للحكام المادة 05 من المرسوم التنفيذي رقم 12-234 المذكور
                أعلاه تنشأ 42 مكتبة للمطالعة العمومية مرفقة ملحقاتها بالملاحق، يهدا الافرار، و من بينها 20 مكتبة
                للمطالعة العمومية لولاية باتنة ملحقة بالمكتبة الرئيسية : (15 مكتبة باقرار البلدية، 05 مكتبات بدون
                غرار ابتدائ).
              </p>
              <p>
                تتع المكتبة الرئيسية للمطالعة العمومية لولاية باتنة بالمجمع السكاني الشهيد محمد عمومي - حملة -، و هي
                عبارة عن مبنى مكون من ثلاثة طوابق، كل طابق يحتوي على عدة قطاعات كقطاعات المطالعة او الوسائف الفنية و
                التربوية و مقاعة للترفية و الترفيه بالإضافة إلى مكاتب للمختصين والإدارة المكتبة، و قد تم الافتتاح
                الرسمي للمكتبة أواخر سنة 2015 إلى أنها جهزت من طرف وزير الثقافة السابق بصفته ب الولاية بتاريخ 25 أكتوبر
                2017.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
