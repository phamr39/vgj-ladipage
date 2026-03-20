import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://w.ladicdn.com/s1050x600/5a9eacac4912a4d655abf852/541982699_122096365659007380_1615852787055286316_n-20250926025000-ndwjv.jpg"
          alt="VietinBank Gold & Jewellery - Quà tặng doanh nghiệp"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(31,33,41,0.65)" }} />
        {/* Gold gradient overlay bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to top, rgba(31,33,41,0.8), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32 pt-40">
        {/* Badge */}
        <div
          className="inline-block mb-6 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{ background: "rgba(146,94,7,0.85)", border: "1px solid #d4a017" }}
        >
          Thương hiệu thuộc VietinBank
        </div>

        {/* Main headline */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          <span className="gold-gradient-text">VietinBank Gold &amp; Jewellery</span>
          <br />
          <span className="text-white">Quà Tặng Cao Cấp Doanh Nghiệp</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Thiết kế độc bản — Chế tác tinh xảo — Khẳng định đẳng cấp thương hiệu
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="btn-gold text-base px-10 py-4 rounded-sm"
            style={{ borderRadius: "2px" }}
          >
            Nhận Tư Vấn Miễn Phí
          </a>
          <a
            href="#products"
            className="text-base px-10 py-4 rounded-sm border-2 border-[#d4a017] text-[#d4a017] hover:bg-[#d4a017] hover:text-white transition-colors font-semibold"
            style={{ borderRadius: "2px" }}
          >
            Xem Sản Phẩm
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Năm kinh nghiệm" },
            { value: "500+", label: "Khách hàng doanh nghiệp" },
            { value: "100%", label: "Thiết kế độc bản" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-bold"
                style={{ color: "#d4a017", fontFamily: "'EB Garamond', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#d4a017] flex items-start justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-[#d4a017]" />
        </div>
      </div>
    </section>
  );
}
