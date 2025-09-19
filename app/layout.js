import "./globals.css";
export const metadata = {
  title: "Oak & Elm Properties | Louisville Rentals",
  description: "Quality single-family rentals in Greater Louisville. Self-tour and apply via Rently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900 antialiased">{children}</body>
    </html>
  );
}
