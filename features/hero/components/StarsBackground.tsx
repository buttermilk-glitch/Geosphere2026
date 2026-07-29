import { STARS } from "../domain/constants";

export function StarsBackground() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
      {STARS.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-[#FDFBF7] animate-star-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.8)`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            willChange: "opacity, transform",
          }}
        />
      ))}
    </div>
  );
}
