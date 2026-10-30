export type Lang = 'en' | 'ar'

/**
 * Brand facts — taken from Maidan Clinic's official website
 * (maidangroup.com): the 1987 founding date, the "We Create The Smile"
 * slogan, 70+ clinicians, seven branches and the published branch
 * addresses. No doctors, prices, awards, reviews or outcomes are invented.
 */
export const clinic = {
  nameEn: 'Maidan Clinic',
  nameAr: 'عيادة الميدان',
  taglineEn: 'We Create The Smile',
  taglineAr: 'نصنع الابتسامة',
  since: 1987,
  phoneDisplay: '1883 322',
  phoneHref: 'tel:+9651883322',
  email: 'info@maidangroup.com',
  website: 'https://www.maidangroup.com/',
  doctorsUrl: 'https://www.maidangroup.com/OurDoctor',
  branchesUrl: 'https://www.maidangroup.com/OurBranches',
  servicesUrl: 'https://www.maidangroup.com/Services',
  socials: {
    facebook: 'https://www.facebook.com/Maidanclinic',
    instagram: 'https://www.instagram.com/maidanclinic/',
    x: 'https://twitter.com/MaidanClinic',
    youtube:
      'https://www.youtube.com/channel/UCPsuAaRYJ6bNblo6FkgvzXA',
  },
} as const

export type ServiceId =
  | 'implants'
  | 'cosmetic'
  | 'orthodontics'
  | 'pediatric'
  | 'endodontics'
  | 'hygiene'

export interface ServiceCopy {
  id: ServiceId
  title: string
  description: string
}

export type BranchId =
  | 'jahra'
  | 'sharq'
  | 'farwaniya'
  | 'fahaheel'
  | 'hawalli'
  | 'sabah-al-salem'
  | 'salmiya'

export interface Branch {
  id: BranchId
  nameEn: string
  nameAr: string
  addressEn: string
  addressAr: string
  noteEn: string
  noteAr: string
  /** Google Maps search — every directions action uses this. */
  mapQuery: string
  featured?: boolean
}

