import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { directorMessage } from '../data/mockData';

const DirectorMessage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">كلمة المديرة</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={directorMessage.image}
                alt={directorMessage.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-red-700 mb-6">{directorMessage.name}</h2>
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed space-y-4 text-justify">
                  {directorMessage.message.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;
