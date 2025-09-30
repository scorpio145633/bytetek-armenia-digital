import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Award, label: 'Excellence' },
    { icon: Users, label: 'Collaboration' },
    { icon: Zap, label: 'Innovation' },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('about.title')}
            </h2>
            <p className="text-xl text-primary mb-4 font-semibold">
              {t('about.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about.description')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('about.team')}
            </p>

            <div className="flex gap-8 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-2">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/20">
              <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-bold text-primary-foreground">
                    Professional Team
                  </p>
                  <p className="text-primary mt-2">
                    Dedicated to Your Success
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
