import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { regulations } from '../data/mockData';

const Regulations = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">النظام الداخلي للمكتبة</h1>

        <div className="space-y-8">
          {regulations.map((chapter) => (
            <div key={chapter.chapter} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-red-700 mb-6">
                {chapter.chapterTitle}
              </h2>
              <div className="space-y-4">
                {chapter.articles.map((article) => (
                  <div key={article.number} className="border-r-4 border-red-700 pr-4">
                    <h3 className="font-bold mb-2">المادة {article.number}</h3>
                    <p className="text-gray-700 leading-relaxed">{article.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Regulations;
