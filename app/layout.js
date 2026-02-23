import './globals.css';

export const metadata = {
  title: 'HFPL Auction Platform',
  description: 'Herga Friends Premier League Auction System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
