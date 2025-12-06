import { motion } from 'framer-motion';
interface StatusIndicatorProps {
  status?: 'online' | 'away' | 'busy';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
const StatusIndicator = ({
  status = 'online',
  showText = true,
  size = 'md'
}: StatusIndicatorProps) => {
  const statusConfig = {
    online: {
      color: 'bg-green-500',
      text: 'Online Now',
      glow: 'shadow-[0_0_12px_rgba(34,197,94,0.6)]'
    },
    away: {
      color: 'bg-yellow-500',
      text: 'Away',
      glow: 'shadow-[0_0_12px_rgba(234,179,8,0.6)]'
    },
    busy: {
      color: 'bg-red-500',
      text: 'Busy',
      glow: 'shadow-[0_0_12px_rgba(239,68,68,0.6)]'
    }
  };
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };
  const config = statusConfig[status];
  return <div className="inline-flex items-center gap-2">
      
      {showText}
    </div>;
};
export default StatusIndicator;