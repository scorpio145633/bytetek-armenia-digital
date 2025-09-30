import { useTranslation } from 'react-i18next';
import { MapPin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo-full.png';
import TrustBadge from '@/components/ui/TrustBadge';
import StatusIndicator from '@/components/ui/StatusIndicator';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-secondary text-white py-12 border-t border-primary/20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Bytetech" className="h-8 w-auto mb-4" />
            <p className="text-white/70">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t('nav.contact')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-white/70">
                  G. Hovsepyan 24/3<br />
                  Panaroma resort<br />
                  Yerevan, Armenia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@bytetech.am"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  info@bytetech.am
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {t('nav.services')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  {t('services.customDev.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  {t('services.webDev.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  {t('services.uiux.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  {t('services.workflow.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-white/70 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="text-white/70 hover:text-primary transition-colors">
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60">© {new Date().getFullYear()} Bytetech. {t('footer.rights')}</p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <StatusIndicator status="online" size="sm" />
              <TrustBadge variant="ssl" size="sm" />
              <TrustBadge variant="secure" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
