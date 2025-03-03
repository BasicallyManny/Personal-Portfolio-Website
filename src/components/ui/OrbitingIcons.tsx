import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface OrbitingIconProps {
  icons: {
    Icon: IconType;
    color?: string;
    size?: number;
    initialRotation?: number;
    duration?: number;
  }[];
  profileSrc: string;
  profileAlt?: string;
  className?: string;
}

const OrbitingIcon: React.FC<OrbitingIconProps> = ({
  icons,
  profileSrc,
  profileAlt = "Profile",
  className = "",
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Profile Image */}
      <img
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 shadow-lg"
        src={profileSrc}
        alt={profileAlt}
      />
      
      {/* Orbiting Icons */}
      {icons.map((iconData, index) => {
        const {
          Icon,
          color = "currentColor",
          size = 24,
          initialRotation = (index * 360) / icons.length,
          duration = 10 + index * 2,
        } = iconData;
        
        // Calculate responsive size
        const responsiveSize = {
          base: size,
          sm: Math.floor(size * 1.25),
          md: Math.floor(size * 1.5),
        };
        
        // Calculate orbit radius based on image size
        const orbitRadius = {
          base: 90,
          sm: 110, 
          md: 130,
        };
        
        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ rotate: initialRotation }}
            animate={{ rotate: initialRotation + 360 }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: '1px',
              height: '1px',
              transformOrigin: 'center center',
            }}
          >
            <motion.div 
              className="absolute"
              style={{
                width: `${responsiveSize.base}px`,
                height: `${responsiveSize.base}px`,
                x: orbitRadius.base,
                y: -responsiveSize.base / 2,
                color,
              }}
              className="sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center"
            >
              <Icon 
                size={responsiveSize.base} 
                className={`text-${color} sm:text-[${responsiveSize.sm}px] md:text-[${responsiveSize.md}px]`}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OrbitingIcon;