/** Branch information from https://www.maidangroup.com/OurBranches */
export const branches: Branch[] = [
  {
    id: 'jahra',
    nameEn: 'Al Jahra',
    nameAr: 'الجهراء',
    addressEn:
      'Mazaya Tower, 1st Floor, Jahra Block 5, Street 8, Marzouq Al Miteb Road — opposite Jahra Cooperative Society',
    addressAr:
      'برج مزايا، الطابق الأول، الجهراء قطعة 5، شارع 8، طريق مرزوق المطيب — مقابل جمعية الجهراء التعاونية',
    noteEn:
      'Opened in 1994 and relocated to newer facilities in 2008, serving the Al Jahra community.',
    noteAr:
      'افتُتح عام 1994 وانتقل إلى مقر أحدث في 2008، لخدمة أهالي الجهراء.',
    mapQuery: 'Maidan Clinic Jahra Kuwait',
    featured: true,
  },
  {
    id: 'sharq',
    nameEn: 'Sharq',
    nameAr: 'شرق',
    addressEn:
      '42nd Floor, KIPCO Tower, Khalid Bin Al Waleed Street, Sharq, Kuwait City',
    addressAr:
      'الطابق 42، برج كيبكو، شارع خالد بن الوليد، شرق، مدينة الكويت',
    noteEn: "Maidan's Kuwait City centre, in the landmark KIPCO Tower.",
    noteAr: 'مركز الميدان في مدينة الكويت، داخل برج كيبكو الشهير.',
    mapQuery: 'Maidan Clinic Sharq Kuwait',
  },
  {
    id: 'farwaniya',
    nameEn: 'Farwaniya',
    nameAr: 'الفروانية',
    addressEn:
      'Monawer Street, Hamra Mall — Mezzanine Floor, Farwaniya',
    addressAr:
      'شارع مناور، مجمع الحمراء مول — الطابق الميزانين، الفروانية',
    noteEn:
      'Serving patients since 1993, with a major expansion increasing the number of clinics.',
    noteAr:
      'يخدم المراجعين منذ 1993، مع توسعة كبيرة زادت عدد العيادات.',
    mapQuery: 'Maidan Clinic Farwaniya Kuwait',
  },
  {
    id: 'fahaheel',
    nameEn: 'Fahaheel',
    nameAr: 'الفحيحيل',
    addressEn:
      'Behind Center Point — Ajial Mall, 3rd Floor, Fahaheel',
    addressAr:
      'خلف سنتر بوينت — مجمع أجيال، الطابق الثالث، الفحيحيل',
    noteEn:
      'In Fahaheel since 1992, relocated to Ajial Mall in 2004 and open 24 hours.',
    noteAr:
      'في الفحيحيل منذ 1992، وانتقل إلى مجمع أجيال عام 2004، ويعمل على مدار 24 ساعة.',
    mapQuery: 'Maidan Clinic Fahaheel Kuwait',
  },
  {
    id: 'hawalli',
    nameEn: 'Hawalli',
    nameAr: 'حولي',
    addressEn:
      'Mazaya Tower, 9th–10th Floor, opposite the 3rd Ring Road, Hawalli',
    addressAr:
      'برج مزايا، الطابقان 9 و10، مقابل الطريق الدائري الثالث، حولي',
    noteEn:
      'A two-floor centre in Mazaya Tower, opposite the 3rd Ring Road.',
    noteAr:
      'مركز على طابقين في برج مزايا، مقابل الطريق الدائري الثالث.',
    mapQuery: 'Maidan Clinic Hawalli Kuwait',
  },
  {
    id: 'sabah-al-salem',
    nameEn: 'Sabah Al Salem',
    nameAr: 'صباح السالم',
    addressEn:
      'Flex Building, opposite Fahaheel Highway, Sabah Al Salem',
    addressAr:
      'مبنى فليكس، مقابل طريق الفحيحيل السريع، صباح السالم',
    noteEn:
      'Opened in 2006, extending Maidan’s care across Kuwait’s governorates.',
    noteAr:
      'افتُتح عام 2006، ليوسّع رعاية الميدان في محافظات الكويت.',
    mapQuery: 'Maidan Clinic Sabah Al Salem Kuwait',
  },
  {
    id: 'salmiya',
    nameEn: 'Salmiya',
    nameAr: 'السالمية',
    addressEn:
      'View Tower, 18th Floor, along Gulf Road, Salmiya',
    addressAr:
      'برج ذا فيو، الطابق 18، على شارع الخليج العربي، السالمية',
    noteEn:
      'The newest centre, opened in 2016 on Gulf Road.',
    noteAr:
      'أحدث مركز، افتُتح عام 2016 على شارع الخليج العربي.',
    mapQuery: 'Maidan Clinic Salmiya Kuwait',
  },
]

export interface InfoPoint {
  title: string
  body: string
}

export interface SiteCopy {
  meta: { title: string; description: string }
  nav: {
    services: string
    doctors: string
    branches: string
    about: string
    contact: string
    home: string
  }
  actions: {
    book: string
    call: string
    callNow: string
    explore: string
    directions: string
    learnMore: string
    menu: string
    close: string
    language: string
    officialSite: string
    viewDoctors: string
    findBranch: string
  }
  header: {
    descriptor: string
    menuTitle: string
    hotline: string
  }
  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    body: string
    imageAlt: string
    badgeLabel: string
    badgeValue: string
    cardLabel: string
    cardTitle: string
    cardBody: string
    trust: string[]
  }
  stats: {
    eyebrow: string
    title: string
    intro: string
    items: { value: string; label: string; detail: string }[]
    source: string
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    note: string
    cardCta: string
    dialogKicker: string
    dialogGoodToKnow: string
    dialogPoints: string[]
    dialogDisclaimer: string
    dialogCta: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    paragraphs: string[]
    points: InfoPoint[]
    quote: string
    quoteNote: string
    badge: string
    imageAlt: string
    imageCaption: string
    cardValue: string
    cardLabel: string
  }
  doctors: {
    eyebrow: string
    title: string
    intro: string
    statValue: string
    statLabel: string
    teams: InfoPoint[]
    note: string
  }
  branches: {
    eyebrow: string
    title: string
    intro: string
    featuredLabel: string
    addressLabel: string
    noteLabel: string
    directions: string
    note: string
    tabsLabel: string
  }
  appointment: {
    eyebrow: string
    title: string
    body: string
    phoneLabel: string
    emailLabel: string
    websiteLabel: string
    note: string
    supporting: string
    locationLine: string
  }
  footer: {
    blurb: string
    exploreTitle: string
    branchesTitle: string
    contactTitle: string
    languageTitle: string
    disclaimer: string
    copyright: string
    credit: string
  }
  serviceDetails: Record<ServiceId, string>
  servicesList: ServiceCopy[]
}

