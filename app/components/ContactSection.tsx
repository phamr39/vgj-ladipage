"use client";

import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // In production, connect to your backend/CRM here
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div>
            <div className="section-divider" style={{ margin: "0 0 1.5rem 0" }} />
            <h2
              className="text-3xl md:text-4xl font-bold text-[#212121] mb-4"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Để Lại Thông Tin Để Được Tư Vấn Ngay
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Đội ngũ chuyên viên VietinBank Gold &amp; Jewellery sẽ liên hệ lại trong
              vòng 24 giờ làm việc để tư vấn giải pháp quà tặng phù hợp nhất với doanh
              nghiệp bạn.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  icon: "📍",
                  label: "Địa chỉ",
                  value:
                    "Tầng 6, Trung tâm Thương mại Chợ Cửa Nam, số 34 Phố Cửa Nam, Hà Nội",
                },
                {
                  icon: "📞",
                  label: "Điện thoại",
                  value: "+84 24 3938 8679",
                  link: "tel:+842439388679",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "ctvbdq@vietinbankgold.vn",
                  link: "mailto:ctvbdq@vietinbankgold.vn",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{c.icon}</span>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">
                      {c.label}
                    </div>
                    {c.link ? (
                      <a
                        href={c.link}
                        className="text-[#925e07] hover:underline font-medium text-sm"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-gray-700 text-sm">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div
              className="mt-8 p-5 rounded-lg"
              style={{ background: "var(--cream)", border: "1px solid rgba(212,160,23,0.2)" }}
            >
              <p className="text-xs font-semibold text-[#925e07] uppercase tracking-wider mb-3">
                Cam kết của chúng tôi
              </p>
              <ul className="space-y-2">
                {[
                  "Tư vấn miễn phí, không ràng buộc",
                  "Bảo mật thông tin tuyệt đối",
                  "Phản hồi trong 24 giờ làm việc",
                  "Thuộc hệ thống VietinBank uy tín",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span style={{ color: "#d4a017" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div
            className="rounded-lg p-8 shadow-lg"
            style={{ border: "1px solid rgba(212,160,23,0.25)" }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🎉</div>
                <h3
                  className="text-2xl font-bold text-[#212121] mb-3"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Cảm ơn bạn!
                </h3>
                <p className="text-gray-500 text-sm">
                  Chúng tôi đã nhận được thông tin và sẽ liên hệ lại trong vòng 24 giờ
                  làm việc.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3
                  className="text-xl font-bold text-[#212121] mb-6"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Gửi yêu cầu tư vấn
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên / Đơn vị <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A / Công ty ABC"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@company.vn"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0901 234 567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nhu cầu / Yêu cầu
                  </label>
                  <textarea
                    className="form-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Mô tả nhu cầu quà tặng của doanh nghiệp bạn (số lượng, dịp, ngân sách dự kiến...)"
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button type="submit" className="btn-gold w-full py-3 text-center">
                  Gửi Thông Tin Ngay
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Thông tin của bạn được bảo mật theo{" "}
                  <a
                    href="https://vietinbankgold.vn/chinh-sach-bao-mat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#925e07]"
                  >
                    Chính sách bảo mật
                  </a>{" "}
                  của VietinBank Gold &amp; Jewellery.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
