import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" className={cn("h-full", "antialiased", "dark", "font-sans")}>
      <div className="min-h-full flex flex-col bg-[#0B0B0C]">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
