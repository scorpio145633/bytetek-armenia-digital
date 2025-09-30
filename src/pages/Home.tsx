import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import TestimonialsSection from '@/components/home/TestimonialsSection';

const Home = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: '01',
      title: t('home.process.step1.title'),
      description: t('home.process.step1.description')
    },
    {
      number: '02',
      title: t('home.process.step2.title'),
      description: t('home.process.step2.description')
    },
    {
      number: '03',
      title: t('home.process.step3.title'),
      description: t('home.process.step3.description')
    },
    {
      number: '04',
      title: t('home.process.step4.title'),
      description: t('home.process.step4.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Services */}
      <FeaturedServices />

      {/* Process Timeline */}
      <section className="section-spacing">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-heading-lg mb-4">
              {t('home.process.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="text-6xl font-bold text-primary/20 mb-6">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="section-spacing bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-heading-lg mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-10">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">
                  {t('home.cta.contact')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/portfolio">
                  {t('home.cta.portfolio')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
