'use client';

import * as React from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

export function HeroScene() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  React.useEffect(() => {
    if (!isMounted || prefersReducedMotion || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch {
      return; // WebGL not supported
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const isDark = (theme === 'system' ? resolvedTheme : theme) !== 'light';

    // Lighting
    const ambientLight = new THREE.AmbientLight(isDark ? 0x1a2e22 : 0xf0fdf4, 2.5);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x00e599, isDark ? 4.0 : 2.5);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, isDark ? 2.5 : 1.5);
    fillLight.position.set(-5, -3, -2);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0x10b981, isDark ? 3.0 : 2.0, 10);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    // Group for all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: Floating Modern Tablet/Screen representing Web & UI
    const screenGeometry = new THREE.BoxGeometry(2.4, 1.5, 0.08);
    const screenMaterial = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x0f172a : 0xf8fafc,
      metalness: 0.85,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);
    mainGroup.add(screenMesh);

    // Screen Inner UI Display Plate
    const displayGeometry = new THREE.PlaneGeometry(2.2, 1.3);
    const displayMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x090a0c : 0xffffff,
    });
    const displayMesh = new THREE.Mesh(displayGeometry, displayMaterial);
    displayMesh.position.z = 0.045;
    screenMesh.add(displayMesh);

    // 2. Glowing Emerald Accent Torus (representing Digital Transformation / Motion)
    const ringGeometry = new THREE.TorusGeometry(1.8, 0.03, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x00e599,
      emissive: 0x00e599,
      emissiveIntensity: isDark ? 0.8 : 0.4,
      roughness: 0.1,
      metalness: 0.9,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // Secondary Outer Orbit Ring
    const ring2Geometry = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
      color: isDark ? 0x22c55e : 0x059669,
      wireframe: true,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2Mesh.rotation.y = Math.PI / 4;
    mainGroup.add(ring2Mesh);

    // 3. Floating Geometric UI Elements (representing Video Frames & Code Modules)
    const floatingObjects: THREE.Mesh[] = [];

    // Cube (Code / Engineering)
    const cubeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const cubeMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 0.5,
    });
    const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
    cubeMesh.position.set(1.9, 1.2, 0.5);
    mainGroup.add(cubeMesh);
    floatingObjects.push(cubeMesh);

    // Octahedron (AI Video / Multidisciplinary visual node)
    const octaGeo = new THREE.OctahedronGeometry(0.4, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(-1.8, -1.1, 0.8);
    mainGroup.add(octaMesh);
    floatingObjects.push(octaMesh);

    // Floating UI Capsule (Digital UX)
    const capsuleGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.7, 16);
    const capsuleMat = new THREE.MeshStandardMaterial({
      color: 0x00e599,
      metalness: 0.8,
      roughness: 0.2,
    });
    const capsuleMesh = new THREE.Mesh(capsuleGeo, capsuleMat);
    capsuleMesh.position.set(-1.9, 1.1, -0.4);
    capsuleMesh.rotation.z = Math.PI / 4;
    mainGroup.add(capsuleMesh);
    floatingObjects.push(capsuleMesh);

    // Mouse / Cursor interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width;
      const y = (e.clientY - rect.top) / height;
      mouseX = (x - 0.5) * 2;
      mouseY = (y - 0.5) * 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const x = (e.touches[0].clientX - rect.left) / width;
        const y = (e.touches[0].clientY - rect.top) / height;
        mouseX = (x - 0.5) * 1.5;
        mouseY = (y - 0.5) * 1.5;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.6 + Math.sin(elapsedTime * 0.5) * 0.1;
      mainGroup.rotation.x = -targetY * 0.4 + Math.cos(elapsedTime * 0.5) * 0.08;

      // Rotate orbit rings
      ringMesh.rotation.z = elapsedTime * 0.3;
      ring2Mesh.rotation.x = elapsedTime * 0.2;

      // Floating objects subtle bobbing
      floatingObjects.forEach((obj, idx) => {
        obj.rotation.x += 0.01 * (idx + 1);
        obj.rotation.y += 0.015 * (idx + 1);
        obj.position.y += Math.sin(elapsedTime * 2 + idx) * 0.002;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isMounted, theme, resolvedTheme, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-64 h-64 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 backdrop-blur-xl flex items-center justify-center">
          <div className="text-center p-6">
            <span className="text-3xl font-bold tracking-tight text-neutral-100">
              dammy<span className="text-emerald-400">ux</span>
            </span>
            <p className="text-xs text-neutral-400 mt-2">Web & AI Video Studio</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] sm:h-[480px] lg:h-[550px] relative pointer-events-auto cursor-grab active:cursor-grabbing flex items-center justify-center"
      aria-label="Interactive 3D representation of dammyux multidisciplinary creative disciplines"
    />
  );
}
