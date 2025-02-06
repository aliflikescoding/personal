import "./globals.css";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export const metadata = {
  title: "aliflikescoding",
  description: "Alif Wibowo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />{" "}
        {/* Add this line for favicon */}
      </head>
      <body className="bg-customCream text-customBlack font-roboto scroll-smooth">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
