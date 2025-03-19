import NavBar from "@/components/landing/NavBar";
import { AuthProvider } from "@/context/auth-context";
import "./globals.css";

export const metadata = {
  title: "PhysiquePro AI",
  description: "AI-powered fitness and nutrition tracking",
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`font-helvetica`}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}