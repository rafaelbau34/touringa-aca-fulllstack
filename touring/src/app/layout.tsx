import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "Touring Acapulco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
