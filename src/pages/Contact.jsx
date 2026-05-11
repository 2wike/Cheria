import { useState } from "react";
import { useReveal } from "../components/useReveal";

export default function Contact() {
  useReveal();

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const SERVICES = [
    "Özel Web Sitesi Geliştirme",
    "AI Chatbot Entegrasyonu",
    "WhatsApp & Instagram Botları",
    "AI İş Asistanı",
    "Randevu Sistemi",
    "QR Menü Sistemi",
    "AI Ajans Kurulumu",
    "Diğer",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 👇 input yazılınca o alanın hatasını sil
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    const name = form.name?.trim();
    const email = form.email?.trim();
    const message = form.message?.trim();

    if (!name) newErrors.name = "İsim zorunlu";

    if (!email) {
      newErrors.email = "E-posta zorunlu";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Geçerli e-posta gir";
    }

    if (!message) newErrors.message = "Mesaj zorunlu";

    setErrors(newErrors);

    console.log("VALIDATE ÇALIŞTI", newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("sending");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("company", form.company);
    formData.append("service", form.service);
    formData.append("message", form.message);

    try {
      const res = await fetch("https://formspree.io/f/meevwgdd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setStatus("sent");

        setForm({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("sending");

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("company", form.company);
    formData.append("service", form.service);
    formData.append("message", form.message);

    try {
      const res = await fetch("https://formspree.io/f/meevwgdd", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(document.querySelector("form")),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
*/
  const inputStyle = {
    width: "100%",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    fontWeight: 400,
    color: "var(--ink-pure)",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--stone-100)",
    padding: "14px 0",
    outline: "none",
    transition: "border-color 0.2s",
    appearance: "none",
    WebkitAppearance: "none",
    borderRadius: 0,
  };

  const labelStyle = {
    fontFamily: "var(--font-display)",
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "0.14em",
    color: "var(--stone-500)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "4px",
  };

  return (
    <main style={{ paddingTop: "var(--nav-h)" }}>
      {/* ── HEADER ────────────────────────────────────────────── */}
      <section
        style={{
          padding: "96px 0 80px",
          borderBottom: "1px solid var(--stone-100)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-8%",
            top: "5%",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(180px, 28vw, 380px)",
            fontWeight: 800,
            color: "var(--stone-100)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          HI
        </div>
        <div className="container" style={{ position: "relative" }}>
          <p
            style={{
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
            İletişim
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 80px)",
              fontWeight: 800,
              color: "var(--ink-pure)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "580px",
            }}
          >
            Projenizi
            <br />
            konuşalım.
          </h1>
        </div>
      </section>

      {/* ── FORM + INFO ──────────────────────────────────────── */}
      <section style={{ padding: "96px 0 120px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 420px",
              gap: "96px",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Form */}
            <div>
              {status === "sent" ? (
                <div
                  style={{
                    padding: "64px 0",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 4vw, 48px)",
                      fontWeight: 800,
                      color: "var(--ink-pure)",
                      letterSpacing: "-0.03em",
                      marginBottom: "16px",
                    }}
                  >
                    Mesajınız alındı.
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      fontWeight: 300,
                      color: "var(--ink-light)",
                      lineHeight: 1.7,
                    }}
                  >
                    En kısa sürede size geri döneceğiz. <br />
                    Ortalama yanıt süremiz 24 saatin altındadır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0 40px",
                    }}
                    className="form-grid"
                  >
                    {/* Name */}
                    <div style={{ marginBottom: "36px" }}>
                      <label style={labelStyle}>İsim Soyisim *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ahmet Yılmaz"
                        value={form.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--ink-pure)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor =
                            "var(--stone-100)")
                        }
                      />
                      {errors.name && (
                        <p style={{ color: "red" }}>{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: "36px" }}>
                      <label style={labelStyle}>E-posta *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="ahmet@sirket.com"
                        value={form.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--ink-pure)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor =
                            "var(--stone-100)")
                        }
                      />
                      {errors.email && (
                        <p style={{ color: "red" }}>{errors.email}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div style={{ marginBottom: "36px" }}>
                      <label style={labelStyle}>Şirket / Marka</label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Opsiyonel"
                        value={form.company}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--ink-pure)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor =
                            "var(--stone-100)")
                        }
                      />
                    </div>

                    {/* Service */}
                    <div style={{ marginBottom: "36px" }}>
                      <label style={labelStyle}>İlgilendiğiniz Hizmet</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{
                          ...inputStyle,
                          color: form.service
                            ? "var(--ink-pure)"
                            : "var(--stone-300)",
                          cursor: "pointer",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23C4C1BA' stroke-width='1.5'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 4px center",
                          paddingRight: "24px",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--ink-pure)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor =
                            "var(--stone-100)")
                        }
                      >
                        <option value="">Seçiniz</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "48px" }}>
                    <label style={labelStyle}>Mesajınız *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Projenizi, ihtiyaçlarınızı ve sorularınızı kısaca anlatın..."
                      value={form.message}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        resize: "none",
                        paddingTop: "16px",
                      }}
                      onFocus={(e) =>
                        (e.target.style.borderBottomColor = "var(--ink-pure)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor = "var(--stone-100)")
                      }
                    />
                    {errors.message && (
                      <p style={{ color: "red" }}>{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--white)",
                      background: "var(--ink-pure)",
                      padding: "16px 40px",
                      borderRadius: "var(--radius-sm)",
                      letterSpacing: "0.04em",
                      border: "none",
                      cursor: status === "sending" ? "default" : "pointer",
                      opacity: status === "sending" ? 0.6 : 1,
                      transition: "opacity 0.2s",
                    }}
                  >
                    {status === "sending"
                      ? "Gönderiliyor..."
                      : "Mesaj Gönder →"}
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="reveal">
              <div
                style={{
                  borderTop: "1px solid var(--stone-100)",
                  paddingTop: "40px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: "var(--stone-500)",
                    textTransform: "uppercase",
                    marginBottom: "32px",
                  }}
                >
                  Bize Ulaşın
                </p>

                {[
                  {
                    label: "E-posta",
                    value: "cheriaverse@gmail.com",
                    href: "mailto:cheriaverse@gmail.com",
                  },
                ].map(({ label, value, href }) => (
                  <div key={label} style={{ marginBottom: "32px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        color: "var(--stone-300)",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                      }}
                    >
                      {label}
                    </p>
                    <a
                      href={href}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "16px",
                        color: "var(--ink-pure)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color = "var(--stone-500)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = "var(--ink-pure)")
                      }
                    >
                      {value}
                    </a>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: "48px",
                    padding: "32px",
                    background: "var(--off-white)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--ink-pure)",
                      letterSpacing: "-0.01em",
                      marginBottom: "12px",
                    }}
                  >
                    Hızlı Yanıt
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "var(--ink-light)",
                      lineHeight: 1.7,
                    }}
                  >
                    Mesajınıza genellikle{" "}
                    <strong style={{ fontWeight: 500 }}>24 saat</strong> içinde
                    geri dönüyoruz. İlk görüşme tamamen ücretsizdir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--stone-300); }
        select option { color: var(--ink-pure); background: var(--white); }
      `}</style>
    </main>
  );
}
