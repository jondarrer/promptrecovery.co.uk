import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import { Metadata, Viewport } from 'next';

import './global.css';

/**
 * @type {Metadata}
 */
export const metadata = {
  'char-set': 'utf-8',
  openGraph: {
    type: 'website',
    url: 'https://promptrecovery.co.uk',
    title: 'Prompt Recovery',
    description:
      'ROADSIDE RECOVERY YOU CAN RELY ON. SERVING WATFORD & SURROUNDING AREAS. Fast, friendly and affordable help for vehicles under 4 tonnes.',
    siteName: 'promptrecovery.co.uk',
    images: [{ url: 'https://promptrecovery.co.uk/assets/images/image2.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompt Recovery',
    description:
      'ROADSIDE RECOVERY YOU CAN RELY ON. SERVING WATFORD & SURROUNDING AREAS. Fast, friendly and affordable help for vehicles under 4 tonnes.',
    images: ['https://promptrecovery.co.uk/assets/images/image2.jpg'],
  },
  formatDetection: { telephone: true },
  icons: 'https://promptrecovery.co.uk/assets/images/logo.png',
  title: 'Prompt Recovery Ltd | Rapid Response, Prompt Recovery',
  description:
    'ROADSIDE RECOVERY YOU CAN RELY ON. SERVING WATFORD & SURROUNDING AREAS. Fast, friendly and affordable help for vehicles under 4 tonnes.',
  keywords: ['recovery service', 'roadside assistance', 'Watford', 'vehicle recovery', 'prompt recovery'],
};

/**
 * @type {Viewport}
 */
export const viewport = {
  themeColor: '#a21212',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <div className="app">
          <Navbar />

          <main className="main-content">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
reportWebVitals();
