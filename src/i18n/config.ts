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
            main: '+357 91620126'
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
          phonePlaceholder: '+357 91620126',
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
        getStarted: 'Начать'
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
        uiux: {
          title: 'UI/UX Дизайн',
          description: 'Красивые интуитивные дизайны для улучшения пользовательского опыта.',
        },
        mobile: {
          title: 'Мобильная Разработка',
          description: 'Нативные и кроссплатформенные мобильные приложения.',
        },
        cloud: {
          title: 'Облачные Решения',
          description: 'Масштабируемая облачная инфраструктура и развертывание.',
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
            description: 'Прогрессивные технологические политики и налоговые стимулы для IT компаний.'
          },
          education: {
            title: 'Образовательное Превосходство',
            description: 'Университеты мирового класса с фокусом на компьютерные науки и инженерию.'
          },
          multilingual: {
            title: 'Многоязычная Рабочая Сила',
            description: 'Наша команда говорит на армянском, русском, английском и других языках.'
          }
        },
        values: {
          title: 'Наши Ценности',
          subtitle: 'Принципы, которыми мы руководствуемся',
          excellence: {
            title: 'Техническое Совершенство',
            description: 'Мы поддерживаем высочайшие стандарты качества кода и архитектуры.'
          },
          global: {
            title: 'Глобальный Подход',
            description: 'Наша разнообразная многоязычная команда понимает нюансы работы с глобальными клиентами.'
          },
          innovation: {
            title: 'Постоянные Инновации',
            description: 'Мы следим за технологическими трендами и исследуем новые методологии.'
          },
          quality: {
            title: 'Качество Прежде Всего',
            description: 'Каждый проект получает тщательное внимание к деталям и строгое тестирование.'
          }
        },
        timeline: {
          title: 'Наш Путь',
          subtitle: '2025: Год быстрого роста и достижений',
          q1: {
            title: 'Запуск Компании',
            description: 'Основали Bytetech в Ереване с командой опытных разработчиков и дизайнеров.'
          },
          q2: {
            title: 'Расширение Команды',
            description: 'Выросли до 25+ сотрудников, создали ключевые отделы и запустили многоязычную поддержку.'
          },
          q3: {
            title: 'Глобальное Признание',
            description: 'Расширились до 40+ членов команды, обслуживая клиентов в 10+ странах.'
          },
          q4: {
            title: 'Масштабирование Успеха',
            description: 'Достигли 50+ профессионалов, открыли новый офис и установили партнерства.'
          }
        },
        team: {
          title: 'Наша Глобальная Команда',
          subtitle: 'Разнообразный коллектив из 50+ увлеченных профессионалов',
          culture: {
            innovation: {
              title: 'Инновации',
              description: 'Мы поощряем креативность и эксперименты с передовыми технологиями.'
            },
            collaboration: {
              title: 'Сотрудничество',
              description: 'Кросс-функциональные команды работают seamless через часовые пояса.'
            },
            excellence: {
              title: 'Стремление к Совершенству',
              description: 'Постоянное обучение и улучшение - ядро нашей культуры.'
            }
          }
        },
        cta: {
          title: 'Готовы Работать Вместе?',
          subtitle: 'Давайте обсудим, как наша команда может трансформировать ваш бизнес',
          primary: 'Начать Проект',
          secondary: 'Посмотреть Услуги'
        }
      },
      contact: {
        hero: {
          title: 'Давайте Свяжемся',
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
            main: '+357 91620126'
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
          title: 'Отправьте Нам Сообщение',
          name: 'Полное Имя',
          namePlaceholder: 'Иван Иванов',
          email: 'Email Адрес',
          emailPlaceholder: 'ivan@example.com',
          phone: 'Номер Телефона',
          phonePlaceholder: '+357 91620126',
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
          messagePlaceholder: 'Расскажите нам о вашем проекте...',
          send: 'Отправить',
          sending: 'Отправка...'
        },
        quickResponse: {
          title: 'Быстрый Ответ',
          description: 'Наша многоязычная команда обеспечивает быструю коммуникацию на вашем языке.',
          multilingual: 'Многоязычная команда поддержки',
          support247: 'Ответ в течение 24 часов',
          response24h: 'Консультационные звонки доступны'
        },
        emergency: {
          title: 'Срочная Поддержка',
          description: 'Нужна немедленная помощь? Свяжитесь с нашей приоритетной линией поддержки.',
          phone: 'Горячая Линия',
          email: 'Приоритетный Email'
        }
      },
      footer: {
        description: 'Глобальные IT решения из Армении. 50+ профессионалов обслуживают клиентов по всему миру.',
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
        about: 'Մեր Մասին',
        contact: 'Կապ',
        getStarted: 'Սկսել'
      },
      hero: {
        title: 'Նորարարական IT Լուծումներ',
        subtitle: 'Փոխակերպում Ենք Գաղափարները Թվային Իրականության',
        description: 'Bytetech-ը տրամադրում է առաջադեմ տեխնոլոգիական լուծումներ՝ հարմարեցված ձեր բիզնես կարիքներին:',
        cta: 'Սկսել',
        contact: 'Կապվել',
      },
      services: {
        title: 'Մեր Ծառայությունները',
        subtitle: 'Համապարփակ IT Լուծումներ Ձեր Բիզնեսի Համար',
        customDev: {
          title: 'Անհատական Մշակում',
          description: 'Հատուկ ծրագրային լուծումներ ձեր բիզնես պահանջների համար:',
        },
        webDev: {
          title: 'Վեբ Մշակում',
          description: 'Ժամանակակից վեբ հավելվածներ նորագույն տեխնոլոգիաներով:',
        },
        uiux: {
          title: 'UI/UX Դիզայն',
          description: 'Գեղեցիկ ինտուիտիվ դիզայններ օգտագործողի փորձը բարելավելու համար:',
        },
        mobile: {
          title: 'Մոբայլ Մշակում',
          description: 'Բնիկ և խաչաձև հարթակային մոբայլ հավելվածներ:',
        },
        cloud: {
          title: 'Ամպային Լուծումներ',
          description: 'Մասշտաբային ամպային ենթակառուցվածք և տեղակայում:',
        },
        workflow: {
          title: 'Աշխատանքի Ավտոմատացում',
          description: 'Օպտիմալացրեք ձեր բիզնես գործընթացները խելացի ավտոմատացման միջոցով:',
        },
        platforms: {
          title: 'Հարթակների Մշակում',
          description: 'Մասշտաբային հարթակներ, որոնք աճում են ձեր բիզնեսի հետ:',
        },
        consulting: {
          title: 'IT Խորհրդատվություն',
          description: 'Փորձագիտական ուղեցույց ձեր տեխնոլոգիական նախաձեռնությունների համար:',
        },
      },
      about: {
        hero: {
          title: 'Bytetech-ի Մասին',
          subtitle: 'Համաշխարհային թիմ 50+ մասնագետներով՝ աշխատում են Հայաստանից'
        },
        story: {
          title: 'Մեր Պատմությունը',
          paragraph1: 'Հիմնադրված 2025 թվականին, Bytetech-ը ծագել է տեսլականից՝ ստեղծել իսկապես համաշխարհային տեխնոլոգիական ընկերություն Հայաստանի հարուստ տեխնոլոգիական էկոհամակարգում: Մենք արագ աճել ենք՝ դառնալով 50+ տաղանդավոր մասնագետների թիմ:',
          paragraph2: 'Մեր բազմալեզու թիմը խոսում է ավելի քան 5 լեզուներով, որը թույլ է տալիս մեզ սպասարկել հաճախորդներին ամբողջ աշխարհում անխափան հաղորդակցությամբ և մշակութային հասկացողությամբ:',
          paragraph3: 'Գտնվելով Երևանում, Հայաստան, մենք օգտագործում ենք երկրի բացառիկ տեխնոլոգիական տաղանդը և ստրատեգիական դիրքը՝ տրամադրելու համաշխարհային մակարդակի լուծումներ:'
        },
        location: 'Երևան, Հայաստան',
        teamSize: '50+ Աշխատակիցներ',
        languages: '5+ Լեզուներ',
        stats: {
          employees: 'Համաշխարհային Թիմ',
          worldwide: 'Մայրցամաքների վրա',
          languages: 'Լեզուներ',
          founded: 'Հիմնադրված'
        },
        armenia: {
          title: 'Ինչու Ընտրեցինք Հայաստանը',
          subtitle: 'Ստրատեգիական առավելություններ մեր հաջողության համար',
          talent: {
            title: 'Տեխնոլոգիական Տաղանդների Կենտրոն',
            description: 'Հայաստանը մտնում է ինժեներական տաղանդի լավագույն երկրների շարքը՝ ունենալով ուժեղ STEM կրթական համակարգ:'
          },
          cost: {
            title: 'Ծախսարդյունավետ Գերազանցություն',
            description: 'Մրցակցային գործառնական ծախսեր առանց որակի կորստի:'
          },
          location: {
            title: 'Ստրատեգիական Դիրք',
            description: 'Գտնվելով Եվրոպայի և Ասիայի խաչմերուկում՝ իդեալական է հաճախորդներին սպասարկելու տարբեր ժամանակային գոտիներում:'
          },
          government: {
            title: 'Կառավարության Աջակցություն',
            description: 'Առաջադեմ տեխնոլոգիական քաղաքականություններ և հարկային խթաններ IT ընկերությունների համար:'
          },
          education: {
            title: 'Կրթական Գերազանցություն',
            description: 'Համաշխարհային մակարդակի համալսարաններ՝ կենտրոնացած համակարգչային գիտությունների և ինժեներության վրա:'
          },
          multilingual: {
            title: 'Բազմալեզու Աշխատուժ',
            description: 'Մեր թիմը խոսում է հայերեն, ռուսերեն, անգլերեն և այլ լեզուներ:'
          }
        },
        values: {
          title: 'Մեր Արժեքները',
          subtitle: 'Սկզբունքներ, որոնք ղեկավարում են մեզ',
          excellence: {
            title: 'Տեխնիկական Գերազանցություն',
            description: 'Մենք պահպանում ենք կոդի որակի և ճարտարապետության ամենաբարձր ստանդարտները:'
          },
          global: {
            title: 'Համաշխարհային Մտածելակերպ',
            description: 'Մեր բազմազան բազմալեզու թիմը հասկանում է համաշխարհային հաճախորդների հետ աշխատելու նրբությունները:'
          },
          innovation: {
            title: 'Շարունակական Նորարարություն',
            description: 'Մենք հետևում ենք տեխնոլոգիական միտումներին և ուսումնասիրում նոր մեթոդաբանություններ:'
          },
          quality: {
            title: 'Որակը Առաջնահերթ',
            description: 'Յուրաքանչյուր նախագիծ ստանում է մանրակրկիտ ուշադրություն և խիստ թեստավորում:'
          }
        },
        timeline: {
          title: 'Մեր Ճանապարհը',
          subtitle: '2025: Արագ աճի և նվաճումների տարի',
          q1: {
            title: 'Ընկերության Գործարկում',
            description: 'Հիմնադրեցինք Bytetech-ը Երևանում փորձառու ծրագրավորողների և դիզայներների թիմով:'
          },
          q2: {
            title: 'Թիմի Ընդլայնում',
            description: 'Աճեցինք մինչև 25+ աշխատակիցներ, ստեղծեցինք հիմնական բաժիններ և գործարկեցինք բազմալեզու աջակցություն:'
          },
          q3: {
            title: 'Համաշխարհային Ճանաչում',
            description: 'Ընդլայնվեցինք մինչև 40+ թիմի անդամներ՝ սպասարկելով հաճախորդներին 10+ երկրներում:'
          },
          q4: {
            title: 'Մասշտաբավորման Հաջողություն',
            description: 'Հասանք 50+ մասնագետների, բացեցինք նոր գրասենյակային տարածք և հաստատեցինք գործընկերություններ:'
          }
        },
        team: {
          title: 'Մեր Համաշխարհային Թիմը',
          subtitle: 'Բազմազան կոլեկտիվ 50+ կրքոտ մասնագետներից',
          culture: {
            innovation: {
              title: 'Նորարարություն',
              description: 'Մենք խրախուսում ենք ստեղծագործությունը և փորձառությունը առաջադեմ տեխնոլոգիաներով:'
            },
            collaboration: {
              title: 'Համագործակցություն',
              description: 'Խաչաձև-ֆունկցիոնալ թիմեր աշխատում են անխափան՝ անցնելով ժամանակային գոտիներով:'
            },
            excellence: {
              title: 'Գերազանցության Հետապնդում',
              description: 'Շարունակական ուսուցումը և բարելավումը մեր մշակույթի հիմքն են:'
            }
          }
        },
        cta: {
          title: 'Պատրա՞ստ Եք Համագործակցել',
          subtitle: 'Եկեք քննարկենք, թե ինչպես մեր թիմը կարող է փոխակերպել ձեր բիզնեսը',
          primary: 'Սկսել Նախագիծ',
          secondary: 'Դիտել Ծառայությունները'
        }
      },
      contact: {
        hero: {
          title: 'Եկեք Կապվենք',
          subtitle: 'Կապվեք մեր թիմի հետ Հայաստանում: Մենք այստեղ ենք՝ օգնելու ձեր տեսլականը կյանքի կոչել:'
        },
        info: {
          office: {
            title: 'Մեր Գրասենյակը',
            address: 'Թումանյան փողոց 15',
            city: 'Երևան 0001, Հայաստան'
          },
          phone: {
            title: 'Հեռախոս',
            main: '+357 91620126'
          },
          email: {
            title: 'Էլ. Փոստ',
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
          title: 'Ուղարկեք Մեզ Հաղորդագրություն',
          name: 'Անուն Ազգանուն',
          namePlaceholder: 'Անի Պետրոսյան',
          email: 'Էլ. Փոստի Հասցե',
          emailPlaceholder: 'ani@example.com',
          phone: 'Հեռախոսահամար',
          phonePlaceholder: '+357 91620126',
          service: 'Հետաքրքրվող Ծառայություն',
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
          messagePlaceholder: 'Պատմեք մեզ ձեր նախագծի մասին...',
          send: 'Ուղարկել',
          sending: 'Ուղարկվում է...'
        },
        quickResponse: {
          title: 'Արագ Պատասխան',
          description: 'Մեր բազմալեզու թիմը ապահովում է արագ հաղորդակցություն ձեր նախընտրած լեզվով:',
          multilingual: 'Բազմալեզու աջակցման թիմ',
          support247: 'Պատասխան 24 ժամվա ընթացքում',
          response24h: 'Խորհրդատվական զանգեր հասանելի են'
        },
        emergency: {
          title: 'Շտապ Աջակցություն',
          description: 'Անհրաժեշտ է անմիջական օգնություն: Կապվեք մեր առաջնահերթ աջակցման գծով:',
          phone: 'Թեժ Գիծ',
          email: 'Առաջնահերթ Էլ. Փոստ'
        }
      },
      footer: {
        description: 'Համաշխարհային IT լուծումներ Հայաստանից: 50+ մասնագետներ սպասարկում են հաճախորդներին ամբողջ աշխարհում:',
        address: 'Երևան, Հայաստան',
        rights: 'Բոլոր իրավունքները պաշտպանված են:',
      },
    },
  },
  'zh-CN': {
    translation: {
      nav: {
        home: '首页',
        about: '关于我们',
        services: '服务',
        contact: '联系我们',
        allServices: '所有服务',
        getStarted: '开始'
      },
      hero: {
        badge: '欢迎来到未来',
        title: {
          part1: '我们构建数字化',
          part2: {
            option1: '体验',
            option2: '解决方案',
            option3: '产品'
          }
        },
        subtitle: '意义非凡',
        description: '用尖端网络解决方案将您的愿景变为现实',
        cta: '探索服务',
        contact: '联系我们'
      },
      home: {
        services: {
          title: '我们的服务',
          subtitle: '量身定制的全方位解决方案',
          viewAll: '查看所有服务'
        },
        stats: {
          projects: '已完成项目',
          clients: '满意客户',
          satisfaction: '客户满意度',
          awards: '行业奖项'
        },
        process: {
          title: '我们的流程',
          subtitle: '经过验证的成功方法论',
          step1: { title: '发现', description: '我们分析您的需求并定义项目范围' },
          step2: { title: '设计', description: '创建精美的、以用户为中心的界面' },
          step3: { title: '开发', description: '构建强大且可扩展的解决方案' },
          step4: { title: '交付', description: '启动并支持您的项目' }
        },
        testimonials: {
          title: '客户成功案例',
          subtitle: '看看我们的客户如何评价与我们的合作',
          trustedBy: '受到领先企业的信赖',
          testimonial1: { quote: '与这个团队合作非常愉快。他们超出了我们的期望。', highlight: '超出期望' },
          testimonial2: { quote: '专业、高效、技能娴熟。我们的项目按时在预算内交付。', highlight: '按时交付' },
          testimonial3: { quote: '对细节的关注和对质量的承诺非常出色。强烈推荐！', highlight: '卓越品质' }
        },
        cta: {
          title: '准备开始您的项目了吗？',
          subtitle: '让我们一起创造令人惊叹的东西',
          contact: '联系我们',
          portfolio: '查看我们的作品'
        }
      },
      common: {
        learnMore: '了解更多',
        viewProject: '查看项目',
        getStarted: '开始',
        contactUs: '联系我们'
      },
      services: {
        title: '我们的专业服务',
        subtitle: '为您的业务提供全方位IT解决方案',
        customDev: {
          title: '定制开发',
          description: '专为您的业务需求和工作流程设计的定制软件解决方案。',
        },
        webDev: {
          title: 'Web开发',
          description: '使用现代技术构建的定制Web应用',
          feature1: '响应式设计',
          feature2: 'SEO优化',
          feature3: '快速性能'
        },
        uiux: {
          title: 'UI/UX设计',
          description: '用户喜爱的精美直观界面',
          feature1: '用户研究',
          feature2: '线框图',
          feature3: '原型设计'
        },
        mobile: {
          title: '移动应用开发',
          description: '原生和跨平台移动应用',
          feature1: 'iOS与Android',
          feature2: '跨平台',
          feature3: '应用商店就绪'
        },
        cloud: {
          title: '云解决方案',
          description: '可扩展的云基础设施和部署',
          feature1: '云迁移',
          feature2: 'DevOps',
          feature3: '24/7支持'
        },
        workflow: {
          title: '工作流自动化',
          description: '通过智能自动化解决方案简化您的业务流程。',
        },
        platforms: {
          title: '平台开发',
          description: '随业务增长而扩展的可扩展平台和生态系统。',
        },
        consulting: {
          title: 'IT咨询',
          description: '为您的技术计划提供专家指导和战略规划。',
        },
      },
      about: {
        hero: {
          title: '关于 Bytetech',
          subtitle: '50多名专业人士组成的全球团队，在亚美尼亚交付卓越服务'
        },
        story: {
          title: '我们的发展历程',
          paragraph1: 'Bytetech成立于2025年，其愿景是在亚美尼亚丰富的科技生态系统中创建一家真正的全球化技术公司。我们迅速成长为一支由50多名才华横溢的专业人士组成的团队，在多个大洲开展工作。',
          paragraph2: '我们的多语言团队精通5种以上语言，使我们能够通过无缝沟通和文化理解为全球客户提供服务。我们专注于定制软件开发、Web和移动应用以及全方位IT咨询。',
          paragraph3: '总部位于亚美尼亚埃里温，我们利用该国卓越的技术人才、战略位置和商业友好环境，以具有竞争力的价格提供世界级的解决方案。我们对创新和卓越的承诺推动着我们所做的一切。'
        },
        location: '埃里温，亚美尼亚',
        teamSize: '50多名员工',
        languages: '5种以上语言',
        stats: {
          employees: '全球团队',
          worldwide: '跨大洲',
          languages: '语言',
          founded: '成立年份',
          years: '年',
          experience: '创新经验',
          projects: '项目',
          satisfaction: '满意度'
        },
        armenia: {
          title: '为什么选择亚美尼亚？',
          subtitle: '推动我们成功的战略优势',
          talent: {
            title: '科技人才中心',
            description: '亚美尼亚在工程人才方面位居世界前列，拥有强大的STEM教育体系，培养高技能的开发人员和设计师。'
          },
          cost: {
            title: '高性价比',
            description: '在不影响质量的前提下具有竞争力的运营成本，使我们能够以极具吸引力的价格为全球客户提供优质服务。'
          },
          location: {
            title: '战略位置',
            description: '地处欧洲和亚洲的十字路口，非常适合在多个时区为客户提供服务，实现便捷的协作时间。'
          },
          government: {
            title: '政府支持',
            description: '先进的技术政策、IT公司税收优惠和强大的基础设施投资创造了理想的商业环境。'
          },
          education: {
            title: '教育优势',
            description: '世界一流的大学和技术学院，专注于计算机科学、数学和工程，培养出顶尖毕业生。'
          },
          multilingual: {
            title: '多语言人才',
            description: '我们的团队精通亚美尼亚语、俄语、英语等多种语言，能够与国际客户和合作伙伴无缝沟通。'
          }
        },
        values: {
          title: '我们的核心价值观',
          subtitle: '指导我们一切工作的原则',
          excellence: {
            title: '技术卓越',
            description: '我们在所有项目中保持最高的代码质量、架构和实施标准。'
          },
          global: {
            title: '全球视野',
            description: '我们多元化的多语言团队带来国际视角，理解与全球客户合作的细微差别。'
          },
          innovation: {
            title: '持续创新',
            description: '我们紧跟技术趋势，不断探索新工具、框架和方法论，提供尖端解决方案。'
          },
          quality: {
            title: '质量至上',
            description: '每个项目都经过细致入微的关注、严格的测试和全面的文档记录，以确保持久的价值。'
          }
        },
        timeline: {
          title: '我们的历程',
          subtitle: '2025年：快速增长和成就的一年',
          q1: {
            title: '公司成立',
            description: '在埃里温建立Bytetech，由经验丰富的开发人员和设计师组成创始团队。获得首批国际客户。'
          },
          q2: {
            title: '团队扩张',
            description: '增长至25名以上员工，建立关键部门：开发、设计、QA和项目管理。推出多语言支持。'
          },
          q3: {
            title: '全球认可',
            description: '扩展至40多名团队成员，为10多个国家的客户提供服务。获得ISO认证和行业认可。'
          },
          q4: {
            title: '规模化成功',
            description: '达到50多名专业人士，开设新办公空间，与全球领先的技术提供商建立合作伙伴关系。'
          }
        },
        team: {
          title: '我们的全球团队',
          subtitle: '50多名充满激情的专业人士，涵盖开发、设计、项目管理和客户支持。我们多元化的团队汇聚了来自不同文化和背景的专业知识，共同为客户创造卓越解决方案。',
        },
        cta: {
          title: '准备好开始您的项目了吗？',
          subtitle: '让我们讨论如何帮助您实现目标',
          button: '联系我们',
        },
      },
      contact: {
        title: '联系我们',
        subtitle: '让我们一起将您的想法变为现实',
        success: '感谢您的留言！我们会尽快回复您。',
        error: '抱歉，发送失败。请稍后重试或直接联系我们。',
        form: {
          name: '姓名',
          email: '电子邮箱',
          phone: '电话号码',
          service: '选择服务',
          message: '留言内容',
          send: '发送消息',
          sending: '发送中...',
          selectService: '选择服务',
          namePlaceholder: '请输入您的姓名',
          emailPlaceholder: '您的电子邮箱地址',
          phonePlaceholder: '+357 91620126',
          messagePlaceholder: '请告诉我们您的项目需求...',
        },
        info: {
          title: '联系信息',
          phone: '+357 91620126',
          email: 'info@bytetech.com',
          address: '埃里温，亚美尼亚',
          hours: '工作时间',
          hoursValue: '周一至周五：09:00 - 18:00 (UTC+4)',
        },
        quickResponse: {
          title: '快速响应保证',
          description: '我们的多语言团队确保在24小时内用您的首选语言回复所有询问。',
        },
        emergency: {
          title: '紧急支持',
          description: '现有客户如需紧急技术支持，请拨打我们的24/7热线：',
          phone: '+357 91620126',
        },
      },
      footer: {
        description: '为全球客户提供创新数字解决方案',
        quickLinks: '快速链接',
        services: '我们的服务',
        legal: '法律条款',
        privacy: '隐私政策',
        cookies: 'Cookie政策',
        contact: '联系方式',
        rights: '© 2025 Bytetech。保留所有权利。',
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
