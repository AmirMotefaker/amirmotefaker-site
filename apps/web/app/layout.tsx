import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AmirMotefaker.ir',
  description: 'Modern AI Founder Platform'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
