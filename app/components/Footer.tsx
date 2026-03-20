"use client";

import { useState } from "react";

const policyLinks = [
  { label: "Dịch vụ khách hàng", href: "#" },
  { label: "Chính sách Bán hàng", href: "#" },
  { label: "Chính sách Bảo mật", href: "#" },
  { label: "Chính sách Bảo vệ thông tin cá nhân", href: "#" },
  { label: "Thông báo Hình thức thanh toán", href: "#" },
  { label: "Chính sách Cookie", href: "#" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: integrate with email service (e.g. Mailchimp, Brevo)
    setNewsletterSent(true);
    setEmail("");
  }

  return (
    <footer style={{ background: "#1f2129", color: "white" }}>
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-2xl font-bold block"
                style={{ color: "#d4a017", fontFamily: "'EB Garamond', serif" }}
              >
                VietinBank
              </span>
              <span className="text-xs text-gray-400 tracking-widest uppercase">
                Gold &amp; Jewellery
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Thương hiệu vàng và trang sức cao cấp thuộc VietinBank — kiến tạo những
              sản phẩm quà tặng độc bản cho doanh nghiệp Việt.
            </p>
            <p className="text-gray-500 text-xs">
              Công ty TNHH MTV Vàng bạc Đá quý Ngân Hàng TMCP Công Thương Việt Nam
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ color: "#d4a017" }}
            >
              Liên hệ
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0">📍</span>
                <span>
                  Tầng 6, Trung tâm Thương mại Chợ Cửa Nam, số 34 Phố Cửa Nam, Phường Cửa
                  Nam, Hà Nội, Việt Nam
                </span>
              </li>
              <li>
                <a
                  href="tel:+842439388679"
                  className="hover:text-[#d4a017] transition-colors"
                >
                  📞 +84 24 3938 8679
                </a>
              </li>
              <li>
                <a
                  href="mailto:ctvbdq@vietinbankgold.vn"
                  className="hover:text-[#d4a017] transition-colors"
                >
                  ✉️ ctvbdq@vietinbankgold.vn
                </a>
              </li>
              <li className="text-xs text-gray-500">
                Mã số doanh nghiệp: 0105011873
                <br />
                Hà Nội, cấp ngày 02/04/2025
              </li>
            </ul>
          </div>

          {/* Newsletter / quick links */}
          <div>
            <h4
              className="font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ color: "#d4a017" }}
            >
              Đăng ký nhận tư vấn
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Để lại email và chúng tôi sẽ gửi bộ catalogue sản phẩm mới nhất.
            </p>
            {newsletterSent ? (
              <p className="text-[#d4a017] text-sm">Cảm ơn! Chúng tôi sẽ liên hệ sớm.</p>
            ) : (
              <form className="flex gap-2" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email của bạn"
                  required
                  className="flex-1 px-3 py-2 text-sm rounded-sm bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a017]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold rounded-sm text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #925e07, #d4a017)" }}
                >
                  Gửi
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Policy links */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto px-4 py-5">
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            {policyLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">
            © {new Date().getFullYear()} VietinBank Gold &amp; Jewellery. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
