import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FeaturedServices = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      gradient: "from-blue-500 to-purple-600",
      features: [
        t('services.webDev.feature1'),
        t('services.webDev.feature2'),
        t('services.webDev.feature3')
      ]
    },
    {
      icon: Palette,
      title: t('services.uiux.title'),
      description: t('services.uiux.description'),
      gradient: "from-pink-500 to-rose-600",
      features: [
        t('services.uiux.feature1'),
        t('services.uiux.feature2'),
        t('services.uiux.feature3')
      ]
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      gradient: "from-green-500 to-teal-600",
      features: [
        t('services.mobile.feature1'),
        t('services.mobile.feature2'),
        t('services.mobile.feature3')
      ]
    },
    {
      icon: Cloud,
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      gradient: "from-yellow-500 to-orange-600",
      features: [
        t('services.cloud.feature1'),
        t('services.cloud.feature2'),
        t('services.cloud.feature3')
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            {t('home.services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group perspective-1000"
            >
              <Card className="h-full hover-lift transform-style-3d transition-transform duration-500 group-hover:rotate-y-12">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="group/btn justify-between p-0 h-auto font-medium text-primary hover:text-primary"
                    asChild
                  >
                    <Link to="/services">
                      {t('common.learnMore')}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="group hover-glow">
            <Link to="/services">
              {t('home.services.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;