import localFont from 'next/font/local';
import './globals.css';

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
      <body className={vazirFont.className}>
        <main className="max-w-4xl m-auto p-4 ">{children}</main>
      </body>
    </html>
  );
}
