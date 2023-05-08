import '@/styles/globals.css'
import { Comic_Neue } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const inter = Comic_Neue ({ subsets: ['latin'], weight:['700']});
 
export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}