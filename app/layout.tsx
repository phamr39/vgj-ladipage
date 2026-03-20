import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VietinBank Gold & Jewellery - Quà Tặng Cao Cấp Doanh Nghiệp",
  description:
    "VietinBank Gold & Jewellery cung cấp dịch vụ quà tặng cao cấp dành cho doanh nghiệp. Sản phẩm vàng và trang sức thiết kế độc bản, thể hiện đẳng cấp thương hiệu.",
  keywords: "quà tặng doanh nghiệp, vàng, trang sức, vietinbank gold, quà tặng cao cấp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
