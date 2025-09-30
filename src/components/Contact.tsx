import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';

// Input validation schema
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens and apostrophes'),
  email: z.string()
    .trim()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters'),
  message: z.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
});

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [lastSubmit, setLastSubmit] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check (60 second cooldown)
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmit;
    if (timeSinceLastSubmit < 60000) {
      const waitTime = Math.ceil((60000 - timeSinceLastSubmit) / 1000);
      toast.error(`Please wait ${waitTime} seconds before submitting again`);
      return;
    }

    // Validate input
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
        return;
      }
    }

    setLoading(true);

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          message: formData.message.trim(),
          ip_address: null, // Client-side cannot reliably get IP
          user_agent: navigator.userAgent,
        },
      ]);

      if (error) throw error;

      toast.success(t('contact.success'));
      setFormData({ name: '', email: '', message: '' });
      setLastSubmit(now);
    } catch (error) {
      // Generic error message to avoid information disclosure
      toast.error(t('contact.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">{t('contact.name')}</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="email">{t('contact.email')}</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message">{t('contact.message')}</Label>
              <Textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(245,184,0,0.3)] hover:shadow-[0_0_30px_rgba(245,184,0,0.5)] transition-all"
            >
              {loading ? 'Sending...' : t('contact.send')}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
