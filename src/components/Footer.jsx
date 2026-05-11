import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--ink-pure)",
        color: "var(--stone-300)",
        paddingTop: "72px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 800,
                color: "var(--white)",
                letterSpacing: "-0.03em",
                display: "block",
                marginBottom: "16px",
              }}
            >
              CHERIA
            </Link>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "var(--stone-500)",
                maxWidth: "240px",
              }}
            >
              Yapay zeka ve yazılımla işletmeleri geleceğe taşıyoruz.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--stone-500)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              Sayfa
            </p>
            {[
              { to: "/", label: "Ana Sayfa" },
              { to: "/hizmetler", label: "Hizmetler" },
              { to: "/iletisim", label: "İletişim" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "var(--stone-300)",
                  marginBottom: "12px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--stone-300)")
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--stone-500)",
                marginBottom: "20px",
                textTransform: "uppercase",
              }}
            >
              İletişim
            </p>
            <a
              href="mailto:cheriaverse@gmail.com"
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--stone-300)",
                marginBottom: "12px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--stone-300)")}
            >
              cheriaverse@gmail.com
            </a>
            <Link
              to="/iletisim"
              style={{
                display: "inline-block",
                marginTop: "16px",
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--white)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "10px 20px",
                borderRadius: "var(--radius-sm)",
                letterSpacing: "0.06em",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              TEKLİF AL →
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--stone-500)" }}>
            © {year} Cheria. Tüm hakları saklıdır.
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "var(--stone-500)",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.04em",
            }}
          >
            BUILD. AUTOMATE. GROW.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </footer>
  );
}
