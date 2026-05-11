import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../components/useReveal";

// ─── Service Preview Cards ───────────────────────────────────────────────────
const SERVICES = [
  {
    num: "01",
    title: "Web Geliştirme",
    desc: "Markanıza özel, performans odaklı, modern web siteleri ve uygulamalar.",
  },
  {
    num: "02",
    title: "AI Chatbot Entegrasyonu",
    desc: "7/24 çalışan, müşteri sorularını anlayan ve satışa yönlendiren akıllı asistanlar.",
  },
  {
    num: "03",
    title: "WhatsApp & Instagram Botları",
    desc: "Sosyal medya kanallarınızı otomatikleştirin; yanıt sürelerini sıfıra indirin.",
  },
  {
    num: "04",
    title: "AI İş Asistanları",
    desc: "Operasyonlarınızı hızlandıran, tekrarlayan görevleri devralan yapay zeka çözümleri.",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "7/24", label: "Kesintisiz Destek" },
  { value: "48s", label: "Ortalama Teslimat" },
  { value: "%100", label: "Müşteri Odaklı" },
];

export default function Home() {
  useReveal();

  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--stone-100)",
        }}
      >
        {/* Background texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            radial-gradient(circle at 80% 20%, rgba(26,25,23,0.04) 0%, transparent 50%),
            radial-gradient(circle at 10% 80%, rgba(26,25,23,0.03) 0%, transparent 40%)
          `,
            pointerEvents: "none",
          }}
        />

        {/* Vertical label */}
        <div
          style={{
            position: "absolute",
            right: "32px",
            top: "50%",
            transform: "translateY(-50%) rotate(90deg)",
            transformOrigin: "center",
            fontFamily: "var(--font-display)",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "var(--stone-300)",
            textTransform: "uppercase",
            userSelect: "none",
          }}
        >
          CHERIA — 2025
        </div>

        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "var(--stone-500)",
                textTransform: "uppercase",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "28px",
                  height: "1px",
                  background: "var(--stone-300)",
                }}
              />
              Teknoloji & Yapay Zeka
            </p>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(42px, 7vw, 96px)",
                fontWeight: 800,
                color: "var(--ink-pure)",
                lineHeight: 1.03,
                letterSpacing: "-0.03em",
                marginBottom: "32px",
              }}
            >
              İşinizi
              <br />
              <span style={{ color: "var(--stone-300)" }}>geleceğe</span>
              <br />
              taşıyoruz.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.8vw, 18px)",
                fontWeight: 300,
                color: "var(--ink-light)",
                lineHeight: 1.75,
                maxWidth: "480px",
                marginBottom: "48px",
              }}
            >
              Yapay zeka ve modern yazılım ile şirketinizin dijital altyapısını
              bir üst seviyeye çıkarıyoruz. Küçük adımlarla büyük sonuçlar.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link
                to="/hizmetler"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--white)",
                  background: "var(--ink-pure)",
                  padding: "15px 32px",
                  borderRadius: "var(--radius-sm)",
                  letterSpacing: "0.04em",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Hizmetleri Gör
              </Link>
              <Link
                to="/iletisim"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--ink-pure)",
                  background: "transparent",
                  padding: "15px 32px",
                  borderRadius: "var(--radius-sm)",
                  letterSpacing: "0.04em",
                  border: "1px solid var(--stone-100)",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.borderColor = "var(--stone-300)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.borderColor = "var(--stone-100)")
                }
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink-pure)",
          padding: "56px 0",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
            }}
            className="stats-grid"
          >
            {STATS.map(({ value, label }, i) => (
              <div
                key={i}
                style={{
                  padding: "0 40px",
                  borderRight:
                    i < STATS.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                  textAlign: "center",
                }}
                className="stat-item"
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    fontWeight: 800,
                    color: "var(--white)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--stone-500)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────────── */}
      <section style={{ padding: "120px 0" }}>
        <div className="container">
          {/* Section header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "72px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div className="reveal">
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  color: "var(--stone-500)",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "28px",
                    height: "1px",
                    background: "var(--stone-300)",
                  }}
                />
                Hizmetler
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(30px, 4vw, 52px)",
                  fontWeight: 800,
                  color: "var(--ink-pure)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Ne yapıyoruz?
              </h2>
            </div>
            <Link
              to="/hizmetler"
              className="reveal reveal-d2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--ink-pure)",
                letterSpacing: "0.06em",
                borderBottom: "1px solid var(--ink-pure)",
                paddingBottom: "2px",
                whiteSpace: "nowrap",
              }}
            >
              Tüm Hizmetler →
            </Link>
          </div>

          {/* Service rows */}
          <div>
            {SERVICES.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`reveal reveal-d${i + 1}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "64px 1fr 1fr",
                  gap: "24px",
                  alignItems: "center",
                  padding: "36px 0",
                  borderTop: "1px solid var(--stone-100)",
                  cursor: "default",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--off-white)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--stone-300)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(18px, 2.5vw, 26px)",
                    fontWeight: 700,
                    color: "var(--ink-pure)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "var(--ink-light)",
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
            <div style={{ borderBottom: "1px solid var(--stone-100)" }} />
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--ink-pure)",
          padding: "96px 0",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "var(--stone-500)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Bir adım yeter
          </p>
          <h2
            className="reveal reveal-d1"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 64px)",
              fontWeight: 800,
              color: "var(--white)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "40px",
            }}
          >
            Projenizi konuşalım.
          </h2>
          <Link
            to="/iletisim"
            className="reveal reveal-d2"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--ink-pure)",
              background: "var(--white)",
              padding: "16px 40px",
              borderRadius: "var(--radius-sm)",
              letterSpacing: "0.04em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Ücretsiz Teklif Al
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .stat-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 20px 0 !important; }
          .stat-item:last-child { border-bottom: none; }
          .service-row, [style*="grid-template-columns: 64px"] {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
        }
        @media (max-width: 900px) {
          [style*="grid-template-columns: 64px 1fr 1fr"] {
            grid-template-columns: 48px 1fr !important;
          }
          [style*="grid-template-columns: 64px 1fr 1fr"] p {
            grid-column: 2;
          }
        }
      `}</style>
    </main>
  );
}
