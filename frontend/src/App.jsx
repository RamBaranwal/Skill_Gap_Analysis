import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Atom, Coffee, Database, GitBranch, Cpu, X, ChevronRight, Briefcase, IndianRupee, Trophy } from 'lucide-react';
import { roadmapStages, careerLevels, salaryExpectations } from './data/roadmapData';
import './index.css';

const IconMap = {
  Layout,
  Atom,
  Coffee,
  Database,
  GitBranch,
  Cpu
};

function App() {
  const [selectedStage, setSelectedStage] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Background ambient effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 max-w-7xl">
        <header className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"
          >
            Developer Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            An interactive career roadmap from absolute beginner to industry expert. 
            Click on any stage to explore the depth of knowledge, job prospects, and salary expectations.
          </motion.p>
        </header>

        {/* Global Career Levels */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-yellow-500" /> 
            <span>Career Milestones</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerLevels.map((level, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-colors"
              >
                <div className="text-cyan-400 font-semibold mb-2">{level.level}</div>
                <div className="text-slate-300 font-medium mb-4">{level.description}</div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-950 px-3 py-1.5 rounded-full">
                  Target: {level.outcome}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Roadmap Timeline */}
          <div className="flex-1 relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-slate-800 rounded-full transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {roadmapStages.map((stage, index) => {
                const Icon = IconMap[stage.icon] || Cpu;
                const isEven = index % 2 === 0;
                const isSelected = selectedStage?.id === stage.id;
                
                return (
                  <motion.div 
                    key={stage.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedStage(stage)}
                        className={`w-full max-w-md cursor-pointer group relative bg-slate-900/60 backdrop-blur-md border ${isSelected ? 'border-cyan-500' : 'border-slate-800'} rounded-3xl p-6 md:p-8 transition-all hover:shadow-2xl ${stage.shadowColor}`}
                      >
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">Stage {stage.id}</span>
                          <ChevronRight className={`w-5 h-5 text-slate-600 transition-transform ${isSelected ? 'rotate-90 text-cyan-500' : 'group-hover:translate-x-1'}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{stage.title}</h3>
                        <p className="text-slate-400 line-clamp-2 text-sm">
                          {Object.values(stage.details)[0]}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-8 md:static transform md:transform-none -translate-x-1/2 md:translate-x-0 z-10">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-slate-950 border-4 border-slate-900 shadow-xl relative`}>
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${stage.color} opacity-20 blur-md`}></div>
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center text-white shadow-inner relative z-10`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    {/* Empty Space for alignment */}
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Side Panel / Modal */}
      <AnimatePresence>
        {selectedStage && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStage(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800 z-50 p-6 md:p-10 overflow-y-auto shadow-2xl"
            >
              <button 
                onClick={() => setSelectedStage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mt-8">
                <span className="text-sm font-bold text-slate-500 tracking-widest uppercase block mb-2">Stage {selectedStage.id}</span>
                <h2 className={`text-4xl font-black mb-8 bg-gradient-to-r ${selectedStage.color} text-transparent bg-clip-text inline-block`}>
                  {selectedStage.title}
                </h2>

                {/* Depth Section */}
                <div className="space-y-8 mb-12">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
                    <Atom className="w-5 h-5 text-cyan-400" />
                    Depth Required
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(selectedStage.details).map(([key, value], idx) => (
                      <div key={idx} className="bg-slate-900/50 rounded-xl p-5 border border-slate-800/50">
                        <h4 className="text-cyan-300 font-semibold mb-2">{key}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Job Chances Section */}
                {selectedStage.jobChances.length > 0 && (
                  <div className="space-y-8 mb-12">
                    <h3 className="text-xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
                      <Briefcase className="w-5 h-5 text-emerald-400" />
                      Job Chances
                    </h3>
                    <div className="space-y-6">
                      {selectedStage.jobChances.map((job, idx) => {
                        const avg = (job.min + job.max) / 2;
                        return (
                          <div key={idx}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-slate-300">{job.role}</span>
                              <span className="text-sm font-bold text-emerald-400">{job.min}% - {job.max}%</span>
                            </div>
                            <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${avg}%` }}
                                transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                                className={`h-full rounded-full bg-gradient-to-r ${selectedStage.color}`}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Salary Expectations (Global reference) */}
                <div className="space-y-8">
                  <h3 className="text-xl font-bold flex items-center gap-2 border-b border-slate-800 pb-3">
                    <IndianRupee className="w-5 h-5 text-yellow-500" />
                    Salary Expectations (India)
                  </h3>
                  <div className="grid gap-4">
                    {salaryExpectations.map((salary, idx) => (
                      <div key={idx} className="bg-slate-900/40 rounded-xl p-4 border border-slate-800/50 flex flex-col gap-2">
                        <span className="font-semibold text-white">{salary.role}</span>
                        <div className="flex flex-wrap gap-2 text-sm">
                          {salary.intern && <span className="px-2 py-1 bg-slate-800 rounded-md text-slate-300">Intern: <span className="text-green-400">{salary.intern}</span></span>}
                          {salary.fresher && <span className="px-2 py-1 bg-slate-800 rounded-md text-slate-300">Fresher: <span className="text-green-400">{salary.fresher}</span></span>}
                          {salary.sde1 && <span className="px-2 py-1 bg-slate-800 rounded-md text-slate-300">SDE-1: <span className="text-green-400">{salary.sde1}</span></span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
