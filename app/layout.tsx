import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const metadata = {
    title: 'Nextjs Dashboard',
    description: 'A fantastic Next.js Dashboard',
    image: 'https://example.com/image.jpg',
    url: 'https://example.com',
  };
  
  
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}