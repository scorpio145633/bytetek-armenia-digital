import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        contact: 'Contact',
        allServices: 'All Services',
        getStarted: 'Get Started'
      },
      hero: {
        badge: 'Welcome to the Future',
        title: {
          part1: 'We build digital',
          part2: {
            option1: 'experiences',
            option2: 'solutions',
            option3: 'products'
          }
        },
        subtitle: 'that matter',
        description: 'Transform your vision into reality with cutting-edge web solutions',
        cta: 'Explore Services',
        contact: 'Get in Touch'
      },
      home: {
        services: {
          title: 'Our Services',
          subtitle: 'Comprehensive solutions tailored to your needs',
          viewAll: 'View All Services'
        },
        stats: {
          projects: 'Projects Completed',
          clients: 'Happy Clients',
          satisfaction: 'Customer Satisfaction',
          awards: 'Industry Awards'
        },
        process: {
          title: 'Our Process',
          subtitle: 'A proven methodology for success',
          step1: { title: 'Discovery', description: 'We analyze your requirements and define project scope' },
          step2: { title: 'Design', description: 'Creating beautiful, user-centric interfaces' },
          step3: { title: 'Development', description: 'Building robust, scalable solutions' },
          step4: { title: 'Delivery', description: 'Launching and supporting your project' }
        },
        testimonials: {
          title: 'Client Success Stories',
          subtitle: 'See what our clients say about working with us',
          trustedBy: 'Trusted by leading companies',
          testimonial1: { quote: 'Working with this team was an absolute pleasure. They delivered beyond our expectations.', highlight: 'Exceeded expectations' },
          testimonial2: { quote: 'Professional, efficient, and highly skilled. Our project was delivered on time and within budget.', highlight: 'On time delivery' },
          testimonial3: { quote: 'The attention to detail and commitment to quality is outstanding. Highly recommended!', highlight: 'Outstanding quality' }
        },
        cta: {
          title: 'Ready to start your project?',
          subtitle: "Let's create something amazing together",
          contact: 'Contact Us',
          portfolio: 'View Our Work'
        }
      },
      common: {
        learnMore: 'Learn More',
        viewProject: 'View Project',
        getStarted: 'Get Started',
        contactUs: 'Contact Us'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive IT Solutions for Your Business',
        customDev: {
          title: 'Custom Development',
          description: 'Tailored software solutions designed specifically for your business requirements and workflows.',
        },
        webDev: {
          title: 'Web Development',
          description: 'Custom web applications built with modern technologies',
          feature1: 'Responsive Design',
          feature2: 'SEO Optimized',
          feature3: 'Fast Performance'
        },
        uiux: {
          title: 'UI/UX Design',
          description: 'Beautiful, intuitive interfaces that users love',
          feature1: 'User Research',
          feature2: 'Wireframing',
          feature3: 'Prototyping'
        },
        mobile: {
          title: 'Mobile Development',
          description: 'Native and cross-platform mobile applications',
          feature1: 'iOS & Android',
          feature2: 'Cross-platform',
          feature3: 'App Store Ready'
        },
        cloud: {
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure and deployment',
          feature1: 'Cloud Migration',
          feature2: 'DevOps',
          feature3: '24/7 Support'
        },
        workflow: {
          title: 'Workflow Automation',
          description: 'Streamline your business processes with intelligent automation solutions.',
        },
        platforms: {
          title: 'Platform Development',
          description: 'Scalable platforms and ecosystems that grow with your business.',
        },
        consulting: {
          title: 'IT Consulting',
          description: 'Expert guidance and strategic planning for your technology initiatives.',
        },
      },
      about: {
        title: 'About Bytetech',
        subtitle: 'Your Trusted Technology Partner',
        description: 'Based in Yerevan, Armenia, Bytetech is a leading IT company specializing in comprehensive technology solutions. We combine technical expertise with creative innovation to deliver exceptional results.',
        team: 'Our team of experienced professionals is dedicated to turning your vision into reality through cutting-edge technology and best practices.',
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "Let's Build Something Amazing Together",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        success: 'Thank you! We will get back to you soon.',
        error: 'Something went wrong. Please try again.',
      },
      footer: {
        description: 'Innovative IT solutions for modern businesses.',
        address: 'Address',
        rights: 'All rights reserved.',
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        services: 'Услуги',
        about: 'О нас',
        contact: 'Контакты',
      },
      hero: {
        title: 'Инновационные IT Решения',
        subtitle: 'Превращаем Идеи в Цифровую Реальность',
        description: 'Bytetech предоставляет передовые технологические решения, адаптированные под ваши бизнес-потребности. От индивидуальной разработки до комплексных IT-услуг.',
        cta: 'Начать',
        contact: 'Связаться',
      },
      services: {
        title: 'Наши Услуги',
        subtitle: 'Комплексные IT Решения для Вашего Бизнеса',
        customDev: {
          title: 'Индивидуальная Разработка',
          description: 'Специализированные программные решения, разработанные специально для ваших бизнес-требований.',
        },
        webDev: {
          title: 'Веб-разработка',
          description: 'Современные адаптивные веб-сайты и веб-приложения с использованием новейших технологий.',
        },
        design: {
          title: 'UI/UX Дизайн',
          description: 'Красивые интуитивные дизайны, которые улучшают пользовательский опыт.',
        },
        workflow: {
          title: 'Автоматизация Процессов',
          description: 'Оптимизация бизнес-процессов с помощью интеллектуальных решений автоматизации.',
        },
        platforms: {
          title: 'Разработка Платформ',
          description: 'Масштабируемые платформы и экосистемы, которые растут вместе с вашим бизнесом.',
        },
        consulting: {
          title: 'IT Консалтинг',
          description: 'Экспертное руководство и стратегическое планирование для ваших технологических инициатив.',
        },
      },
      about: {
        title: 'О компании Bytetech',
        subtitle: 'Ваш Надежный Технологический Партнер',
        description: 'Базируясь в Ереване, Армения, Bytetech является ведущей IT-компанией, специализирующейся на комплексных технологических решениях. Мы сочетаем техническую экспертизу с творческими инновациями.',
        team: 'Наша команда опытных профессионалов стремится воплотить ваше видение в реальность с помощью передовых технологий.',
      },
      contact: {
        title: 'Свяжитесь с Нами',
        subtitle: 'Давайте Создадим Что-то Удивительное Вместе',
        name: 'Имя',
        email: 'Email',
        message: 'Сообщение',
        send: 'Отправить',
        success: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
        error: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
      },
      footer: {
        description: 'Инновационные IT решения для современного бизнеса.',
        address: 'Адрес',
        rights: 'Все права защищены.',
      },
    },
  },
  hy: {
    translation: {
      nav: {
        home: 'Գլխավոր',
        services: 'Ծառայություններ',
        about: 'Մեր մասին',
        contact: 'Կապ',
      },
      hero: {
        title: 'Նորարար IT Լուծումներ',
        subtitle: 'Փոխակերպում Ենք Գաղափարները Թվային Իրականություն',
        description: 'Bytetech-ը տրամադրում է առաջադեմ տեխնոլոգիական լուծումներ՝ հարմարեցված ձեր բիզնեսի կարիքներին։ Անհատական ​​մշակումից մինչև համապարփակ IT ծառայություններ։',
        cta: 'Սկսել',
        contact: 'Կապվել',
      },
      services: {
        title: 'Մեր Ծառայությունները',
        subtitle: 'Համապարփակ IT Լուծումներ Ձեր Բիզնեսի Համար',
        customDev: {
          title: 'Անհատական Մշակում',
          description: 'Հատուկ ծրագրային լուծումներ՝ մշակված հատուկ ձեր բիզնեսի պահանջների համար։',
        },
        webDev: {
          title: 'Վեբ Մշակում',
          description: 'Ժամանակակից, հարմարվող կայքեր և վեբ հավելվածներ՝ կառուցված նորագույն տեխնոլոգիաներով։',
        },
        design: {
          title: 'UI/UX Դիզայն',
          description: 'Գեղեցիկ, ինտուիտիվ դիզայն, որը բարձրացնում է օգտատիրոջ փորձը։',
        },
        workflow: {
          title: 'Աշխատանքային Գործընթացների Ավտոմատացում',
          description: 'Պարզեցրեք ձեր բիզնես գործընթացները խելացի ավտոմատացման լուծումներով։',
        },
        platforms: {
          title: 'Հարթակների Մշակում',
          description: 'Մասշտաբավորվող հարթակներ և էկոհամակարգեր, որոնք աճում են ձեր բիզնեսի հետ միասին։',
        },
        consulting: {
          title: 'IT Խորհրդատվություն',
          description: 'Փորձագիտական ուղղորդում և ռազմավարական պլանավորում ձեր տեխնոլոգիական նախաձեռնությունների համար։',
        },
      },
      about: {
        title: 'Bytetech-ի Մասին',
        subtitle: 'Ձեր Վստահելի Տեխնոլոգիական Գործընկերը',
        description: 'Գտնվելով Երևանում, Հայաստան, Bytetech-ը առաջատար IT ընկերություն է՝ մասնագիտացած համապարփակ տեխնոլոգիական լուծումներում։ Մենք համատեղում ենք տեխնիկական փորձառությունը ստեղծագործական նորարարությունների հետ։',
        team: 'Մեր փորձառու մասնագետների թիմը նվիրված է ձեր տեսլականը իրականություն վերածելուն առաջադեմ տեխնոլոգիաների միջոցով։',
      },
      contact: {
        title: 'Կապվեք Մեզ Հետ',
        subtitle: 'Եկեք Միասին Ստեղծենք Ինչ-որ Հիանալի',
        name: 'Անուն',
        email: 'Էլ․ Փոստ',
        message: 'Հաղորդագրություն',
        send: 'Ուղարկել',
        success: 'Շնորհակալություն։ Մենք շուտով կկապվենք ձեզ հետ։',
        error: 'Ինչ-որ բան այն չէ։ Խնդրում ենք փորձել կրկին։',
      },
      footer: {
        description: 'Նորարար IT լուծումներ ժամանակակից բիզնեսի համար։',
        address: 'Հասցե',
        rights: 'Բոլոր իրավունքները պաշտպանված են։',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
