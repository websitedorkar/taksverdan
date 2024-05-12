import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div> 
        <Header btn_url="#section-map" btn_label="Map" isMap={true}/>
        <div className="overflow-hidden z-[2] relative pt-[70px]">{children}</div>
        <Footer />
      </div>
  );
}
