import ModalProvider from "@/providers/modal-provider";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/providers/toast-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ToastProvider />
            <ModalProvider />

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
