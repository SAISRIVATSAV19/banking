import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"],variable:'--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets:['latin'],
  weight:['400','700'],
  variable:'--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "WEALTH WAVE",
  description: "Developing a full-stack application for banking and finance involves creating a comprehensive digital platform that integrates front-end and back-end technologies to facilitate banking transactions, financial management, and customer services. This abstract explores the design, development, and implementation of such an application, emphasizing security, scalability, and user experience. It discusses the incorporation of features like account management, transaction processing, data analytics, and regulatory compliance to meet the complex needs of the banking and finance sector. By leveraging cutting-edge technologies and industry best practices, this application aims to enhance efficiency, transparency, and accessibility in financial services.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
