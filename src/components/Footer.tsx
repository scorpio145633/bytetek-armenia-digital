import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Phone } from 'lucide-react';
import logo from '@/assets/logo-full.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-primary-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Bytetech" className="h-8 w-auto mb-4" />
            <p className="text-primary-foreground/80">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t('nav.contact')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-primary-foreground/80">
                  G. Hovsepyan 24/3<br />
                  Panaroma resort<br />
                  Yerevan, Armenia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@bytetech.am"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  info@bytetech.am
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              {t('nav.services')}
            </h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>{t('services.customDev.title')}</li>
              <li>{t('services.webDev.title')}</li>
              <li>{t('services.design.title')}</li>
              <li>{t('services.workflow.title')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Bytetech. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
