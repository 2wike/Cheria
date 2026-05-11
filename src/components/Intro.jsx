import { useState, useEffect } from "react";

const LETTERS = ["C", "H", "E", "R", "I", "A"];

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("show"), 100);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3200);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#FAFAF8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.04em",
          transform: phase === "exit" ? "translateY(-52px)" : "translateY(0px)",
          opacity: phase === "exit" ? 0 : 1,
          transition:
            phase === "exit"
              ? "transform 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease"
              : "none",
        }}
      >
        {LETTERS.map((letter, i) => (
          <Letter key={letter} letter={letter} index={i} phase={phase} />
        ))}
      </div>
    </div>
  );
}

function Letter({ letter, index, phase }) {
  const delay = index * 110;
  const visible = phase === "show" || phase === "exit";

  return (
    <span
      style={{
        fontFamily: "'Syne', 'Helvetica Neue', sans-serif",
        fontSize: "clamp(64px, 15vw, 160px)",
        fontWeight: 800,
        color: "#0D0C0B",
        letterSpacing: "-0.02em",
        lineHeight: 1,
        userSelect: "none",
        display: "inline-block",
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scale(1) translateY(0px)"
          : "scale(0.85) translateY(16px)",
        transition: visible
          ? `opacity 0.45s ${delay}ms ease, transform 0.5s ${delay}ms cubic-bezier(0.16,1,0.3,1)`
          : "none",
      }}
    >
      {letter}
    </span>
  );
}
