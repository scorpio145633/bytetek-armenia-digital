import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Smartphone, ArrowRight } from 'lucide-react';
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
    <section id="services" className="section-spacing relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-heading-lg mb-6">
            {t('home.services.title')}
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('home.services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="p-10 relative z-10">
                  {/* Icon with animation */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Link with arrow */}
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto font-semibold text-primary hover:text-primary group/btn"
                    asChild
                  >
                    <Link to="/services" className="inline-flex items-center gap-2">
                      {t('common.learnMore')}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="group text-lg px-8 py-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all"
          >
            <Link to="/services">
              {t('home.services.viewAll')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
