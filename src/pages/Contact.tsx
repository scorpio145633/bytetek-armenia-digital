import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageSquare, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SuccessAnimation from '@/components/ui/SuccessAnimation';
import ParticleBackground from '@/components/ui/ParticleBackground';

const Contact = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceParam || '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setShowSuccess(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.office.title'),
      content: t('contact.info.office.address'),
      subContent: t('contact.info.office.city')
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      content: '+357 91620126',
      subContent: ''
    },
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      content: t('contact.info.email.general'),
      subContent: t('contact.info.email.support')
    },
    {
      icon: Clock,
      title: t('contact.info.hours.title'),
      content: t('contact.info.hours.weekdays'),
      subContent: t('contact.info.hours.timezone')
    }
  ];

  if (showSuccess) {
    return <SuccessAnimation onComplete={() => setShowSuccess(false)} />;
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden animated-bg">
        <ParticleBackground />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="card-elevated h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.subContent}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 gradient-text">
                    {t('contact.form.title')}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">{t('contact.form.name')}</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="mt-2"
                          placeholder={t('contact.form.namePlaceholder')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t('contact.form.email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="mt-2"
                          placeholder={t('contact.form.emailPlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="mt-2"
                          placeholder={t('contact.form.phonePlaceholder')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">{t('contact.form.service')}</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleChange('service', value)}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder={t('contact.form.servicePlaceholder')} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web">{t('contact.form.services.web')}</SelectItem>
                            <SelectItem value="mobile">{t('contact.form.services.mobile')}</SelectItem>
                            <SelectItem value="design">{t('contact.form.services.design')}</SelectItem>
                            <SelectItem value="custom">{t('contact.form.services.custom')}</SelectItem>
                            <SelectItem value="consulting">{t('contact.form.services.consulting')}</SelectItem>
                            <SelectItem value="other">{t('contact.form.services.other')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">{t('contact.form.message')}</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="mt-2"
                        placeholder={t('contact.form.messagePlaceholder')}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? t('contact.form.sending') : t('contact.form.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t('contact.quickResponse.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('contact.quickResponse.description')}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{t('contact.quickResponse.multilingual')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{t('contact.quickResponse.support247')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{t('contact.quickResponse.response24h')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t('contact.emergency.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('contact.emergency.description')}
                  </p>
                   <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-sm font-medium">{t('contact.emergency.phone')}</span>
                      <a href="tel:+35791620126" className="text-sm font-bold text-primary hover:underline">
                        +357 91620126
                      </a>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <span className="text-sm font-medium">{t('contact.emergency.email')}</span>
                      <span className="text-sm font-bold text-primary">urgent@bytetech.am</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
