import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    { number: 150, suffix: '+', label: t('home.stats.projects') },
    { number: 98, suffix: '%', label: t('home.stats.satisfaction') },
    { number: 50, suffix: '+', label: t('home.stats.clients') },
    { number: 12, suffix: '+', label: t('home.stats.awards') }
  ];

  return (
    <section className="section-spacing border-y border-border/50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
              className="text-center relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-primary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
