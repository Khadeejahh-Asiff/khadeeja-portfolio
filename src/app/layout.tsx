import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import CustomCursor from '@/components/custom-cursor';
import { StructuredData } from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khadeeja-portfolio.vercel.app'),
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
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Portfolio',
    'Lahore',
    'Pakistan',
  ],
  authors: [{ name: 'Khadeejah Asif' }],
  creator: 'Khadeejah Asif',
  publisher: 'Khadeejah Asif',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://khadeeja-portfolio.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khadeeja-portfolio.vercel.app',
    title: 'Khadeejah Asif - Full Stack Developer',
    description:
      'Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, and MongoDB. Building responsive, high-performance web applications.',
    siteName: 'Khadeejah Asif Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khadeejah Asif - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khadeejah Asif - Full Stack Developer',
    description:
      'Full Stack Developer skilled in React.js, Next.js, TypeScript, Node.js, and MongoDB.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2D5A5A" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Navigation />
          <main role="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
