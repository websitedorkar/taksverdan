import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>
      <Header btn_label="Map" isMap={true}/>
        <div className="z-[2] relative pt-[50px]">{children}</div>
        <Footer />
      </div>
  );
}
