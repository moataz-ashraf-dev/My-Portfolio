// Add an image path such as '/assets/projects/clinova-cover.jpg' and place the file in public/assets/projects.
// When image is missing, live projects use their URL as an embedded preview.
// Update this list when you add a project. Keep descriptions accurate and specific.
const projects = [
  {
    title: 'Clinova Medical Clinic',
    titleAr: 'عيادة كلينوفا الطبية',
    type: 'Front-end demo',
    typeAr: 'نموذج واجهة أمامية',
    description: 'A modern clinic landing page with services, reviews, FAQs, and appointment calls to action. Sample clinic content is used throughout.',
    descriptionAr: 'صفحة تعريفية لعيادة تضم الخدمات والتقييمات والأسئلة الشائعة وأزرار الحجز. بيانات العيادة المعروضة تجريبية.',
    stack: ['React', 'JavaScript', 'CSS'],
    url: 'https://docweb-xi.vercel.app/',
    image: null,
    label: 'Live demo',
    labelAr: 'معاينة مباشرة',
  },
  {
    title: 'Eraa Soft Store',
    titleAr: 'متجر Eraa Soft',
    type: 'E-commerce storefront / React demo',
    typeAr: 'متجر إلكتروني / مشروع React',
    description: 'A polished storefront for useful everyday products, with a bold introduction and clear paths to explore the store.',
    descriptionAr: 'متجر أنيق لمنتجات الحياة اليومية، بمقدمة واضحة وروابط سهلة لاستكشاف المنتجات والتعرّف على المتجر.',
    stack: ['React'],
    url: 'https://task5-in-react.vercel.app/',
    image: '/assets/projects/eraa-soft-store.png',
    label: 'Explore store',
    labelAr: 'استكشف المتجر',
  },
  {
    title: 'Web Hosting Landing Page',
    titleAr: 'واجهة شركة استضافة مواقع',
    type: 'Hosting website / React demo',
    typeAr: 'موقع استضافة / مشروع React',
    description: 'A promotional hosting page featuring a savings offer, a clear call to action, and a comparison section for hosting plans.',
    descriptionAr: 'واجهة ترويجية لخدمات استضافة المواقع، تعرض عرضًا ترويجيًا وزرًا للبدء وقسمًا لمقارنة خطط الاستضافة.',
    stack: ['React', 'JavaScript', 'CSS'],
    url: 'https://tsck1-in-react.vercel.app/',
    image: '/assets/projects/web-hosting-landing.png',
    label: 'View project',
    labelAr: 'شاهد المشروع',
  },
];

export default projects;
