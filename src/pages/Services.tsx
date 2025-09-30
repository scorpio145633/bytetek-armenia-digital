import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Smartphone, Cloud, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ui/ParticleBackground';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      longDescription: t('services.webDev.longDescription'),
      features: [
        t('services.webDev.feature1'),
        t('services.webDev.feature2'),
        t('services.webDev.feature3'),
        t('services.webDev.feature4'),
        t('services.webDev.feature5')
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript', 'Next.js'],
      price: t('services.webDev.price'),
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Palette,
      title: t('services.uiux.title'),
      description: t('services.uiux.description'),
      longDescription: t('services.uiux.longDescription'),
      features: [
        t('services.uiux.feature1'),
        t('services.uiux.feature2'),
        t('services.uiux.feature3'),
        t('services.uiux.feature4'),
        t('services.uiux.feature5')
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
      price: t('services.uiux.price'),
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      longDescription: t('services.mobile.longDescription'),
      features: [
        t('services.mobile.feature1'),
        t('services.mobile.feature2'),
        t('services.mobile.feature3'),
        t('services.mobile.feature4'),
        t('services.mobile.feature5')
      ],
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'App Store'],
      price: t('services.mobile.price'),
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      longDescription: t('services.cloud.longDescription'),
      features: [
        t('services.cloud.feature1'),
        t('services.cloud.feature2'),
        t('services.cloud.feature3'),
        t('services.cloud.feature4'),
        t('services.cloud.feature5')
      ],
      technologies: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'DevOps'],
      price: t('services.cloud.price'),
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.description'),
      longDescription: t('services.automation.longDescription'),
      features: [
        t('services.automation.feature1'),
        t('services.automation.feature2'),
        t('services.automation.feature3'),
        t('services.automation.feature4'),
        t('services.automation.feature5')
      ],
      technologies: ['Zapier', 'Python', 'APIs', 'Workflow', 'Integration'],
      price: t('services.automation.price'),
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      longDescription: t('services.consulting.longDescription'),
      features: [
        t('services.consulting.feature1'),
        t('services.consulting.feature2'),
        t('services.consulting.feature3'),
        t('services.consulting.feature4'),
        t('services.consulting.feature5')
      ],
      technologies: ['Strategy', 'Architecture', 'Security', 'Performance', 'Scalability'],
      price: t('services.consulting.price'),
      gradient: "from-gray-500 to-gray-700"
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
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('services.hero.subtitle')}
            </p>
            <Button asChild size="lg" className="hover-glow">
              <Link to="/contact">
                {t('services.hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
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
                      <h4 className="font-semibold mb-3">{t('services.features')}</h4>
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
                      <h4 className="font-semibold mb-3">{t('services.technologies')}</h4>
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
                          <span className="text-sm text-muted-foreground">{t('services.startingAt')}</span>
                          <div className="text-2xl font-bold text-primary">{service.price}</div>
                        </div>
                        <Button asChild className="group">
                          <Link to="/contact">
                            {t('services.getQuote')}
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {t('services.process.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: t('services.process.step1.title'),
                description: t('services.process.step1.description')
              },
              {
                step: "02",
                title: t('services.process.step2.title'),
                description: t('services.process.step2.description')
              },
              {
                step: "03",
                title: t('services.process.step3.title'),
                description: t('services.process.step3.description')
              },
              {
                step: "04",
                title: t('services.process.step4.title'),
                description: t('services.process.step4.description')
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('services.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow">
                <Link to="/contact">
                  {t('services.cta.primary')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">
                  {t('services.cta.secondary')}
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