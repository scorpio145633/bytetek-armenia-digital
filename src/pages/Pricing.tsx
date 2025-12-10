import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Star, Zap, Shield, Clock, Users, HeadphonesIcon, Server, X, Cloud, Database, Lock, Monitor, Settings, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ParticleBackground from '@/components/ui/ParticleBackground';

const Pricing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const plans = [
    {
      id: 'business',
      name: t('pricing.plans.business.name'),
      price: '$1,999',
      period: t('pricing.plans.period'),
      description: t('pricing.plans.business.description'),
      features: [
        t('pricing.features.engineer'),
        t('pricing.features.response'),
        t('pricing.features.remote'),
        t('pricing.features.afterHours'),
        t('pricing.features.security'),
        t('pricing.features.database'),
      ],
      popular: false,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderGlow: 'hover:shadow-blue-500/20',
    },
    {
      id: 'businessPro',
      name: t('pricing.plans.businessPro.name'),
      price: '$2,999',
      period: t('pricing.plans.period'),
      description: t('pricing.plans.businessPro.description'),
      features: [
        t('pricing.features.engineer'),
        t('pricing.features.response'),
        t('pricing.features.remote'),
        t('pricing.features.afterHours'),
        t('pricing.features.security'),
        t('pricing.features.database'),
        t('pricing.features.cloud'),
        t('pricing.features.priority'),
      ],
      popular: true,
      gradient: 'from-primary/30 to-yellow-500/20',
      borderGlow: 'hover:shadow-primary/30',
    },
    {
      id: 'businessProMax',
      name: t('pricing.plans.businessProMax.name'),
      price: '$3,999',
      period: t('pricing.plans.period'),
      description: t('pricing.plans.businessProMax.description'),
      features: [
        t('pricing.features.engineer'),
        t('pricing.features.response'),
        t('pricing.features.remote'),
        t('pricing.features.afterHours'),
        t('pricing.features.security'),
        t('pricing.features.database'),
        t('pricing.features.cloud'),
        t('pricing.features.priority'),
        t('pricing.features.accountManager'),
        t('pricing.features.mobile'),
      ],
      popular: false,
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderGlow: 'hover:shadow-purple-500/20',
    },
  ];

  const comparisonFeatures = [
    { key: 'engineer', business: true, businessPro: true, businessProMax: true, enterprise: true },
    { key: 'response', business: true, businessPro: true, businessProMax: true, enterprise: true },
    { key: 'remote', business: true, businessPro: true, businessProMax: true, enterprise: true },
    { key: 'afterHours', business: true, businessPro: true, businessProMax: true, enterprise: true },
    { key: 'security', business: true, businessPro: true, businessProMax: true, enterprise: true },
    { key: 'database', business: true, businessPro: true, businessProMax: true, enterprise: true },
    { key: 'cloud', business: false, businessPro: true, businessProMax: true, enterprise: true },
    { key: 'priority', business: false, businessPro: true, businessProMax: true, enterprise: true },
    { key: 'accountManager', business: false, businessPro: false, businessProMax: true, enterprise: true },
    { key: 'mobile', business: false, businessPro: false, businessProMax: true, enterprise: true },
    { key: 'customSLA', business: false, businessPro: false, businessProMax: false, enterprise: true },
    { key: 'multiLocation', business: false, businessPro: false, businessProMax: false, enterprise: true },
  ];

  const technologies = [
    {
      category: t('pricing.technologies.cloudPlatforms'),
      icon: Cloud,
      items: ['AWS', 'Microsoft Azure', 'Google Cloud']
    },
    {
      category: t('pricing.technologies.databases'),
      icon: Database,
      items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      category: t('pricing.technologies.security'),
      icon: Lock,
      items: ['Firewall', 'Antivirus', 'VPN', 'IAM']
    },
    {
      category: t('pricing.technologies.monitoring'),
      icon: Monitor,
      items: ['Prometheus', 'Grafana', 'Datadog']
    },
    {
      category: t('pricing.technologies.devops'),
      icon: Settings,
      items: ['Docker', 'Kubernetes', 'CI/CD']
    },
    {
      category: t('pricing.technologies.collaboration'),
      icon: MessageSquare,
      items: ['Microsoft 365', 'Google Workspace', 'Slack']
    },
  ];

  const handleGetStarted = (planName: string) => {
    navigate(`/contact?service=${encodeURIComponent(planName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
              <Zap className="w-3 h-3 mr-1" />
              {t('pricing.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('pricing.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative pb-16 md:pb-24">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      {t('pricing.mostPopular')}
                    </Badge>
                  </div>
                )}
                <Card className={`relative h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-2xl ${plan.borderGlow} ${plan.popular ? 'border-primary/50 ring-1 ring-primary/20' : ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-lg opacity-50`} />
                  <CardHeader className="relative z-10 text-center pb-2">
                    <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 text-center flex-1">
                    <div className="mb-6">
                      <span className="text-4xl md:text-5xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    </div>
                    <ul className="space-y-3 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="relative z-10 pt-4 mt-auto">
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? 'default' : 'outline'}
                      onClick={() => handleGetStarted(plan.name)}
                    >
                      {t('pricing.getStarted')}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative pb-16 md:pb-24">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="relative bg-gradient-to-r from-muted/50 via-card/50 to-muted/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
              <CardContent className="relative z-10 p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="text-center lg:text-left">
                    <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                      <Shield className="w-3 h-3 mr-1" />
                      {t('pricing.plans.enterprise.badge')}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {t('pricing.plans.enterprise.name')}
                    </h3>
                    <p className="text-muted-foreground max-w-xl mb-4">
                      {t('pricing.plans.enterprise.description')}
                    </p>
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                      $10,000+<span className="text-lg text-muted-foreground font-normal">/{t('pricing.plans.period')}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg">
                      <Link to="/contact?service=Enterprise">
                        {t('pricing.contactUs')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative pb-16 md:pb-24">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('pricing.comparison.title')}</h2>
            <p className="text-muted-foreground">{t('pricing.comparison.subtitle')}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="overflow-x-auto"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead className="min-w-[200px] text-foreground font-semibold">{t('pricing.comparison.feature')}</TableHead>
                    <TableHead className="text-center min-w-[120px] text-foreground font-semibold">Business</TableHead>
                    <TableHead className="text-center min-w-[120px] bg-primary/10 text-foreground font-semibold">Business Pro</TableHead>
                    <TableHead className="text-center min-w-[140px] text-foreground font-semibold">Business Pro Max</TableHead>
                    <TableHead className="text-center min-w-[120px] text-foreground font-semibold">Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonFeatures.map((feature, index) => (
                    <TableRow key={feature.key} className="border-border/30">
                      <TableCell className="text-foreground/90 font-medium">
                        {t(`pricing.comparison.features.${feature.key}`)}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.business ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center bg-primary/5">
                        {feature.businessPro ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.businessProMax ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {feature.enterprise ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative pb-16 md:pb-24">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('pricing.technologies.title')}</h2>
            <p className="text-muted-foreground">{t('pricing.technologies.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <tech.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">{tech.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item) => (
                        <Badge key={item} variant="secondary" className="bg-muted/50 text-foreground/80 hover:bg-muted">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative pb-20 md:pb-32">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('pricing.whyChoose.title')}</h2>
            <p className="text-muted-foreground">{t('pricing.whyChoose.subtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: t('pricing.whyChoose.response.title'), desc: t('pricing.whyChoose.response.desc') },
              { icon: Users, title: t('pricing.whyChoose.team.title'), desc: t('pricing.whyChoose.team.desc') },
              { icon: HeadphonesIcon, title: t('pricing.whyChoose.support.title'), desc: t('pricing.whyChoose.support.desc') },
              { icon: Server, title: t('pricing.whyChoose.infrastructure.title'), desc: t('pricing.whyChoose.infrastructure.desc') },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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

export default Pricing;