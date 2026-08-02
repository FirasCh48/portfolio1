import React, { useRef, useState } from 'react';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxDegree?: number;
  scale?: number;
  magneticPull?: boolean;
  magneticStrength?: number;
  glowAccent?: 'blue' | 'emerald' | 'purple' | 'amber';
  id?: string;
  onClick?: () => void;
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  className = '',
  maxDegree = 8,
  scale = 1.025,
  magneticPull = true,
  magneticStrength = 10,
  glowAccent = 'blue',
  id,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState<string>(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale3d(1, 1, 1)'
  );
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({
    opacity: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 80%)'
  });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const glowColorMap = {
    blue: 'rgba(59, 130, 246, 0.25)',
    emerald: 'rgba(16, 185, 129, 0.25)',
    purple: 'rgba(168, 85, 247, 0.25)',
    amber: 'rgba(245, 158, 11, 0.25)'
  };

  const activeGlowColor = glowColorMap[glowAccent] || glowColorMap.blue;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normX = (x - centerX) / centerX; // -1 to 1
    const normY = (y - centerY) / centerY; // -1 to 1

    const rotateX = normY * -maxDegree;
    const rotateY = normX * maxDegree;

    // Magnetic pull displacement toward cursor
    const translateX = magneticPull ? normX * magneticStrength : 0;
    const translateY = magneticPull ? normY * magneticStrength : 0;
    const translateZ = 16; // Elevation push forward in 3D perspective

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, ${translateZ}px) scale3d(${scale}, ${scale}, ${scale})`
    );

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlowPos({ x: glareX, y: glareY });

    setGlareStyle({
      opacity: 0.2,
      background: `radial-gradient(circle at ${glareX.toFixed(1)}% ${glareY.toFixed(1)}%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 65%)`
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px) scale3d(1, 1, 1)');
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      id={id}
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group transition-all duration-300 ease-out transform-gpu cursor-pointer rounded-3xl ${className}`}
      style={{ transform: transformStyle, transformStyle: 'preserve-3d' }}
    >
      {/* Magnetic Outer Ambient Glassmorphic Glow Aura */}
      <div
        className="pointer-events-none absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl z-0"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${activeGlowColor} 0%, transparent 70%)`
        }}
      />

      {/* Surface Glare Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl z-30 transition-opacity duration-300 mix-blend-overlay"
        style={glareStyle}
      />

      {/* Card Content Wrapper with Glassmorphic Elevation */}
      <div className={`relative z-10 h-full w-full rounded-3xl transition-all duration-300 ${
        isHovered
          ? 'shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/20 backdrop-blur-2xl ring-1 ring-blue-500/30 dark:ring-blue-400/30'
          : 'shadow-xl backdrop-blur-md'
      }`}>
        {children}
      </div>
    </div>
  );
};

