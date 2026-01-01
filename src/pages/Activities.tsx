import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { activities } from '../data/mockData';
import { Search, ChevronDown } from 'lucide-react';

const Activities = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<string[]>([]);
  const [showCategoryFilter, setShowCategoryFilter] = useState(true);
  const [showAudienceFilter, setShowAudienceFilter] = useState(true);

  const categories = ['مسابقة', 'منتدى الكتاب', 'جلسة شعرية', 'ثقافي', 'تكريم', 'ورشة'];
  const audiences = ['الأطفال', 'الجميع', 'الفئة العمرية أقل من 18 سنة'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    return {
      day: date.getDate(),
      month: months[date.getMonth()],
      fullDate: `يوم ${date.getDate()} ${months[date.getMonth()]}`
    };
  };

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory.length === 0 || selectedCategory.includes(activity.category || '');
    const matchesAudience = selectedAudience.length === 0 || selectedAudience.includes(activity.audience || '');
    return matchesSearch && matchesCategory && matchesAudience;
  });

  const toggleCategory = (cat: string) => {
    setSelectedCategory(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleAudience = (aud: string) => {
    setSelectedAudience(prev =>
      prev.includes(aud) ? prev.filter(a => a !== aud) : [...prev, aud]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-on-scroll' : ''}`}
      >
        <h1 className="text-4xl font-bold text-center mb-12">النشاطات</h1>

        <div className="mb-8">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="ابحث عن نشاط..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-lg p-6 lg:sticky lg:top-24">
              <div className="mb-6">
                <button
                  onClick={() => setShowCategoryFilter(!showCategoryFilter)}
                  className="flex items-center justify-between w-full text-lg font-bold mb-4"
                >
                  <span>نوع النشاط</span>
                  <ChevronDown className={`transition-transform ${showCategoryFilter ? 'rotate-180' : ''}`} size={20} />
                </button>
                {showCategoryFilter && (
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="checkbox"
                          checked={selectedCategory.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="w-4 h-4 text-red-700 rounded focus:ring-red-700"
                        />
                        <span className="text-gray-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t pt-6">
                <button
                  onClick={() => setShowAudienceFilter(!showAudienceFilter)}
                  className="flex items-center justify-between w-full text-lg font-bold mb-4"
                >
                  <span>الجمهور</span>
                  <ChevronDown className={`transition-transform ${showAudienceFilter ? 'rotate-180' : ''}`} size={20} />
                </button>
                {showAudienceFilter && (
                  <div className="space-y-2">
                    {audiences.map((aud) => (
                      <label key={aud} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                        <input
                          type="checkbox"
                          checked={selectedAudience.includes(aud)}
                          onChange={() => toggleAudience(aud)}
                          className="w-4 h-4 text-red-700 rounded focus:ring-red-700"
                        />
                        <span className="text-gray-700">{aud}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="space-y-6">
              {filteredActivities.map((activity) => {
                const dateInfo = formatDate(activity.date);
                return (
                  <Link
                    key={activity.id}
                    to={`/activities/${activity.id}`}
                    className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 grid grid-cols-2 gap-2 p-4">
                        {activity.images?.slice(0, 4).map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${activity.title} ${idx + 1}`}
                            className="w-full h-32 object-cover rounded"
                          />
                        ))}
                      </div>
                      <div className="md:w-2/3 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-3 gap-4">
                            <h2 className="text-2xl font-bold hover:text-red-700 transition flex-1">
                              {activity.title}
                            </h2>
                            <div className="bg-red-900 text-white rounded-lg px-3 py-2 text-center min-w-[70px] flex-shrink-0">
                              <div className="text-xs font-semibold">{dateInfo.month}</div>
                              <div className="text-2xl font-bold">{dateInfo.day}</div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-2">
                            {dateInfo.fullDate} | {activity.startTime && activity.endTime ? `من ${activity.startTime} - إلى ${activity.endTime}` : ''}
                          </p>
                          {activity.location && (
                            <p className="text-gray-500 mb-4">{activity.location}</p>
                          )}
                          <p className="text-gray-700 line-clamp-2">{activity.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {filteredActivities.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">لم يتم العثور على نشاطات تطابق البحث</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
