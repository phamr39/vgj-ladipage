import Image from "next/image";

const steps = [
  {
    num: 1,
    title: "Tư vấn ý tưởng",
    desc: "Khách hàng chia sẻ nhu cầu, đội ngũ chuyên viên sẽ hỗ trợ định hình thiết kế & ngân sách phù hợp.",
    icon: "💡",
  },
  {
    num: 2,
    title: "Thiết kế và chỉnh sửa",
    desc: "Phác thảo, dựng mẫu 3D, khách hàng góp ý và chốt thiết kế cuối cùng.",
    icon: "✏️",
  },
  {
    num: 3,
    title: "Báo giá & ký đơn đặt hàng",
    desc: "VietinBank Gold & Jewellery gửi báo giá chi tiết, hai bên ký đơn đặt hàng.",
    icon: "📋",
  },
  {
    num: 4,
    title: "Ký kết hợp đồng",
    desc: "Hai bên đi đến quyết định ký kết hợp đồng chính thức, đảm bảo quyền lợi cho cả hai phía.",
    icon: "🤝",
  },
  {
    num: 5,
    title: "Chế tác sản phẩm",
    desc: "Nghệ nhân tiến hành chế tác đơn hàng theo yêu cầu, đúng tiêu chuẩn chất lượng đã cam kết.",
    icon: "⚒️",
  },
  {
    num: 6,
    title: "Bàn giao & thanh toán",
    desc: "Khách nhận sản phẩm, chứng nhận và bảo hành, đồng thời hoàn tất thanh toán.",
    icon: "📦",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider" />
          <h2
            className="text-3xl md:text-4xl font-bold text-[#212121] mb-4"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Chi Tiết Quy Trình Đặt Hàng
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Quy trình 6 bước minh bạch, đơn giản — từ ý tưởng đến sản phẩm hoàn chỉnh
            trong tay doanh nghiệp.
          </p>
        </div>

        {/* Desktop: timeline infographic image */}
        <div className="hidden md:block mb-12 relative">
          <Image
            src="https://w.ladicdn.com/s600x500/5a9eacac4912a4d655abf852/timeline-20250926023833-qxcwn.png"
            alt="Quy trình đặt hàng VietinBank Gold"
            width={900}
            height={400}
            className="mx-auto rounded-lg shadow-md"
            style={{ maxWidth: "100%", height: "auto" }}
            unoptimized
          />
        </div>

        {/* Steps grid (always visible, more detailed) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              style={{ border: "1px solid rgba(212,160,23,0.15)" }}
            >
              <div className="flex items-start gap-4">
                {/* Step number circle */}
                <div className="step-number flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <div className="text-2xl mb-1">{step.icon}</div>
                  <h3
                    className="font-bold text-[#212121] mb-2"
                    style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="mt-12 rounded-lg p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, #925e07 0%, #d4a017 100%)" }}
        >
          <h3
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Bắt đầu với bước đầu tiên ngay hôm nay
          </h3>
          <p className="text-white/90 mb-6 text-sm">
            Đội ngũ tư vấn của chúng tôi sẵn sàng lắng nghe và đồng hành cùng bạn.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#925e07] font-bold px-8 py-3 rounded-sm hover:bg-gray-100 transition-colors"
            style={{ borderRadius: "2px" }}
          >
            Liên hệ tư vấn ngay →
          </a>
        </div>
      </div>
    </section>
  );
}
