import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Code2, Terminal, Cpu, Layers, Zap, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(1);
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0f0';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-20" />;
};

const CodeTypingAnimation = () => {
  const [text, setText] = useState('');
  const codeSnippet = `const innovation = () => {
  return excellence + creativity;
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= codeSnippet.length) {
        setText(codeSnippet.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs md:text-sm text-green-400/80 bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400">terminal</span>
      </div>
      <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">|</span></pre>
    </div>
  );
};

const FloatingIcon = ({ Icon, delay, x, y }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
      x: [x, x + 20, x],
      y: [y, y - 20, y]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary/30" />
  </motion.div>
);

const CyclingExpertise = () => {
  const [index, setIndex] = useState(0);
  const expertiseAreas = ['Cloud Solutions', 'AI/ML', 'Web Development', 'DevOps', 'Mobile Apps', 'Blockchain'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % expertiseAreas.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="text-base md:text-lg font-bold text-primary"
    >
      {expertiseAreas[index]}
    </motion.span>
  );
};

const HeroSection = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const techIcons = [
    { Icon: Code2, x: 10, y: 20, delay: 0 },
    { Icon: Terminal, x: 85, y: 30, delay: 0.5 },
    { Icon: Cpu, x: 15, y: 70, delay: 1 },
    { Icon: Database, x: 80, y: 75, delay: 1.5 },
    { Icon: Layers, x: 90, y: 50, delay: 2 },
    { Icon: Zap, x: 5, y: 45, delay: 2.5 },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/50">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating tech icons */}
      {techIcons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto mt-24 md:mt-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-primary">
                {t('hero.badge')}
              </span>
            </div>
          </motion.div>

          {/* Main Headline with Glitch Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-center overflow-visible"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight mb-6 overflow-visible">
              <motion.span
                className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent pb-2"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ 
                  backgroundSize: '200% auto',
                  WebkitBoxDecorationBreak: 'clone',
                  boxDecorationBreak: 'clone'
                }}
              >
                {t('hero.title.part1')}
              </motion.span>
              <br />
              <motion.span
                className="inline-block text-primary relative"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(var(--primary), 0.5)',
                    '0 0 40px rgba(var(--primary), 0.8)',
                    '0 0 20px rgba(var(--primary), 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {t('hero.title.part2.option1')}
              </motion.span>
            </h1>
          </motion.div>

          {/* Code typing animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <CodeTypingAnimation />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-center"
          >
            {t('hero.description')}
          </motion.p>

          {/* Simple Expertise Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <span className="text-base md:text-lg text-muted-foreground font-medium">
              Expert in:
            </span>
            <CyclingExpertise />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 group font-semibold shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-all duration-300"
            >
              <Link to="/pricing">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10 font-semibold backdrop-blur-sm"
            >
              <Link to="/services">
                {t('hero.contact')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
};

export default HeroSection;
