import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github, Filter, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ParticleBackground from '@/components/ui/ParticleBackground';

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('portfolio.categories.all') },
    { id: 'web', name: t('portfolio.categories.web') },
    { id: 'mobile', name: t('portfolio.categories.mobile') },
    { id: 'design', name: t('portfolio.categories.design') },
    { id: 'ecommerce', name: t('portfolio.categories.ecommerce') }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "ecommerce",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      description: t('portfolio.projects.ecommerce.description'),
      fullDescription: t('portfolio.projects.ecommerce.fullDescription'),
      client: "TechStore Armenia",
      year: "2024",
      duration: "3 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        t('portfolio.projects.ecommerce.feature1'),
        t('portfolio.projects.ecommerce.feature2'),
        t('portfolio.projects.ecommerce.feature3')
      ]
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Redux"],
      description: t('portfolio.projects.healthcare.description'),
      fullDescription: t('portfolio.projects.healthcare.fullDescription'),
      client: "MedCare Solutions",
      year: "2024",
      duration: "4 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        t('portfolio.projects.healthcare.feature1'),
        t('portfolio.projects.healthcare.feature2'),
        t('portfolio.projects.healthcare.feature3')
      ]
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "web",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      description: t('portfolio.projects.corporate.description'),
      fullDescription: t('portfolio.projects.corporate.fullDescription'),
      client: "BusinessCorp",
      year: "2023",
      duration: "2 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        t('portfolio.projects.corporate.feature1'),
        t('portfolio.projects.corporate.feature2'),
        t('portfolio.projects.corporate.feature3')
      ]
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "design",
      image: "/api/placeholder/400/300",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop"],
      description: t('portfolio.projects.branding.description'),
      fullDescription: t('portfolio.projects.branding.fullDescription'),
      client: "StartupAM",
      year: "2023",
      duration: "1 month",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        t('portfolio.projects.branding.feature1'),
        t('portfolio.projects.branding.feature2'),
        t('portfolio.projects.branding.feature3')
      ]
    },
    {
      id: 5,
      title: "Restaurant Management System",
      category: "web",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      description: t('portfolio.projects.restaurant.description'),
      fullDescription: t('portfolio.projects.restaurant.fullDescription'),
      client: "Tavern Group",
      year: "2023",
      duration: "5 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        t('portfolio.projects.restaurant.feature1'),
        t('portfolio.projects.restaurant.feature2'),
        t('portfolio.projects.restaurant.feature3')
      ]
    },
    {
      id: 6,
      title: "Finance Tracking App",
      category: "mobile",
      image: "/api/placeholder/400/300",
      technologies: ["Flutter", "Dart", "SQLite"],
      description: t('portfolio.projects.finance.description'),
      fullDescription: t('portfolio.projects.finance.fullDescription'),
      client: "FinanceTracker LLC",
      year: "2024",
      duration: "3 months",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        t('portfolio.projects.finance.feature1'),
        t('portfolio.projects.finance.feature2'),
        t('portfolio.projects.finance.feature3')
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              {t('portfolio.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('portfolio.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="group"
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden card-elevated h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="hover-glow">
                            <Eye className="w-4 h-4 mr-2" />
                            {t('portfolio.viewDetails')}
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl gradient-text">
                              {project.title}
                            </DialogTitle>
                            <DialogDescription className="text-base">
                              {project.client} • {project.year} • {project.duration}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="space-y-6">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            
                            <div>
                              <h4 className="font-semibold mb-2">{t('portfolio.description')}</h4>
                              <p className="text-muted-foreground">{project.fullDescription}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">{t('portfolio.keyFeatures')}</h4>
                              <ul className="space-y-1">
                                {project.features.map((feature, i) => (
                                  <li key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">{t('portfolio.technologies')}</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <Badge key={i} variant="secondary">{tech}</Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <Button asChild className="flex-1">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  {t('portfolio.viewLive')}
                                </a>
                              </Button>
                              <Button asChild variant="outline" className="flex-1">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  {t('portfolio.viewCode')}
                                </a>
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {t('portfolio.live')}
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-1" />
                          {t('portfolio.code')}
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
    </div>
  );
};

export default Portfolio;