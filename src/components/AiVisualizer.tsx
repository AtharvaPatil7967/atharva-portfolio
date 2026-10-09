'use client';

import { useEffect, useRef, useState } from 'react';
import { Cpu, Activity, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
  color: string;
}

export default function AiVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeNode, setActiveNode] = useState<string>('Agentic Pipeline');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const initialNodes: Node[] = [
      {
        id: '1',
        label: 'RFM Analytics',
        category: 'Clustering Engine',
        x: width * 0.2,
        y: height * 0.28,
        vx: 0.18,
        vy: 0.12,
        radius: 4,
        connections: [1, 2],
        color: '#38bdf8',
      },
      {
        id: '2',
        label: 'Silhouette 0.80',
        category: 'GMM Model',
        x: width * 0.42,
        y: height * 0.18,
        vx: -0.15,
        vy: 0.14,
        radius: 5,
        connections: [0, 3],
        color: '#0284c7',
      },
      {
        id: '3',
        label: '28-Day Forecast',
        category: 'Time Series',
        x: width * 0.25,
        y: height * 0.65,
        vx: 0.14,
        vy: -0.16,
        radius: 4.5,
        connections: [0, 4],
        color: '#10b981',
      },
      {
        id: '4',
        label: 'Multi-Agent FARE',
        category: 'Financial AI',
        x: width * 0.65,
        y: height * 0.32,
        vx: -0.12,
        vy: -0.18,
        radius: 6,
        connections: [1, 5, 6],
        color: '#6366f1',
      },
      {
        id: '5',
        label: 'Vision CNN',
        category: 'Crop Diagnostics',
        x: width * 0.48,
        y: height * 0.72,
        vx: 0.16,
        vy: -0.12,
        radius: 4.5,
        connections: [2, 3, 5],
        color: '#34d399',
      },
      {
        id: '6',
        label: 'Semantic RAG',
        category: 'GenAI Architecture',
        x: width * 0.82,
        y: height * 0.58,
        vx: -0.15,
        vy: 0.15,
        radius: 5,
        connections: [3, 4],
        color: '#818cf8',
      },
      {
        id: '7',
        label: 'Numerical Verifier',
        category: 'Symbolic AI',
        x: width * 0.76,
        y: height * 0.2,
        vx: 0.12,
        vy: 0.16,
        radius: 4.5,
        connections: [3],
        color: '#38bdf8',
      },
    ];

    let pulseTime = 0;

    const render = () => {
      pulseTime += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < initialNodes.length; i++) {
        const nodeA = initialNodes[i];
        for (const targetIdx of nodeA.connections) {
          const nodeB = initialNodes[targetIdx];
          if (!nodeB) continue;

          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);

          const gradient = ctx.createLinearGradient(
            nodeA.x,
            nodeA.y,
            nodeB.x,
            nodeB.y
          );
          gradient.addColorStop(0, 'rgba(56, 189, 248, 0.18)');
          gradient.addColorStop(0.5, 'rgba(99, 102, 241, 0.28)');
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0.18)');

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Particle pulse traversing the edge
          const t = (Math.sin(pulseTime + i) + 1) / 2;
          const px = nodeA.x + (nodeB.x - nodeA.x) * t;
          const py = nodeA.y + (nodeB.y - nodeA.y) * t;

          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw and update nodes
      for (let i = 0; i < initialNodes.length; i++) {
        const node = initialNodes[i];

        // Update physics
        node.x += node.vx;
        node.y += node.vy;

        // Bounce bounds with padding
        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        // Outer glow
        const glow = Math.sin(pulseTime * 2 + i) * 3 + 6;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + glow, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}15`;
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node label
        ctx.font = '10px ui-monospace, monospace';
        ctx.fillStyle = 'rgba(226, 232, 240, 0.85)';
        ctx.textAlign = 'left';
        ctx.fillText(node.label, node.x + 10, node.y + 3);

        ctx.font = '8px ui-monospace, monospace';
        ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
        ctx.fillText(node.category, node.x + 10, node.y + 13);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[380px] sm:h-[440px] rounded-2xl border border-white/[0.08] bg-[#090d16]/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/80"
    >
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="absolute top-0 inset-x-0 h-10 px-4 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-semibold">AI_SYSTEMS.ACTIVE</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-500">
          <span>LATENCY: 12ms</span>
          <span>GPU: ACCELERATED</span>
          <span className="text-sky-400">STATE: NOMINAL</span>
        </div>
      </div>

      {/* Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full pt-10"
        aria-label="Interactive AI and Data Science node orchestration graph"
      />

      {/* Bottom technical inspection badge */}
      <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 bg-[#0e1322]/90 border border-white/[0.08] rounded-xl p-3 flex flex-wrap items-center justify-between gap-2 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
              Multi-Agent &amp; ML Architecture
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              RFM Clustering • 28D Forecasting • FARE Research
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Model Metrics Live
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            PyTorch / TF
          </span>
        </div>
      </div>
    </div>
  );
}
