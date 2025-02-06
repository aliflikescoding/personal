import "./globals.css";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Alif Wibowo",
  description: "Alif Wibowo's portfolio/personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />{" "}
        {/* Add this line for favicon */}
      </head>
      <body className="bg-customCream text-customBlack font-roboto scroll-smooth">
        {children}
        <Footer />
      </body>
    </html>
  );
}
