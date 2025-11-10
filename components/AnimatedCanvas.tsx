import React, { useRef, useEffect } from 'react';

// Brand colors
const PARTICLE_COLOR = '#5D6A5E';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const AnimatedCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // FIX: The error "Expected 1 arguments, but got 0." likely stems from calling useRef without an initial value. While technically valid, some tooling can misinterpret this. Initializing with null is a more robust pattern.
  const animationFrameId = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  const createParticle = (width: number, height: number): Particle => {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2, // Very slow speed
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 1 + 0.5, // Small radius
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const init = () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      const parentElement = canvas.parentElement;
      if (!parentElement) return;

      canvas.width = parentElement.clientWidth;
      canvas.height = parentElement.clientHeight;

      particlesRef.current = [];
      // Scale particle count with screen size for a consistent density
      const numParticles = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < numParticles; i++) {
        particlesRef.current.push(createParticle(canvas.width, canvas.height));
      }

      animate();
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const particles = particlesRef.current;
      
      // Apply a subtle blur for a softer "dust" effect
      ctx.filter = 'blur(0.5px)';

      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges to create a continuous loop
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.globalAlpha = 0.8; // Make particles slightly transparent
        ctx.fill();
      });
      
      // Reset canvas state
      ctx.globalAlpha = 1;
      ctx.filter = 'none';

      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        init();
      }, 100);
    };

    init();
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default AnimatedCanvas;
