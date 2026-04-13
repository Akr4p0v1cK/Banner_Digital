"use client";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef } from "react";

export default function GlobalCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Track scroll over the entire page instead of a specific container
  const { scrollYProgress } = useScroll();

  const renderFrame = (img: HTMLImageElement) => {
    if (!canvasRef.current || !img.complete || img.naturalWidth === 0) return;
    const canvas = canvasRef.current;
    
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Prevent division by zero
    if (img.width === 0 || img.height === 0 || canvas.height === 0) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, drawX, drawY;
    
    // Configura o preenchimento (object-contain com folga ou scale)
    // Para que não fique "tão gigante", calculamos a proporção para caber na tela
    const scale = Math.min(canvas.width / img.width, canvas.height / img.height) * 1.1; 
    
    drawWidth = img.width * scale;
    drawHeight = img.height * scale;
    drawX = (canvas.width - drawWidth) / 2;
    drawY = (canvas.height - drawHeight) / 2;
    
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  // Preload frames for the scroll-bound canvas sequence
  useEffect(() => {
    const frameCount = 80;
    const loadedImages: HTMLImageElement[] = new Array(frameCount);
    
    // Load first frame immediately
    const firstImg = new window.Image();
    firstImg.src = `/heroslide/Whisk_ywz2czmkzzn4ewy30inxmmytujykrtl5ydoz0yn_000.jpg`;
    firstImg.onload = () => {
      renderFrame(firstImg);
      
      // Load rest progressively
      let currentIndex = 1;
      const loadNextBatch = () => {
        if (currentIndex >= frameCount) {
          imagesRef.current = loadedImages;
          return;
        }
        
        const batchSize = Math.min(5, frameCount - currentIndex);
        for (let i = 0; i < batchSize; i++) {
          const imgIndex = currentIndex + i;
          const img = new window.Image();
          const numStr = imgIndex.toString().padStart(3, '0');
          img.src = `/heroslide/Whisk_ywz2czmkzzn4ewy30inxmmytujykrtl5ydoz0yn_${numStr}.jpg`;
          loadedImages[imgIndex] = img;
        }
        currentIndex += batchSize;
        
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
          window.requestIdleCallback(loadNextBatch);
        } else {
          setTimeout(loadNextBatch, 50);
        }
      };

      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(loadNextBatch);
      } else {
        setTimeout(loadNextBatch, 50);
      }
    };
    loadedImages[0] = firstImg;
    imagesRef.current = loadedImages;
     
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const images = imagesRef.current;
    if (images.length === 0) return;
    
    const frameIndex = Math.min(
      images.length - 1,
      Math.floor(latest * images.length)
    );
    
    if (images[frameIndex] && images[frameIndex].complete && images[frameIndex].naturalWidth > 0) {
      requestAnimationFrame(() => renderFrame(images[frameIndex]));
    }
  });

  useEffect(() => {
    const handleResize = () => {
      const images = imagesRef.current;
      if (images.length > 0 && canvasRef.current) {
        const frameIndex = Math.min(
          images.length - 1,
          Math.floor(scrollYProgress.get() * images.length)
        );
        if (images[frameIndex] && images[frameIndex].complete) {
          renderFrame(images[frameIndex]);
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollYProgress]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-lighten"
      />
      {/* Camada de escurecimento e desfoque */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] z-10"></div>
    </div>
  );
}
