import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
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
        hero: {
          title: 'About Bytetech',
          subtitle: 'A global team of 50+ professionals delivering excellence from Armenia'
        },
        story: {
          title: 'Our Story',
          paragraph1: 'Founded in 2025, Bytetech emerged from a vision to create a truly global technology company rooted in Armenia\'s rich tech ecosystem. We\'ve grown rapidly to become a team of 50+ talented professionals working across multiple continents.',
          paragraph2: 'Our multilingual team speaks over 5 languages, enabling us to serve clients worldwide with seamless communication and cultural understanding. We specialize in custom software development, web and mobile applications, and comprehensive IT consulting.',
          paragraph3: 'Based in Yerevan, Armenia, we leverage the country\'s exceptional tech talent, strategic location, and business-friendly environment to deliver world-class solutions at competitive rates. Our commitment to innovation and excellence drives everything we do.'
        },
        location: 'Yerevan, Armenia',
        teamSize: '50+ Employees',
        languages: '5+ Languages',
        stats: {
          employees: 'Global Team',
          worldwide: 'Across continents',
          languages: 'Languages',
          founded: 'Founded',
          years: 'Years',
          experience: 'Of Innovation',
          projects: 'Projects',
          satisfaction: 'Satisfaction'
        },
        armenia: {
          title: 'Why We Chose Armenia',
          subtitle: 'Strategic advantages that power our success',
          talent: {
            title: 'Tech Talent Hub',
            description: 'Armenia ranks among the top countries for engineering talent, with a strong STEM education system producing highly skilled developers and designers.'
          },
          cost: {
            title: 'Cost-Effective Excellence',
            description: 'Competitive operational costs without compromising quality, allowing us to deliver premium services at attractive rates for our global clients.'
          },
          location: {
            title: 'Strategic Location',
            description: 'Positioned at the crossroads of Europe and Asia, perfect for serving clients across multiple time zones with convenient collaboration hours.'
          },
          government: {
            title: 'Government Support',
            description: 'Progressive tech policies, tax incentives for IT companies, and strong infrastructure investment create an ideal business environment.'
          },
          education: {
            title: 'Educational Excellence',
            description: 'World-class universities and technical institutes with strong focus on computer science, mathematics, and engineering produce top-tier graduates.'
          },
          multilingual: {
            title: 'Multilingual Workforce',
            description: 'Our team speaks Armenian, Russian, English, and more, enabling seamless communication with international clients and partners.'
          }
        },
        values: {
          title: 'Our Core Values',
          subtitle: 'Principles that guide everything we do',
          excellence: {
            title: 'Technical Excellence',
            description: 'We maintain the highest standards in code quality, architecture, and implementation across all our projects.'
          },
          global: {
            title: 'Global Mindset',
            description: 'Our diverse, multilingual team brings international perspectives and understands the nuances of working with global clients.'
          },
          innovation: {
            title: 'Continuous Innovation',
            description: 'We stay ahead of technology trends and constantly explore new tools, frameworks, and methodologies to deliver cutting-edge solutions.'
          },
          quality: {
            title: 'Quality First',
            description: 'Every project receives meticulous attention to detail, rigorous testing, and comprehensive documentation to ensure lasting value.'
          }
        },
        timeline: {
          title: 'Our Journey',
          subtitle: '2025: A year of rapid growth and achievement',
          q1: {
            title: 'Company Launch',
            description: 'Established Bytetech in Yerevan with founding team of experienced developers and designers. Secured first international clients.'
          },
          q2: {
            title: 'Team Expansion',
            description: 'Grew to 25+ employees, establishing key departments: development, design, QA, and project management. Launched multilingual support.'
          },
          q3: {
            title: 'Global Recognition',
            description: 'Expanded to 40+ team members serving clients across 10+ countries. Achieved ISO certification and industry recognition.'
          },
          q4: {
            title: 'Scaling Success',
            description: 'Reached 50+ professionals, opened new office space, and established partnerships with leading technology providers worldwide.'
          }
        },
        team: {
          title: 'Our Global Team',
          subtitle: 'A diverse collective of 50+ passionate professionals working together to create exceptional digital solutions',
          culture: {
            innovation: {
              title: 'Innovation Driven',
              description: 'We foster creativity and encourage experimentation with cutting-edge technologies.'
            },
            collaboration: {
              title: 'Collaborative Spirit',
              description: 'Cross-functional teams working seamlessly across time zones and cultures.'
            },
            excellence: {
              title: 'Pursuit of Excellence',
              description: 'Continuous learning and improvement are core to our culture and success.'
            }
          }
        },
        cta: {
          title: 'Ready to Work Together?',
          subtitle: 'Let\'s discuss how our global team can help transform your business',
          primary: 'Start a Project',
          secondary: 'View Services'
        }
      },
      contact: {
        hero: {
          title: 'Let\'s Connect',
          subtitle: 'Get in touch with our team in Armenia. We\'re here to help bring your vision to life.'
        },
        info: {
          office: {
            title: 'Our Office',
            address: 'Tumanyan Street 15',
            city: 'Yerevan 0001, Armenia'
          },
          phone: {
            title: 'Phone',
            main: '+374 XX XXX XXX',
            support: '+374 XX XXX XXX'
          },
          email: {
            title: 'Email',
            general: 'hello@bytetech.am',
            support: 'support@bytetech.am'
          },
          hours: {
            title: 'Business Hours',
            weekdays: 'Mon-Fri: 9:00 - 18:00',
            timezone: 'Armenia Time (UTC+4)'
          }
        },
        form: {
          title: 'Send Us a Message',
          name: 'Full Name',
          namePlaceholder: 'John Doe',
          email: 'Email Address',
          emailPlaceholder: 'john@example.com',
          phone: 'Phone Number',
          phonePlaceholder: '+374 XX XXX XXX',
          service: 'Service Interest',
          servicePlaceholder: 'Select a service',
          services: {
            web: 'Web Development',
            mobile: 'Mobile Development',
            design: 'UI/UX Design',
            custom: 'Custom Development',
            consulting: 'IT Consulting',
            other: 'Other Services'
          },
          message: 'Your Message',
          messagePlaceholder: 'Tell us about your project...',
          send: 'Send Message',
          sending: 'Sending...'
        },
        quickResponse: {
          title: 'Quick Response Time',
          description: 'Our multilingual team ensures fast communication in your preferred language.',
          multilingual: 'Multilingual support team',
          support247: 'Response within 24 hours',
          response24h: 'Consultation calls available'
        },
        emergency: {
          title: 'Urgent Support',
          description: 'Need immediate assistance? Contact our priority support line.',
          phone: 'Hotline',
          email: 'Priority Email'
        }
      },
      footer: {
        description: 'Global IT solutions delivered from Armenia. 50+ professionals serving clients worldwide.',
        address: 'Yerevan, Armenia',
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
        description: 'Bytetech предоставляет передовые технологические решения, адаптированные под ваши бизнес-потребности.',
        cta: 'Начать',
        contact: 'Связаться',
      },
      services: {
        title: 'Наши Услуги',
        subtitle: 'Комплексные IT Решения для Вашего Бизнеса',
        customDev: {
          title: 'Индивидуальная Разработка',
          description: 'Специализированные программные решения для ваших бизнес-требований.',
        },
        webDev: {
          title: 'Веб-разработка',
          description: 'Современные веб-приложения с новейшими технологиями.',
        },
        design: {
          title: 'UI/UX Дизайн',
          description: 'Красивые интуитивные дизайны для улучшения пользовательского опыта.',
        },
        workflow: {
          title: 'Автоматизация Процессов',
          description: 'Оптимизация бизнес-процессов с интеллектуальной автоматизацией.',
        },
        platforms: {
          title: 'Разработка Платформ',
          description: 'Масштабируемые платформы, растущие с вашим бизнесом.',
        },
        consulting: {
          title: 'IT Консалтинг',
          description: 'Экспертное руководство для ваших технологических инициатив.',
        },
      },
      about: {
        hero: {
          title: 'О Bytetech',
          subtitle: 'Глобальная команда из 50+ специалистов, работающих из Армении'
        },
        story: {
          title: 'Наша История',
          paragraph1: 'Основанная в 2025 году, Bytetech возникла из видения создать глобальную технологическую компанию в армянской технологической экосистеме. Мы быстро выросли до команды из 50+ талантливых специалистов.',
          paragraph2: 'Наша многоязычная команда говорит на более чем 5 языках, что позволяет нам обслуживать клиентов по всему миру с бесшовной коммуникацией и культурным пониманием.',
          paragraph3: 'Базируясь в Ереване, Армения, мы используем исключительный технический талант страны и стратегическое расположение для предоставления мирового класса решений.'
        },
        location: 'Ереван, Армения',
        teamSize: '50+ Сотрудников',
        languages: '5+ Языков',
        stats: {
          employees: 'Глобальная Команда',
          worldwide: 'По всему миру',
          languages: 'Языков',
          founded: 'Основана'
        },
        armenia: {
          title: 'Почему Мы Выбрали Армению',
          subtitle: 'Стратегические преимущества нашего успеха',
          talent: {
            title: 'Центр Технических Талантов',
            description: 'Армения входит в число лучших стран по инженерному таланту с сильной системой STEM образования.'
          },
          cost: {
            title: 'Экономическая Эффективность',
            description: 'Конкурентные операционные расходы без компромиссов в качестве.'
          },
          location: {
            title: 'Стратегическое Расположение',
            description: 'На перекрестке Европы и Азии, идеально для работы с клиентами в разных часовых поясах.'
          },
          government: {
            title: 'Поддержка Государства',
            description: 'Прогрессивная технологическая политика и налоговые льготы для IT компаний.'
          },
          education: {
            title: 'Образовательное Превосходство',
            description: 'Университеты мирового класса с фокусом на компьютерные науки и инженерию.'
          },
          multilingual: {
            title: 'Многоязычная Команда',
            description: 'Наша команда говорит на армянском, русском, английском и других языках.'
          }
        },
        values: {
          title: 'Наши Ценности',
          subtitle: 'Принципы, которые направляют нашу работу',
          excellence: {
            title: 'Техническое Превосходство',
            description: 'Мы поддерживаем высочайшие стандарты качества кода и архитектуры.'
          },
          global: {
            title: 'Глобальное Мышление',
            description: 'Наша разнообразная многоязычная команда понимает работу с международными клиентами.'
          },
          innovation: {
            title: 'Постоянные Инновации',
            description: 'Мы следим за трендами и исследуем новые технологии.'
          },
          quality: {
            title: 'Качество Прежде Всего',
            description: 'Каждый проект получает тщательное внимание к деталям.'
          }
        },
        timeline: {
          title: 'Наш Путь',
          subtitle: '2025: Год быстрого роста и достижений',
          q1: {
            title: 'Запуск Компании',
            description: 'Основание Bytetech в Ереване с командой опытных разработчиков.'
          },
          q2: {
            title: 'Расширение Команды',
            description: 'Рост до 25+ сотрудников с многоязычной поддержкой.'
          },
          q3: {
            title: 'Глобальное Признание',
            description: 'Расширение до 40+ членов команды, обслуживающих 10+ стран.'
          },
          q4: {
            title: 'Масштабирование Успеха',
            description: 'Достижение 50+ специалистов с партнерствами по всему миру.'
          }
        },
        team: {
          title: 'Наша Глобальная Команда',
          subtitle: 'Разнообразный коллектив из 50+ специалистов, создающих исключительные решения',
          culture: {
            innovation: {
              title: 'Инновационность',
              description: 'Мы поощряем креативность и эксперименты.'
            },
            collaboration: {
              title: 'Дух Сотрудничества',
              description: 'Кросс-функциональные команды работают бесшовно.'
            },
            excellence: {
              title: 'Стремление к Совершенству',
              description: 'Постоянное обучение - основа нашей культуры.'
            }
          }
        },
        cta: {
          title: 'Готовы Работать Вместе?',
          subtitle: 'Давайте обсудим, как наша команда может помочь вашему бизнесу',
          primary: 'Начать Проект',
          secondary: 'Посмотреть Услуги'
        }
      },
      contact: {
        hero: {
          title: 'Свяжитесь с Нами',
          subtitle: 'Свяжитесь с нашей командой в Армении. Мы здесь, чтобы воплотить ваше видение в жизнь.'
        },
        info: {
          office: {
            title: 'Наш Офис',
            address: 'Улица Туманяна 15',
            city: 'Ереван 0001, Армения'
          },
          phone: {
            title: 'Телефон',
            main: '+374 XX XXX XXX',
            support: '+374 XX XXX XXX'
          },
          email: {
            title: 'Email',
            general: 'hello@bytetech.am',
            support: 'support@bytetech.am'
          },
          hours: {
            title: 'Часы Работы',
            weekdays: 'Пн-Пт: 9:00 - 18:00',
            timezone: 'Время Армении (UTC+4)'
          }
        },
        form: {
          title: 'Отправить Сообщение',
          name: 'Полное Имя',
          namePlaceholder: 'Иван Иванов',
          email: 'Email Адрес',
          emailPlaceholder: 'ivan@example.com',
          phone: 'Номер Телефона',
          phonePlaceholder: '+374 XX XXX XXX',
          service: 'Интересующая Услуга',
          servicePlaceholder: 'Выберите услугу',
          services: {
            web: 'Веб-разработка',
            mobile: 'Мобильная Разработка',
            design: 'UI/UX Дизайн',
            custom: 'Индивидуальная Разработка',
            consulting: 'IT Консалтинг',
            other: 'Другие Услуги'
          },
          message: 'Ваше Сообщение',
          messagePlaceholder: 'Расскажите о вашем проекте...',
          send: 'Отправить',
          sending: 'Отправка...'
        },
        quickResponse: {
          title: 'Быстрый Ответ',
          description: 'Наша многоязычная команда обеспечивает быструю связь на вашем языке.',
          multilingual: 'Многоязычная поддержка',
          support247: 'Ответ в течение 24 часов',
          response24h: 'Доступны консультации'
        },
        emergency: {
          title: 'Срочная Поддержка',
          description: 'Нужна немедленная помощь? Свяжитесь с нашей приоритетной линией.',
          phone: 'Горячая Линия',
          email: 'Приоритетный Email'
        }
      },
      footer: {
        description: 'Глобальные IT решения из Армении. 50+ специалистов по всему миру.',
        address: 'Ереван, Армения',
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
        description: 'Bytetech-ը տրամադրում է առաջադեմ տեխնոլոգիական լուծումներ՝ հարմարեցված ձեր բիզնեսի կարիքներին։',
        cta: 'Սկսել',
        contact: 'Կապվել',
      },
      services: {
        title: 'Մեր Ծառայությունները',
        subtitle: 'Համապարփակ IT Լուծումներ Ձեր Բիզնեսի Համար',
        customDev: {
          title: 'Անհատական Մշակում',
          description: 'Հատուկ ծրագրային լուծումներ ձեր բիզնեսի համար։',
        },
        webDev: {
          title: 'Վեբ Մշակում',
          description: 'Ժամանակակից վեբ հավելվածներ նորագույն տեխնոլոգիաներով։',
        },
        design: {
          title: 'UI/UX Դիզայն',
          description: 'Գեղեցիկ դիզայն օգտատիրոջ փորձի բարձրացման համար։',
        },
        workflow: {
          title: 'Աշխատանքային Ավտոմատացում',
          description: 'Բիզնես գործընթացների օպտիմիզացիա խելացի ավտոմատացմամբ։',
        },
        platforms: {
          title: 'Հարթակների Մշակում',
          description: 'Մասշտաբավորվող հարթակներ, աճող ձեր բիզնեսի հետ։',
        },
        consulting: {
          title: 'IT Խորհրդատվություն',
          description: 'Փորձագիտական ուղղորդում ձեր տեխնոլոգիական նախաձեռնությունների համար։',
        },
      },
      about: {
        hero: {
          title: 'Bytetech-ի Մասին',
          subtitle: 'Գլոբալ թիմ՝ 50+ մասնագետներ Հայաստանից'
        },
        story: {
          title: 'Մեր Պատմությունը',
          paragraph1: 'Հիմնադրված 2025թ., Bytetech-ը ծնվել է տեսլականից՝ ստեղծել իսկապես գլոբալ տեխնոլոգիական ընկերություն Հայաստանի տեխ էկոհամակարգում։ Մենք արագ աճել ենք մինչև 50+ տաղանդավոր մասնագետներ։',
          paragraph2: 'Մեր բազմալեզու թիմը խոսում է 5+ լեզուներով, թույլ տալով սպասարկել հաճախորդներին համաշխարհային մակարդակով։',
          paragraph3: 'Գտնվելով Երևանում, մենք օգտագործում ենք Հայաստանի բացառիկ տեխ տաղանդը և ռազմավարական տեղանքը՝ մատուցելու համաշխարհային մակարդակի լուծումներ։'
        },
        location: 'Երևան, Հայաստան',
        teamSize: '50+ Աշխատակիցներ',
        languages: '5+ Լեզուներ',
        stats: {
          employees: 'Գլոբալ Թիմ',
          worldwide: 'Համաշխարհային',
          languages: 'Լեզուներ',
          founded: 'Հիմնադրվել է'
        },
        armenia: {
          title: 'Ինչու Ընտրեցինք Հայաստանը',
          subtitle: 'Ռազմավարական առավելություններ մեր հաջողության համար',
          talent: {
            title: 'Տեխ Տաղանդների Կենտրոն',
            description: 'Հայաստանը լավագույններից է ինժեներական տաղանդներով՝ ուժեղ STEM կրթական համակարգով։'
          },
          cost: {
            title: 'Արժեքային Արդյունավետություն',
            description: 'Մրցակցային գներ առանց որակի կորստի։'
          },
          location: {
            title: 'Ռազմավարական Տեղակայում',
            description: 'Եվրոպայի և Ասիայի խաչմերուկում՝ իդեալական տարբեր ժամային գոտիների համար։'
          },
          government: {
            title: 'Պետական Աջակցություն',
            description: 'Առաջադեմ տեխնոլոգիական քաղաքականություն և հարկային արտոնություններ IT ընկերությունների համար։'
          },
          education: {
            title: 'Կրթական Գերազանցություն',
            description: 'Համաշխարհային մակարդակի համալսարաններ՝ ֆոկուսով համակարգչային գիտությունների վրա։'
          },
          multilingual: {
            title: 'Բազմալեզու Աշխատուժ',
            description: 'Մեր թիմը խոսում է հայերեն, ռուսերեն, անգլերեն և այլ լեզուներով։'
          }
        },
        values: {
          title: 'Մեր Արժեքները',
          subtitle: 'Սկզբունքներ, որոնք առաջնորդում են մեր աշխատանքը',
          excellence: {
            title: 'Տեխնիկական Գերազանցություն',
            description: 'Մենք պահպանում ենք ամենաբարձր ստանդարտները կոդի որակի և ճարտարապետության մեջ։'
          },
          global: {
            title: 'Գլոբալ Մտածելակերպ',
            description: 'Մեր բազմազան բազմալեզու թիմը հասկանում է միջազգային հաճախորդների հետ աշխատանքը։'
          },
          innovation: {
            title: 'Շարունակական Նորարարություն',
            description: 'Մենք հետևում ենք տեխնոլոգիական տենդենսներին։'
          },
          quality: {
            title: 'Որակ Նախ և Առաջ',
            description: 'Յուրաքանչյուր նախագիծ ստանում է ուշադիր վերաբերմունք։'
          }
        },
        timeline: {
          title: 'Մեր Ճանապարհը',
          subtitle: '2025: Արագ աճի և հաջողությունների տարի',
          q1: {
            title: 'Ընկերության Մեկնարկ',
            description: 'Bytetech-ի հիմնադրումը Երևանում փորձառու ծրագրավորողների թիմով։'
          },
          q2: {
            title: 'Թիմի Ընդլայնում',
            description: 'Աճ մինչև 25+ աշխատակիցներ բազմալեզու աջակցությամբ։'
          },
          q3: {
            title: 'Գլոբալ Ճանաչում',
            description: 'Ընդլայնում մինչև 40+ թիմի անդամներ՝ սպասարկելով 10+ երկրներ։'
          },
          q4: {
            title: 'Հաջողության Մասշտաբավորում',
            description: 'Հասնելով 50+ մասնագետների՝ գործընկերություններով աշխարհով մեկ։'
          }
        },
        team: {
          title: 'Մեր Գլոբալ Թիմը',
          subtitle: 'Բազմազան կոլեկտիվ՝ 50+ մասնագետներ, ստեղծում են բացառիկ լուծումներ',
          culture: {
            innovation: {
              title: 'Նորարարություն',
              description: 'Մենք խթանում ենք ստեղծագործականությունը և փորձարարությունը։'
            },
            collaboration: {
              title: 'Համագործակցության Ոգի',
              description: 'Խաչաձև ֆունկցիոնալ թիմերը աշխատում են անխափան։'
            },
            excellence: {
              title: 'Գերազանցության Ձգտում',
              description: 'Շարունակական ուսուցումը մեր մշակույթի հիմքն է։'
            }
          }
        },
        cta: {
          title: 'Պատրա՞ստ Եք Համագործակցել',
          subtitle: 'Եկեք քննարկենք, թե ինչպես մեր թիմը կարող է օգնել ձեր բիզնեսին',
          primary: 'Սկսել Նախագիծ',
          secondary: 'Դիտել Ծառայությունները'
        }
      },
      contact: {
        hero: {
          title: 'Կապվեք Մեզ Հետ',
          subtitle: 'Կապվեք մեր թիմի հետ Հայաստանում։ Մենք այստեղ ենք՝ իրականացնելու ձեր տեսլականը։'
        },
        info: {
          office: {
            title: 'Մեր Գրասենյակը',
            address: 'Թումանյան փողոց 15',
            city: 'Երևան 0001, Հայաստան'
          },
          phone: {
            title: 'Հեռախոս',
            main: '+374 XX XXX XXX',
            support: '+374 XX XXX XXX'
          },
          email: {
            title: 'Էլ․ Փոստ',
            general: 'hello@bytetech.am',
            support: 'support@bytetech.am'
          },
          hours: {
            title: 'Աշխատանքային Ժամեր',
            weekdays: 'Երկ-Ուրբ: 9:00 - 18:00',
            timezone: 'Հայաստանի Ժամանակ (UTC+4)'
          }
        },
        form: {
          title: 'Ուղարկել Հաղորդագրություն',
          name: 'Լրիվ Անուն',
          namePlaceholder: 'Հովհաննես Հովհաննիսյան',
          email: 'Էլ․ Փոստի Հասցե',
          emailPlaceholder: 'hovhannes@example.com',
          phone: 'Հեռախոսահամար',
          phonePlaceholder: '+374 XX XXX XXX',
          service: 'Հետաքրքրող Ծառայություն',
          servicePlaceholder: 'Ընտրեք ծառայություն',
          services: {
            web: 'Վեբ Մշակում',
            mobile: 'Մոբայլ Մշակում',
            design: 'UI/UX Դիզայն',
            custom: 'Անհատական Մշակում',
            consulting: 'IT Խորհրդատվություն',
            other: 'Այլ Ծառայություններ'
          },
          message: 'Ձեր Հաղորդագրությունը',
          messagePlaceholder: 'Պատմեք ձեր նախագծի մասին...',
          send: 'Ուղարկել',
          sending: 'Ուղարկվում է...'
        },
        quickResponse: {
          title: 'Արագ Պատասխան',
          description: 'Մեր բազմալեզու թիմը ապահովում է արագ կապ ձեր լեզվով։',
          multilingual: 'Բազմալեզու աջակցության թիմ',
          support247: 'Պատասխան 24 ժամվա ընթացքում',
          response24h: 'Հասանելի են խորհրդատվական զանգեր'
        },
        emergency: {
          title: 'Շտապ Աջակցություն',
          description: 'Անհապաղ օգնության կարիք ունե՞ք։ Կապվեք մեր առաջնահերթ գծի հետ։',
          phone: 'Թեժ Գիծ',
          email: 'Առաջնահերթ Էլ․ Փոստ'
        }
      },
      footer: {
        description: 'Գլոբալ IT լուծումներ Հայաստանից։ 50+ մասնագետներ համաշխարհում։',
        address: 'Երևան, Հայաստան',
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
