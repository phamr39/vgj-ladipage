const benefits = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Khẳng định hình ảnh & vị thế thương hiệu",
    desc: "Quà tặng cao cấp thiết kế riêng giúp doanh nghiệp truyền tải sự trân trọng và đẳng cấp, tạo ấn tượng sâu sắc với đối tác và khách hàng.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Tăng cường gắn kết hợp tác",
    desc: "Một món quà được 'đo ni đóng giày' thể hiện sự tinh tế, góp phần củng cố mối quan hệ bền chặt giữa doanh nghiệp với đối tác chiến lược.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Mang giá trị tinh thần song hành giá trị vật chất",
    desc: "Vàng và trang sức không chỉ có giá trị bảo toàn tài sản, mà còn chứa đựng thông điệp trân trọng và kỳ vọng gửi gắm từ doanh nghiệp.",
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    title: "Giải pháp linh hoạt cho nhiều dịp",
    desc: "Từ lễ ký kết hợp đồng, kỷ niệm thành lập, Tết doanh nghiệp đến hội nghị quốc tế — dịch vụ thích ứng linh hoạt cho mọi dịp và ngân sách.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20" style={{ background: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider" />
          <h2
            className="text-3xl md:text-4xl font-bold text-[#212121] mb-4"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Tại Sao Nên Lựa Chọn Dịch Vụ Này Cho Doanh Nghiệp?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Bốn lý do hàng đầu khiến hàng trăm doanh nghiệp lớn tại Việt Nam tin tưởng
            chọn VietinBank Gold &amp; Jewellery làm đối tác quà tặng chiến lược.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center group"
              style={{ border: "1px solid rgba(212,160,23,0.15)" }}
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, rgba(146,94,7,0.1), rgba(212,160,23,0.1))", color: "#925e07" }}
              >
                {b.icon}
              </div>
              <h3
                className="font-bold text-[#212121] mb-3 text-base"
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", lineHeight: "1.4" }}
              >
                {b.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
