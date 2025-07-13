import React, { useEffect, useState, useCallback } from 'react';

const DynamicCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; opacity: number }>>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  // Calculate velocity for movement effects
  useEffect(() => {
    const newVelocity = {
      x: position.x - lastPosition.x,
      y: position.y - lastPosition.y
    };
    setVelocity(newVelocity);
    setLastPosition(position);
  }, [position, lastPosition]);

  // Handle scroll detection to prevent trail during scroll
  useEffect(() => {
    let scrollTimeout: number;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Update trail effect (disabled during scrolling)
  // useEffect(() => {
  //   if (isScrolling) return;

  //   const updateTrail = () => {
  //     setTrail(prevTrail => {
  //       const newTrail = [
  //         { x: cursorPosition.x, y: cursorPosition.y, opacity: 0.6 },
  //         ...prevTrail.slice(0, 6).map((point, index) => ({
  //           ...point,
  //           opacity: point.opacity * 0.8
  //         }))
  //       ];
  //       return newTrail.filter(point => point.opacity > 0.05);
  //     });
  //   };

  //   const trailInterval = setInterval(updateTrail, 32); // 30fps for trail
  //   return () => clearInterval(trailInterval);
  // }, [cursorPosition, isScrolling]);

  // Smooth cursor following
  useEffect(() => {
    let animationFrame: number;

    const updateCursor = () => {
      setCursorPosition(prev => {
        const ease = isClicking ? 0.25 : 0.12;
        return {
          x: prev.x + (position.x - prev.x) * ease,
          y: prev.y + (position.y - prev.y) * ease
        };
      });
      animationFrame = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.tagName === 'INPUT' ||
                           target.tagName === 'TEXTAREA' ||
                           (('type' in target && (target as HTMLInputElement | HTMLButtonElement).type === 'button')) ||
                           (('type' in target && (target as HTMLInputElement | HTMLButtonElement).type === 'submit')) ||
                           (('role' in target && (target as HTMLElement).getAttribute('role') === 'button')) ||
                           target.classList.contains('cursor-pointer') ||
                           getComputedStyle(target).cursor === 'pointer';
      setIsHovering(isInteractive);
    };

    // Check if device supports hover (not mobile)
    if (window.matchMedia('(hover: hover)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseover', handleMouseOver);
      updateCursor();
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [position.x, position.y, isClicking]);

  // Calculate movement-based effects with enhanced scaling
  const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
  const maxSpeed = 15;
  const normalizedSpeed = Math.min(speed / maxSpeed, 1);
  
  // Movement direction
  const angle = Math.atan2(velocity.y, velocity.x);
  
  // Enhanced movement effects - more dramatic scaling
  const baseSize = isHovering ? 50 : 35;
  const clickScale = isClicking ? 0.7 : 1;
  
  // More dramatic speed-based scaling reduction
  const speedScale = 1 - (normalizedSpeed * 0.6); // Reduces up to 60% when moving fast
  
  // Enhanced deformation based on movement
  const stretchX = 1 + Math.abs(velocity.x) * 0.04;
  const stretchY = 1 + Math.abs(velocity.y) * 0.04;
  
  // More dramatic radius reduction for movement effect
  const radiusReduction = normalizedSpeed * 25; // Increased from 15 to 25
  const baseRadius = baseSize / 2;
  
  // Calculate which sides to reduce based on movement direction
  const rightReduction = velocity.x > 0 ? radiusReduction * Math.abs(Math.cos(angle)) : 0;
  const leftReduction = velocity.x < 0 ? radiusReduction * Math.abs(Math.cos(angle)) : 0;
  const topReduction = velocity.y < 0 ? radiusReduction * Math.abs(Math.sin(angle)) : 0;
  const bottomReduction = velocity.y > 0 ? radiusReduction * Math.abs(Math.sin(angle)) : 0;
  
  const topLeftRadius = Math.max(2, baseRadius - topReduction - leftReduction);
  const topRightRadius = Math.max(2, baseRadius - topReduction - rightReduction);
  const bottomLeftRadius = Math.max(2, baseRadius - bottomReduction - leftReduction);
  const bottomRightRadius = Math.max(2, baseRadius - bottomReduction - rightReduction);

  // Hide cursor on mobile devices
  if (!window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <>
      {/* Trail Effect - Only when not scrolling */}
      {!isScrolling && trail.map((point, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-40"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            width: '12px',
            height: '12px',
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: point.opacity * 0.4,
            mixBlendMode: 'difference',
            transform: 'translate3d(0, 0, 0)',
          }}
        />
      ))}

      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorPosition.x - (baseSize * stretchX * clickScale * speedScale) / 2,
          top: cursorPosition.y - (baseSize * stretchY * clickScale * speedScale) / 2,
          width: `${baseSize * stretchX * clickScale * speedScale}px`,
          height: `${baseSize * stretchY * clickScale * speedScale}px`,
          backgroundColor: isHovering ? 'transparent' : 'white',
          border: isHovering ? '3px solid white' : isClicking ? '2px solid white' : 'none',
          borderRadius: `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px`,
          mixBlendMode: 'difference',
          transform: 'translate3d(0, 0, 0)',
          transition: `
            background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            border 0.2s cubic-bezier(0.4, 0, 0.2, 1)
          `,
          boxShadow: isHovering 
            ? '0 0 20px rgba(255, 255, 255, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1)' 
            : isClicking 
            ? '0 0 30px rgba(255, 255, 255, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.2)'
            : normalizedSpeed > 0.3 
            ? '0 0 15px rgba(255, 255, 255, 0.3)'
            : 'none',
          zIndex: 9999,
        }}
      >
        {/* Inner glow effect */}
        {(isHovering || isClicking) && (
          <div
            className="absolute inset-1 rounded-full"
            style={{
              background: isClicking 
                ? 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
              animation: isClicking 
                ? 'pulse 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
                : 'none',
            }}
          />
        )}
        
        {/* Ripple effect on click */}
        {isClicking && (
          <div
            className="absolute inset-0 rounded-full border-2 border-white"
            style={{
              animation: 'ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              animationFillMode: 'forwards',
              zIndex: 9999,
            }}
          />
        )}
      </div>

      {/* Outer Ring for Hover Effect */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-49"
          style={{
            left: cursorPosition.x - 35,
            top: cursorPosition.y - 35,
            width: '70px',
            height: '70px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            mixBlendMode: 'difference',
            transform: 'translate3d(0, 0, 0)',
            animation: 'expandRing 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 9998,
          }}
        />
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        
        @keyframes ripple {
          0% { 
            transform: scale(1); 
            opacity: 1; 
          }
          100% { 
            transform: scale(2.8); 
            opacity: 0; 
          }
        }
        
        @keyframes expandRing {
          0% { 
            transform: scale(0.3); 
            opacity: 0; 
          }
          100% { 
            transform: scale(1); 
            opacity: 1; 
          }
        }
      `}</style>
    </>
  );
};

export default DynamicCursor;