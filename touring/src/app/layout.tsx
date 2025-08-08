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
      <body>
        <Navbar />
        <main className="p-6 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
