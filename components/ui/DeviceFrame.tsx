"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
    device: "desktop" | "laptop" | "tablet" | "mobile";
    className?: string;
    children?: React.ReactNode;
}

const deviceStyles = {
    desktop: "w-[800px] h-[500px] rounded-lg border-[16px] border-gray-800",
    laptop: "w-[600px] h-[380px] rounded-t-xl border-[12px] border-gray-800 border-b-[20px]",
    tablet: "w-[300px] h-[400px] rounded-[24px] border-[12px] border-gray-800",
    mobile: "w-[180px] h-[360px] rounded-[32px] border-[10px] border-gray-800",
};

const baseClass =
    "relative bg-gray-900 shadow-2xl overflow-hidden pointer-events-none transform-gpu";

export function DeviceFrame({ device, className, children }: DeviceFrameProps) {
    return (
        <div
            className={cn(
                "device-container relative",
                className,
                device === "laptop" ? "laptop-base" : ""
            )}
            style={{ transformStyle: "preserve-3d" }}
        >
            <div className={cn(baseClass, deviceStyles[device], "bg-white relative z-10")}>
                {/* Camera/Sensor notch/dot */}
                {device === "mobile" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-20" />
                )}
                {device === "tablet" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 mt-2 bg-gray-700 rounded-full z-20" />
                )}
                {device === "laptop" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 mt-1.5 bg-gray-700 rounded-full z-20" />
                )}

                {/* Screen Content Slot */}
                <div className="w-full h-full overflow-hidden bg-gray-50">
                    {children}
                </div>

                {/* Glossy Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-30 opacity-50" />
            </div>

            {/* Laptop Base (Keyboard area) - visual only */}
            {device === "laptop" && (
                <div className="relative z-0 mx-auto -mt-1 w-[700px] h-[24px] bg-gray-700 rounded-b-xl shadow-xl transform-gpu origin-top"
                    style={{ perspectiveOrigin: "top", transform: "rotateX(12deg)" }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-gray-600 rounded-b-md" />
                </div>
            )}

            {/* Desktop Stand */}
            {device === "desktop" && (
                <div className="relative z-0 mx-auto -mt-2 w-[120px] h-[80px] bg-gradient-to-b from-gray-700 to-gray-800 flex flex-col items-center shadow-xl">
                    <div className="w-[200px] h-[12px] bg-gray-800 rounded-full mt-auto mb-2 shadow-lg" />
                </div>
            )}
        </div>
    );
}
