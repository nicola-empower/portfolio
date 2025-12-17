"use client";

import React from "react";
import { DeviceFrame } from "../ui/DeviceFrame";
import { Project } from "@/types";

interface ProjectShowcaseProps {
    project: Project;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
    return (
        <div className="relative w-full overflow-hidden flex items-center justify-center p-4 md:p-10 font-sans bg-[#0f0f11] min-h-[60vh]">
            <style jsx global>{`
                .perspective-container {
                    perspective: 2000px;
                }
                
                @media (min-width: 768px) {
                    .scene {
                        transform-style: preserve-3d;
                        transform: rotateX(5deg);
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(12deg); }
                    50% { transform: translateY(-20px) rotate(15deg); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 7s ease-in-out infinite 1s;
                }
            `}</style>

            {/* Ambient Background Elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-purple-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

            {/* 3D Scene Container */}
            <div className="perspective-container w-full max-w-7xl flex flex-col items-center justify-center">

                <div className="scene w-full h-auto md:h-[500px] flex flex-col md:block items-center gap-10 md:gap-0 mt-20 md:mt-0 relative scale-75 md:scale-90 lg:scale-75 origin-center">

                    {/* Desktop (Back Center) */}
                    <div className="relative md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 z-0 hover:z-50 transition-all duration-500 md:hover:scale-105 group scale-[0.35] sm:scale-50 md:scale-100 origin-center -my-24 sm:-my-20 md:my-0">
                        <DeviceFrame
                            device="desktop"
                            className="transform md:rotate-y-0 md:rotate-x-2 md:shadow-2xl md:skew-y-1"
                        >
                            {/* Desktop UI Content */}
                            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 p-8 flex flex-col gap-4">
                                <div className="w-full h-12 bg-white rounded-lg shadow-sm flex items-center px-4 gap-2">
                                    <div className="w-20 h-4 bg-slate-200 rounded"></div>
                                    <div className="flex-1"></div>
                                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                                </div>
                                <div className="flex gap-4 h-full">
                                    <div className="w-1/4 bg-white rounded-lg shadow-sm h-3/4"></div>
                                    <div className="flex-1 bg-white rounded-lg shadow-sm h-full relative overflow-hidden group-hover:shadow-md transition-shadow">
                                        <div className="absolute inset-0 bg-blue-50/50"></div>
                                        <div className="p-8">
                                            <div className="w-3/4 h-8 bg-slate-200 rounded mb-4"></div>
                                            <div className="w-1/2 h-4 bg-slate-200 rounded mb-8"></div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="h-32 bg-slate-100 rounded"></div>
                                                <div className="h-32 bg-slate-100 rounded"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DeviceFrame>
                    </div>

                    {/* Laptop (Front Left) */}
                    <div className="relative md:absolute md:top-[200px] md:left-[5%] z-10 md:z-20 hover:z-50 transition-all duration-500 md:hover:scale-105 md:hover:-translate-y-4 scale-[0.4] sm:scale-60 md:scale-100 origin-center -my-20 sm:-my-16 md:my-0">
                        <DeviceFrame
                            device="laptop"
                            className="transform md:-rotate-y-12 md:rotate-x-6 md:shadow-2xl md:skew-y-2"
                        >
                            <div className="w-full h-full bg-zinc-900 p-6 flex flex-col">
                                <div className="w-full h-40 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                                    <div className="text-white font-bold text-2xl px-4 text-center">
                                        {project.title}
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-24 bg-zinc-800 rounded-lg"></div>
                                    <div className="h-24 bg-zinc-800 rounded-lg"></div>
                                    <div className="h-24 bg-zinc-800 rounded-lg"></div>
                                </div>
                            </div>
                        </DeviceFrame>
                    </div>

                    {/* Tablet (Front Right) */}
                    <div className="relative md:absolute md:top-[250px] md:right-[10%] z-20 md:z-30 hover:z-50 transition-all duration-500 md:hover:scale-105 md:hover:-translate-y-4 scale-75 md:scale-100 origin-center">
                        <DeviceFrame
                            device="tablet"
                            className="transform md:rotate-y-12 md:rotate-x-6 md:shadow-2xl md:-skew-y-2"
                        >
                            <div className="w-full h-full bg-indigo-50 p-4">
                                <div className="w-full h-full bg-white rounded-2xl shadow-inner p-4 flex flex-col gap-3">
                                    <div className="w-12 h-12 bg-indigo-500 rounded-xl mb-2"></div>
                                    <div className="w-full h-4 bg-slate-100 rounded"></div>
                                    <div className="w-2/3 h-4 bg-slate-100 rounded"></div>
                                    <div className="mt-auto h-32 bg-indigo-100 rounded-xl"></div>
                                </div>
                            </div>
                        </DeviceFrame>
                    </div>

                    {/* Mobile (Floating Front Center) */}
                    <div className="relative md:absolute md:bottom-[-20px] md:left-1/2 md:-translate-x-1/2 z-30 md:z-40 hover:z-50 transition-all duration-500 md:hover:scale-110 md:hover:-translate-y-10 scale-90 md:scale-100 origin-center mt-10 md:mt-0">
                        <DeviceFrame
                            device="mobile"
                            className="transform md:-rotate-x-12 md:shadow-2xl"
                        >
                            <div className="w-full h-full bg-black p-4 flex flex-col gap-4">
                                <div className="flex justify-between items-center text-white/50 text-xs">
                                    <span>9:41</span>
                                    <div className="flex gap-1">
                                        <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
                                        <div className="w-3 h-3 border border-white/50 rounded-sm"></div>
                                    </div>
                                </div>
                                <div className="w-full h-48 bg-gradient-to-b from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/50 p-4 text-center">
                                    <div className="text-white font-bold text-lg">{project.shortTagline}</div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-full h-12 bg-zinc-900 rounded-xl border border-white/10 flex items-center px-4">
                                        <div className="w-8 h-8 bg-zinc-700 rounded-full"></div>
                                    </div>
                                    <div className="w-full h-12 bg-zinc-900 rounded-xl border border-white/10 flex items-center px-4">
                                        <div className="w-8 h-8 bg-zinc-700 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </DeviceFrame>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl rotate-12 blur-sm opacity-60 animate-float z-10 pointer-events-none hidden md:block" />
                    <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-md opacity-50 animate-float-delayed z-10 pointer-events-none hidden md:block" />

                </div>
            </div>
        </div>
    );
}
