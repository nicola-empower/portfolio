export interface DigitalFingerprint {
    userAgent: string;
    language: string;
    screenResolution: string;
    timezone: string;
    platform: string;
    timestamp: string;
    connectionType?: string;
}

export function getDigitalFingerprint(): DigitalFingerprint {
    if (typeof window === "undefined") {
        return {
            userAgent: "SSR",
            language: "N/A",
            screenResolution: "N/A",
            timezone: "N/A",
            platform: "N/A",
            timestamp: new Date().toISOString(),
        };
    }

    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        platform: (navigator as any).platform || "Unknown",
        timestamp: new Date().toISOString(),
        connectionType: (navigator as any).connection?.effectiveType || "Unknown",
    };
}
