import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const outfit = Outfit({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "iBuiltThis - Share your creations, discover new launches",
  description: `A community platform for creators to showcase their apps, AI tools,
                        SaaS products, and creative projects. Authentic launches, real
                        builders, genuine feedback.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", outfit.className)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
