import { Activity, Book, Space, Device, Facility, RegulationArticle } from '../types';

export const activities: Activity[] = [
  {
    id: 1,
    title: 'اليوم العالمي للكتاب وحقوق المؤلف 23 أبريل',
    date: '2025-04-23',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'احتفاء باليوم العالمي للكتاب وحقوق المؤلف، الذي يصادف 23 أبريل من كل سنة، يوم الثلاثاء الموافق له 22 أبريل 2025، نظمت المكتبة الرئيسية للمطالعة العمومية محمد حمودة بن ساعي لولاية باتنة والتنسيق مع شبكة مكتبات باتنة...'
  },
  {
    id: 2,
    title: 'ندوة دينية في رحاب العشر الأواخر من رمضان',
    date: '2025-03-27',
    image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'في إطار البرنامج الرمضاني للمكتبة والتنسيق مع مديرية الشؤون الدينية والأوقاف لولاية باتنة...'
  },
  {
    id: 3,
    title: 'اليوم العربي للمكتبات 10 مارس',
    date: '2025-03-10',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'بمناسبة اليوم العربي للمكتبات، نظمت المكتبة الرئيسية للمطالعة العمومية محمد حمودة بن ساعي لولاية باتنة...'
  },
  {
    id: 4,
    title: 'اليوم الوطني لذوي الاحتياجات الخاصة 14 مارس',
    date: '2025-03-14',
    image: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'بمناسبة اليوم الوطني لذوي الاحتياجات الخاصة المصادف لـ 14 مارس من كل سنة...'
  },
  {
    id: 5,
    title: 'سهرة رمضانية مميزة في المكتبة الرئيسية',
    date: '2025-03-27',
    image: 'https://images.pexels.com/photos/2853432/pexels-photo-2853432.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'في أجواء روحانية محضة بالأمداح والإنشاد المنشدة، نظمت المكتبة الرئيسية للمطالعة العمومية محمد حمودة بن ساعي لولاية باتنة...'
  }
];

export const books: Book[] = [
  {
    id: 1,
    title: 'الجريمة والعقاب',
    author: 'فيودور دوستويفسكي',
    image: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أدب روسي'
  },
  {
    id: 2,
    title: 'مئة عام من العزلة',
    author: 'غابرييل غارسيا ماركيز',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أدب أمريكي لاتيني'
  },
  {
    id: 3,
    title: 'الخيميائي',
    author: 'باولو كويلو',
    image: 'https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أدب معاصر'
  },
  {
    id: 4,
    title: 'أولاد حارتنا',
    author: 'نجيب محفوظ',
    image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أدب عربي'
  },
  {
    id: 5,
    title: 'في البحث عن الزمن المفقود',
    author: 'مارسيل بروست',
    image: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أدب فرنسي'
  },
  {
    id: 6,
    title: 'موسم الهجرة إلى الشمال',
    author: 'الطيب صالح',
    image: 'https://images.pexels.com/photos/2067569/pexels-photo-2067569.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أدب عربي'
  }
];

