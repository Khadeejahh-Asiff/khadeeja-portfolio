import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import CustomCursor from '@/components/custom-cursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Khadeejah Asif - Full Stack Developer',
  description:
    'Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, and MongoDB. Building responsive, high-performance web applications.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Web Development',
  ],
  authors: [{ name: 'Khadeejah Asif' }],
  creator: 'Khadeejah Asif',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khadeeja-portfolio.vercel.app',
    title: 'Khadeejah Asif - Full Stack Developer',
    description:
      'Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, and MongoDB.',
    siteName: 'Khadeejah Asif Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khadeejah Asif - Full Stack Developer',
    description:
      'Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, and MongoDB.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
