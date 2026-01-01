import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { BookOpen, Clock, RefreshCw } from 'lucide-react';

const Lending = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">الإعارة</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-red-700 mb-6">تخضع الإعارة بالمكتبة إلى طريقتين:</h2>

            <div className="space-y-8">
              <div className="border-r-4 border-red-700 pr-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <BookOpen className="text-red-700" />
                  الإعارة الداخلية
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  تسمح للمستفيد الاطلاع على المراجع داخل قاعة المطالعة على أن لا يتجاوز عدد الكتب المطلوبة ثلاث نسخ دفعة واحدة.
                </p>
              </div>

              <div className="border-r-4 border-red-700 pr-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <RefreshCw className="text-red-700" />
                  الإعارة الخارجية
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  تسمح باستعارة الكتب لمدة 15 يوماً قابلة للتجديد مرة واحدة لمدة 10 أيام.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3 text-gray-700">
                    <Clock className="text-red-700 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">مدة الإعارة:</p>
                      <ul className="list-disc list-inside space-y-1 mr-4">
                        <li>15 يوماً للإعارة الأولى</li>
                        <li>10 أيام إضافية عند التجديد</li>
                        <li>لا يتجاوز عدد الكتب المستعارة 3 كتب في المرة الواحدة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold text-red-700 mb-6">شروط وملاحظات هامة</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded">
                <p className="font-semibold mb-2">⚠️ تنبيه هام:</p>
                <p>يجب على المنخرط المحافظة على نظافة وسلامة الكتب المستعارة. في حالة فقدان أو إتلاف كتاب، يتحمل المنخرط مسؤولية تعويضه.</p>
              </div>

              <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded">
                <p className="font-semibold mb-2">ℹ️ معلومة:</p>
                <p>المراجع النادرة والوثائق المهمة والدوريات لا تخضع للإعارة الخارجية ويمكن الاطلاع عليها داخل المكتبة فقط.</p>
              </div>

              <div className="bg-green-50 border-r-4 border-green-500 p-4 rounded">
                <p className="font-semibold mb-2">✓ للاستفادة من خدمة الإعارة:</p>
                <ul className="list-disc list-inside space-y-1 mr-4">
                  <li>يجب أن تكون منخرطاً في المكتبة</li>
                  <li>يجب إحضار بطاقة العضوية عند الاستعارة</li>
                  <li>يمكن تجديد الاستعارة مرة واحدة فقط</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lending;
