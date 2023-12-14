import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const vazirFont = localFont({
  src: '../../public/font/Vazirmatn-Regular.woff2',
});

export const metadata = {
  title: 'Digital Market',
  description: 'Mobile Shopping',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="rtl-tag">
      <body
        className={`${vazirFont.className} bg-gradient-to-tr from-blue-200 to-transparent `}
      >
        <main className="max-w-4xl m-auto p-4 flex flex-col justify-between h-screen  ">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
