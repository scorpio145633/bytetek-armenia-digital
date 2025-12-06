import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        pricing: 'Pricing',
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
          welcomeTitle: 'Join Our Global Family',
          welcomeSubtitle: 'Trusted by clients worldwide, delivering excellence in every project',
          projects: 'Projects Completed',
          projectsDesc: 'Delivered with Passion',
          satisfaction: 'Customer Satisfaction',
          satisfactionDesc: 'Happy Clients Worldwide',
          clients: 'Happy Clients',
          clientsDesc: 'Multilingual Experts',
          countries: 'Countries Served',
          countriesDesc: 'Global Presence',
          ctaButton: 'Ready to Start Your Journey?'
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
            main: '+374 91 620126'
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
          phonePlaceholder: '+374 91 620126',
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
      pricing: {
        badge: 'IT Maintenance Packages',
        title: 'Choose Your IT Support Plan',
        subtitle: 'Comprehensive IT maintenance services tailored for your business needs with dedicated support and rapid response times.',
        mostPopular: 'Most Popular',
        getStarted: 'Get Started',
        contactUs: 'Contact Us',
        plans: {
          period: 'month',
          business: {
            name: 'Business',
            description: 'Core IT maintenance essentials for growing businesses',
          },
          businessPro: {
            name: 'Business Pro',
            description: 'Enhanced support with priority response and cloud integration',
          },
          businessProMax: {
            name: 'Business Pro Max',
            description: 'Full enterprise coverage with dedicated account management',
          },
          enterprise: {
            badge: 'Enterprise',
            name: 'Custom Enterprise Solutions',
            description: 'Tailored IT solutions for large organizations with custom requirements and dedicated infrastructure.',
          },
        },
        features: {
          engineer: 'Dedicated IT software engineer (8hr/day, 9am-5pm)',
          response: '30-minute disaster recovery on-call response',
          remote: 'Remote desktop control support',
          afterHours: 'After-hours availability for emergencies',
          security: 'Regular security audits & vulnerability assessments',
          database: 'SQL Server database administration',
          cloud: 'Cloud-based system integration & support',
          priority: 'Priority response queue',
          accountManager: 'Dedicated account manager',
          mobile: 'Mobile and desktop application support',
        },
        whyChoose: {
          title: 'Why Choose Our IT Services',
          subtitle: 'Enterprise-grade support with a personal touch',
          response: {
            title: '30-Min Response',
            desc: 'Rapid disaster recovery response guaranteed',
          },
          team: {
            title: 'Dedicated Team',
            desc: 'Your own IT engineer available daily',
          },
          support: {
            title: '24/7 Support',
            desc: 'After-hours availability for critical issues',
          },
          infrastructure: {
            title: 'Cloud Ready',
            desc: 'Full cloud integration and migration support',
          },
        },
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: 'Главная',
        services: 'Услуги',
        pricing: 'Тарифы',
        about: 'О нас',
        contact: 'Контакты',
        allServices: 'Все Услуги',
        getStarted: 'Начать'
      },
      hero: {
        badge: 'Добро пожаловать в будущее',
        title: {
          part1: 'Мы создаем цифровые',
          part2: {
            option1: 'впечатления',
            option2: 'решения',
            option3: 'продукты'
          }
        },
        subtitle: 'которые важны',
        description: 'Превратите свое видение в реальность с помощью передовых веб-решений',
        cta: 'Изучить Услуги',
        contact: 'Связаться'
      },
      home: {
        services: {
          title: 'Наши Услуги',
          subtitle: 'Комплексные решения, адаптированные под ваши потребности',
          viewAll: 'Посмотреть Все Услуги'
        },
        stats: {
          welcomeTitle: 'Присоединяйтесь к нашей глобальной семье',
          welcomeSubtitle: 'Нам доверяют клиенты по всему миру, обеспечивая превосходство в каждом проекте',
          projects: 'Завершенных Проектов',
          projectsDesc: 'Выполнено с увлечением',
          satisfaction: 'Удовлетворенность Клиентов',
          satisfactionDesc: 'Довольные клиенты по всему миру',
          clients: 'Довольных Клиентов',
          clientsDesc: 'Многоязычные эксперты',
          countries: 'Обслуживаемых Стран',
          countriesDesc: 'Глобальное присутствие',
          ctaButton: 'Готовы начать свое путешествие?'
        },
        process: {
          title: 'Наш Процесс',
          subtitle: 'Проверенная методология успеха',
          step1: { title: 'Исследование', description: 'Мы анализируем ваши требования и определяем объем проекта' },
          step2: { title: 'Дизайн', description: 'Создание красивых, ориентированных на пользователя интерфейсов' },
          step3: { title: 'Разработка', description: 'Создание надежных, масштабируемых решений' },
          step4: { title: 'Доставка', description: 'Запуск и поддержка вашего проекта' }
        },
        testimonials: {
          title: 'Истории Успеха Клиентов',
          subtitle: 'Посмотрите, что наши клиенты говорят о работе с нами',
          trustedBy: 'Нам доверяют ведущие компании',
          testimonial1: { quote: 'Работать с этой командой было абсолютным удовольствием. Они превзошли наши ожидания.', highlight: 'Превзошли ожидания' },
          testimonial2: { quote: 'Профессиональные, эффективные и высококвалифицированные. Наш проект был доставлен вовремя и в рамках бюджета.', highlight: 'Вовремя' },
          testimonial3: { quote: 'Внимание к деталям и приверженность качеству выдающиеся. Очень рекомендуем!', highlight: 'Выдающееся качество' }
        },
        cta: {
          title: 'Готовы начать свой проект?',
          subtitle: 'Давайте создадим что-то удивительное вместе',
          contact: 'Связаться с Нами',
          portfolio: 'Посмотреть Наши Работы'
        }
      },
      common: {
        learnMore: 'Узнать Больше',
        viewProject: 'Посмотреть Проект',
        getStarted: 'Начать',
        contactUs: 'Связаться с Нами'
      },
      services: {
        title: 'Наши Услуги',
        subtitle: 'Комплексные IT Решения для Вашего Бизнеса',
        customDev: {
          title: 'Индивидуальная Разработка',
          description: 'Специализированные программные решения, разработанные специально для ваших бизнес-требований и рабочих процессов.',
        },
        webDev: {
          title: 'Веб-разработка',
          description: 'Индивидуальные веб-приложения, созданные с использованием современных технологий',
          feature1: 'Адаптивный Дизайн',
          feature2: 'SEO Оптимизация',
          feature3: 'Быстрая Производительность'
        },
        uiux: {
          title: 'UI/UX Дизайн',
          description: 'Красивые, интуитивно понятные интерфейсы, которые нравятся пользователям',
          feature1: 'Исследование Пользователей',
          feature2: 'Создание Каркасов',
          feature3: 'Прототипирование'
        },
        mobile: {
          title: 'Мобильная Разработка',
          description: 'Нативные и кроссплатформенные мобильные приложения',
          feature1: 'iOS и Android',
          feature2: 'Кроссплатформенность',
          feature3: 'Готовность к App Store'
        },
        cloud: {
          title: 'Облачные Решения',
          description: 'Масштабируемая облачная инфраструктура и развертывание',
          feature1: 'Миграция в Облако',
          feature2: 'DevOps',
          feature3: 'Поддержка 24/7'
        },
        workflow: {
          title: 'Автоматизация Рабочих Процессов',
          description: 'Оптимизируйте свои бизнес-процессы с помощью интеллектуальных решений автоматизации.',
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
        hero: {
          title: 'О Bytetech',
          subtitle: 'Глобальная команда из 50+ специалистов, обеспечивающих превосходство из Армении'
        },
        story: {
          title: 'Наша История',
          paragraph1: 'Основанная в 2025 году, Bytetech возникла из видения создать поистине глобальную технологическую компанию, основанную на богатой технологической экосистеме Армении. Мы быстро выросли до команды из 50+ талантливых профессионалов, работающих на нескольких континентах.',
          paragraph2: 'Наша многоязычная команда говорит на более чем 5 языках, что позволяет нам обслуживать клиентов по всему миру с бесшовной коммуникацией и культурным пониманием. Мы специализируемся на индивидуальной разработке программного обеспечения, веб и мобильных приложениях и комплексном IT консалтинге.',
          paragraph3: 'Базируясь в Ереване, Армения, мы используем исключительный технический талант страны, стратегическое расположение и благоприятную бизнес-среду для предоставления решений мирового класса по конкурентоспособным ценам. Наша приверженность инновациям и совершенству движет всем, что мы делаем.'
        },
        location: 'Ереван, Армения',
        teamSize: '50+ Сотрудников',
        languages: '5+ Языков',
        stats: {
          employees: 'Глобальная Команда',
          worldwide: 'На континентах',
          languages: 'Языков',
          founded: 'Основана',
          years: 'Лет',
          experience: 'Инноваций',
          projects: 'Проектов',
          satisfaction: 'Удовлетворенность'
        },
        armenia: {
          title: 'Почему Мы Выбрали Армению',
          subtitle: 'Стратегические преимущества, которые обеспечивают наш успех',
          talent: {
            title: 'Центр Технических Талантов',
            description: 'Армения входит в число ведущих стран по инженерному таланту с сильной системой STEM образования, производящей высококвалифицированных разработчиков и дизайнеров.'
          },
          cost: {
            title: 'Экономически Эффективное Превосходство',
            description: 'Конкурентные операционные расходы без ущерба для качества, позволяющие нам предоставлять премиальные услуги по привлекательным ценам для наших глобальных клиентов.'
          },
          location: {
            title: 'Стратегическое Расположение',
            description: 'Расположенная на перекрестке Европы и Азии, идеально подходит для обслуживания клиентов в нескольких часовых поясах с удобными часами сотрудничества.'
          },
          government: {
            title: 'Государственная Поддержка',
            description: 'Прогрессивная технологическая политика, налоговые стимулы для IT компаний и значительные инвестиции в инфраструктуру создают идеальную бизнес-среду.'
          },
          education: {
            title: 'Образовательное Превосходство',
            description: 'Университеты мирового класса и технические институты с сильным акцентом на компьютерные науки, математику и инженерию производят выпускников высшего уровня.'
          },
          multilingual: {
            title: 'Многоязычная Рабочая Сила',
            description: 'Наша команда говорит на армянском, русском, английском и других языках, обеспечивая бесшовную коммуникацию с международными клиентами и партнерами.'
          }
        },
        values: {
          title: 'Наши Основные Ценности',
          subtitle: 'Принципы, которые направляют все, что мы делаем',
          excellence: {
            title: 'Техническое Совершенство',
            description: 'Мы поддерживаем самые высокие стандарты качества кода, архитектуры и реализации во всех наших проектах.'
          },
          global: {
            title: 'Глобальное Мышление',
            description: 'Наша разнообразная многоязычная команда привносит международные перспективы и понимает нюансы работы с глобальными клиентами.'
          },
          innovation: {
            title: 'Непрерывные Инновации',
            description: 'Мы опережаем технологические тенденции и постоянно исследуем новые инструменты, фреймворки и методологии для предоставления передовых решений.'
          },
          quality: {
            title: 'Качество Прежде Всего',
            description: 'Каждый проект получает тщательное внимание к деталям, строгое тестирование и всестороннюю документацию для обеспечения долгосрочной ценности.'
          }
        },
        timeline: {
          title: 'Наш Путь',
          subtitle: '2025: Год быстрого роста и достижений',
          q1: {
            title: 'Запуск Компании',
            description: 'Основали Bytetech в Ереване с командой-основателями из опытных разработчиков и дизайнеров. Заключили первые международные контракты.'
          },
          q2: {
            title: 'Расширение Команды',
            description: 'Выросли до 25+ сотрудников, создав ключевые отделы: разработки, дизайна, QA и управления проектами. Запустили многоязычную поддержку.'
          },
          q3: {
            title: 'Глобальное Признание',
            description: 'Расширились до 40+ членов команды, обслуживающих клиентов в 10+ странах. Получили сертификацию ISO и отраслевое признание.'
          },
          q4: {
            title: 'Масштабирование Успеха',
            description: 'Достигли 50+ профессионалов, открыли новое офисное пространство и установили партнерские отношения с ведущими поставщиками технологий по всему миру.'
          }
        },
        team: {
          title: 'Наша Глобальная Команда',
          subtitle: 'Разнообразный коллектив из 50+ увлеченных профессионалов, работающих вместе для создания исключительных цифровых решений',
          culture: {
            innovation: {
              title: 'Инновационная Направленность',
              description: 'Мы поощряем креативность и эксперименты с передовыми технологиями.'
            },
            collaboration: {
              title: 'Дух Сотрудничества',
              description: 'Кросс-функциональные команды работают бесшовно через часовые пояса и культуры.'
            },
            excellence: {
              title: 'Стремление к Совершенству',
              description: 'Непрерывное обучение и улучшение являются основой нашей культуры и успеха.'
            }
          }
        },
        cta: {
          title: 'Готовы Работать Вместе?',
          subtitle: 'Давайте обсудим, как наша глобальная команда может помочь трансформировать ваш бизнес',
          primary: 'Начать Проект',
          secondary: 'Посмотреть Услуги'
        }
      },
      contact: {
        hero: {
          title: 'Давайте Свяжемся',
          subtitle: 'Свяжитесь с нашей командой в Армении. Мы здесь, чтобы помочь воплотить ваше видение в жизнь.'
        },
        info: {
          office: {
            title: 'Наш Офис',
            address: 'Улица Туманяна 15',
            city: 'Ереван 0001, Армения'
          },
          phone: {
            title: 'Телефон',
            main: '+374 91 620126'
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
          phonePlaceholder: '+374 91 620126',
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
          send: 'Отправить Сообщение',
          sending: 'Отправка...'
        },
        quickResponse: {
          title: 'Быстрое Время Отклика',
          description: 'Наша многоязычная команда обеспечивает быструю коммуникацию на вашем предпочтительном языке.',
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
      pricing: {
        badge: 'Пакеты IT-обслуживания',
        title: 'Выберите план IT-поддержки',
        subtitle: 'Комплексные услуги IT-обслуживания, адаптированные для вашего бизнеса с выделенной поддержкой и быстрым временем реагирования.',
        mostPopular: 'Популярный',
        getStarted: 'Начать',
        contactUs: 'Связаться',
        plans: {
          period: 'месяц',
          business: {
            name: 'Business',
            description: 'Основы IT-обслуживания для растущего бизнеса',
          },
          businessPro: {
            name: 'Business Pro',
            description: 'Расширенная поддержка с приоритетным ответом и облачной интеграцией',
          },
          businessProMax: {
            name: 'Business Pro Max',
            description: 'Полное корпоративное покрытие с выделенным менеджером',
          },
          enterprise: {
            badge: 'Корпоративный',
            name: 'Индивидуальные корпоративные решения',
            description: 'Персонализированные IT-решения для крупных организаций с особыми требованиями и выделенной инфраструктурой.',
          },
        },
        features: {
          engineer: 'Выделенный IT-инженер (8 ч/день, 9:00-17:00)',
          response: '30-минутное реагирование при аварийных ситуациях',
          remote: 'Удаленная поддержка с управлением рабочим столом',
          afterHours: 'Доступность в нерабочее время для экстренных случаев',
          security: 'Регулярные аудиты безопасности и оценка уязвимостей',
          database: 'Администрирование баз данных SQL Server',
          cloud: 'Интеграция и поддержка облачных систем',
          priority: 'Приоритетная очередь ответов',
          accountManager: 'Выделенный менеджер аккаунта',
          mobile: 'Поддержка мобильных и десктопных приложений',
        },
        whyChoose: {
          title: 'Почему выбирают наши IT-услуги',
          subtitle: 'Корпоративная поддержка с индивидуальным подходом',
          response: {
            title: '30-мин ответ',
            desc: 'Гарантированное быстрое реагирование при авариях',
          },
          team: {
            title: 'Выделенная команда',
            desc: 'Ваш личный IT-инженер доступен ежедневно',
          },
          support: {
            title: 'Поддержка 24/7',
            desc: 'Доступность в нерабочее время для критических проблем',
          },
          infrastructure: {
            title: 'Готовность к облаку',
            desc: 'Полная облачная интеграция и поддержка миграции',
          },
        },
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
        allServices: 'Բոլոր Ծառայությունները',
        getStarted: 'Սկսել'
      },
      hero: {
        badge: 'Բարի գալուստ ապագա',
        title: {
          part1: 'Մենք ստեղծում ենք թվային',
          part2: {
            option1: 'փորձառություններ',
            option2: 'լուծումներ',
            option3: 'արտադրանք'
          }
        },
        subtitle: 'որոնք կարևոր են',
        description: 'Փոխակերպեք ձեր տեսլականը իրականության՝ առաջադեմ վեբ լուծումներով',
        cta: 'Ուսումնասիրել Ծառայությունները',
        contact: 'Կապվել'
      },
      home: {
        services: {
          title: 'Մեր Ծառայությունները',
          subtitle: 'Համապարփակ լուծումներ՝ հարմարեցված ձեր կարիքներին',
          viewAll: 'Դիտել Բոլոր Ծառայությունները'
        },
        stats: {
          welcomeTitle: 'Միացե՛ք մեր համաշխարհային ընտանիքին',
          welcomeSubtitle: 'Մեզ վստահում են հաճախորդները ամբողջ աշխարհում՝ ապահովելով գերազանցություն յուրաքանչյուր նախագծում',
          projects: 'Ավարտված Նախագծեր',
          projectsDesc: 'Իրականացված սիրով',
          satisfaction: 'Հաճախորդների Գոհունակություն',
          satisfactionDesc: 'Գոհ հաճախորդներ ամբողջ աշխարհում',
          clients: 'Գոհ Հաճախորդներ',
          clientsDesc: 'Բազմալեզու փորձագետներ',
          countries: 'Սպասարկվող Երկրներ',
          countriesDesc: 'Համաշխարհային ներկայություն',
          ctaButton: 'Պատրա՞ստ եք սկսել ձեր ճանապարհորդությունը'
        },
        process: {
          title: 'Մեր Գործընթացը',
          subtitle: 'Ապացուցված հաջողության մեթոդաբանություն',
          step1: { title: 'Հայտնաբերում', description: 'Մենք վերլուծում ենք ձեր պահանջները և սահմանում նախագծի շրջանակը' },
          step2: { title: 'Դիզայն', description: 'Գեղեցիկ, օգտատիրոջ վրա կենտրոնացած ինտերֆեյսների ստեղծում' },
          step3: { title: 'Մշակում', description: 'Հուսալի, մասշտաբային լուծումների կառուցում' },
          step4: { title: 'Առաքում', description: 'Ձեր նախագծի գործարկում և աջակցություն' }
        },
        testimonials: {
          title: 'Հաճախորդների Հաջողության Պատմություններ',
          subtitle: 'Տեսեք, թե ինչ են ասում մեր հաճախորդները մեզ հետ աշխատելու մասին',
          trustedBy: 'Վստահում են առաջատար ընկերությունները',
          testimonial1: { quote: 'Այս թիմի հետ աշխատելը բացարձակ հաճույք էր: Նրանք առաքեցին մեր սպասելիքներից վեր:', highlight: 'Գերազանցեցին ակնկալիքները' },
          testimonial2: { quote: 'Պրոֆեսիոնալ, արդյունավետ և բարձր որակավորված: Մեր նախագիծը առաքվեց ժամանակին և բյուջեի սահմաններում:', highlight: 'Ժամանակին' },
          testimonial3: { quote: 'Մանրամասների հանդեպ ուշադրությունը և որակի նվիրվածությունը բացառիկ է: Խիստ խորհուրդ ենք տալիս!', highlight: 'Բացառիկ որակ' }
        },
        cta: {
          title: 'Պատրա՞ստ եք սկսելու ձեր նախագիծը',
          subtitle: 'Եկեք միասին ստեղծենք ինչ-որ զարմանալի բան',
          contact: 'Կապվեք Մեզ Հետ',
          portfolio: 'Դիտել Մեր Աշխատանքները'
        }
      },
      common: {
        learnMore: 'Իմանալ Ավելին',
        viewProject: 'Դիտել Նախագիծը',
        getStarted: 'Սկսել',
        contactUs: 'Կապվեք Մեզ Հետ'
      },
      services: {
        title: 'Մեր Ծառայությունները',
        subtitle: 'Համապարփակ IT Լուծումներ Ձեր Բիզնեսի Համար',
        customDev: {
          title: 'Անհատական Մշակում',
          description: 'Հատուկ ծրագրային լուծումներ, որոնք նախագծված են հատուկ ձեր բիզնես պահանջների և աշխատանքային գործընթացների համար:',
        },
        webDev: {
          title: 'Վեբ Մշակում',
          description: 'Անհատական վեբ հավելվածներ, ստեղծված ժամանակակից տեխնոլոգիաներով',
          feature1: 'Հարմարվող Դիզայն',
          feature2: 'SEO Օպտիմիզացված',
          feature3: 'Արագ Կատարողականություն'
        },
        uiux: {
          title: 'UI/UX Դիզայն',
          description: 'Գեղեցիկ, ինտուիտիվ ինտերֆեյսներ, որոնք դուր են գալիս օգտատերերին',
          feature1: 'Օգտատերերի Հետազոտություն',
          feature2: 'Wireframing',
          feature3: 'Պրոտոտիպավորում'
        },
        mobile: {
          title: 'Մոբայլ Մշակում',
          description: 'Բնիկ և խաչաձև հարթակային մոբայլ հավելվածներ',
          feature1: 'iOS և Android',
          feature2: 'Խաչաձև հարթակ',
          feature3: 'App Store Պատրաստ'
        },
        cloud: {
          title: 'Ամպային Լուծումներ',
          description: 'Մասշտաբային ամպային ենթակառուցվածք և տեղակայում',
          feature1: 'Ամպի Միգրացիա',
          feature2: 'DevOps',
          feature3: '24/7 Աջակցություն'
        },
        workflow: {
          title: 'Աշխատանքի Ավտոմատացում',
          description: 'Օպտիմալացրեք ձեր բիզնես գործընթացները խելացի ավտոմատացման լուծումներով:',
        },
        platforms: {
          title: 'Հարթակների Մշակում',
          description: 'Մասշտաբային հարթակներ և էկոհամակարգեր, որոնք աճում են ձեր բիզնեսի հետ:',
        },
        consulting: {
          title: 'IT Խորհրդատվություն',
          description: 'Փորձագիտական ուղեցույց և ստրատեգիական պլանավորում ձեր տեխնոլոգիական նախաձեռնությունների համար:',
        },
      },
      about: {
        hero: {
          title: 'Bytetech-ի Մասին',
          subtitle: '50+ մասնագետներից բաղկացած համաշխարհային թիմ՝ գերազանցություն մատուցում Հայաստանից'
        },
        story: {
          title: 'Մեր Պատմությունը',
          paragraph1: 'Հիմնադրված 2025 թվականին, Bytetech-ը ծագել է տեսլականից՝ ստեղծել իսկապես համաշխարհային տեխնոլոգիական ընկերություն՝ արմատավորված Հայաստանի հարուստ տեխնոլոգիական էկոհամակարգում: Մենք արագ աճել ենք՝ դառնալով 50+ տաղանդավոր մասնագետների թիմ, որոնք աշխատում են բազմաթիվ մայրցամաքներում:',
          paragraph2: 'Մեր բազմալեզու թիմը խոսում է ավելի քան 5 լեզուներ, որը թույլ է տալիս մեզ սպասարկել հաճախորդներին ամբողջ աշխարհում անխափան հաղորդակցությամբ և մշակութային հասկացողությամբ: Մենք մասնագիտանում ենք անհատական ծրագրային ապահովման մշակման, վեբ և մոբայլ հավելվածների և համապարփակ IT խորհրդատվության մեջ:',
          paragraph3: 'Գտնվելով Երևանում, Հայաստան, մենք օգտագործում ենք երկրի բացառիկ տեխնոլոգիական տաղանդը, ստրատեգիական դիրքը և բիզնեսի համար բարենպաստ միջավայրը՝ մատուցելու համաշխարհային մակարդակի լուծումներ մրցակցային գներով: Մեր նվիրվածությունը նորարարությանը և գերազանցությանը շարժում է այն ամենը, ինչ մենք անում ենք:'
        },
        location: 'Երևան, Հայաստան',
        teamSize: '50+ Աշխատակիցներ',
        languages: '5+ Լեզուներ',
        stats: {
          employees: 'Համաշխարհային Թիմ',
          worldwide: 'Մայրցամաքների վրա',
          languages: 'Լեզուներ',
          founded: 'Հիմնադրված',
          years: 'Տարի',
          experience: 'Նորարարության',
          projects: 'Նախագծեր',
          satisfaction: 'Գոհունակություն'
        },
        armenia: {
          title: 'Ինչու Ընտրեցինք Հայաստանը',
          subtitle: 'Ստրատեգիական առավելություններ, որոնք ապահովում են մեր հաջողությունը',
          talent: {
            title: 'Տեխնոլոգիական Տաղանդների Կենտրոն',
            description: 'Հայաստանը մտնում է ինժեներական տաղանդի լավագույն երկրների շարքը՝ ունենալով ուժեղ STEM կրթական համակարգ, որը արտադրում է բարձր որակավորված ծրագրավորողներ և դիզայներներ:'
          },
          cost: {
            title: 'Ծախսարդյունավետ Գերազանցություն',
            description: 'Մրցակցային գործառնական ծախսեր՝ առանց որակի զիջման, որը թույլ է տալիս մեզ մատուցել պրեմիում ծառայություններ գրավիչ գներով մեր համաշխարհային հաճախորդների համար:'
          },
          location: {
            title: 'Ստրատեգիական Դիրք',
            description: 'Գտնվելով Եվրոպայի և Ասիայի խաչմերուկում՝ իդեալական է հաճախորդներին սպասարկելու տարբեր ժամանակային գոտիներում հարմար համագործակցության ժամերով:'
          },
          government: {
            title: 'Կառավարության Աջակցություն',
            description: 'Առաջադեմ տեխնոլոգիական քաղաքականություն, հարկային խթաններ IT ընկերությունների համար և ուժեղ ենթակառուցվածքային ներդրումներ ստեղծում են իդեալական բիզնես միջավայր:'
          },
          education: {
            title: 'Կրթական Գերազանցություն',
            description: 'Համաշխարհային մակարդակի համալսարաններ և տեխնիկական ինստիտուտներ՝ ուժեղ կենտրոնացմամբ համակարգչային գիտությունների, մաթեմատիկայի և ինժեներության վրա՝ արտադրում են բարձրակարգ շրջանավարտներ:'
          },
          multilingual: {
            title: 'Բազմալեզու Աշխատուժ',
            description: 'Մեր թիմը խոսում է հայերեն, ռուսերեն, անգլերեն և այլ լեզուներ՝ ապահովելով անխափան հաղորդակցություն միջազգային հաճախորդների և գործընկերների հետ:'
          }
        },
        values: {
          title: 'Մեր Հիմնական Արժեքները',
          subtitle: 'Սկզբունքներ, որոնք ղեկավարում են այն ամենը, ինչ մենք անում ենք',
          excellence: {
            title: 'Տեխնիկական Գերազանցություն',
            description: 'Մենք պահպանում ենք կոդի որակի, ճարտարապետության և իրականացման ամենաբարձր ստանդարտները մեր բոլոր նախագծերում:'
          },
          global: {
            title: 'Համաշխարհային Մտածելակերպ',
            description: 'Մեր բազմազան բազմալեզու թիմը բերում է միջազգային հեռանկարներ և հասկանում համաշխարհային հաճախորդների հետ աշխատելու նրբությունները:'
          },
          innovation: {
            title: 'Շարունակական Նորարարություն',
            description: 'Մենք հետևում ենք տեխնոլոգիական միտումներին և շարունակաբար ուսումնասիրում նոր գործիքներ, ֆրեյմվորքներ և մեթոդոլոգիաներ՝ առաջադեմ լուծումներ մատուցելու համար:'
          },
          quality: {
            title: 'Որակը Առաջին Հերթին',
            description: 'Յուրաքանչյուր նախագիծ ստանում է մանրակրկիտ ուշադրություն մանրամասներին, խիստ թեստավորում և համապարփակ փաստաթղթավորում՝ երկարաժամկետ արժեք ապահովելու համար:'
          }
        },
        timeline: {
          title: 'Մեր Ճանապարհը',
          subtitle: '2025: Արագ աճի և նվաճումների տարի',
          q1: {
            title: 'Ընկերության Գործարկում',
            description: 'Հիմնադրեցինք Bytetech-ը Երևանում փորձառու ծրագրավորողների և դիզայներների հիմնադիր թիմով: Ապահովեցինք առաջին միջազգային հաճախորդները:'
          },
          q2: {
            title: 'Թիմի Ընդլայնում',
            description: 'Աճեցինք մինչև 25+ աշխատակիցներ՝ ստեղծելով հիմնական բաժինները՝ մշակում, դիզայն, QA և նախագծերի կառավարում: Գործարկեցինք բազմալեզու աջակցություն:'
          },
          q3: {
            title: 'Համաշխարհային Ճանաչում',
            description: 'Ընդլայնվեցինք մինչև 40+ թիմի անդամներ՝ սպասարկելով հաճախորդներին 10+ երկրներում: Ստացանք ISO սերտիֆիկացում և արդյունաբերության ճանաչում:'
          },
          q4: {
            title: 'Մասշտաբավորման Հաջողություն',
            description: 'Հասանք 50+ մասնագետների, բացեցինք նոր գրասենյակային տարածք և հաստատեցինք գործընկերություններ առաջատար տեխնոլոգիական մատակարարների հետ ամբողջ աշխարհում:'
          }
        },
        team: {
          title: 'Մեր Համաշխարհային Թիմը',
          subtitle: 'Բազմազան կոլեկտիվ՝ 50+ կրքոտ մասնագետներից, որոնք միասին աշխատում են բացառիկ թվային լուծումներ ստեղծելու համար',
          culture: {
            innovation: {
              title: 'Նորարարությամբ Առաջնորդվող',
              description: 'Մենք խրախուսում ենք ստեղծագործությունը և փորձարկումը առաջադեմ տեխնոլոգիաներով:'
            },
            collaboration: {
              title: 'Համագործակցության Ոգի',
              description: 'Խաչաձև-ֆունկցիոնալ թիմեր՝ աշխատում անխափան ժամանակային գոտիների և մշակույթների միջոցով:'
            },
            excellence: {
              title: 'Գերազանցության Հետապնդում',
              description: 'Շարունակական ուսուցումը և բարելավումը մեր մշակույթի և հաջողության հիմքն են:'
            }
          }
        },
        cta: {
          title: 'Պատրա՞ստ Եք Համագործակցելու',
          subtitle: 'Եկեք քննարկենք, թե ինչպես մեր համաշխարհային թիմը կարող է օգնել փոխակերպել ձեր բիզնեսը',
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
            main: '+374 91 620126'
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
          title: 'Ուղարկեք Մեզ Հաղորդագրություն',
          name: 'Անուն Ազգանուն',
          namePlaceholder: 'Անի Պետրոսյան',
          email: 'Էլ․ Փոստի Հասցե',
          emailPlaceholder: 'ani@example.com',
          phone: 'Հեռախոսահամար',
          phonePlaceholder: '+374 91 620126',
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
          send: 'Ուղարկել Հաղորդագրություն',
          sending: 'Ուղարկվում է...'
        },
        quickResponse: {
          title: 'Արագ Պատասխանի Ժամանակ',
          description: 'Մեր բազմալեզու թիմը ապահովում է արագ հաղորդակցություն ձեր նախընտրած լեզվով:',
          multilingual: 'Բազմալեզու աջակցման թիմ',
          support247: 'Պատասխան 24 ժամվա ընթացքում',
          response24h: 'Խորհրդատվական զանգեր հասանելի են'
        },
        emergency: {
          title: 'Շտապ Աջակցություն',
          description: 'Անհրաժեշտ է անմիջական օգնություն: Կապվեք մեր առաջնահերթ աջակցության գծով:',
          phone: 'Թեժ Գիծ',
          email: 'Առաջնահերթ Էլ․ Փոստ'
        }
      },
      footer: {
        description: 'Համdelays IT delays Delays: 50+ delays delays delays delays delays:',
        address: 'Delays, Delays',
        rights: 'Delays delays delays:',
      },
      pricing: {
        badge: 'IT Գdelays Delays',
        title: 'Delays Delays IT Delays',
        subtitle: 'Delays IT delays delays delays delays.',
        mostPopular: 'Delays',
        getStarted: 'Delays',
        contactUs: 'Delays',
        plans: {
          period: 'delays',
          business: {
            name: 'Business',
            description: 'Delays IT delays delays delays',
          },
          businessPro: {
            name: 'Business Pro',
            description: 'Delays delays delays delays',
          },
          businessProMax: {
            name: 'Business Pro Max',
            description: 'Delays delays delays delays delays',
          },
          enterprise: {
            badge: 'Delays',
            name: 'Delays delays delays',
            description: 'Delays IT delays delays delays.',
          },
        },
        features: {
          engineer: 'Delays IT delays (8 delays, 9:00-17:00)',
          response: '30-delays delays delays',
          remote: 'Delays delays delays',
          afterHours: 'Delays delays delays',
          security: 'Delays delays delays',
          database: 'SQL Server delays delays',
          cloud: 'Delays delays delays',
          priority: 'Delays delays delays',
          accountManager: 'Delays delays delays',
          mobile: 'Delays delays delays',
        },
        whyChoose: {
          title: 'Delays IT delays',
          subtitle: 'Delays delays delays',
          response: {
            title: '30 delays',
            desc: 'Delays delays delays',
          },
          team: {
            title: 'Delays Delays',
            desc: 'Delays IT delays',
          },
          support: {
            title: '24/7 Delays',
            desc: 'Delays delays',
          },
          infrastructure: {
            title: 'Delays delays',
            desc: 'Delays delays delays',
          },
        },
      },
    },
  },
  'zh-CN': {
    translation: {
      nav: {
        home: '首页',
        services: '服务',
        pricing: '价格',
        about: '关于我们',
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
          welcomeTitle: '加入我们的全球大家庭',
          welcomeSubtitle: '受到全球客户的信赖，在每个项目中都追求卓越',
          projects: '已完成项目',
          projectsDesc: '用心交付',
          satisfaction: '客户满意度',
          satisfactionDesc: '全球满意客户',
          clients: '满意客户',
          clientsDesc: '多语言专家',
          countries: '服务国家',
          countriesDesc: '全球业务',
          ctaButton: '准备好开始您的旅程了吗？'
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
          subtitle: '由50多名充满激情的专业人士组成的多元化团队，共同创造卓越的数字解决方案',
          culture: {
            innovation: {
              title: '创新驱动',
              description: '我们培养创造力，鼓励使用尖端技术进行实验。'
            },
            collaboration: {
              title: '协作精神',
              description: '跨职能团队跨时区和文化无缝协作。'
            },
            excellence: {
              title: '追求卓越',
              description: '持续学习和改进是我们文化和成功的核心。'
            }
          }
        },
        cta: {
          title: '准备好合作了吗？',
          subtitle: '让我们讨论我们的全球团队如何帮助您转型业务',
          primary: '启动项目',
          secondary: '查看服务'
        }
      },
      contact: {
        hero: {
          title: '联系我们',
          subtitle: '与我们在亚美尼亚的团队联系。我们在这里帮助实现您的愿景。'
        },
        info: {
          office: {
            title: '我们的办公室',
            address: '图曼扬街15号',
            city: '埃里温 0001，亚美尼亚'
          },
          phone: {
            title: '电话',
            main: '+374 91 620126'
          },
          email: {
            title: '电子邮箱',
            general: 'hello@bytetech.am',
            support: 'support@bytetech.am'
          },
          hours: {
            title: '营业时间',
            weekdays: '周一至周五：9:00 - 18:00',
            timezone: '亚美尼亚时间 (UTC+4)'
          }
        },
        form: {
          title: '给我们留言',
          name: '全名',
          namePlaceholder: '张三',
          email: '电子邮箱地址',
          emailPlaceholder: 'zhangsan@example.com',
          phone: '电话号码',
          phonePlaceholder: '+374 91 620126',
          service: '服务意向',
          servicePlaceholder: '选择服务',
          services: {
            web: 'Web开发',
            mobile: '移动应用开发',
            design: 'UI/UX设计',
            custom: '定制开发',
            consulting: 'IT咨询',
            other: '其他服务'
          },
          message: '您的留言',
          messagePlaceholder: '告诉我们您的项目需求...',
          send: '发送消息',
          sending: '发送中...'
        },
        quickResponse: {
          title: '快速响应',
          description: '我们的多语言团队确保用您的首选语言快速沟通。',
          multilingual: '多语言支持团队',
          support247: '24小时内响应',
          response24h: '可预约咨询电话'
        },
        emergency: {
          title: '紧急支持',
          description: '需要即时帮助？联系我们的优先支持热线。',
          phone: '热线',
          email: '优先邮箱'
        }
      },
      footer: {
        description: '从亚美尼亚交付的全球IT解决方案。50多名专业人士为全球客户提供服务。',
        address: '埃里温，亚美尼亚',
        rights: '保留所有权利。',
      },
      pricing: {
        badge: 'IT维护套餐',
        title: '选择您的IT支持计划',
        subtitle: '全面的IT维护服务，满足您的业务需求，提供专业支持和快速响应。',
        mostPopular: '热门',
        getStarted: '开始',
        contactUs: '联系我们',
        plans: {
          period: '月',
          business: { name: 'Business', description: '满足成长型企业的核心IT维护需求' },
          businessPro: { name: 'Business Pro', description: '增强支持，优先响应和云集成' },
          businessProMax: { name: 'Business Pro Max', description: '全面企业覆盖，配备专属客户经理' },
          enterprise: { badge: '企业版', name: '定制企业解决方案', description: '为大型组织提供定制IT解决方案。' },
        },
        features: {
          engineer: '专属IT工程师 (8小时/天, 9am-5pm)',
          response: '30分钟灾难恢复响应',
          remote: '远程桌面控制支持',
          afterHours: '非工作时间紧急支持',
          security: '定期安全审计和漏洞评估',
          database: 'SQL Server数据库管理',
          cloud: '云系统集成与支持',
          priority: '优先响应队列',
          accountManager: '专属客户经理',
          mobile: '移动和桌面应用支持',
        },
        whyChoose: {
          title: '为什么选择我们的IT服务',
          subtitle: '企业级支持，个性化服务',
          response: { title: '30分钟响应', desc: '保证快速灾难恢复响应' },
          team: { title: '专属团队', desc: '您的专属IT工程师每日在线' },
          support: { title: '24/7支持', desc: '关键问题非工作时间可用' },
          infrastructure: { title: '云端就绪', desc: '全面云集成和迁移支持' },
        },
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