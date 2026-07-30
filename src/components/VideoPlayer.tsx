"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Download, X } from "lucide-react";
// Import the phone input and its CSS
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface VideoPlayerProps {
  src: string;
  title: string;
}

export function VideoPlayer({ src, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactError, setContactError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // The library handles the country code + number as a single string
    entityType: "Company",
  });

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const validateForm = () => {
    const { email, phone } = formData;

    if (!email.trim() && !phone) {
      setContactError("Please provide either an email or a phone number.");
      return false;
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setContactError("Please enter a valid email address.");
        return false;
      }
    }

    if (phone) {
      // Use the library's built-in validation!
      if (!isValidPhoneNumber(phone)) {
        setContactError("Please enter a valid phone number for the selected country.");
        return false;
      }
    }

    return true;
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setContactError("");
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Captured Lead:", formData);

      const link = document.createElement("a");
      link.href = src;
      link.download = "WhatsApp-AI-Demo.mp4";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsModalOpen(false);
      setFormData({ name: "", email: "", phone: "", entityType: "Company" });
    } catch (error) {
      console.error("Failed to capture lead:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden glass-card border border-glass-border shadow-2xl group select-none"
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full aspect-video object-cover rounded-2xl"
          controls
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          muted={isMuted}
          loop
          playsInline
          aria-label={title}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10 hover:bg-black/80 hover:scale-105 transition-all shadow-lg"
          >
            <Download size={16} className="text-white/80" />
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            onClick={toggleMute}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/10 hover:bg-black/80 transition-all shadow-lg"
          >
            {isMuted ? <VolumeX size={16} className="text-amber-400" /> : <Volume2 size={16} className="text-primary" />}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />

          <div className="relative w-full max-w-md glass rounded-3xl p-8 shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => { setIsModalOpen(false); setContactError(""); }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/10 transition-colors"
            >
              <X size={20} className="text-foreground/70" />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">Download Demo</h3>
              <p className="text-sm text-foreground/70">Please provide your email or phone number to download the file.</p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (contactError) setContactError("");
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-1">Phone Number</label>
                <div className={`px-4 py-2.5 rounded-xl bg-background/50 border transition-all ${contactError ? 'border-red-500 focus-within:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary'}`}>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={formData.phone}
                    onChange={(value) => {
                      setFormData({ ...formData, phone: value || "" });
                      if (contactError) setContactError("");
                    }}
                    placeholder="Enter phone number"
                  />
                </div>
                {contactError && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium">{contactError}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/70 mb-1">I am a... *</label>
                <select
                  value={formData.entityType}
                  onChange={(e) => setFormData({ ...formData, entityType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="Company">Company / Agency</option>
                  <option value="HR">HR / Recruiter</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Preparing Download..." : "Submit & Download"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}