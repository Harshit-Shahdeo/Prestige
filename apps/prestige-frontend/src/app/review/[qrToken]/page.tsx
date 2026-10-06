"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"] 
});
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["normal", "italic"], 
  weight: ["400", "500", "600", "700"] 
});

const ratingsMap: Record<number, { title: string; desc: string }> = {
  1: { title: "Inadequate (1.0)", desc: "Significant flaws in experience or service" },
  2: { title: "Acceptable (2.0)", desc: "Met baseline standards, lacking distinction" },
  3: { title: "Commendable (3.0)", desc: "Pleasant environment with notable quality" },
  4: { title: "Distinguished (4.0)", desc: "Superb harmony and attentiveness" },
  5: { title: "Exceptional (5.0)", desc: "Flawless execution & premium service" }
};

const languageOptions = [
  { id: "English", sub: "Standard Generation" },
  { id: "Hinglish", sub: "Colloquial Urban" },
  { id: "Spanish", sub: "Standard Generation" }
];

export default function RatingScreen() {
  const params = useParams();
  const router = useRouter();
  const qrToken = params.qrToken as string;

  const [session, setSession] = useState<any>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [rating, setRating] = useState<number>(5);
  const [language, setLanguage] = useState(languageOptions[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isRouting, setIsRouting] = useState(false);
  const [error, setError] = useState("");

  // Initialize session on mount to get dynamic tenant/location details
  useEffect(() => {
    const initializeSession = async () => {
      try {
        // Automatically uses 'localhost' if on desktop, or your '10.x.x.x' IP if on your phone
        const apiUrl = `http://${window.location.hostname}:8080/review-sessions`;
        
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tableToken: qrToken }),
        });
        if (!response.ok) throw new Error("Invalid QR Code");

        const data = await response.json();
        setSession(data);
      } catch (err) {
        console.error(err);
        setError("Unable to verify this location. Please scan the QR code again.");
      } finally {
        setIsInitializing(false);
      }
    };

    initializeSession();
  }, [qrToken]);

  const handleContinue = () => {
    // Look for the ID in a few common NestJS/Prisma response structures
    const actualId = session?.id || session?.sessionId || session?.data?.id || session?.data?.sessionId;

    if (!actualId) {
      console.error("Backend returned:", session);
      alert("Could not find the session ID. Check your browser's developer console!");
      return;
    }

    setIsRouting(true);
    router.push(
      `/session/${actualId}/feedback?rating=${rating}&lang=${encodeURIComponent(language.id)}`
    );
  };

  if (isInitializing) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#fcf9f8]">
        <div className="w-8 h-8 border-4 border-[#f59e0b] border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');` }} />
      
      <main className={`${manrope.className} flex-1 flex flex-col relative w-full pt-16 pb-28 bg-[#fcf9f8] min-h-screen text-[#1c1b1b] selection:bg-[#f59e0b] selection:text-[#613b00]`}>
        
        {/* Header */}
        <header className="fixed top-0 w-full z-50 pt-safe bg-[#fcf9f8]/85 backdrop-blur-xl shadow-[0_1px_12px_rgba(10,10,10,0.03)]">
          <div className="h-16 px-5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center shadow-md">
                <span className={`${playfair.className} text-lg font-bold italic`}>P</span>
              </div>
              <span className={`${playfair.className} text-[18px] leading-[24px] font-medium text-[#1c1b1b] tracking-tight hidden xs:inline ml-2`}>Prestige</span>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 px-1">
              <span className="text-[10px] leading-[12px] font-bold text-[#867461] uppercase tracking-widest">Review Journey</span>
              <span className={`${playfair.className} text-[18px] leading-[24px] font-medium text-[#1c1b1b] truncate max-w-[150px]`}>Active Submission</span>
            </div>
            <div className="w-8"></div> {/* Spacer for centering */}
          </div>
        </header>

        <div className="px-5 pt-4 flex flex-col gap-6">
          
          {/* Step Progress Tracker */}
          <div className="flex items-center justify-between gap-1 bg-[#f6f3f2] p-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(10,10,10,0.04)]">
            <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full bg-white shadow-[0_2px_6px_rgba(10,10,10,0.06),0_1px_1px_rgba(255,255,255,0.9)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
              <span className="text-[10px] leading-[12px] uppercase tracking-wider text-[#1c1b1b] font-bold">1. Experience</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-full opacity-50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d8c3ad]"></span>
              <span className="text-[10px] leading-[12px] uppercase tracking-wider text-[#867461] font-bold">2. Details</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-full opacity-50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d8c3ad]"></span>
              <span className="text-[10px] leading-[12px] uppercase tracking-wider text-[#867461] font-bold">3. Review</span>
            </div>
          </div>

          {/* Dynamic Business Dossier Badge */}
          {session && !error && (
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white shadow-[0_2px_12px_rgba(10,10,10,0.03),inset_0_1px_0_rgba(255,255,255,0.9)]">
              <div className="w-12 h-12 rounded-lg bg-[#f6f3f2] border border-[#eae7e7] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px] text-[#867461]">storefront</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {/* Assumes backend returns nested tenant/location objects. Adjust if your DTO is flat. */}
                  <span className={`${playfair.className} text-[18px] leading-[24px] font-medium text-[#1c1b1b] truncate`}>
                    {session.tenant?.name || "Verified Business"}
                  </span>
                  <span className="material-symbols-outlined text-[15px] text-[#f59e0b] shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <p className="text-[12px] leading-[18px] text-[#5f5e5e] truncate">
                  {session.location?.name || "Verified Location"}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]/80"></span>
                  <span className="text-[10px] leading-[12px] text-[#867461] uppercase tracking-widest font-bold">Verified Visit</span>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-[14px] leading-[22px] font-medium text-center border border-red-100">
              {error}
            </div>
          )}

          {/* Tactile Hero Icon & Lead Prompt */}
          <div className="flex flex-col items-center text-center mt-1">
            <h1 className={`${playfair.className} text-[28px] leading-[34px] font-semibold text-[#1c1b1b] tracking-tight mb-2`}>
              How was your visit?
            </h1>
            <p className="text-[14px] leading-[22px] text-[#5f5e5e] max-w-[280px]">
              Your feedback shapes the benchmark for our community.
            </p>
          </div>

          {/* Interactive Tactile 3D Stars Section */}
          <div className="flex flex-col items-center bg-white py-6 px-5 rounded-xl shadow-[0_4px_20px_rgba(10,10,10,0.04),inset_0_1px_0_rgba(255,255,255,1)]">
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  disabled={!!error}
                  className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-200 active:scale-90 ${
                    rating >= star
                      ? "bg-[#f6f3f2] shadow-[0_3px_8px_rgba(10,10,10,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)]"
                      : "bg-[#eae7e7] shadow-inner"
                  } disabled:opacity-50`}
                  type="button"
                >
                  <span
                    className={`material-symbols-outlined text-[28px] transition-transform duration-200 ${
                      rating >= star ? "text-[#f59e0b]" : "text-[#d8c3ad]"
                    }`}
                    style={{ fontVariationSettings: rating >= star ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    star
                  </span>
                </button>
              ))}
            </div>

            {/* Rating Sentiment Feedback Plaque */}
            <div className="mt-4 flex flex-col items-center min-h-[50px]">
              <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#ffddb8]/30 text-[#2a1700] shadow-[inset_0_1px_2px_rgba(10,10,10,0.04)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse"></span>
                <span className={`${playfair.className} text-[18px] leading-[24px] font-semibold tracking-tight text-[#613b00]`}>
                  {ratingsMap[rating].title}
                </span>
              </div>
              <span className="text-[12px] leading-[18px] text-[#5f5e5e] mt-1 text-center">
                {ratingsMap[rating].desc}
              </span>
            </div>
          </div>

          {/* Editorial Drafting Language Selector */}
          <div className="flex flex-col gap-1 relative z-10">
            <label className="text-[10px] leading-[12px] font-bold uppercase tracking-widest text-[#867461] px-1">
              Drafting Language
            </label>
            <div className="relative bg-white rounded-xl shadow-[0_2px_10px_rgba(10,10,10,0.03),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden transition-all duration-300 border border-[#f0eded]">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                disabled={!!error}
                className="w-full p-4 flex items-center justify-between text-left active:bg-[#f6f3f2]/60 transition-colors disabled:opacity-50"
                type="button"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#f6f3f2] flex items-center justify-center text-[#1c1b1b] shadow-[inset_0_1px_2px_rgba(10,10,10,0.05)]">
                    <span className="material-symbols-outlined text-[18px]">public</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] leading-[20px] text-[#1c1b1b] font-semibold">{language.id}</span>
                    <span className="text-[12px] leading-[18px] text-[#5f5e5e]">{language.sub}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#867461]">
                  <span className="text-[10px] leading-[12px] font-bold uppercase tracking-widest">Change</span>
                  <span className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </div>
              </button>

              {isLangOpen && (
                <div className="flex flex-col bg-[#f6f3f2]/30 border-t border-[#f0eded] p-2 gap-1">
                  {languageOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setLanguage(opt);
                        setIsLangOpen(false);
                      }}
                      className="w-full p-2.5 rounded-lg flex items-center justify-between text-left hover:bg-white transition-all"
                      type="button"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${language.id === opt.id ? "bg-[#f59e0b]" : "bg-transparent"}`}></span>
                        <span className={`text-[14px] leading-[22px] ${language.id === opt.id ? "font-semibold text-[#1c1b1b]" : "font-medium text-[#5f5e5e]"}`}>
                          {opt.id}
                        </span>
                      </div>
                      {language.id === opt.id && (
                        <span className="material-symbols-outlined text-[#f59e0b] text-[18px]">check</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Concierge Assurance Note */}
          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#f6f3f2]/60">
            <span className="material-symbols-outlined text-[18px] text-[#867461]">verified_user</span>
            <p className="text-[12px] leading-[18px] text-[#867461] flex-1">
              Your notes remain private until you confirm the final draft.
            </p>
          </div>
        </div>

        {/* Anchored Floating Footer Action Dock */}
        <div className="fixed bottom-0 left-0 right-0 p-5 bg-[#fcf9f8]/85 backdrop-blur-xl shadow-[0_-4px_24px_rgba(10,10,10,0.05)] z-40 flex flex-col items-center pb-safe">
          <div className="w-full max-w-md flex flex-col items-center gap-2">
            <button
              onClick={handleContinue}
              disabled={isRouting || !!error || !session}
              className="w-full h-14 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(10,10,10,0.22),inset_0_1px_1px_rgba(255,255,255,0.25)] active:scale-[0.98] disabled:bg-gray-300 disabled:shadow-none transition-all"
              type="button"
            >
              <span className="text-[14px] leading-[20px] font-semibold tracking-wide text-white">
                {isRouting ? "Loading..." : "Continue"}
              </span>
              {!isRouting && <span className="material-symbols-outlined text-[18px] text-white">arrow_forward</span>}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}