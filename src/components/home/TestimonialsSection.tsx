import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Alex Petrosyan",
      role: "CEO, TechCorp Armenia",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      quote: t('home.testimonials.testimonial1.quote'),
      highlight: t('home.testimonials.testimonial1.highlight')
    },
    {
      name: "Marina Kocharyan", 
      role: "Founder, Digital Solutions",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      quote: t('home.testimonials.testimonial2.quote'),
      highlight: t('home.testimonials.testimonial2.highlight')
    },
    {
      name: "David Hakobyan",
      role: "CTO, InnovateAM",
      avatar: "/api/placeholder/64/64", 
      rating: 5,
      quote: t('home.testimonials.testimonial3.quote'),
      highlight: t('home.testimonials.testimonial3.highlight')
    }
  ];

  return (
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
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Card className="card-elevated h-full relative overflow-hidden">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-6" />
                  
                  {/* Rating Stars */}
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
                  <div className="text-primary font-medium mb-6 text-sm">
                    {testimonial.highlight}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  layoutId={`testimonial-bg-${index}`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-8">
            {t('home.testimonials.trustedBy')}
          </p>
          <div className="flex justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Logo {i}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;