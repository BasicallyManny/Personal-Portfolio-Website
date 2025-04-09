import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface OrbitingIconProps {
    profileSrc: string;
    profileAlt?: string;
    className?: string;
    icons: {
        Icon: IconType;
        color?: string;
    }[];
}

const OrbitingIcon: React.FC<OrbitingIconProps> = ({
    profileSrc,
    profileAlt = "Profile",
    className = "",
    icons,
}) => {
    if (icons.length !== 8) {
        console.warn("You need exactly 8 icons: 4 for the inner ring, 4 for the outer ring.");
    }

    const innerIcons = icons.slice(0, 4);
    const outerIcons = icons.slice(4, 8);

    // 4 icons spaced evenly around the ring (North, East, South, West)
    const angles = [0, 90, 180, 270];

    // Control the radius — outer ring is larger to avoid collision
    const radii = {
        inner: 100, // Distance from center to icon center (inner ring)
        outer: 160, // Distance from center to icon center (outer ring)
    };

    // Icon size — ensure icons are small enough to never touch each other
    const iconSize = 42;

    const getPosition = (radius: number, angle: number) => {
        const radians = (angle * Math.PI) / 180;
        return {
            x: radius * Math.cos(radians),
            y: radius * Math.sin(radians),
        };
    };

    const renderOrbitingIcon = (
        { Icon }: { Icon: IconType; color?: string },
        angle: number,
        radius: number,
        duration: number,
        index: number
    ) => {
        const { x, y } = getPosition(radius, angle);

        return (
            <motion.div
                key={index}
                className="absolute"
                initial={{ rotate: angle }}
                animate={{ rotate: angle + 360 }}
                transition={{
                    duration,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    transformOrigin: "center center",
                }}
            >
                <motion.div
                    className="absolute flex items-center justify-center rounded-full shadow-lg overflow-hidden"
                    style={{
                        x,
                        y,
                        width: `${iconSize}px`,
                        height: `${iconSize}px`,
                    }}
                >
                    <Icon className="w-6 h-6" />
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className={`relative inline-flex items-center justify-center ${className}`}>
            {/* Profile Image */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img
                    className="w-full h-full object-cover object-center"
                    src={profileSrc}
                    alt={profileAlt}
                />
            </div>

            {/* Inner Ring */}
            {innerIcons.map((icon, index) =>
                renderOrbitingIcon(icon, angles[index], radii.inner * 1.3, 20, `inner-${index}`)
            )}

            {/* Outer Ring */}
            {outerIcons.map((icon, index) =>
                renderOrbitingIcon(icon, angles[index] + 45, radii.outer * 1.3, 30, `outer-${index}`)
            )}
        </div>
    );
};

export default OrbitingIcon;