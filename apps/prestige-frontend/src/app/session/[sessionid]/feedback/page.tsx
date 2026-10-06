"use client";

import { useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], weight: ["400", "500", "600", "700"] });

// Mapped to backend seed keywords: Food, Service, Ambience, Staff
const highlightOptions = [
  { id: "h1", label: "Sublime Food", name: "Food", sentiment: "GOOD" },
  { id: "h2", label: "Impeccable Service", name: "Service", sentiment: "GOOD" },
  { id: "h3", label: "Enchanting Ambience", name: "Ambience", sentiment: "GOOD" },
  { id: "h4", label: "Brilliant Staff", name: "Staff", sentiment: "GOOD" }
];

const critiqueOptions = [
  { id: "c1", label: "Underwhelming Food", name: "Food", sentiment: "BAD" },
  { id: "c2", label: "Rushed Service", name: "Service", sentiment: "BAD" },
  { id: "c3", label: "Intrusive Ambience", name: "Ambience", sentiment: "BAD" },
  { id: "c4", label: "Inattentive Staff", name: "Staff", sentiment: "BAD" }
];

const tones = [
  { id: "warm", label: "Balanced & Warm" },
  { id: "poetic", label: "Poetic Gastronome" },
  { id: "direct", label: "Concierge Direct" }
];

