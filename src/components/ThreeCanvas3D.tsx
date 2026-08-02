import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface ThreeCanvas3DProps {
  interactive?: boolean;
  className?: string;
}

export const ThreeCanvas3D: React.FC<ThreeCanvas3DProps> = ({
  interactive = true,
  className = ''
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || window.innerWidth;
    const height = currentMount.clientHeight || 500;

    // 1. SCENE & CAMERA SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 12);

    // 2. RENDERER WITH HIGH-QUALITY SHADOWS & ANTIALIASING
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    currentMount.appendChild(renderer.domElement);

    const isDark = theme === 'dark';

    // COLOR PALETTE
    const primaryBlue = isDark ? 0x3b82f6 : 0x2563eb;
    const cyanGlow = isDark ? 0x38bdf8 : 0x0284c7;
    const accentPurple = isDark ? 0xa855f7 : 0x7c3aed;
    const emeraldStatus = isDark ? 0x10b981 : 0x059669;

    // MASTER ROOT GROUP
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // =========================================================================
    // HELPER: FLOATING TECH BADGE TEXTURE GENERATOR
    // =========================================================================
    const createBadgeTexture = (label: string, iconSymbol: string, colorHex: string): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 340;
      canvas.height = 100;
      const ctx = canvas.getContext('2d')!;

      // Rounded Badge Card
      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.95)';
      ctx.beginPath();
      ctx.roundRect(10, 10, 320, 80, 20);
      ctx.fill();

      // Glowing Border
      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 4;
      ctx.stroke();

      // Icon Circle
      ctx.beginPath();
      ctx.arc(52, 50, 22, 0, Math.PI * 2);
      ctx.fillStyle = colorHex;
      ctx.fill();

      // Icon Symbol
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(iconSymbol, 52, 50);

      // Label Text
      ctx.textAlign = 'left';
      ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
      ctx.font = 'bold 22px "Inter", sans-serif';
      ctx.fillText(label, 92, 50);

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 16;
      return texture;
    };

    // =========================================================================
    // 3. CENTRAL TECH MATRIX
    // =========================================================================
    const aiCoreMaster = new THREE.Group();
    aiCoreMaster.position.set(0, 0, 0);
    mainGroup.add(aiCoreMaster);

    // =========================================================================
    // 4. CLOUD / DATABASE SERVER MODULE (LEFT SIDE)
    // =========================================================================
    const serverStack = new THREE.Group();
    serverStack.position.set(-4.5, -0.3, 0);
    mainGroup.add(serverStack);

    for (let i = 0; i < 3; i++) {
      const dbGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.5, 32);
      const dbMat = new THREE.MeshPhysicalMaterial({
        color: i === 1 ? accentPurple : primaryBlue,
        metalness: 0.9,
        roughness: 0.15,
        clearcoat: 0.8,
      });
      const dbDisk = new THREE.Mesh(dbGeo, dbMat);
      dbDisk.position.y = i * 0.7;
      serverStack.add(dbDisk);

      // Glowing Fiber Optic Activity Ring
      const ringGeo = new THREE.TorusGeometry(1.23, 0.03, 12, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i === 2 ? emeraldStatus : cyanGlow,
      });
      const statusRing = new THREE.Mesh(ringGeo, ringMat);
      statusRing.rotation.x = Math.PI / 2;
      statusRing.position.y = i * 0.7;
      serverStack.add(statusRing);
    }

    // =========================================================================
    // 5. HOLOGRAPHIC DATA NODE MATRIX (RIGHT SIDE)
    // =========================================================================
    const dataNodeGroup = new THREE.Group();
    dataNodeGroup.position.set(4.5, -0.2, 0);
    mainGroup.add(dataNodeGroup);

    const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: cyanGlow,
      wireframe: true,
      emissive: cyanGlow,
      emissiveIntensity: 0.6,
    });
    const outerWireCube = new THREE.Mesh(cubeGeo, cubeMat);
    dataNodeGroup.add(outerWireCube);

    const innerSolidCubeGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const innerSolidCubeMat = new THREE.MeshPhysicalMaterial({
      color: primaryBlue,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 1.0,
      emissive: primaryBlue,
      emissiveIntensity: 0.4,
    });
    const innerSolidCube = new THREE.Mesh(innerSolidCubeGeo, innerSolidCubeMat);
    dataNodeGroup.add(innerSolidCube);

    // Orbital mini data particles around right node
    const miniOrbGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const miniOrbMat = new THREE.MeshBasicMaterial({ color: emeraldStatus });
    const miniOrbs: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const orb = new THREE.Mesh(miniOrbGeo, miniOrbMat);
      dataNodeGroup.add(orb);
      miniOrbs.push(orb);
    }

    // =========================================================================
    // 6. FLOATING INTERACTIVE TECH BADGES
    // =========================================================================
    const badgesGroup = new THREE.Group();
    mainGroup.add(badgesGroup);

    const badgeData = [
      { label: 'React / Vite', icon: '⚛', color: '#38bdf8', pos: [-3.6, 2.6, 1.2] },
      { label: 'Gemini 2.5 AI', icon: '✦', color: '#a855f7', pos: [3.6, 2.6, 1.2] },
      { label: 'Spring Boot', icon: '🌱', color: '#10b981', pos: [-3.6, -2.4, 1.2] },
      { label: '3D & WebGL', icon: '❖', color: '#60a5fa', pos: [3.6, -2.4, 1.2] },
    ];

    const badgeMeshes: THREE.Mesh[] = [];

    badgeData.forEach((b) => {
      const tex = createBadgeTexture(b.label, b.icon, b.color);
      const badgeGeo = new THREE.PlaneGeometry(2.6, 0.8);
      const badgeMat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        side: THREE.DoubleSide,
      });
      const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
      badgeMesh.position.set(b.pos[0], b.pos[1], b.pos[2]);
      badgesGroup.add(badgeMesh);
      badgeMeshes.push(badgeMesh);
    });

    // =========================================================================
    // 7. AMBIENT DATA PARTICLES FIELD
    // =========================================================================
    const particleCount = 320;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 35;
      particlePositions[i + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i + 2] = (Math.random() - 0.5) * 30;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.13,
      color: primaryBlue,
      transparent: true,
      opacity: 0.75,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // =========================================================================
    // 8. PROFESSIONAL STUDIO LIGHTING SETUP
    // =========================================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.2 : 1.5);
    scene.add(ambientLight);

    // Key Light (Cool Blue Spot from Top-Right)
    const keyLight = new THREE.DirectionalLight(primaryBlue, 4.0);
    keyLight.position.set(8, 12, 10);
    scene.add(keyLight);

    // Fill Light (Purple Rim Light from Bottom-Left)
    const rimLight = new THREE.PointLight(accentPurple, 4.5, 30);
    rimLight.position.set(-10, -6, 5);
    scene.add(rimLight);

    // Center Glowing Point Light
    const centerPointLight = new THREE.PointLight(cyanGlow, 4, 25);
    centerPointLight.position.set(0, 0, 2);
    scene.add(centerPointLight);

    // =========================================================================
    // 9. ANIMATION & MOUSE INTERACTION LOOP
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0008;
      mouseY = (e.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight || 500;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Mouse Parallax Damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.15 + targetX * 1.8;
      mainGroup.rotation.x = Math.cos(elapsedTime * 0.25) * 0.08 + targetY * 1.5;

      // Rotate Quantum AI Core
      aiCoreMaster.rotation.y = elapsedTime * 0.4;
      aiCoreMaster.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      // Rotate Server Stack Disks
      serverStack.rotation.y = -elapsedTime * 0.3;
      serverStack.position.y = -0.3 + Math.cos(elapsedTime * 1.2) * 0.12;

      // Rotate Data Node Hologram
      outerWireCube.rotation.x = elapsedTime * 0.5;
      outerWireCube.rotation.y = elapsedTime * 0.7;
      innerSolidCube.rotation.x = -elapsedTime * 0.8;
      innerSolidCube.rotation.z = elapsedTime * 0.6;

      miniOrbs.forEach((orb, idx) => {
        const angle = elapsedTime * 2 + (idx * Math.PI) / 2;
        orb.position.set(Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, 0);
      });

      // Floating Badges Sway & Facing Camera
      badgeMeshes.forEach((mesh, idx) => {
        mesh.position.y = badgeData[idx].pos[1] + Math.sin(elapsedTime * 1.5 + idx) * 0.12;
        mesh.lookAt(camera.position);
      });

      // Slowly rotate particle field
      particleSystem.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive, theme]);

  return (
    <div ref={mountRef} className={`relative w-full h-full min-h-[460px] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm rounded-3xl">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};
