import './landing.css';

export const metadata = {
  metadataBase: new URL('https://oneassist.net.in'),
  title: 'LedgerOne | Billing, Inventory & Business Management Software',
  description:
    'Manage retail counter billing, wholesale quotations and invoices, purchases, inventory tracking, customer collections, and GST reporting with LedgerOne by OneAssist Technologies.',
  keywords: [
    'LedgerOne',
    'billing software',
    'inventory management',
    'quotation maker',
    'invoice generator',
    'GST billing software India',
    'retail billing POS',
    'business accounting software',
    'wholesale invoicing',
    'E-Way bill generator',
    'E-invoicing IRN portal',
    'balance sheet software',
    'vendor purchase management',
    'customer ledger',
    'OneAssist Technologies',
  ],
  authors: [{ name: 'OneAssist Technologies', url: 'https://oneassist.net.in' }],
  creator: 'OneAssist Technologies',
  publisher: 'OneAssist Technologies',
  alternates: {
    canonical: '/ledgerone',
  },
  openGraph: {
    title: 'LedgerOne | Billing, Inventory & Business Management Software',
    description:
      'Simplify your business finances with LedgerOne: fast counter billing, connected stock, quotations and GST-compliant invoices.',
    url: 'https://oneassist.net.in/ledgerone',
    siteName: 'LedgerOne',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/ledgerone.png',
        width: 1200,
        height: 630,
        alt: 'LedgerOne Business Workspace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LedgerOne | Billing, Inventory & Business Management Software',
    description:
      'Manage retail billing, quotations, invoices, purchases & inventory in one organized workspace.',
    images: ['/ledgerone.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/ledgerone/favicon.ico', sizes: 'any' },
      { url: '/ledgerone/ledgerone.png', type: 'image/png' },
      { url: '/ledgerone/ledgerone.jpg', type: 'image/jpeg' },
    ],
    shortcut: '/ledgerone/favicon.ico',
    apple: '/ledgerone/ledgerone.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LedgerOne',
  operatingSystem: 'All Modern Browsers, Windows, Android, iOS',
  applicationCategory: 'BusinessApplication',
  description:
    'Integrated business billing, inventory, quotation maker, invoice generator and GST management software by OneAssist Technologies.',
  url: 'https://oneassist.net.in/ledgerone',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
    description: 'Free business tools and scalable subscription plans',
  },
  creator: {
    '@type': 'Organization',
    name: 'OneAssist Technologies',
    url: 'https://oneassist.net.in',
  },
  featureList: [
    'Real-Time Dashboard & Margin Analytics',
    'Retail Counter POS Billing',
    'Instant Quotation Maker',
    'Free Invoice Generator',
    'Purchase Orders & Vendor Payables',
    'Connected Stock & Live Inventory Ledger',
    'GST Returns, E-Way Bill & E-Invoicing',
    'Multi-Account Banking & Expense Vouchers',
    'Real-Time Balance Sheet & Financial Statements',
    'Role-Based Access Control (RBAC)',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ledgerone/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/ledgerone/ledgerone.png" />
        <link rel="icon" type="image/jpeg" href="/ledgerone/ledgerone.jpg" />
        <link rel="apple-touch-icon" href="/ledgerone/ledgerone.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