export default function FeedbackScreen() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const sessionId = params.sessionId as string;
  const rating = Number(searchParams.get("rating")) || 5;
  const language = searchParams.get("lang") || "English";

  const [selectedChips, setSelectedChips] = useState<Set<string>>(new Set());
  const [selectedTone, setSelectedTone] = useState("poetic");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const toggleChip = (id: string) => {
    const next = new Set(selectedChips);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedChips(next);
  };

  const clearAll = () => setSelectedChips(new Set());

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError("");

    // Build payload using selected chips mapped to backend expectations
    const keywordsPayload = [...selectedChips].map(id => {
      const option = [...highlightOptions, ...critiqueOptions].find(o => o.id === id);
      return { name: option?.name, sentiment: option?.sentiment };
    });

    try {
      const apiUrl = `http://${window.location.hostname}:8080/review-sessions/${sessionId}/feedback`;
      
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          language,
          keywords: keywordsPayload,
          comment: selectedTone // Passing tone as the optional comment to inform AI
        }),
      });

      if (!response.ok) throw new Error("Failed to generate draft.");

      // Route to Screen 3 (Review Draft & Confirm)
      router.push(`/session/${sessionId}/review`);
    } catch (err) {
      console.error(err);
      setError("AI generation failed. Please check your connection and try again.");
      setIsGenerating(false);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');` }} />
      
      <main className={`${manrope.className} flex-1 flex flex-col relative w-full pt-safe bg-[#fcf9f8] min-h-screen text-[#1c1b1b] selection:bg-[#f59e0b] selection:text-[#613b00]`}>
        
        {/* Header */}
        <header className="fixed top-0 w-full z-50 pt-safe bg-[#fcf9f8]/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(10,10,10,0.03)]">
          <div className="h-16 px-5 flex items-center justify-between">
            <button onClick={() => router.back()} disabled={isGenerating} className="w-11 h-11 -ml-2 flex items-center justify-center rounded-full text-[#1c1b1b] hover:bg-[#f0eded] active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
            <div className="flex flex-col items-center justify-center flex-1">
              <span className="text-[10px] leading-[12px] font-bold text-[#867461] uppercase tracking-widest">Review Journey</span>
              <span className={`${playfair.className} text-[18px] leading-[24px] font-medium text-[#1c1b1b] truncate`}>Active Submission</span>
            </div>
            <div className="w-11 h-11"></div>
          </div>
        </header>

        <div className="px-5 pt-20 pb-32 flex flex-col gap-6">
          
          {/* Progress Indicator */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] leading-[12px] font-bold text-[#867461] uppercase tracking-widest">Step 02 of 03</span>
              <span className="text-[11px] leading-[14px] text-[#855300] font-semibold tracking-wider uppercase">Atmosphere & Craft</span>
            </div>
            <div className="grid grid-cols-3 gap-2 w-full pt-1">
              <div className="h-1.5 rounded-full bg-[#f59e0b] shadow-[inset_0_1px_1px_rgba(0,0,0,0.15)]"></div>
              <div className="relative h-1.5 rounded-full bg-[#1c1b1b] shadow-[0_1px_4px_rgba(0,0,0,0.25)]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#1c1b1b] opacity-90"></div>
              </div>
              <div className="h-1.5 rounded-full bg-[#e5e2e1]"></div>
            </div>
          </div>

          {/* Header Section */}
          <div className="flex flex-col gap-1">
            <h1 className={`${playfair.className} text-[32px] leading-[38px] font-semibold text-[#1c1b1b] tracking-tight`}>What stood out?</h1>
            <p className="text-[14px] leading-[22px] text-[#5f5e5e]">
              Select the facets that defined your experience to tailor your AI critique.
            </p>
          </div>

          {/* Editorial Accent Portrait */}
          <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(10,10,10,0.06)] bg-[#f6f3f2]">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD85f3PKwjO5x1FP8uOV4w2cGLLRtcxYm9yhBWVvg8g_SHL1giel2SgycNraati648C_80z0nUGPZMe0lbnS5ZmuZFUIjqn6dPEfOFABoj47E1U1L8_Jsgf2--w2aj5Qa94yACl5Jj8MVqeeAtNKcoK3ZQZMLRMsbxFGO1hC1LWQJeje82O5o726jByj7IBXicLJIEvfdsXCfDDawC-ZL4gfMLmmMXOSy00MkK0FktRWabIxgjNqjOO" alt="Culinary Accent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#313030]/80 via-[#313030]/20 to-transparent flex items-end p-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#f59e0b] text-[18px]">verified</span>
                <span className="text-[11px] leading-[14px] font-bold text-[#f3f0ef] uppercase tracking-wider">Curated Facets</span>
              </div>
            </div>
          </div>

          {/* Interactive Floating 3D Toggle Chips */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] leading-[14px] font-bold text-[#867461] uppercase tracking-wider">Culinary & Service Facets</span>
              <button onClick={clearAll} className="text-[10px] leading-[12px] font-bold text-[#5f5e5e] hover:text-[#1c1b1b] transition-colors uppercase">Clear All</button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 w-full">
              {/* Left Column: Highlights */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 px-1 pb-1">
                  <span className="material-symbols-outlined text-[15px] text-[#f59e0b]">recommend</span>
                  <span className="text-[10px] leading-[12px] font-bold text-[#1c1b1b] tracking-wider uppercase">Praise</span>
                </div>
                <div className="flex flex-col gap-2">
                  {highlightOptions.map((opt) => {
                    const isSelected = selectedChips.has(opt.id);
                    return (
                      <button key={opt.id} onClick={() => toggleChip(opt.id)} disabled={isGenerating} className={`group relative flex items-center justify-between px-3 py-2.5 rounded-full text-[11px] font-bold transition-all duration-200 text-left ${isSelected ? 'bg-[#313030] text-[#f3f0ef] shadow-[inset_0_2px_4px_rgba(0,0,0,0.35),0_1px_1px_rgba(255,255,255,0.08)] scale-[0.98]' : 'bg-[#ffffff] text-[#1c1b1b] shadow-[0_4px_10px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.09)] active:scale-95'}`}>
                        <span className="flex items-center gap-2 truncate">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.9)]' : 'bg-[#e5e2e1]'}`}></span>
                          <span className="truncate">{opt.label}</span>
                        </span>
                        <span className={`material-symbols-outlined text-[15px] leading-none shrink-0 ${isSelected ? 'text-[#f59e0b] opacity-100' : 'text-[#867461] opacity-0'}`}>check</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Critiques */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5 px-1 pb-1">
                  <span className="material-symbols-outlined text-[15px] text-[#f79a6c]">tune</span>
                  <span className="text-[10px] leading-[12px] font-bold text-[#867461] tracking-wider uppercase">Critique</span>
                </div>
                <div className="flex flex-col gap-2">
                  {critiqueOptions.map((opt) => {
                    const isSelected = selectedChips.has(opt.id);
                    return (
                      <button key={opt.id} onClick={() => toggleChip(opt.id)} disabled={isGenerating} className={`group relative flex items-center justify-between px-3 py-2.5 rounded-full text-[11px] font-bold transition-all duration-200 text-left ${isSelected ? 'bg-[#313030] text-[#f3f0ef] shadow-[inset_0_2px_4px_rgba(0,0,0,0.35),0_1px_1px_rgba(255,255,255,0.08)] scale-[0.98]' : 'bg-[#ffffff] text-[#1c1b1b] shadow-[0_4px_10px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.09)] active:scale-95'}`}>
                        <span className="flex items-center gap-2 truncate">
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? 'bg-[#f79a6c] shadow-[0_0_8px_rgba(247,154,108,0.8)]' : 'bg-[#e5e2e1]'}`}></span>
                          <span className="truncate">{opt.label}</span>
                        </span>
                        <span className={`material-symbols-outlined text-[15px] leading-none shrink-0 ${isSelected ? 'text-[#f79a6c] opacity-100' : 'text-[#867461] opacity-0'}`}>priority_high</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tone Selector */}
          <div className="flex flex-col gap-2.5 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] leading-[14px] font-bold text-[#867461] uppercase tracking-wider">Critique Voice</span>
              <span className="text-[10px] leading-[12px] font-bold text-[#855300]">Stylistic Persona</span>
            </div>
            <div className="p-1.5 rounded-2xl bg-[#f0eded] shadow-[inset_0_2px_4px_rgba(10,10,10,0.06)] grid grid-cols-3 gap-1">
              {tones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  disabled={isGenerating}
                  className={`py-2 px-1 text-center rounded-xl text-[11px] transition-all duration-200 ${
                    selectedTone === tone.id
                      ? "text-[#1c1b1b] font-bold bg-[#ffffff] shadow-[0_2px_6px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]"
                      : "text-[#5f5e5e] font-semibold hover:text-[#1c1b1b]"
                  }`}
                >
                  {tone.label}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-[14px] leading-[22px] font-medium text-center border border-red-100">
              {error}
            </div>
          )}

          {/* Editorial Note Card */}
          <div className="rounded-xl p-4 bg-[#f6f3f2] shadow-[0_1px_3px_rgba(10,10,10,0.04),0_4px_12px_rgba(10,10,10,0.02)] flex items-start gap-3">
            <span className="material-symbols-outlined text-[#855300] text-[20px] mt-0.5">auto_awesome</span>
            <div className="flex flex-col gap-0.5">
              <span className={`${playfair.className} text-[18px] leading-[24px] font-medium text-[#1c1b1b]`}>AI Crafting Engine</span>
              <p className="text-[12px] leading-[18px] text-[#5f5e5e]">
                Selected facets generate nuanced critique paragraphs honoring culinary balance and venue cadence.
              </p>
            </div>
          </div>
        </div>

        {/* Anchored Floating Footer Action Dock */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#fcf9f8]/90 backdrop-blur-xl pb-safe shadow-[0_-8px_24px_rgba(10,10,10,0.05)]">
          <div className="max-w-md mx-auto px-5 py-3 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
              <span className="text-[10px] leading-[12px] font-bold text-[#5f5e5e] tracking-wide uppercase">
                {selectedChips.size} facet{selectedChips.size !== 1 ? 's' : ''} selected • AI will compose draft
              </span>
            </div>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || selectedChips.size === 0}
              className="w-full relative flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#313030] text-[#f3f0ef] shadow-[0_6px_20px_rgba(15,15,17,0.22)] active:scale-[0.98] transition-all duration-200 disabled:bg-gray-300 disabled:shadow-none disabled:active:scale-100 group"
            >
              {!isGenerating && <span className="text-[#f59e0b] text-base leading-none font-bold">✦</span>}
              <span className="text-[14px] leading-[20px] font-semibold tracking-wide">
                {isGenerating ? "Crafting Draft..." : "Generate Draft"}
              </span>
              {!isGenerating && <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}