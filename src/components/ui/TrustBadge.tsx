import { Shield, Lock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
interface TrustBadgeProps {
  variant?: 'ssl' | 'secure' | 'verified';
  size?: 'sm' | 'md' | 'lg';
}
const TrustBadge = ({
  variant = 'ssl',
  size = 'md'
}: TrustBadgeProps) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };
  const badges = {
    ssl: {
      icon: Lock,
      text: 'SSL Secured',
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-500'
    },
    secure: {
      icon: Shield,
      text: '100% Secure',
      gradient: 'from-primary/20 to-accent/20',
      iconColor: 'text-primary'
    },
    verified: {
      icon: CheckCircle2,
      text: 'Verified',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500'
    }
  };
  const badge = badges[variant];
  const Icon = badge.icon;
  return;
};
export default TrustBadge;