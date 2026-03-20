import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "#1f2129" }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(212,160,23,0.3) 10px,
            rgba(212,160,23,0.3) 11px
          )`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div
              className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded"
              style={{ background: "rgba(146,94,7,0.5)", color: "#d4a017" }}
            >
              Về Chúng Tôi
            </div>
            <div
              className="w-14 h-0.5 mb-6"
              style={{ background: "linear-gradient(90deg, #925e07, #d4a017)" }}
            />
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              VietinBank Gold &amp; Jewellery
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              VietinBank Gold &amp; Jewellery là thương hiệu thuộc{" "}
              <span style={{ color: "#d4a017" }}>VietinBank</span>, mang sứ mệnh kiến tạo
              những sản phẩm vàng và trang sức cao cấp, kết hợp giữa giá trị truyền thống
              và tinh hoa chế tác hiện đại.
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              Với đội ngũ nghệ nhân kim hoàn giàu kinh nghiệm và nền tảng uy tín của một
              ngân hàng thương mại hàng đầu Việt Nam, chúng tôi cam kết mang đến những
              sản phẩm quà tặng không chỉ đẹp mà còn có giá trị bền vững theo thời gian.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Mã số doanh nghiệp", value: "0105011873" },
                { label: "Năm thành lập", value: "2025" },
                { label: "Trực thuộc", value: "VietinBank" },
                { label: "Trụ sở", value: "Hà Nội, Việt Nam" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(212,160,23,0.2)" }}
                >
                  <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="https://w.ladicdn.com/s1050x700/5a9eacac4912a4d655abf852/thiet-ke-chua-co-ten-20250924073724-gldkb.png"
              alt="VietinBank Gold & Jewellery - Chế tác vàng cao cấp"
              fill
              className="object-cover"
              unoptimized
            />
            {/* Gold frame overlay */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{ border: "2px solid rgba(212,160,23,0.5)" }}
            />
            {/* Corner accents */}
            <div
              className="absolute top-3 left-3 w-8 h-8"
              style={{ borderTop: "2px solid #d4a017", borderLeft: "2px solid #d4a017" }}
            />
            <div
              className="absolute bottom-3 right-3 w-8 h-8"
              style={{ borderBottom: "2px solid #d4a017", borderRight: "2px solid #d4a017" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
