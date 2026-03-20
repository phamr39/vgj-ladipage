"use client";

import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

const categories = [
  {
    title: "Tặng phẩm ĐỘC BẢN",
    badge: "Độc quyền",
    badgeColor: "#925e07",
    desc: "Mỗi sản phẩm là một tác phẩm nghệ thuật duy nhất — thiết kế và chế tác hoàn toàn theo yêu cầu riêng của doanh nghiệp bạn.",
    images: [
      "https://w.ladicdn.com/s550x500/5a9eacac4912a4d655abf852/hinh-anh-19-9-25-luc-1626-20250924064959-lyipt.jpeg",
      "https://w.ladicdn.com/s550x450/5a9eacac4912a4d655abf852/hinh-anh-19-9-25-luc-1626-1-20250924064959-noxft.jpeg",
    ],
    features: ["Thiết kế 1-of-1", "Logo & thông điệp riêng", "Chứng nhận độc bản"],
  },
  {
    title: "Tặng phẩm THIẾT KẾ RIÊNG",
    badge: "Phổ biến",
    badgeColor: "#d4a017",
    desc: "Sản phẩm được thiết kế theo phong cách và màu sắc thương hiệu doanh nghiệp — lý tưởng cho quà tặng hội nghị, đối tác số lượng lớn.",
    images: [
      "https://w.ladicdn.com/s550x500/5a9eacac4912a4d655abf852/hinh-anh-19-9-25-luc-1626-2-20250924064959--yc5u.jpeg",
      "https://w.ladicdn.com/s700x550/5a9eacac4912a4d655abf852/hinh-anh-19-9-25-luc-1715-1-20250924064959-_jwl_.jpeg",
    ],
    features: ["Thiết kế theo brand", "Số lượng linh hoạt", "Bao bì cao cấp"],
  },
  {
    title: "Tặng phẩm VÀNG",
    badge: "Bảo toàn giá trị",
    badgeColor: "#b87a1a",
    desc: "Vàng miếng, vàng thỏi khắc logo và thông điệp — quà tặng vừa có giá trị thẩm mỹ vừa là tài sản bảo toàn theo thời gian.",
    images: [
      "https://w.ladicdn.com/s500x500/5a9eacac4912a4d655abf852/hinh-anh-2-10-25-luc-0854-20251002015734-j8ina.jpeg",
      "https://w.ladicdn.com/s500x550/5a9eacac4912a4d655abf852/hinh-anh-2-10-25-luc-0855-2-20251002015733-pvxbf.jpeg",
    ],
    features: ["Vàng SJC chuẩn", "Khắc laser chính xác", "Chứng nhận giá trị"],
  },
];

const galleryImages = [
  "https://w.ladicdn.com/s900x700/5a9eacac4912a4d655abf852/hinh-anh-19-9-25-luc-1731-20250924064931-eoffu.jpeg",
  "https://w.ladicdn.com/s700x550/5a9eacac4912a4d655abf852/hinh-anh-19-9-25-luc-1715-20250924064959-hdkap.jpeg",
  "https://w.ladicdn.com/s550x500/5a9eacac4912a4d655abf852/hinh-anh-2-10-25-luc-0854-1-20251002015734-d1qyj.jpeg",
  "https://w.ladicdn.com/s450x450/5a9eacac4912a4d655abf852/hinh-anh-2-10-25-luc-0855-20251002015733-cddo-.jpeg",
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="star-gold" style={{ fontSize: 18 }} />
      ))}
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-divider" />
          <h2
            className="text-3xl md:text-4xl font-bold text-[#212121] mb-4"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Một Số Sản Phẩm Tiêu Biểu
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Ba dòng sản phẩm chính, phù hợp với mọi quy mô và ngân sách của doanh nghiệp.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="product-card bg-white rounded-lg overflow-hidden shadow-md"
              style={{ border: "1px solid rgba(212,160,23,0.2)" }}
            >
              {/* Image pair */}
              <div className="grid grid-cols-2 h-52">
                {cat.images.map((img, j) => (
                  <div key={j} className="relative overflow-hidden">
                    <Image
                      src={img}
                      alt={cat.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Badge + rating */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded text-white"
                    style={{ background: cat.badgeColor }}
                  >
                    {cat.badge}
                  </span>
                  <StarRating />
                </div>

                <h3
                  className="font-bold text-[#212121] mb-2"
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.15rem" }}
                >
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {cat.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <span style={{ color: "#925e07" }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center text-sm font-semibold py-2.5 rounded transition-colors"
                  style={{
                    border: "1.5px solid #925e07",
                    color: "#925e07",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#925e07";
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#925e07";
                  }}
                >
                  Xem chi tiết &amp; đặt hàng
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery strip */}
        <div>
          <h3
            className="text-xl font-semibold text-center text-[#212121] mb-6"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Bộ sưu tập hình ảnh thực tế
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative h-40 rounded-lg overflow-hidden shadow-md group">
                <Image
                  src={img}
                  alt={`Sản phẩm VietinBank Gold ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
