"use client";

import { useEffect, useRef, useState } from "react";

export function FogVideo() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [v1Opacity, setV1Opacity] = useState(0.6);
  const [v2Opacity, setV2Opacity] = useState(0);
  const isTransitioningRef = useRef(false);

  const handleTimeUpdate1 = () => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2 || !v1.duration) return;
    const timeLeft = v1.duration - v1.currentTime;
    if (timeLeft <= 6.4 && !isTransitioningRef.current) {
      isTransitioningRef.current = true;
      v2.currentTime = 0;
      v2.playbackRate = 3.2;
      v2.play().catch(() => {});
      setV1Opacity(0);
      setV2Opacity(0.6);
    }
  };

  const handleEnded1 = () => {
    const v1 = video1Ref.current;
    if (v1) {
      v1.pause();
      v1.currentTime = 0;
    }
    isTransitioningRef.current = false;
  };

  const handleTimeUpdate2 = () => {
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!v1 || !v2 || !v2.duration) return;
    const timeLeft = v2.duration - v2.currentTime;
    if (timeLeft <= 6.4 && !isTransitioningRef.current) {
      isTransitioningRef.current = true;
      v1.currentTime = 0;
      v1.playbackRate = 3.2;
      v1.play().catch(() => {});
      setV2Opacity(0);
      setV1Opacity(0.6);
    }
  };

  const handleEnded2 = () => {
    const v2 = video2Ref.current;
    if (v2) {
      v2.pause();
      v2.currentTime = 0;
    }
    isTransitioningRef.current = false;
  };

  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.playbackRate = 3.2;
      video1Ref.current.play().catch(() => {});
    }
    if (video2Ref.current) {
      video2Ref.current.playbackRate = 3.2;
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-[5] pointer-events-none mix-blend-screen overflow-hidden">
      <video
        ref={video1Ref}
        src="/videos/fog-1.webm"
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate1}
        onEnded={handleEnded1}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
        style={{ opacity: v1Opacity }}
      />
      <video
        ref={video2Ref}
        src="/videos/fog-1.webm"
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate2}
        onEnded={handleEnded2}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out"
        style={{ opacity: v2Opacity }}
      />
    </div>
  );
}
