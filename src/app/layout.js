import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "mysterious bunny",
  description: "The Bunny Offers Relationship Tips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         {/* 左上のロゴ画像 */}
         <div className="absolute top-0 left-0 p-4 z-20"> {/* z-index を追加 */}
          <Link href="/" passHref>
            <Image
              src="/title_logo.png"
              alt="Title Logo"
              width={150}
              height={50}
              className="w-[100px] h-auto sm:w-[100px] md:w-[115px] lg:w-[130px]"
              priority
            />
          </Link>
        </div>

         {/* ページの内容 */}
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}