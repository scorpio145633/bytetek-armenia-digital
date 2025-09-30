import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Users, Target, Lightbulb, Award, ArrowRight, Calendar, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import ParticleBackground from '@/components/ui/ParticleBackground';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Users,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const timeline = [
    {
      year: "2019",
      title: t('about.timeline.founded.title'),
      description: t('about.timeline.founded.description'),
      icon: Calendar
    },
    {
      year: "2020",
      title: t('about.timeline.expansion.title'),
      description: t('about.timeline.expansion.description'),
      icon: Users
    },
    {
      year: "2022",
      title: t('about.timeline.milestone.title'),
      description: t('about.timeline.milestone.description'),
      icon: Award
    },
    {
      year: "2024",
      title: t('about.timeline.present.title'),
      description: t('about.timeline.present.description'),
      icon: Target
    }
  ];

  const team = [
    {
      name: "Armen Petrosyan",
      role: t('about.team.ceo.role'),
      bio: t('about.team.ceo.bio'),
      image: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sona Hakobyan",
      role: t('about.team.cto.role'),
      bio: t('about.team.cto.bio'),
      image: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Kocharyan",
      role: t('about.team.lead.role'),
      bio: t('about.team.lead.bio'),
      image: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Anna Grigoryan",
      role: t('about.team.designer.role'),
      bio: t('about.team.designer.bio'),
      image: "/api/placeholder/150/150",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden animated-bg">
        <ParticleBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>{t('about.passion')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">5+</div>
                  <div className="text-xl font-semibold mb-2">{t('about.stats.years')}</div>
                  <div className="text-muted-foreground">{t('about.stats.experience')}</div>
                </div>
              </div>
              
              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">{t('about.stats.projects')}</div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg"
              >
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">{t('about.stats.satisfaction')}</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <Card className="card-elevated h-full text-center hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} p-4 mx-auto mb-6`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {t('about.timeline.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.timeline.subtitle')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <Card className="card-elevated">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{item.year}</div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="card-elevated text-center overflow-hidden">
                  <CardContent className="p-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    
                    <div className="flex justify-center gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-glow">
                <Link to="/contact">
                  {t('about.cta.primary')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  {t('about.cta.secondary')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;