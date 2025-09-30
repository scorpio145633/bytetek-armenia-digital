import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Cloud, Zap, Shield, ArrowRight, CheckCircle, Database, ShoppingCart, Plug, Lock, Headphones, Rocket, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ui/ParticleBackground';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business needs',
      longDescription: 'We create bespoke software applications from the ground up, perfectly aligned with your business processes and objectives. Our team ensures scalable, maintainable, and future-proof solutions.',
      features: [
        'Full-stack custom application development',
        'Enterprise software solutions',
        'Legacy system modernization',
        'Scalable architecture design',
        'Continuous support and maintenance'
      ],
      technologies: ['React', 'Node.js', 'Python', '.NET', 'Java', 'TypeScript'],
      price: '$15,000+',
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      longDescription: 'Build stunning, high-performance websites and web applications that drive results. From corporate websites to complex web platforms, we deliver exceptional digital experiences.',
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'E-commerce platforms',
        'Content Management Systems',
        'SEO optimization'
      ],
      technologies: ['React', 'Vue.js', 'Next.js', 'WordPress', 'Shopify'],
      price: '$5,000+',
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
      longDescription: 'Create exceptional user experiences with our design services. We combine aesthetics with functionality to deliver interfaces that engage users and drive conversions.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Usability testing',
        'Design system creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      price: '$3,000+',
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      longDescription: 'Develop powerful mobile apps for iOS and Android. Whether native or cross-platform, we build apps that users love with seamless performance and intuitive interfaces.',
      features: [
        'iOS and Android development',
        'Cross-platform solutions',
        'App Store optimization',
        'Push notifications & analytics',
        'In-app purchases integration'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      price: '$10,000+',
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores that drive sales',
      longDescription: 'Launch and grow your online business with our e-commerce solutions. From product catalogs to secure payments, we build everything you need to sell online successfully.',
      features: [
        'Custom e-commerce platforms',
        'Payment gateway integration',
        'Inventory management systems',
        'Shopping cart optimization',
        'Multi-vendor marketplace development'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal'],
      price: '$8,000+',
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Cloud,
      title: 'Cloud Services & DevOps',
      description: 'Scalable cloud infrastructure and automation',
      longDescription: 'Migrate to the cloud and optimize your infrastructure. Our DevOps expertise ensures reliable, scalable, and cost-effective cloud solutions with automated deployment pipelines.',
      features: [
        'Cloud migration and strategy',
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring and logging'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      price: '$7,000+',
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Plug,
      title: 'API Development & Integration',
      description: 'Seamless system integration and API solutions',
      longDescription: 'Connect your systems and enable data flow with robust APIs. We design, develop, and integrate APIs that power your digital ecosystem and enhance functionality.',
      features: [
        'RESTful API development',
        'GraphQL implementation',
        'Third-party API integration',
        'API documentation',
        'Microservices architecture'
      ],
      technologies: ['Node.js', 'Express', 'GraphQL', 'REST', 'Postman'],
      price: '$4,000+',
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Robust database design and optimization',
      longDescription: 'Design, implement, and maintain efficient databases that power your applications. From schema design to performance tuning, we ensure your data is secure and accessible.',
      features: [
        'Database design and modeling',
        'Query optimization',
        'Data migration services',
        'Backup and recovery solutions',
        'Database security'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      price: '$3,500+',
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Lock,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business from digital threats',
      longDescription: 'Secure your digital assets with comprehensive cybersecurity solutions. We implement industry best practices to protect your data, applications, and infrastructure.',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Encryption implementation',
        'Compliance consulting',
        'Incident response planning'
      ],
      technologies: ['OWASP', 'SSL/TLS', 'OAuth', 'JWT', 'Firewall'],
      price: '$5,000+',
      gradient: "from-red-500 to-rose-600"
    },
    {
      icon: Zap,
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation',
      longDescription: 'Automate repetitive tasks and optimize workflows. We help businesses save time and reduce costs through smart automation solutions and process optimization.',
      features: [
        'Workflow automation',
        'Process optimization',
        'RPA implementation',
        'Integration automation',
        'Custom automation tools'
      ],
      technologies: ['Zapier', 'Make', 'Python', 'n8n', 'Power Automate'],
      price: '$4,500+',
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Headphones,
      title: 'IT Support & Maintenance',
      description: '24/7 technical support and system maintenance',
      longDescription: 'Keep your systems running smoothly with our comprehensive IT support services. From troubleshooting to regular maintenance, we ensure optimal performance.',
      features: [
        '24/7 technical support',
        'System monitoring',
        'Regular updates and patches',
        'Performance optimization',
        'Documentation and training'
      ],
      technologies: ['Help Desk', 'Monitoring Tools', 'Ticketing Systems', 'Remote Support', 'Documentation'],
      price: '$2,000/month',
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Modernize your business for the digital age',
      longDescription: 'Transform your business with cutting-edge digital solutions. We help organizations leverage technology to improve efficiency, reach new markets, and stay competitive.',
      features: [
        'Digital strategy consulting',
        'Technology roadmap planning',
        'Change management',
        'Digital marketing integration',
        'Innovation workshops'
      ],
      technologies: ['Strategy', 'Agile', 'Analytics', 'AI/ML', 'IoT'],
      price: '$10,000+',
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden animated-bg">
        <ParticleBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Our IT Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comprehensive technology solutions to transform your business and drive growth
            </p>
            <Button asChild size="lg" className="hover-glow">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full card-elevated overflow-hidden">
                  <CardHeader className="relative">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Long Description */}
                    <p className="text-sm leading-relaxed">
                      {service.longDescription}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-muted-foreground">Starting at</span>
                          <div className="text-2xl font-bold text-primary">{service.price}</div>
                        </div>
                        <Button asChild className="group">
                          <Link to="/contact">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-b from-background via-muted/20 to-background"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and goals" },
              { step: "02", title: "Planning", desc: "Strategic roadmap development" },
              { step: "03", title: "Execution", desc: "Building your solution" },
              { step: "04", title: "Delivery", desc: "Launch and ongoing support" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-center group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-4 opacity-20 group-hover:opacity-40 transition-opacity"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help transform your business with technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;