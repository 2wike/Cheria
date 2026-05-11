import { Link } from "react-router-dom";
import { useReveal } from "../components/useReveal";

const SERVICES = [
  {
    num: "01",
    title: "Özel Web Sitesi Geliştirme",
    tag: "Web",
    desc: "Markanızı yansıtan, hız ve kullanıcı deneyimi öncelikli, sıfırdan geliştirilen web siteleri ve uygulamalar. Statik siteden tam kapsamlı web uygulamasına kadar her ihtiyaca yanıt veriyoruz.",
    bullets: [
      "Özel tasarım & geliştirme",
      "Mobil uyumlu, SEO odaklı",
      "Hızlı teslimat süreci",
      "CMS entegrasyonu",
    ],
  },
  {
    num: "02",
    title: "AI Chatbot Entegrasyonu",
    tag: "Yapay Zeka",
    desc: "Web sitenize veya platformunuza entegre edilmiş, GPT tabanlı akıllı chatbotlar. Müşteri sorularını anlayan, yanıtlayan ve satış süreçlerine yönlendiren 7/24 çalışan asistanlar.",
    bullets: [
      "GPT-4 tabanlı altyapı",
      "Markanızın tonu & dili",
      "CRM & e-ticaret entegrasyonu",
      "Detaylı analitik panel",
    ],
  },
  {
    num: "03",
    title: "WhatsApp & Instagram Botları",
    tag: "Otomasyon",
    desc: "Mesajlaşma kanallarınızı otomatikleştirin. Sipariş alma, randevu hatırlatma, ürün tanıtımı ve müşteri desteği — hepsi otomatik olarak çalışır.",
    bullets: [
      "WhatsApp Business API",
      "Instagram DM otomasyonu",
      "Akıllı mesaj akışları",
      "7/24 yanıt garantisi",
    ],
  },
  {
    num: "04",
    title: "AI İş Asistanları",
    tag: "Yapay Zeka",
    desc: "Ekibinizin tekrarlayan görevlerini devralın. Raporlama, e-posta taslakları, veri analizi ve iç iletişim süreçlerini yapay zeka ile hızlandırın.",
    bullets: [
      "Özel iş akışı tasarımı",
      "Belge analizi & özetleme",
      "Ekip araçlarına entegrasyon",
      "Güvenli & özel altyapı",
    ],
  },
  {
    num: "05",
    title: "Randevu Sistemleri",
    tag: "Yazılım",
    desc: "Kliniklerden güzellik salonlarına, danışmanlık firmalarından restoranına — markanıza özel, kullanımı kolay dijital randevu sistemi.",
    bullets: [
      "SMS & e-posta hatırlatmaları",
      "Takvim senkronizasyonu",
      "Ödeme entegrasyonu",
      "Mobil uyumlu panel",
    ],
  },
  {
    num: "06",
    title: "QR Menü Sistemleri",
    tag: "Yazılım",
    desc: "Restoran ve kafeniz için anlık güncellenebilir, çok dilli, analitik destekli dijital menü. Kağıt menü maliyetini sıfırlayın.",
    bullets: [
      "Anlık içerik güncelleme",
      "Çok dil desteği",
      "Sipariş alma opsiyonu",
      "Ziyaretçi analitik paneli",
    ],
  },
  {
    num: "07",
    title: "AI Ajans Kurulumu",
    tag: "Danışmanlık",
    desc: "Kendi yapay zeka ajansınızı kurmak mı istiyorsunuz? Teknik altyapı, süreç tasarımı ve operasyon modeli konularında uçtan uca rehberlik sunuyoruz.",
    bullets: [
      "İş modeli & fiyatlandırma",
      "Teknik altyapı kurulumu",
      "Araç & platform seçimi",
      "Süreç & ekip eğitimi",
    ],
  },
];

export default function Services() {
  useReveal();

  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>

      {/* ── PAGE HEADER ───────────────────────────────────────── */}
      <section style={{
        padding: "96px 0 80px",
        borderBottom: "1px solid var(--stone-100)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          right: "-10%",
          top: "10%",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(180px, 28vw, 380px)",
          fontWeight: 800,
          color: "var(--stone-100)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}>
          SVC
        </div>
        <div className="container" style={{ position: "relative" }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.16em",
            color: "var(--stone-500)",
            textTransform: "uppercase",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}>
            <span style={{ display: "inline-block", width: "28px", height: "1px", background: "var(--stone-300)" }} />
            Hizmetler
          </p>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 800,
            color: "var(--ink-pure)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "640px",
            marginBottom: "24px",
          }}>
            Sunduğumuz<br />çözümler.
          </h1>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: 300,
            color: "var(--ink-light)",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}>
            Yapay zeka ve yazılım gücüyle işletmenizin ihtiyaçlarına
            özel, ölçeklenebilir dijital çözümler.
          </p>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────────────── */}
      <section style={{ padding: "80px 0 120px" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            background: "var(--stone-100)",
            border: "1px solid var(--stone-100)",
          }}
          className="services-grid"
          >
            {SERVICES.map(({ num, title, tag, desc, bullets }, i) => (
              <div key={num}
                className={`reveal reveal-d${(i % 3) + 1}`}
                style={{
                  background: "var(--white)",
                  padding: "48px",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--off-white)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--white)"}
              >
                {/* Top row */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "28px",
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--stone-300)",
                    letterSpacing: "0.06em",
                  }}>
                    {num}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "var(--stone-500)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    border: "1px solid var(--stone-100)",
                    padding: "4px 10px",
                    borderRadius: "99px",
                  }}>
                    {tag}
                  </span>
                </div>

                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 700,
                  color: "var(--ink-pure)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}>
                  {title}
                </h2>

                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "var(--ink-light)",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}>
                  {desc}
                </p>

                {/* Bullets */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {bullets.map((b, bi) => (
                    <li key={bi} style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      color: "var(--ink-light)",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}>
                      <span style={{
                        display: "inline-block",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--stone-300)",
                        flexShrink: 0,
                      }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section style={{
        background: "var(--off-white)",
        borderTop: "1px solid var(--stone-100)",
        padding: "96px 0",
        textAlign: "center",
      }}>
        <div className="container">
          <h2 className="reveal" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 800,
            color: "var(--ink-pure)",
            letterSpacing: "-0.03em",
            marginBottom: "20px",
          }}>
            Hangi hizmete ihtiyacınız var?
          </h2>
          <p className="reveal reveal-d1" style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            fontWeight: 300,
            color: "var(--ink-light)",
            marginBottom: "40px",
          }}>
            Ücretsiz görüşme ile doğru çözümü birlikte belirleyelim.
          </p>
          <Link to="/iletisim" className="reveal reveal-d2" style={{
            display: "inline-block",
            fontFamily: "var(--font-display)",
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--white)",
            background: "var(--ink-pure)",
            padding: "16px 40px",
            borderRadius: "var(--radius-sm)",
            letterSpacing: "0.04em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => e.target.style.opacity = "0.8"}
          onMouseLeave={e => e.target.style.opacity = "1"}
          >
            Bize Ulaşın
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          [style*="padding: 48px"] { padding: 32px !important; }
        }
      `}</style>
    </main>
  );
}
