import Footer from "@/components/Footer";
import PrimaryHeader from "@/components/PrimaryHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div> 
        <PrimaryHeader btn_url="#section-map" btn_label="Map" isMap={true}/>
        <div className="overflow-hidden z-[2] relative">{children}</div>
        <Footer />
      </div>
  );
}
