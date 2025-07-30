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
      <body className="bg-gradient-to-b from-cyan-50 to-white text-gray-900 font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-5xl mx-auto px-6 py-10">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-500 py-6">
          &copy; {new Date().getFullYear()} Touring Acapulco. Todos los derechos
          reservados.
        </footer>
      </body>
    </html>
  );
}
