import "./globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata = {
  title: "Touring Acapulco",
  description: "Agencia de viajes en Acapulco",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-20 px-6 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
