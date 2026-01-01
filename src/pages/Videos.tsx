import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Play } from 'lucide-react';

const Videos = () => {
  const { ref, isVisible } = useScrollAnimation();

  const videos = [
    {
      id: 1,
      title: 'فيديو المكتبة الرئيسية للمطالعة العمومية بباتنة',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فيديو تعريفي شامل عن المكتبة الرئيسية'
    },
    {
      id: 2,
      title: 'الدخول الثقافي 2020 الجزء 1',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فعالية الدخول الثقافي'
    },
    {
      id: 3,
      title: 'ندوة عن عبد الحميد بن باديس في حوار فكري',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'ندوة قيمة عن الشخصيات الثقافية'
    },
    {
      id: 4,
      title: 'نشاطات ترفيهية خاصة بالمطالعة الشتوية',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/2853432/pexels-photo-2853432.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فعاليات وأنشطة ترفيهية للمطالعين'
    },
    {
      id: 5,
      title: 'الندوة الوطنية الأولى "مالك بن نبي"',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'حوار مهم حول فكر مالك بن نبي'
    },
    {
      id: 6,
      title: 'شرح البحث والمكتبات الرقمية',
      youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'فيديو تعليمي عن البحث الرقمي'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">المكتبة الرئيسية</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">الفيديو الرئيسي</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="فيديو المكتبة الرئيسية"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">فيديو المكتبة الرئيسية للمطالعة العمومية بباتنة</h3>
              <p className="text-gray-600">فيديو تعريفي شامل عن المكتبة الرئيسية للمطالعة العمومية محمد حمودة بن ساعي</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">الاشتراك في قناة المكتبة</h2>
          <div className="flex justify-center">
            <a
              href="https://www.youtube.com/@example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 text-white px-8 py-4 rounded-lg hover:bg-red-800 transition font-bold text-lg shadow-lg hover:shadow-xl"
            >
              الاشتراك في القناة
            </a>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">فيديوهات أخرى</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition">
                  <Play size={64} className="text-white" fill="white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 group-hover:text-red-700 transition">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
