// Notable clients section — logo placeholders until real logos are provided
const clients = [
  "Tập đoàn Vingroup",
  "Viettel Group",
  "TH True Milk",
  "Masan Group",
  "Vietnam Airlines",
  "PVN",
  "Agribank",
  "BIDV",
  "Vietcombank",
  "Saigon Co.op",
  "FPT Corporation",
  "Hòa Phát Group",
];

export default function ClientsSection() {
  return (
    <section className="py-16" style={{ background: "#1f2129" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            Khách Hàng Tiêu Biểu
          </h2>
          <p className="text-gray-400 text-sm">
            Của VietinBank Gold &amp; Jewellery
          </p>
          <div
            className="w-12 h-0.5 mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #925e07, #d4a017)" }}
          />
        </div>

        {/* Client logo grid — marquee style */}
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-4">
            {clients.map((client) => (
              <div
                key={client}
                className="px-5 py-3 rounded text-sm font-medium text-gray-300 hover:text-[#d4a017] transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(212,160,23,0.2)",
                  minWidth: "140px",
                  textAlign: "center",
                }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Social proof numbers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Doanh nghiệp đối tác" },
            { value: "10,000+", label: "Sản phẩm đã chế tác" },
            { value: "99%", label: "Khách hàng hài lòng" },
            { value: "10+", label: "Năm kinh nghiệm" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#d4a017", fontFamily: "'EB Garamond', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