const en: SiteCopy = {
  meta: {
    title:
      'Maidan Clinic Kuwait | Premium Dental Care & Smile Makeovers Since 1987',
    description:
      'Maidan Clinic is a leading dental group in Kuwait with 7 branches and 70+ dental clinicians and experts. Explore dental implants, cosmetic dentistry, orthodontics, pediatric dentistry and hygiene care. Appointments: 1883 322. An unofficial redesign concept by TRIBAL³.',
  },
  nav: {
    services: 'Services',
    doctors: 'Our Doctors',
    branches: 'Our Branches',
    about: 'About Us',
    contact: 'Contact',
    home: 'Home',
  },
  actions: {
    book: 'Book an Appointment',
    call: 'Call the clinic',
    callNow: 'Call now',
    explore: 'Explore Our Services',
    directions: 'Get directions',
    learnMore: 'Learn more',
    menu: 'Open menu',
    close: 'Close',
    language: 'Language',
    officialSite: 'Visit maidangroup.com',
    viewDoctors: 'View doctors on maidangroup.com',
    findBranch: 'Find your branch',
  },
  header: {
    descriptor: 'Dental clinics · Kuwait',
    menuTitle: 'Menu',
    hotline: 'Hotline',
  },
  hero: {
    eyebrow: 'Dental care in Kuwait · Since 1987',
    titleLead: 'We create',
    titleAccent: 'the smile.',
    body: 'For nearly four decades, Maidan Clinic has brought specialist dental care to Kuwait. Seven branches, more than 70 clinicians and experts, and one shared standard — thoughtful care that helps you smile with confidence.',
    imageAlt:
      'A woman smiling naturally, showing a healthy, confident smile',
    badgeLabel: 'Serving Kuwait',
    badgeValue: 'Since 1987',
    cardLabel: 'Featured location',
    cardTitle: 'Al Jahra',
    cardBody:
      'Find us opposite Jahra Cooperative Society, on Marzouq Al Miteb Road.',
    trust: ['7 branches', '70+ clinicians', 'Appointments by phone'],
  },
  stats: {
    eyebrow: 'Trust & experience',
    title: 'A reputation built on care, not promises.',
    intro:
      'Nearly four decades of dental care in Kuwait, across seven clinics and a team of leading specialists.',
    items: [
      {
        value: '1987',
        label: 'Serving Kuwait since',
        detail: 'The year Maidan Clinic began creating smiles.',
      },
      {
        value: '70+',
        label: 'Clinicians & experts',
        detail: 'Leading dental clinicians and experts under one roof.',
      },
      {
        value: '7',
        label: 'Branches across Kuwait',
        detail: 'Specialist dental care, closer to where you live.',
      },
      {
        value: '6',
        label: 'Governorates served',
        detail: "A presence in every one of Kuwait's governorates.",
      },
    ],
    source:
      "Figures as published on Maidan Clinic's official website, maidangroup.com.",
  },
  services: {
    eyebrow: 'Our services',
    title: 'Dentistry, considered in every detail.',
    intro:
      'Six areas of specialist care, supported by experienced clinicians, an in-house dental laboratory and modern sterilization systems.',
    note: "Service information is based on Maidan Clinic's published services page. Availability varies by branch — please call 1883 322 to confirm before booking.",
    cardCta: 'View service',
    dialogKicker: 'Dental service',
    dialogGoodToKnow: 'Before you book',
    dialogPoints: [
      'Call 1883 322 to confirm the service is available at your nearest branch.',
      'Tell the team about your main concern so they can guide you to the right clinician.',
      'Bring any previous dental records, X-rays or reports with you.',
    ],
    dialogDisclaimer:
      'General information only, not medical advice. Please speak with a qualified clinician about your own dental health.',
    dialogCta: 'Call 1883 322',
  },
  about: {
    eyebrow: 'Why Maidan',
    title: 'One clinic group. A complete approach to your smile.',
    intro:
      'Since 1987, Maidan Clinic has grown around a simple promise: the best quality dental and oral health care, delivered with ease.',
    paragraphs: [
      "From its first centre to seven locations across Kuwait's governorates, Maidan has built its reputation on specialist dentistry and consistent care. Today, more than 70 leading dental clinicians and experts work across the group.",
      "The clinic's range spans implants and periodontics, cosmetic dentistry, orthodontics, pediatric dentistry, endodontics and hygiene — supported by an in-house dental laboratory and modern sterilization systems.",
    ],
    points: [
      {
        title: 'Seven branches across Kuwait',
        body: 'From Kuwait City to Al Jahra, Maidan places specialist dental care closer to home.',
      },
      {
        title: 'A wide range of specialties',
        body: 'Implants, cosmetic dentistry, orthodontics, pediatric care, root canals, hygiene and whitening.',
      },
      {
        title: 'Experienced dental clinicians',
        body: 'More than 70 clinicians and experts, bringing together a broad range of dental disciplines.',
      },
      {
        title: 'Integrated dental care',
        body: 'Clinical teams, a dental laboratory and modern sterilization systems working under one organisation.',
      },
    ],
    quote: '“We Create The Smile.”',
    quoteNote: "Maidan Clinic's official slogan since 1987.",
    badge: 'Kuwait',
    imageAlt:
      'A modern dental treatment room with large windows and natural light',
    imageCaption:
      'Illustrative photography — not a photograph of a Maidan Clinic branch.',
    cardValue: '7',
    cardLabel: 'Branches across Kuwait',
  },
  doctors: {
    eyebrow: 'Our Doctors',
    title: 'Specialists across every discipline.',
    intro:
      'More than 70 leading dental clinicians and experts work across Maidan’s branches, covering the full range of specialist dental care.',
    statValue: '70+',
    statLabel: 'Dental clinicians & experts',
    teams: [
      {
        title: 'Implantology & Periodontics',
        body: 'Dental implants and all types of periodontal surgery.',
      },
      {
        title: 'Prosthodontics & Cosmetic Dentistry',
        body: 'Smile makeovers, veneers, CAD/CAM crowns, bridges and full-mouth rehabilitation.',
      },
      {
        title: 'Orthodontics',
        body: 'Metal, ceramic and lingual braces, clear aligners and functional appliances.',
      },
      {
        title: 'Pediatric Dentistry',
        body: 'Preventive care, gentle treatment and support for children with special needs.',
      },
      {
        title: 'Endodontics & Restorative',
        body: 'Microscope-assisted root canal treatment and modern cosmetic fillings.',
      },
      {
        title: 'Dental Hygiene',
        body: 'Scaling, polishing, fluoride application and professional whitening.',
      },
    ],
    note:
      'Clinician names, photographs and branch schedules are published by Maidan Clinic and are not reproduced in this concept.',
  },
  branches: {
    eyebrow: 'Our Branches',
    title: 'Seven locations. One standard of care.',
    intro:
      'Find Maidan across Kuwait — from Kuwait City to Al Jahra. Select a branch to see its published address and directions.',
    featuredLabel: 'Featured location',
    addressLabel: 'Address',
    noteLabel: 'About this branch',
    directions: 'Open in Google Maps',
    note:
      "Branch details are taken from Maidan Clinic's official Our Branches page. Please call 1883 322 to confirm services and opening hours before visiting.",
    tabsLabel: 'Choose a branch',
  },
  appointment: {
    eyebrow: 'Book an appointment',
    title: "Let's create your smile.",
    body: 'Call Maidan Clinic to arrange a consultation at the branch nearest you. The team can help you find the right dentist for your needs.',
    phoneLabel: 'Hotline',
    emailLabel: 'Email',
    websiteLabel: 'Official website',
    note:
      "Appointments are arranged by phone with Maidan Clinic. This concept does not submit bookings or connect to Maidan's scheduling system.",
    supporting: 'Appointments are arranged by phone.',
    locationLine: 'Seven branches across Kuwait',
  },
  footer: {
    blurb:
      'Premium dental care in Kuwait since 1987. Seven branches, more than 70 clinicians and experts, one standard of care.',
    exploreTitle: 'Explore',
    branchesTitle: 'Our Branches',
    contactTitle: 'Contact',
    languageTitle: 'Language',
    disclaimer:
      'Unofficial website redesign concept by TRIBAL³ — created for presentation purposes only.',
    copyright: '© 2026 Maidan Clinic · Kuwait',
    credit: 'Concept & design by TRIBAL³',
  },
  serviceDetails: {
    implants:
      "Maidan's implant and periodontics care covers dental implants using materials accredited by the American Dental Association, together with all types of periodontal surgery. Call the clinic to discuss which option may suit your case.",
    cosmetic:
      'Cosmetic dental services include smile makeovers, Emax and porcelain veneers for a Hollywood Smile, CAD/CAM crowns and bridges, implant prosthodontics, full-mouth rehabilitation and Valplast removable dentures.',
    orthodontics:
      'Orthodontic treatment includes metal braces, ceramic braces, lingual braces, Invisalign clear aligners, retainers, and removable and functional appliances to correct facial deformity at a young age.',
    pediatric:
      'Pediatric dentistry covers early interceptive orthodontics, care for patients with special needs, pain-free dentistry using nitrous oxide (laughing gas), fluoride and sealant prevention, modern restorative procedures, child management, and emergency and trauma care.',
    endodontics:
      'Endodontic and restorative care includes root canal treatment using a modern microscope technique, re-treatment of unsuccessful nerve cases, and all types of cosmetic fillings.',
    hygiene:
      'Dental hygiene services include cleaning and polishing of teeth and gums (scaling), fluoride application, home bleaching, and Laser Zoom bleaching. Maidan also lists a modern sterilization system.',
  },
  servicesList: [
    {
      id: 'implants',
      title: 'Dental Implants & Periodontics',
      description:
        'Implant treatment with ADA-accredited materials, plus all types of periodontal surgery.',
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry & Smile Makeovers',
      description:
        'Veneers, CAD/CAM crowns and bridges, and complete smile design.',
    },
    {
      id: 'orthodontics',
      title: 'Orthodontics',
      description:
        'Metal, ceramic and lingual braces, clear aligners and retainers.',
    },
    {
      id: 'pediatric',
      title: 'Pediatric Dentistry',
      description:
        'Preventive care and gentle treatment for children, including special needs.',
    },
    {
      id: 'endodontics',
      title: 'Root Canal & Restorative Dentistry',
      description:
        'Microscope-assisted root canal treatment and modern cosmetic fillings.',
    },
    {
      id: 'hygiene',
      title: 'Dental Hygiene & Teeth Whitening',
      description:
        'Scaling, polishing, fluoride care and professional whitening.',
    },
  ],
}

