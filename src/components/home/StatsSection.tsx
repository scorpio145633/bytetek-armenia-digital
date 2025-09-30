import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ from, to, duration = 2, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      const increment = (to - from) / (duration * 60); // 60fps
      let current = from;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= to) {
          current = to;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      number: 150,
      suffix: "+",
      label: t('home.stats.projects'),
      description: t('home.stats.projectsDesc')
    },
    {
      number: 98,
      suffix: "%",
      label: t('home.stats.satisfaction'),
      description: t('home.stats.satisfactionDesc')
    },
    {
      number: 5,
      suffix: "+",
      label: t('home.stats.years'),
      description: t('home.stats.yearsDesc')
    },
    {
      number: 24,
      suffix: "/7",
      label: t('home.stats.support'),
      description: t('home.stats.supportDesc')
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            {t('home.stats.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.stats.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="card-glass hover-lift p-8">
                <div className="text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Counter from={0} to={stat.number} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;