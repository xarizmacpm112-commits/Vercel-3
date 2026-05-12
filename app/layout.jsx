import "./globals.css";

export const metadata = {
  title: "EstateFlow CRM",
  description: "Professional Real Estate CRM"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