const ar: SiteCopy = {
  meta: {
    title:
      'عيادة الميدان الكويت | رعاية أسنان متكاملة وتصميم الابتسامة منذ 1987',
    description:
      'عيادة الميدان مجموعة رائدة لطب الأسنان في الكويت، تضم 7 فروع وأكثر من 70 طبيب أسنان وخبيرًا. استكشف زراعة الأسنان وتجميلها والتقويم وأسنان الأطفال والعناية والتبييض. المواعيد: 1883 322. تصوّر إعادة تصميم غير رسمي من TRIBAL³.',
  },
  nav: {
    services: 'الخدمات',
    doctors: 'أطباؤنا',
    branches: 'فروعنا',
    about: 'من نحن',
    contact: 'تواصل معنا',
    home: 'الرئيسية',
  },
  actions: {
    book: 'احجز موعدك',
    call: 'اتصل بالعيادة',
    callNow: 'اتصل الآن',
    explore: 'استكشف خدماتنا',
    directions: 'الاتجاهات',
    learnMore: 'اعرف المزيد',
    menu: 'فتح القائمة',
    close: 'إغلاق',
    language: 'اللغة',
    officialSite: 'زيارة maidangroup.com',
    viewDoctors: 'عرض الأطباء على maidangroup.com',
    findBranch: 'اعثر على فرعك',
  },
  header: {
    descriptor: 'عيادات أسنان · الكويت',
    menuTitle: 'القائمة',
    hotline: 'الخط الساخن',
  },
  hero: {
    eyebrow: 'رعاية أسنان في الكويت · منذ 1987',
    titleLead: 'نصنع',
    titleAccent: 'الابتسامة.',
    body: 'منذ ما يقارب أربعة عقود، تقدّم عيادة الميدان رعاية متخصصة لطب الأسنان في الكويت. سبعة فروع، وأكثر من 70 طبيبًا وخبيرًا، ومعيار واحد مشترك — رعاية مدروسة تساعدك على الابتسام بثقة.',
    imageAlt: 'امرأة تبتسم بعفوية بابتسامة صحية وواثقة',
    badgeLabel: 'في خدمة الكويت',
    badgeValue: 'منذ 1987',
    cardLabel: 'فرع مميز',
    cardTitle: 'الجهراء',
    cardBody:
      'تجدوننا مقابل جمعية الجهراء التعاونية، على طريق مرزوق المطيب.',
    trust: ['7 فروع', 'أكثر من 70 مختصًا', 'المواعيد هاتفيًا'],
  },
  stats: {
    eyebrow: 'الثقة والخبرة',
    title: 'سمعة بُنيت على الرعاية، لا على الوعود.',
    intro:
      'قرابة أربعة عقود من رعاية الأسنان في الكويت، عبر سبع عيادات وفريق من المختصين.',
    items: [
      {
        value: '1987',
        label: 'في خدمة الكويت منذ',
        detail: 'العام الذي بدأت فيه عيادة الميدان تصنع الابتسامات.',
      },
      {
        value: '+70',
        label: 'طبيبًا وخبيرًا',
        detail: 'أبرز أطباء الأسنان والخبراء تحت سقف واحد.',
      },
      {
        value: '7',
        label: 'فروع في الكويت',
        detail: 'رعاية أسنان متخصصة أقرب إلى مكان إقامتك.',
      },
      {
        value: '6',
        label: 'محافظات نخدمها',
        detail: 'حضور في جميع محافظات الكويت.',
      },
    ],
    source:
      'الأرقام كما وردت في الموقع الرسمي لعيادة الميدان، maidangroup.com.',
  },
  services: {
    eyebrow: 'خدماتنا',
    title: 'طب أسنان، بعناية في كل تفصيل.',
    intro:
      'ستة مجالات رعاية متخصصة، يدعمها أطباء ذوو خبرة ومختبر أسنان داخلي وأنظمة تعقيم حديثة.',
    note: 'معلومات الخدمات مبنية على صفحة الخدمات المنشورة لعيادة الميدان. يختلف التوفر حسب الفرع — يُرجى الاتصال على 1883 322 للتأكد قبل الحجز.',
    cardCta: 'عرض الخدمة',
    dialogKicker: 'خدمة أسنان',
    dialogGoodToKnow: 'قبل الحجز',
    dialogPoints: [
      'اتصل على 1883 322 للتأكد من توفر الخدمة في أقرب فرع.',
      'أخبر الفريق بشكواك الأساسية ليرشدوك إلى الطبيب المناسب.',
      'أحضر معك أي سجلات أو صور أشعة أو تقارير أسنان سابقة.',
    ],
    dialogDisclaimer:
      'معلومات عامة فقط وليست نصيحة طبية. يُرجى استشارة طبيب مؤهل بشأن صحة أسنانك.',
    dialogCta: 'اتصل على 1883 322',
  },
  about: {
    eyebrow: 'لماذا الميدان',
    title: 'مجموعة واحدة. نهج متكامل لابتسامتك.',
    intro:
      'منذ عام 1987، نمت عيادة الميدان حول وعد بسيط: أفضل جودة لرعاية الفم والأسنان، وبكل سهولة.',
    paragraphs: [
      'من المركز الأول إلى سبعة فروع في محافظات الكويت، بنت الميدان سمعتها على طب الأسنان المتخصص والرعاية المتسقة. اليوم، يعمل أكثر من 70 طبيب أسنان وخبيرًا ضمن المجموعة.',
      'تشمل خدمات العيادة زراعة الأسنان واللثة، وتجميل الأسنان، والتقويم، وأسنان الأطفال، وعلاج العصب، والعناية والتبييض — بدعم من مختبر أسنان داخلي وأنظمة تعقيم حديثة.',
    ],
    points: [
      {
        title: 'سبعة فروع في الكويت',
        body: 'من مدينة الكويت إلى الجهراء، تضع الميدان رعاية الأسنان المتخصصة أقرب إلى منزلك.',
      },
      {
        title: 'مجموعة واسعة من التخصصات',
        body: 'الزراعة، والتجميل، والتقويم، وأسنان الأطفال، وعلاج العصب، والعناية والتبييض.',
      },
      {
        title: 'أطباء أسنان ذوو خبرة',
        body: 'أكثر من 70 طبيبًا وخبيرًا يجمعون مجموعة واسعة من تخصصات طب الأسنان.',
      },
      {
        title: 'رعاية أسنان متكاملة',
        body: 'فرق طبية ومختبر أسنان وأنظمة تعقيم حديثة تعمل ضمن مؤسسة واحدة.',
      },
    ],
    quote: '«نصنع الابتسامة.»',
    quoteNote: 'شعار عيادة الميدان الرسمي منذ 1987.',
    badge: 'الكويت',
    imageAlt: 'غرفة علاج أسنان حديثة بنوافذ واسعة وإضاءة طبيعية',
    imageCaption:
      'صورة توضيحية — وليست صورة لأحد فروع عيادة الميدان.',
    cardValue: '7',
    cardLabel: 'فروع في الكويت',
  },
  doctors: {
    eyebrow: 'أطباؤنا',
    title: 'مختصون في كل تخصص.',
    intro:
      'يعمل أكثر من 70 طبيب أسنان وخبيرًا في فروع الميدان، ويغطون النطاق الكامل لرعاية الأسنان المتخصصة.',
    statValue: '+70',
    statLabel: 'طبيب أسنان وخبير',
    teams: [
      {
        title: 'زراعة الأسنان واللثة',
        body: 'زراعة الأسنان وجميع أنواع جراحات اللثة.',
      },
      {
        title: 'تركيبات وتجميل الأسنان',
        body: 'تصميم الابتسامة، والفينير، وتيجان وجسور CAD/CAM، وإعادة تأهيل الفم بالكامل.',
      },
      {
        title: 'تقويم الأسنان',
        body: 'تقويم معدني وخزفي وشفاف، وتقويم شفاف متحرك، وأجهزة وظيفية.',
      },
      {
        title: 'طب أسنان الأطفال',
        body: 'رعاية وقائية وعلاج لطيف ودعم للأطفال ذوي الاحتياجات الخاصة.',
      },
      {
        title: 'علاج العصب والترميم',
        body: 'علاج العصب بمساعدة المجهر وحشوات تجميلية حديثة.',
      },
      {
        title: 'العناية بالأسنان',
        body: 'تنظيف وتلميع، وتطبيق الفلورايد، وتبييض احترافي.',
      },
    ],
    note:
      'أسماء الأطباء وصورهم وجداول الفروع منشورة من عيادة الميدان، ولا تُعاد إنتاجها في هذا التصوّر.',
  },
  branches: {
    eyebrow: 'فروعنا',
    title: 'سبعة مواقع. معيار واحد للرعاية.',
    intro:
      'تجدون الميدان في أنحاء الكويت — من مدينة الكويت إلى الجهراء. اختر فرعًا لعرض عنوانه المنشور والاتجاهات.',
    featuredLabel: 'فرع مميز',
    addressLabel: 'العنوان',
    noteLabel: 'عن هذا الفرع',
    directions: 'فتح الخريطة',
    note:
      'تفاصيل الفروع مأخوذة من صفحة «فروعنا» الرسمية لعيادة الميدان. يُرجى الاتصال على 1883 322 للتأكد من الخدمات وساعات العمل قبل الزيارة.',
    tabsLabel: 'اختر فرعًا',
  },
  appointment: {
    eyebrow: 'احجز موعدك',
    title: 'لنصنع ابتسامتك.',
    body: 'اتصل بعيادة الميدان لترتيب استشارة في أقرب فرع إليك. سيساعدك الفريق في اختيار الطبيب المناسب لاحتياجك.',
    phoneLabel: 'الخط الساخن',
    emailLabel: 'البريد الإلكتروني',
    websiteLabel: 'الموقع الرسمي',
    note:
      'تُرتَّب المواعيد هاتفيًا مع عيادة الميدان. ولا يرسل هذا التصوّر أي حجوزات أو يتصل بنظام المواعيد الفعلي للعيادة.',
    supporting: 'تُرتَّب المواعيد هاتفيًا.',
    locationLine: 'سبعة فروع في الكويت',
  },
  footer: {
    blurb:
      'رعاية أسنان متميزة في الكويت منذ 1987. سبعة فروع، وأكثر من 70 طبيبًا وخبيرًا، ومعيار واحد للرعاية.',
    exploreTitle: 'استكشف',
    branchesTitle: 'فروعنا',
    contactTitle: 'تواصل',
    languageTitle: 'اللغة',
    disclaimer:
      'تصوّر غير رسمي لإعادة تصميم الموقع من TRIBAL³ — أُعدّ لأغراض العرض فقط.',
    copyright: '© 2026 عيادة الميدان · الكويت',
    credit: 'الفكرة والتصميم: TRIBAL³',
  },
  serviceDetails: {
    implants:
      'تشمل رعاية زراعة الأسنان واللثة زراعة الأسنان بمواد معتمدة من جمعية طب الأسنان الأمريكية، إضافة إلى جميع أنواع جراحات اللثة. اتصل بالعيادة لمناقشة الخيار الأنسب لحالتك.',
    cosmetic:
      'تشمل خدمات تجميل الأسنان تصميم الابتسامة، وفينير Emax والبورسلان لابتسامة هوليوود، وتيجان وجسور CAD/CAM، وتركيبات الزراعة، وإعادة تأهيل الفم بالكامل، وأطقم Valplast المتحركة.',
    orthodontics:
      'يشمل علاج التقويم التقويم المعدني والخزفي والشفاف، وتقويم Invisalign الشفاف، والمثبتات، والأجهزة المتحركة والوظيفية لتصحيح تشوهات الوجه في سن مبكرة.',
    pediatric:
      'يشمل طب أسنان الأطفال التقويم الوقائي المبكر، ورعاية المرضى ذوي الاحتياجات الخاصة، وطب الأسنان دون ألم باستخدام أكسيد النيتروز (غاز الضحك)، والفلورايد والحشوات الوقائية، وترميمات حديثة، وإدارة سلوك الأطفال، والحالات الطارئة والإصابات.',
    endodontics:
      'تشمل رعاية العصب والترميم علاج العصب بتقنية المجهر الحديث، وإعادة علاج حالات العصب غير الناجحة، وجميع أنواع الحشوات التجميلية.',
    hygiene:
      'تشمل خدمات العناية بالأسنان تنظيف وتلميع الأسنان واللثة (الترسبات)، وتطبيق الفلورايد، والتبييض المنزلي، وتبييض Laser Zoom. كما تذكر العيادة نظام تعقيم حديث.',
  },
  servicesList: [
    {
      id: 'implants',
      title: 'زراعة الأسنان وعلاج اللثة',
      description:
        'زراعة الأسنان بمواد معتمدة من ADA، وجميع أنواع جراحات اللثة.',
    },
    {
      id: 'cosmetic',
      title: 'تجميل الأسنان وتصميم الابتسامة',
      description:
        'فينير، وتيجان وجسور CAD/CAM، وتصميم ابتسامة متكامل.',
    },
    {
      id: 'orthodontics',
      title: 'تقويم الأسنان',
      description:
        'تقويم معدني وخزفي وشفاف، وتقويم شفاف متحرك ومثبتات.',
    },
    {
      id: 'pediatric',
      title: 'طب أسنان الأطفال',
      description:
        'رعاية وقائية وعلاج لطيف للأطفال، بما في ذلك ذوو الاحتياجات الخاصة.',
    },
    {
      id: 'endodontics',
      title: 'علاج العصب والترميم',
      description:
        'علاج العصب بمساعدة المجهر وحشوات تجميلية حديثة.',
    },
    {
      id: 'hygiene',
      title: 'العناية بالأسنان والتبييض',
      description:
        'تنظيف وتلميع، ورعاية بالفلورايد، وتبييض احترافي.',
    },
  ],
}

export const copy: Record<Lang, SiteCopy> = { en, ar }

export const isRtl = (lang: Lang) => lang === 'ar'

export const branchMapUrl = (branch: Branch) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`
