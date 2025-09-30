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
    },
    {
      icon: Palette,
      title: t('services.uiux.title'),
      description: t('services.uiux.description'),
    },
    {
      icon: Smartphone,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
    }
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-lg mb-4">
            {t('home.services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift transition-all duration-300 border-border/50">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-medium text-primary hover:text-primary group"
                    asChild
                  >
                    <Link to="/services" className="inline-flex items-center gap-2">
                      {t('common.learnMore')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button asChild size="lg" className="group">
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
