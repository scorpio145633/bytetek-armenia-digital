import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Rocket, Heart, Globe, Sparkles } from 'lucide-react';

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
    { 
      number: 150, 
      suffix: '+', 
      label: t('home.stats.projects'),
      description: t('home.stats.projectsDesc'),
      icon: Rocket,
      gradient: 'from-purple-500/20 via-purple-500/10 to-transparent',
      iconColor: 'text-purple-500',
      glowColor: 'bg-purple-500/20'
    },
    { 
      number: 98, 
      suffix: '%', 
      label: t('home.stats.satisfaction'),
      description: t('home.stats.satisfactionDesc'),
      icon: Heart,
      gradient: 'from-pink-500/20 via-pink-500/10 to-transparent',
      iconColor: 'text-pink-500',
      glowColor: 'bg-pink-500/20'
    },
    { 
      number: 50, 
      suffix: '+', 
      label: t('home.stats.clients'),
      description: t('home.stats.clientsDesc'),
      icon: Globe,
      gradient: 'from-blue-500/20 via-blue-500/10 to-transparent',
      iconColor: 'text-blue-500',
      glowColor: 'bg-blue-500/20'
    },
    { 
      number: 12, 
      suffix: '+', 
      label: t('home.stats.countries'),
      description: t('home.stats.countriesDesc'),
      icon: Globe,
      gradient: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
      iconColor: 'text-emerald-500',
      glowColor: 'bg-emerald-500/20'
    }
  ];

  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Animated top border */}
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
      
      <div className="container-wide relative z-10">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{
                backgroundPosition: ['0% center', '200% center', '0% center'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {t('home.stats.welcomeTitle')}
            </motion.h2>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.stats.welcomeSubtitle')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  bounce: 0.4
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* Card with glassmorphism */}
                <div className="relative h-full bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 overflow-hidden">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Animated glow effect */}
                  <motion.div 
                    className={`absolute inset-0 ${stat.glowColor} rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Pulsing border */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 ${stat.iconColor.replace('text-', 'border-')} opacity-0 group-hover:opacity-50`}
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <div className="relative z-10">
                    {/* Floating icon */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="mb-6"
                    >
                      <div className={`inline-flex p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 ${stat.iconColor}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                    </motion.div>

                    {/* Counter */}
                    <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                      <Counter end={stat.number} suffix={stat.suffix} duration={2.5} />
                    </div>

                    {/* Label */}
                    <div className="text-base md:text-lg font-semibold text-foreground mb-2 uppercase tracking-wide">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Sparkles className="w-5 h-5" />
            {t('home.stats.ctaButton')}
            <Sparkles className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
