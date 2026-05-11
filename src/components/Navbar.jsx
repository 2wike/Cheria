import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { to: "/", label: "Ana Sayfa" },
    { to: "/hizmetler", label: "Hizmetler" },
    { to: "/iletisim", label: "İletişim" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-h)",
          background: scrolled
            ? theme === "dark"
              ? "rgba(18,18,18,0.92)"
              : "rgba(250,250,248,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--stone-100)"
            : "1px solid transparent",
          transition:
            "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontWeight: 800,
              color: "var(--ink-pure)",
              letterSpacing: "-0.03em",
            }}
          >
            CHERIA
          </Link>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
            className="nav-desktop"
          >
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: isActive(to) ? 500 : 400,
                  color: isActive(to) ? "var(--ink-pure)" : "var(--ink-light)",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s ease",
                  borderBottom: isActive(to)
                    ? "1px solid var(--ink-pure)"
                    : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {label}
              </Link>
            ))}
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Tema değiştir"
              style={{
                background: "none",
                border: "1px solid var(--stone-100)",
                borderRadius: "var(--radius-sm)",
                width: "38px",
                height: "38px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--ink-pure)",
                fontSize: "16px",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--stone-300)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--stone-100)")
              }
            >
              {theme === "light" ? "○" : "●"}
            </button>
            <Link
              to="/iletisim"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--white)",
                background: "var(--ink-pure)",
                padding: "10px 22px",
                borderRadius: "var(--radius-sm)",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Teklif Al
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            aria-label="Menüyü aç"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "var(--ink-pure)",
                  borderRadius: "99px",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(4.5px, -4.5px)"
                        : "scaleX(0)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "var(--white)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        {links.map(({ to, label }, idx) => (
          <Link
            key={to}
            to={to}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 8vw, 52px)",
              fontWeight: 800,
              color: isActive(to) ? "var(--ink-pure)" : "var(--stone-300)",
              letterSpacing: "-0.02em",
              transition: "color 0.2s ease, transform 0.35s ease",
              transitionDelay: `${idx * 0.06}s`,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/iletisim"
          style={{
            marginTop: "16px",
            fontFamily: "var(--font-display)",
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--white)",
            background: "var(--ink-pure)",
            padding: "14px 36px",
            borderRadius: "var(--radius-sm)",
            letterSpacing: "0.04em",
            transition: "transform 0.35s ease",
            transitionDelay: "0.2s",
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
          }}
        >
          TEKLİF AL
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
