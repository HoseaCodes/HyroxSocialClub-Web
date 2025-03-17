import NavBar from "./components/landing/NavBar";
import { AuthProvider } from "./context/auth-context";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-helvetica`}>
        <NavBar />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