export const spaces: Space[] = [
  {
    id: 1,
    name: 'قاعة المطالعة',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'قاعة الإعلام الآلي',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'قاعة المحاضرات',
    image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'قاعة الأطفال',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    name: 'فضاء الوسائط المتعددة',
    image: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    name: 'فضاء الإنترنت',
    image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const devices: Device[] = [
  {
    id: 1,
    name: 'الروبوت الخدمي المتنقل',
    description: 'جهاز آلي متطور للخدمة مصمم للتفاعل مع المستفيدين داخل المكتبة',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: [
      'الإرشادات والإجابة عن الأسئلة الشائعة',
      'التنقل بشكل ذاتي في المكتبة',
      'شاشة لمسية عرض معلومات',
      'التفاعل الصوتي والمرئي'
    ]
  },
  {
    id: 2,
    name: 'جهاز الإعارة الذاتية',
    description: 'وحدة ذاتية متكاملة تمكن الروادمن استعارة الكتب بطريقة رقمية سهلة ومستقلة',
    image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: [
      'قراءة باركود الكتاب والبطاقة',
      'معالجة ذاتية لاستعارة مستقلة',
      'شاشة لمسية تفاعلية',
      'طباعة إيصالات الاستعارة'
    ]
  },
  {
    id: 3,
    name: 'معجم الوعية المتنقل',
    description: 'جهاز تكنولوجي متقدم لتنظيم وتصنيف المعلومات بطريقة ذكية',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: [
      'تجميع ذاتي للمستندات والكتب',
      'تصنيف حسب مواضيع مختلفة',
      'حماية ضوئية متطورة',
      'واجهة سهلة الاستعمال'
    ]
  },
  {
    id: 4,
    name: 'الماسح الضوئي الاحترافي',
    description: 'الماسح الضوئي الاحترافي هو جهاز تكنولوجي حديث يوفر إمكانات متقدمة',
    image: 'https://images.pexels.com/photos/5238645/pexels-photo-5238645.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: [
      'دقة مسح عالية (1200 نقطة في البوصة)',
      'سرعة معالجة فائقة',
      'مسح الوثائق بصيغ متعددة',
      'توصيل USB أو شبكة'
    ]
  }
];

export const facilities: Facility[] = [
  {
    id: 1,
    name: 'قاعة المحاضرات',
    description: 'قاعة مجهزة بأحدث الوسائل التقنية لاستضافة المؤتمرات والفعاليات',
    capacity: '200 شخص',
    price: 'حسب نوع الفعالية',
    image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=800',
    available: true
  },
  {
    id: 2,
    name: 'قاعة الإعلام الآلي',
    description: 'قاعة مجهزة بأجهزة حاسوب حديثة للتدريب والورشات',
    capacity: '30 شخص',
    price: 'حسب نوع الفعالية',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    available: true
  }
];

export const regulations: RegulationArticle[] = [
  {
    chapter: 1,
    chapterTitle: 'الفصل الأول: التعريف بالمكتبة واستخداماتها',
    articles: [
      {
        number: 1,
        content: 'المكتبة الرئيسية للمطالعة العمومية هي مؤسسة عمومية ذات طابع إداري، تتمتع بالشخصية المعنوية والاستقلال المالي'
      },
      {
        number: 2,
        content: 'تسعى المكتبة إلى نشر الثقافة والعلم بين جميع فئات المجتمع، وتوفير مصادر المعلومات لجميع الراغبين في المطالعة والبحث'
      },
      {
        number: 3,
        content: 'تفتح المكتبة أبوابها لكل المواطنين دون تمييز على أساس السن أو الجنس أو المستوى التعليمي'
      }
    ]
  },
  {
    chapter: 2,
    chapterTitle: 'الفصل الثاني: شروط الانخراط والعضوية',
    articles: [
      {
        number: 4,
        content: 'يشترط للانخراط في المكتبة تعبئة استمارة الانخراط وتقديم نسخة من بطاقة التعريف الوطنية'
      },
      {
        number: 5,
        content: 'مدة الاشتراك سنة واحدة قابلة للتجديد'
      },
      {
        number: 6,
        content: 'تحدد رسوم الانخراط حسب الفئة العمرية والوضعية الاجتماعية للمنخرط'
      }
    ]
  },
  {
    chapter: 3,
    chapterTitle: 'الفصل الثالث: قواعد الإعارة',
    articles: [
      {
        number: 7,
        content: 'يحق للعضو استعارة ما لا يزيد عن 3 كتب في المرة الواحدة'
      },
      {
        number: 8,
        content: 'مدة الإعارة الداخلية: يسمح للمستفيد الاطلاع على المراجع داخل قاعة المطالعة'
      },
      {
        number: 9,
        content: 'الإعارة الخارجية: تسمح باستعارة الكتب لمدة 15 يوماً، قابلة للتجديد مرة واحدة لمدة 10 أيام'
      }
    ]
  },
  {
    chapter: 4,
    chapterTitle: 'الفصل الرابع: واجبات وحقوق المنخرطين',
    articles: [
      {
        number: 10,
        content: 'يجب على المنخرط المحافظة على نظافة وسلامة الكتب والمراجع المستعارة'
      },
      {
        number: 11,
        content: 'يمنع منعاً باتاً الكتابة على الكتب أو تمزيقها أو إتلافها بأي شكل من الأشكال'
      },
      {
        number: 12,
        content: 'في حالة فقدان أو إتلاف كتاب، يتحمل المنخرط مسؤولية تعويضه'
      }
    ]
  },
  {
    chapter: 5,
    chapterTitle: 'الفصل الخامس: قواعد السلوك داخل المكتبة',
    articles: [
      {
        number: 13,
        content: 'يجب الحفاظ على الهدوء والانضباط داخل المكتبة احتراماً للقراء الآخرين'
      },
      {
        number: 14,
        content: 'يمنع استعمال الهواتف النقالة داخل قاعات المطالعة'
      },
      {
        number: 15,
        content: 'يمنع الأكل والشرب داخل قاعات المطالعة'
      }
    ]
  }
];

export const libraryInfo = {
  name: 'المكتبة الرئيسية للمطالعة العمومية محمد حمودة بن ساعي',
  address: 'Hamla1, Batna, Algeria, 05000',
  email: 'bplpbatna@gmail.com',
  phone: '033 86 40 60',
  mapLink: 'https://www.google.com/maps/place/Main+Public+Library+of+Batna/@35.5597854,6.1685893,17z',
  stats: {
    titles: 19284,
    copies: 83012,
    members: 61029,
    editions: 67
  }
};

export const directorMessage = {
  name: 'المديرة',
  image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800',
  message: `الحمد لله عز وجل على نعمة العلم والتعليم وأقدم وأسمى وأرقي من القيوم والتسابق وتقدم من علمنا وجعلنا المكتبات العامة مؤسسات ثقافية معلوماتية ذات منهجية وخدمات مجانية. وأيضا أصبحت المكتبات تستجيب لخدمة كل الأفراد وتقدم خدماتها على أسس علمية سليمة لتصبح أصناعة بمرور نحن وهذا ما يساعدنا للنجول في زمرة مجتمع المعلومات على أساس أن المجتمع المعلوماتي هو ذلك المجتمع الذي يتحكم في الوسائل التكنولوجيا المتقدمة والمتوسعة في إنتاج المعارف والمعلومات وهذا ما نسعى له دونيا لتحقيق مشروع ناميه البنية والتواصل إلى الحكومة الإلكترونية.

وتنوع المكتبة الرئيسية للمطالعة العمومية محمد حمودة بن ساعي ومكتباتها بالإضافة إلى أهدافها الرئيسة و رسالتها وجهاتها إلى تقديم خدمات وأنشطة متنوعة لمستخدمى المجتمع المحلى وكل الجمهور المترددة على المكتبة والمواطن والسؤبون وإهالى الموافق تنهج احدث أهداف المكتبة بالإضافة إلى التاليم المراسلة والمسندة ودورات تكوينية وندوات ومعارض في كل المناسبات تخدم الكائنات والمكتابات والمتعشين بصفة عامة.

ومن خلال موقعنا هذا الإلكتروني و بتونه الجديد يمكن للأراد والمواد ومختلف يتعاطف المجتمع على أوامره واجاسته التعامل مع مباشرة من ممعلومات والمشاركة في غرض المعلومات أيضا، كما يمكن التعرضة للأطلاع على أنشطة المقدم بالمؤسسة ومحاولاتها والأهداف والخطط لبستهدفهم، قصلا عن أن يعمل تقائلة للإطلاع على أخر المستجدات في هذه الجديدة بالمكتبة.`
};
