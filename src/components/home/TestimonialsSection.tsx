import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Alex Petrosyan",
      role: "CEO, TechCorp Armenia",
      rating: 5,
      quote: t('home.testimonials.testimonial1.quote'),
      highlight: t('home.testimonials.testimonial1.highlight')
    },
    {
      name: "Marina Kocharyan", 
      role: "Founder, Digital Solutions",
      rating: 5,
      quote: t('home.testimonials.testimonial2.quote'),
      highlight: t('home.testimonials.testimonial2.highlight')
    },
    {
      name: "David Hakobyan",
      role: "CTO, InnovateAM",
      rating: 5,
      quote: t('home.testimonials.testimonial3.quote'),
      highlight: t('home.testimonials.testimonial3.highlight')
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-lg mb-4">
            {t('home.testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift transition-all duration-300">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/30 mb-6" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Highlight */}
                  <div className="text-primary font-semibold mb-6 text-sm">
                    — {testimonial.highlight}
                  </div>

                  {/* Author */}
                  <div className="border-t border-border pt-6">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
