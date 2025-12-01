import React, { useState, useEffect } from 'react';
import { 
  Microscope, 
  Cpu, 
  Activity, 
  Database, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  TrendingUp,
  BarChart3,
  Zap,
  BookOpen,
  Disc,
  Award
} from 'lucide-react';

// Custom Card Components for clean layout
const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-900 border border-slate-700 rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-900/50 text-blue-200 border-blue-700",
    amber: "bg-amber-900/50 text-amber-200 border-amber-700", // Litho yellow light theme
    emerald: "bg-emerald-900/50 text-emerald-200 border-emerald-700",
    purple: "bg-purple-900/50 text-purple-200 border-purple-700",
  };
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium border ${colors[color]} mr-2 mb-2 inline-block`}>
      {children}
    </span>
  );
};

// SVG Wafer Map Component (Photolithography Specific)
const WaferVisual = () => {
  // Generate dies for the wafer map
  const gridSize = 12;
  const dies = [];
  const centerX = gridSize / 2;
  const centerY = gridSize / 2;
  const radius = gridSize / 2;

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      // Check if die is within wafer circle
      const dist = Math.sqrt(Math.pow(x - centerX + 0.5, 2) + Math.pow(y - centerY + 0.5, 2));
      if (dist < radius - 0.5) {
        // Randomly assign some as "defects" (red) to simulate the analysis aspect
        const isDefect = Math.random() > 0.94;
        dies.push({ x, y, isDefect });
      }
    }
  }

  return (
    <div className="w-full h-64 flex flex-col items-center justify-center relative">
      <div className="relative w-48 h-48 group">
        {/* Wafer Edge */}
        <div className="absolute inset-0 rounded-full border-2 border-slate-600 bg-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.1)] overflow-hidden">
          
          {/* Grid of Dies */}
          <div className="absolute inset-0 grid grid-cols-12 gap-[1px] p-1">
             {/* We use a flattened mapping here for visual simplicity in grid */}
             {Array.from({ length: 144 }).map((_, i) => {
               const y = Math.floor(i / 12);
               const x = i % 12;
               const dist = Math.sqrt(Math.pow(x - centerX + 0.5, 2) + Math.pow(y - centerY + 0.5, 2));
               
               // Only render if inside circle
               if (dist >= radius - 0.5) return <div key={i} className="bg-transparent" />;

               const isDefect = (x * y * 7) % 23 === 0; // Deterministic pseudo-random for defects

               return (
                 <div 
                   key={i} 
                   className={`
                     transition-all duration-700 hover:opacity-100
                     ${isDefect 
                       ? 'bg-red-500/80 animate-pulse' 
                       : 'bg-emerald-500/40 hover:bg-emerald-400 group-hover:bg-emerald-500/60'}
                   `}
                 ></div>
               );
             })}
          </div>

          {/* Scanner Bar Animation (Litho Exposure) */}
          <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-amber-400/0 via-amber-400/20 to-amber-400/0 animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>
        </div>

        {/* Flat/Notch (Orientation) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-800 z-10 border-t border-slate-600"></div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: -20%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 120%; opacity: 0; }
        }
      `}</style>
      
      {/* Legend */}
      <div className="flex gap-4 mt-4 text-[10px] font-mono uppercase tracking-wider text-slate-500">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-emerald-500/60 rounded-[1px]"></div> Good Die
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500/80 rounded-[1px]"></div> Defect
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-amber-400/20 rounded-[1px]"></div> Scan Path
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [viewMode, setViewMode] = useState('narrative'); // 'narrative' or 'process'

  const stages = [
    {
      id: 1,
      title: "Foundation: BS Electrical Engineering",
      role: "Student",
      icon: <BookOpen className="w-6 h-6" />,
      color: "blue",
      narrative: "Built a strong foundation in circuits, device physics, and semiconductor fundamentals.",
      processTranslation: "Established the theoretical 'Process Baseline'. Learned the physics governing electron movement and material properties essential for understanding lithography interactions.",
      skills: ["Device Physics", "Circuit Theory", "Semiconductors"],
      kpi: "Knowledge Acquisition",
      keyCompetency: "Fundamental Physics",
      lithoRelevance: "This foundational knowledge is essential for understanding how photolithography CD (Critical Dimension) variations directly impact transistor performance and reliability."
    },
    {
      id: 2,
      title: "The Spark: Delta Electronics Internship",
      role: "Physical Failure Analysis Intern",
      icon: <Microscope className="w-6 h-6" />,
      color: "amber",
      narrative: "Analyzed board-level failures in a high-volume manufacturing environment. Correlated electrical symptoms with physical defects.",
      processTranslation: "Root Cause Analysis (RCA) & Yield Learning. Operated in a Fab-style workflow detecting excursions. Applied early SPC concepts by tracking batch-to-batch variation and identifying outliers.",
      skills: ["Root Cause Analysis", "Defect Correlation", "Trend Identification", "High-Volume Mfg"],
      kpi: "Defect Reduction",
      keyCompetency: "Systematic Root Cause Analysis",
      lithoRelevance: "This role provided hands-on experience with systematic failure analysis, mirroring the defect troubleshooting and yield excursion response required in a photolithography module."
    },
    {
      id: 3,
      title: "The Toolset: Dish Networks",
      role: "Backend Automation Engineer",
      icon: <Database className="w-6 h-6" />,
      color: "purple",
      narrative: "Automated repetitive analysis tasks and processed large log files. Built dashboards to visualize data.",
      processTranslation: "Fault Detection & Classification (FDC) Logic. Developed the ability to handle massive datasets—critical for modern Photolithography where scanners generate terabytes of log data.",
      skills: ["Python Scripting", "Big Data Handling", "Automation", "Dashboarding"],
      kpi: "Efficiency Improvement",
      keyCompetency: "Big Data Automation",
      lithoRelevance: "This experience built my proficiency in handling massive datasets with Python, directly applicable to analyzing scanner logs and metrology data to maintain tight process control."
    },
    {
      id: 4,
      title: "Technical Depth: Master's Degree",
      role: "Graduate Student",
      icon: <Cpu className="w-6 h-6" />,
      color: "emerald",
      narrative: "Deepened knowledge in process flow, lithography basics, and circuit design. Analyzed large simulation reports for anomalies.",
      processTranslation: "Advanced Process Control (APC) Theory. Synthesized data skills with process physics. Used Python/Excel to determine process windows and analyze distribution results.",
      skills: ["Lithography Basics", "Process Integration", "Simulation Analysis", "Distribution Analysis"],
      kpi: "Process Capability",
      keyCompetency: "Applied Process Theory",
      lithoRelevance: "My graduate studies connected process theory with data analysis, enabling me to use computational tools to define process windows and characterize variability—core skills for a lithography engineer."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 p-1.5 rounded text-slate-900">
              <Layers size={20} />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Silicon<span className="text-amber-500"> Journey</span></span>
          </div>
          {/* Target removed as requested */}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Hero Section */}
        <section className="mb-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-mono text-sm mb-4">
              <Activity size={16} />
              <span>STATUS: READY FOR FAB</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Data</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Process Physics</span>.
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              My journey hasn't just been about learning engineering; it's been about mastering the loop of 
              <span className="text-white font-semibold"> Analysis ➔ Root Cause ➔ Action</span>. 
              I am applying for this role because I don't just see wafers; I see data distributions waiting to be optimized.
            </p>
            <div className="flex gap-4">
               <button 
                onClick={() => document.getElementById('journey-map').scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
              >
                Inspect Journey <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Abstract Visualization */}
          <div className="relative h-64 md:h-80 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-end overflow-hidden shadow-2xl shadow-amber-900/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
            
            <div className="z-10 relative flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <span className="text-sm font-mono text-amber-400 uppercase tracking-widest">Wafer Exposure Map</span>
                <span className="text-[10px] text-slate-500 font-mono border border-slate-700 px-2 py-0.5 rounded">BATCH: 24-B</span>
              </div>
              
              <WaferVisual />
            </div>
          </div>
        </section>

        {/* The Journey Map */}
        <section id="journey-map" className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Timeline Selection */}
          <div className="lg:col-span-4 space-y-4">
             <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Process Flow</h3>
                <span className="text-xs text-slate-500">SELECT STEP</span>
             </div>
             
             <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800"></div>

                {stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(index)}
                    className={`relative w-full text-left group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 border ${
                      activeStage === index 
                        ? 'bg-slate-800 border-amber-500/50 shadow-lg shadow-amber-900/20' 
                        : 'bg-transparent border-transparent hover:bg-slate-900/50'
                    }`}
                  >
                    <div className={`z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                      activeStage === index 
                        ? 'bg-slate-900 border-amber-500 text-amber-500' 
                        : 'bg-slate-900 border-slate-700 text-slate-600 group-hover:border-slate-500'
                    }`}>
                      {stage.icon}
                    </div>
                    <div>
                      <h4 className={`font-bold transition-colors ${activeStage === index ? 'text-white' : 'text-slate-400'}`}>
                        {stage.title}
                      </h4>
                      <p className="text-sm text-slate-500 mt-1">{stage.role}</p>
                    </div>
                  </button>
                ))}
             </div>
          </div>

          {/* Right Column: Detail View with Toggle */}
          <div className="lg:col-span-8">
            <div className="h-full bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-${stages[activeStage].color}-500/5 blur-[100px] rounded-full`}></div>

              {/* Toggle Switch */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{stages[activeStage].title}</h2>
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-amber-400" />
                      <span>KPI: {stages[activeStage].kpi}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={14} className="text-sky-400" />
                      <span>Competency: {stages[activeStage].keyCompetency}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-1 rounded-lg border border-slate-800 flex text-sm font-medium">
                  <button 
                    onClick={() => setViewMode('narrative')}
                    className={`px-4 py-2 rounded-md transition-all ${
                      viewMode === 'narrative' 
                        ? 'bg-slate-800 text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    My Experience
                  </button>
                  <button 
                    onClick={() => setViewMode('process')}
                    className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${
                      viewMode === 'process' 
                        ? 'bg-amber-600 text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                     <Microscope size={14} />
                     Litho Lens
                  </button>
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="relative min-h-[200px] z-10">
                <div className={`transition-opacity duration-300 ${viewMode === 'narrative' ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                   <p className="text-lg text-slate-300 leading-relaxed mb-6">
                     {stages[activeStage].narrative}
                   </p>
                   <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                     <h5 className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider">What I did</h5>
                     <div className="flex flex-wrap">
                        {stages[activeStage].skills.map((skill, i) => (
                          <Badge key={i} color={stages[activeStage].color}>{skill}</Badge>
                        ))}
                     </div>
                   </div>
                </div>

                <div className={`transition-opacity duration-300 ${viewMode === 'process' ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                   <p className="text-lg text-amber-100 leading-relaxed mb-6">
                     {stages[activeStage].processTranslation}
                   </p>
                   <div className="p-4 bg-amber-900/10 rounded-lg border border-amber-900/30">
                     <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={16} className="text-amber-500" />
                        <h5 className="text-sm font-bold text-amber-500 uppercase tracking-wider">Relevance to Photolithography</h5>
                     </div>
                     <p className="text-sm text-slate-400">
                       {stages[activeStage].lithoRelevance}
                     </p>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Conclusion / CTA */}
        <section className="mt-20 border-t border-slate-800 pt-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-purple-500"></div>
             
             <h2 className="text-3xl font-bold text-white mb-6">Why Process Engineering?</h2>
             <div className="max-w-3xl mx-auto space-y-6 text-slate-300 text-lg">
                <p>
                  I realized a pattern: regardless of the domain, I always enjoyed the part where I <span className="text-amber-400">analyzed variation</span>, found the <span className="text-amber-400">root cause</span>, and converted raw data into <span className="text-amber-400">engineering decisions</span>.
                </p>
                <p>
                  I'm not just an electrical engineer; I am an engineer who understands that 
                  <span className="italic text-white"> process stability is the product</span>.
                </p>
             </div>

             <div className="mt-10 flex justify-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 text-green-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-sm font-medium text-slate-400">Data Ready</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 text-green-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-sm font-medium text-slate-400">Physics Ready</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-600 text-green-400">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-sm font-medium text-slate-400">Fab Ready</span>
                </div>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Journey;