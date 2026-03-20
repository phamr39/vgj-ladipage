import Image from "next/image";

export default function WhatIsSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 md:h-[450px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <Image
              src="https://w.ladicdn.com/s500x450/5a9eacac4912a4d655abf852/imgmodel9af85764-20250924064800-cv1wf.png"
              alt="Quà tặng vàng doanh nghiệp VietinBank Gold"
              fill
              className="object-cover"
              unoptimized
            />
            {/* Gold border accent */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{ border: "3px solid rgba(212,160,23,0.3)" }}
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="section-divider mb-6" style={{ margin: "0 0 1.5rem 0" }} />
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#212121]"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              Dịch Vụ Quà Tặng Cao Cấp Dành Cho Doanh Nghiệp Là Gì?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Dịch vụ quà tặng cao cấp dành cho doanh nghiệp là hình thức{" "}
              <strong className="text-[#925e07]">thiết kế độc bản</strong> — mỗi sản phẩm
              được tạo ra riêng biệt, phản ánh bản sắc và giá trị cốt lõi của doanh nghiệp
              bạn.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Từ những thanh vàng khắc logo đến trang sức đính đá quý thiết kế theo yêu
              cầu — VietinBank Gold &amp; Jewellery kiến tạo những món quà không chỉ có
              giá trị vật chất mà còn mang thông điệp trân trọng và đẳng cấp từ thương hiệu
              của bạn đến đối tác, khách hàng.
            </p>

            {/* Features list */}
            <ul className="space-y-3">
              {[
                "Thiết kế độc quyền theo yêu cầu doanh nghiệp",
                "Chế tác bởi nghệ nhân kim hoàn hàng đầu",
                "Chứng nhận chất lượng & bảo hành chính hãng",
                "Hỗ trợ đóng gói cao cấp và giao hàng toàn quốc",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "linear-gradient(135deg, #925e07, #d4a017)" }}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
