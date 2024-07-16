import { Inter, Lusitana, Playfair_Display  } from 'next/font/google';
 
const inter = Inter({ subsets: ['latin'] });

const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
});

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair-display',
  });

  export { inter, lusitana, playfairDisplay };