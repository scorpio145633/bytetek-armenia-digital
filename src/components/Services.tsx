import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Globe, Palette, Workflow, Boxes, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t('services.customDev.title'),
      description: t('services.customDev.description'),
    },
    {
      icon: Globe,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
    },
    {
      icon: Palette,
      title: t('services.design.title'),
      description: t('services.design.description'),
    },
    {
      icon: Workflow,
      title: t('services.workflow.title'),
      description: t('services.workflow.description'),
    },
    {
      icon: Boxes,
      title: t('services.platforms.title'),
      description: t('services.platforms.description'),
    },
    {
      icon: Lightbulb,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-[0_0_30px_rgba(245,184,0,0.15)] transition-all duration-300 border-border hover:border-primary/50 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
