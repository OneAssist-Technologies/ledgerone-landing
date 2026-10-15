'use client';

import React, { useState, useEffect } from 'react';

const iconPaths = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  bag: (
    <>
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </>
  ),
  box: (
    <>
      <path d="m4 7 8-4 8 4-8 4-8-4Z" />
      <path d="m4 7 8 4 8-4v10l-8 4-8-4V7ZM12 11v10" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5l8-3v19M12 8h8v13M8 7v2M8 12v2M8 17v2M16 12v2M16 17v2M2 21h20" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  document: (
    <>
      <path d="M6 2h8l4 4v16H6V2Z" />
      <path d="M14 2v5h5M9 12h6M9 16h6" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  file: (
    <>
      <path d="M6 2h8l4 4v16H6V2Z" />
      <path d="M14 2v5h5M9 12h6M9 16h4" />
    </>
  ),
  layers: (
    <>
      <path d="m3 8 9-5 9 5-9 5-9-5Z" />
      <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  mobile: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M10 18h4" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M18 12a6 6 0 0 0-10-4L4 12M6 12a6 6 0 0 0 10 4l4-4" />
    </>
  ),
  report: (
    <>
      <path d="M5 21V3h14v18H5Z" />
      <path d="M9 16v-4M12 16V8M15 16v-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 20 5v6c0 5-3.4 8.6-8 11-4.6-2.4-8-6-8-11V5l8-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" />
      <path d="m18 14 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
    </>
  ),
  store: (
    <>
      <path d="M4 10v11h16V10M3 6l2-3h14l2 3v2a3 3 0 0 1-5 2 3 3 0 0 1-4 0 3 3 0 0 1-4 0 3 3 0 0 1-5-2V6Z" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  truck: (
    <>
      <path d="M3 5h11v12H3V5ZM14 9h4l3 4v4h-7V9Z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5" />
    </>
  ),
  wallet: (
    <>
      <path d="M4 6h15v14H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13" />
      <path d="M14 10h7v5h-7a2.5 2.5 0 0 1 0-5Z" />
    </>
  ),
  scale: (
    <>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h18" />
    </>
  ),
  landmark: (
    <>
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </>
  ),
  creditcard: (
    <>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </>
  ),
  upload: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </>
  ),
  tag: (
    <>
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <circle cx="7" cy="7" r="1.5" />
    </>
  ),
};

function Icon({ name, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <a className="brand" href="#home">
      <img src="/ledgerone/ledgerone-logo.jpg" alt="LedgerOne logo" />
      <span>
        <b>Ledger</b>
        <strong>One</strong>
        <small>BY ONEASSIST TECHNOLOGIES</small>
      </span>
    </a>
  );
}

function Btn({ children, href, kind = 'primary', onClick, type = 'button' }) {
  return href ? (
    <a className={`btn ${kind}`} href={href}>
      {children}
    </a>
  ) : (
    <button className={`btn ${kind}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

function Title({ eyebrow, title, text }) {
  return (
    <div className="title">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

const features = {
  'Sales & Billing': [
    [
      'Retail POS Counter Billing',
      'High-speed counter sales interface with barcode scanner support, split payment modes (Cash, UPI, Card), and thermal receipt printing.',
      'store',
    ],
    [
      'B2B GST Tax Invoicing',
      'Generate compliant tax invoices with itemized HSN/SAC codes, auto CGST/SGST/IGST calculations, and customizable terms.',
      'receipt',
    ],
    [
      'Quotation & Estimation',
      'Build commercial quotations and estimates with one-click conversion into finalized sales invoices.',
      'document',
    ],
    [
      'Customer Credit & Collections',
      'Set customer credit limits, monitor overdue receivables, and record partial or full inward payment receipts.',
      'wallet',
    ],
    [
      'Promotional Discounts & Offers',
      'Configure percentage and flat promotional discounts, seasonal coupon codes, and item-level price rules.',
      'tag',
    ],
    [
      'Customer Directory & Ledgers',
      'Maintain comprehensive client profiles, GSTIN validation, and chronological transaction balance ledgers.',
      'users',
    ],
  ],
  'Purchases & Vendors': [
    [
      'Purchase Orders & Inward Bills',
      'Record inward supplier bills, automatically update stock quantities, and log supplier invoice reference numbers.',
      'bag',
    ],
    [
      'Vendor Directory & GSTIN',
      'Maintain vendor contact information, GSTIN details, credit periods, and chronological purchase histories.',
      'building',
    ],
    [
      'Vendor Payment Vouchers',
      'Record outward payments to suppliers against pending purchase bills with multi-account debit tracking.',
      'wallet',
    ],
    [
      'Debit Notes & Purchase Returns',
      'Process supplier returns and debit notes with automatic inventory deductions and vendor ledger adjustments.',
      'refresh',
    ],
    [
      'Procurement Cost Analytics',
      'Analyze historical purchase costs and supplier price variations to optimize procurement spending.',
      'chart',
    ],
    [
      'Bulk Inward Stock Receipt',
      'Rapidly add incoming inventory using barcode scanning and bulk line-item entry.',
      'upload',
    ],
  ],
  'Inventory & Stock': [
    [
      'Product Master & Catalog',
      'Organize products with SKU, barcodes, HSN/SAC codes, categories, brands, and multi-tier pricing.',
      'box',
    ],
    [
      'Real-Time Stock Movement Ledger',
      'Track every unit in real time through inward purchases, counter sales, returns, and manual adjustments.',
      'layers',
    ],
    [
      'Low Stock & Reorder Alerts',
      'Proactive alerts when product quantities fall below safety thresholds to prevent stockouts.',
      'eye',
    ],
    [
      'Stock Audits & Adjustments',
      'Perform periodic physical inventory counts, record damaged or expired goods, and balance stock with audit notes.',
      'refresh',
    ],
    [
      'Barcode & QR Label Generator',
      'Generate and print custom barcode and QR labels directly for items and packaging shelves.',
      'tag',
    ],
    [
      'Multi-Unit of Measurement (UoM)',
      'Support diverse units (Pieces, Kg, Liters, Boxes, Bundles) with automated conversion factors.',
      'scale',
    ],
  ],
  'GST & Statutory Compliance': [
    [
      'GSTR-1 Outward Supplies',
      'Auto-generate GSTR-1 summaries classified by B2B, B2CL, B2CS, credit notes, and nil-rated supplies.',
      'scale',
    ],
    [
      'GSTR-2B Auto-Reconciliation',
      'Import government GSTR-2B JSON to instantly reconcile vendor ITC claims against purchase books.',
      'document',
    ],
    [
      'GSTR-3B Summary Computations',
      'Auto-compute eligible input tax credit, outward tax liability, and net tax payable with zero manual formulas.',
      'chart',
    ],
    [
      'Government E-Way Bills',
      'Directly generate and manage Part-A & Part-B E-Way Bills with transporter IDs, vehicle numbers, and distance calculation.',
      'truck',
    ],
    [
      'IRP E-Invoicing & IRN',
      'Comply with B2B e-invoicing mandates featuring instant IRN generation and digitally signed QR code stamping.',
      'file',
    ],
    [
      'Configurable Tax Rates Engine',
      'Automated handling of 0%, 5%, 12%, 18%, 28% GST, cess, exemptions, and intra-state vs inter-state tax splits.',
      'shield',
    ],
  ],
  'Finance & Banking': [
    [
      'Multi-Bank & Cash Accounts',
      'Manage multiple bank current accounts, savings, and cash counter registers with real-time balance tracking.',
      'landmark',
    ],
    [
      'Bank Reconciliation (BRS)',
      'Upload bank statements in Excel, CSV, or PDF to match transactions against internal payment vouchers.',
      'upload',
    ],
    [
      'Operating Expense Vouchers',
      'Categorize business overheads including rent, utility bills, employee salaries, and freight logistics.',
      'wallet',
    ],
    [
      'Real-Time Balance Sheet',
      'Generate live Balance Sheets reflecting current assets, liabilities, and owner equity dynamically.',
      'scale',
    ],
    [
      'Profit & Loss Statement',
      'Inspect real-time gross margin and net profitability across any custom date range or fiscal quarter.',
      'chart',
    ],
    [
      'Contra Fund Transfers',
      'Transfer funds seamlessly between cash registers and bank accounts with synchronized double-entry logging.',
      'refresh',
    ],
  ],
  'Analytics & Administration': [
    [
      'Executive Business Dashboard',
      'Gain instant clarity on daily revenue, gross margins, cash position, receivables, and payables at a glance.',
      'chart',
    ],
    [
      'Granular Role-Based Access (RBAC)',
      'Control employee access with pre-configured roles for Admins, Store Managers, Accountants, and Cashiers.',
      'shield',
    ],
    [
      'Party Aging Analysis',
      'Identify overdue customer receivables categorized into 0-30, 31-60, and 60+ day aging intervals.',
      'eye',
    ],
    [
      'Bulk Data Import (Excel/CSV)',
      'Migrate existing items, customers, suppliers, and opening balances in seconds via CSV/Excel templates.',
      'upload',
    ],
    [
      'Thermal & A4 Invoice Customizer',
      'Switch between 2-inch/3-inch thermal POS receipt layouts and branded A4/A5 tax invoices with custom logos.',
      'receipt',
    ],
    [
      'Company Profile & Audit Trail',
      'Configure multi-branch company details, currency symbols, invoice numbering prefixes, and security logs.',
      'building',
    ],
  ],
};

const previews = {
  Dashboard: [
    'A clear view of your business day',
    'Bring operational shortcuts, revenue metrics, stock visibility, receivables, and cash flow into one clean workspace.',
    'dashboard',
  ],
  'Retail Billing': [
    'Fast, focused counter billing',
    'Select products, scan barcodes, split payment modes (Cash/UPI/Card), and generate instant thermal POS receipts.',
    'billing',
  ],
  'Quotations & Invoices': [
    'Professional GST documents',
    'Prepare detailed customer documents with itemized HSN codes, multi-tax breakdowns, and one-click conversion.',
    'invoice',
  ],
  'Inventory & Stock': [
    'Live stock ledger & reorder alerts',
    'Track item movement across inward purchases, counter sales, barcode labels, and physical stock adjustments.',
    'inventory',
  ],
  'GST & Compliance': [
    'GSTR-1, 2B matching & E-Way Bills',
    'Automated tax engine, GSTR-2B JSON reconciliation, government E-Way bills, and IRP E-Invoicing with QR codes.',
    'gst',
  ],
  'Banking & Balance Sheet': [
    'Multi-bank BRS & financial statements',
    'Reconcile bank statements, track petty cash, log operational overheads, and inspect real-time Balance Sheets.',
    'banking',
  ],
};

const faqs = [
  [
    'What is LedgerOne?',
    'LedgerOne is a comprehensive business billing, inventory, and operations ERP platform by OneAssist Technologies. It connects retail POS billing, wholesale invoicing, purchases, real-time inventory, GST compliance, multi-bank reconciliation, and financial reporting in a single unified workspace.',
  ],
  [
    'Who is LedgerOne designed for?',
    'LedgerOne is built for retail shops, wholesale traders, distributors, manufacturers, and growing GST-registered enterprises that need structured daily operations without the complexity of legacy accounting software.',
  ],
  [
    'How does retail POS billing differ from wholesale invoicing?',
    'Retail POS billing is tailored for fast counter sales with barcode scanner support, split tenders (Cash, UPI, Card), and instant thermal receipt printing. Wholesale invoicing handles B2B transactions with customer quotations, HSN/SAC codes, multi-tax breakdowns, payment terms, and partial collection tracking.',
  ],
  [
    'Does LedgerOne support GST compliance, E-Way Bills, and E-Invoicing?',
    'Yes. LedgerOne features a built-in multi-tier GST engine (0%, 5%, 12%, 18%, 28%), automatic GSTR-1 and GSTR-3B summaries, government GSTR-2B JSON auto-reconciliation, direct E-Way Bill generation (Part-A/B), and IRP e-invoicing with digitally signed QR codes.',
  ],
  [
    'How does inventory tracking stay synchronized with sales and purchases?',
    'Every inward purchase automatically increases item stock and logs supplier invoice details. Counter sales and tax invoices deduct stock in real time. LedgerOne also provides low-stock reorder alerts, physical inventory adjustment audits, and custom barcode label generation.',
  ],
  [
    'Can I reconcile multiple bank accounts and upload bank statements?',
    'Yes. LedgerOne supports multi-bank accounts and cash registers. You can upload bank statements in Excel, CSV, or PDF to perform Bank Reconciliation (BRS), match vouchers, track operating expenses, and view an automated Balance Sheet and Profit & Loss statement.',
  ],
  [
    'Can I import existing data from Excel, CSV, or another software?',
    'Yes. LedgerOne includes built-in bulk data import tools allowing you to import your entire product catalog, customer directory, vendor profiles, and opening stock balances in seconds using standard spreadsheets.',
  ],
  [
    'Can multiple team members use LedgerOne with custom roles?',
    'Yes. LedgerOne features granular Role-Based Access Control (RBAC). You can assign distinct permissions for Cashiers (counter billing only), Store Managers (inventory & purchases), Accountants (banking & GST), and Administrators (full access).',
  ],
  [
    'Can I try creating quotations and invoices without logging in?',
    'Yes! LedgerOne provides interactive in-browser Quotation Maker and Invoice Generator tools right on this landing page. You can customize items, pricing, and taxes, and preview or print them immediately.',
  ],
  [
    'Is a mobile application available?',
    'Yes. LedgerOne includes a dedicated mobile experience for checking sales, monitoring live stock levels, and viewing business summaries on the go.',
  ],
];

function Mock({ type = 'dashboard' }) {
  const activeIconIndex =
    type === 'inventory'
      ? 2
      : type === 'invoice' || type === 'billing'
      ? 1
      : type === 'gst'
      ? 4
      : type === 'banking'
      ? 5
      : 0;

  const headerTitle =
    type === 'billing'
      ? 'Retail POS Billing'
      : type === 'invoice'
      ? 'Tax Invoices & Quotations'
      : type === 'inventory'
      ? 'Live Inventory & Stock'
      : type === 'gst'
      ? 'GST Returns & Compliance'
      : type === 'banking'
      ? 'Banking & Balance Sheet'
      : 'Executive Business Dashboard';

  const statsData =
    type === 'gst'
      ? [
          ['GSTR-1 Outward', '₹4,18,500', 'scale'],
          ['GSTR-2B Reconciled', '98.6% ITC Match', 'document'],
          ['E-Way & E-Invoice', '24 Compliant', 'truck'],
        ]
      : type === 'banking'
      ? [
          ['Total Bank Balance', '₹4,61,300', 'landmark'],
          ['BRS Auto-Reconciled', '96% Matched', 'upload'],
          ['Net Profit (MTD)', '+₹1,84,200', 'chart'],
        ]
      : type === 'inventory'
      ? [
          ['Active Products', '428 SKUs', 'box'],
          ['Reorder Alerts', '3 Low Stock', 'eye'],
          ['Total Stock Value', '₹8,42,650', 'layers'],
        ]
      : [
          ['Today’s Sales', '₹24,860', 'chart'],
          ['Active Orders', '18 Invoices', 'receipt'],
          ['Receivables', '₹68,400', 'wallet'],
        ];

  const barTitle =
    type === 'gst'
      ? 'Monthly GST Output vs Input'
      : type === 'banking'
      ? 'Cash Flow & Fund Movement'
      : type === 'inventory'
      ? 'Stock Inward vs Outward'
      : 'Weekly Sales Revenue';

  const activityTitle =
    type === 'gst'
      ? 'Statutory Filings'
      : type === 'banking'
      ? 'Recent Bank Transactions'
      : type === 'inventory'
      ? 'Inventory Stock Log'
      : 'Recent Activity';

  const activityData =
    type === 'gst'
      ? [
          ['GSTR-1 Monthly Summary', 'Eligible Outward Supplies', '₹52,430'],
          ['GSTR-2B Auto-Reconciled', '52 of 53 Invoices Match', '₹38,210'],
          ['E-Invoice IRN Generated', 'IRP Stamped QR #9102', '₹1,24,000'],
        ]
      : type === 'banking'
      ? [
          ['HDFC Bank Statement', 'Direct RTGS Receipt', '+₹85,000'],
          ['Supplier Settlement Chq', 'Acct: 50200049281', '-₹34,500'],
          ['Operating Expense Voucher', 'Office Rent & Power', '-₹18,000'],
        ]
      : type === 'inventory'
      ? [
          ['Inward Goods #PUR-402', 'Bluebay Suppliers (+120)', '₹34,800'],
          ['Physical Stock Audit', 'Damaged / Wastage (-2)', '-₹1,400'],
          ['Counter POS Outward', 'Counter Sale Batch (-8)', '₹6,400'],
        ]
      : [
          ['Tax Invoice #INV-842', 'Aster Retail Pvt Ltd', '₹12,400'],
          ['Purchase Bill #PUR-291', 'Bluebay Supplies', '₹8,720'],
          ['Retail POS Sale #POS-715', 'Counter Walk-in Sale', '₹2,897'],
        ];

  return (
    <div className="mock" aria-hidden="true">
      <aside>
        <b>L1</b>
        {['chart', 'receipt', 'box', 'bag', 'scale', 'landmark'].map((x, i) => (
          <i className={i === activeIconIndex ? 'on' : ''} key={x}>
            <Icon name={x} size={15} />
          </i>
        ))}
      </aside>
      <div className="mockbody">
        <header>
          <span>
            <small>MY WORKSPACE</small>
            <b>{headerTitle}</b>
          </span>
          <i>AS</i>
        </header>
        {type === 'invoice' ? (
          <div className="paper">
            <header>
              <b>TAX INVOICE</b>
              <span>#INV-0248</span>
            </header>
            <div className="parties">
              <span>
                FROM<b>Northstar Traders Pvt Ltd</b>
                <small style={{ fontSize: '6px', color: '#8593a6' }}>GSTIN: 29ABCDE1234F1Z5</small>
              </span>
              <span>
                BILLED TO<b>Aster Retail Enterprises</b>
                <small style={{ fontSize: '6px', color: '#8593a6' }}>GSTIN: 29XYZPA9876Q1Z2</small>
              </span>
            </div>
            <div className="table">
              <b>Item &amp; HSN</b>
              <b>Qty</b>
              <b>Amount</b>
              <span>Product Starter Pack (8471)</span>
              <span>12</span>
              <span>₹24,000</span>
              <span>Delivery &amp; Setup (9983)</span>
              <span>1</span>
              <span>₹4,500</span>
            </div>
            <strong>Total (Incl. 18% GST) &nbsp; ₹33,630</strong>
          </div>
        ) : type === 'billing' ? (
          <div className="pos">
            <div>
              {['Classic Tee', 'Desk Lamp', 'Travel Bag', 'Notebook'].map((x, i) => (
                <article key={x}>
                  <i>{['TS', 'DL', 'TB', 'NB'][i]}</i>
                  <b>{x}</b>
                  <small>₹{[799, 1299, 1899, 149][i]}</small>
                </article>
              ))}
            </div>
            <aside>
              <b>Current sale</b>
              <p>
                Classic Tee × 2 <strong>₹1,598</strong>
              </p>
              <p>
                Desk Lamp × 1 <strong>₹1,299</strong>
              </p>
              <h4>
                Total <b>₹2,897</b>
              </h4>
              <button type="button">Complete sale (Cash/UPI)</button>
            </aside>
          </div>
        ) : (
          <>
            <div className="stats">
              {statsData.map(([a, b, c]) => (
                <article key={a}>
                  <i>
                    <Icon name={c} size={15} />
                  </i>
                  <small>{a}</small>
                  <b>{b}</b>
                  <em>Live workspace data</em>
                </article>
              ))}
            </div>
            <div className="mocklower">
              <div className="bars">
                <b>{barTitle}</b>
                <section>
                  {[38, 61, 47, 76, 56, 88, 68].map((x, i) => (
                    <i key={i} style={{ height: `${x}%` }} />
                  ))}
                </section>
              </div>
              <div className="activity">
                <b>{activityTitle}</b>
                {activityData.map((x) => (
                  <p key={x[0]}>
                    <i />
                    <span>
                      {x[0]}
                      <small>{x[1]}</small>
                    </span>
                    <b>{x[2]}</b>
                  </p>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Phone({ large = false }) {
  return (
    <div className={`phone ${large ? 'large' : ''}`} aria-hidden="true">
      <i className="speaker" />
      <header>
        <img src="/ledgerone/ledgerone-logo.jpg" alt="" />
        <span>
          <small>Welcome back</small>
          <b>LedgerOne</b>
        </span>
      </header>
      <div className="balance">
        <small>Business overview</small>
        <b>₹48,320</b>
        <span>Illustrative balance</span>
      </div>
      <div className="quick">
        <i>
          <Icon name="receipt" size={17} />
          Sale
        </i>
        <i>
          <Icon name="box" size={17} />
          Stock
        </i>
        <i>
          <Icon name="users" size={17} />
          Party
        </i>
      </div>
      <section>
        <b>Recent activity</b>
        {[
          ['AR', 'Aster Retail', 'Invoice', '₹8,400'],
          ['BS', 'Bluebay Supply', 'Purchase', '₹6,250'],
          ['RS', 'Retail sale', 'Counter', '₹2,897'],
        ].map((x) => (
          <p key={x[0]}>
            <i>{x[0]}</i>
            <span>
              {x[1]}
              <small>{x[2]}</small>
            </span>
            <strong>{x[3]}</strong>
          </p>
        ))}
      </section>
    </div>
  );
}

function Builder({ kind, close }) {
  const [business, setBusiness] = useState('Your Business');
  const [customer, setCustomer] = useState('Customer Name');
  const [item, setItem] = useState('Product or service');
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(1000);
  const [tax, setTax] = useState(0);

  const subtotal = Math.max(0, qty) * Math.max(0, price);
  const taxTotal = (subtotal * Math.max(0, tax)) / 100;
  const total = subtotal + taxTotal;

  return (
    <div className="backdrop" onMouseDown={close}>
      <div
        className="builder"
        role="dialog"
        aria-modal="true"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <header>
          <span>
            <small>CLIENT-SIDE PREVIEW</small>
            <h2>{kind} Builder</h2>
          </span>
          <button onClick={close} aria-label="Close" type="button">
            <Icon name="close" />
          </button>
        </header>
        <div className="buildergrid">
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Business name
              <input value={business} onChange={(e) => setBusiness(e.target.value)} />
            </label>
            <label>
              Customer name
              <input value={customer} onChange={(e) => setCustomer(e.target.value)} />
            </label>
            <label>
              Item description
              <input value={item} onChange={(e) => setItem(e.target.value)} />
            </label>
            <div className="fields">
              <label>
                Quantity
                <input
                  type="number"
                  min="0"
                  value={qty}
                  onChange={(e) => setQty(+e.target.value)}
                />
              </label>
              <label>
                Unit price (₹)
                <input
                  type="number"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(+e.target.value)}
                />
              </label>
              <label>
                Tax rate (%)
                <input
                  type="number"
                  min="0"
                  value={tax}
                  onChange={(e) => setTax(+e.target.value)}
                />
              </label>
            </div>
            <p>
              <Icon name="shield" size={16} /> This preview does not post transactions, alter stock or
              connect to a company workspace.
            </p>
          </form>
          <article className="document">
            <header>
              <span>
                <img src="/ledgerone/ledgerone-logo.jpg" alt="" />
                <b>{business || 'Your Business'}</b>
              </span>
              <strong>{kind.toUpperCase()}</strong>
            </header>
            <div className="docmeta">
              <span>
                PREPARED FOR<b>{customer || 'Customer Name'}</b>
              </span>
              <span>
                {kind.toUpperCase()} NO.<b>{kind === 'Invoice' ? 'INV-001' : 'QTN-001'}</b>
              </span>
            </div>
            <div className="docline head">
              <span>Description</span>
              <span>Qty</span>
              <span>Rate</span>
              <span>Amount</span>
            </div>
            <div className="docline">
              <span>{item}</span>
              <span>{qty}</span>
              <span>₹{price.toLocaleString('en-IN')}</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="totals">
              <p>
                Subtotal <b>₹{subtotal.toLocaleString('en-IN')}</b>
              </p>
              <p>
                Tax ({tax}%) <b>₹{taxTotal.toLocaleString('en-IN')}</b>
              </p>
              <p>
                Grand total <strong>₹{total.toLocaleString('en-IN')}</strong>
              </p>
            </div>
            <small>Illustrative document preview</small>
          </article>
        </div>
        <footer>
          <Btn kind="outline" onClick={() => window.print()}>
            Print / save as PDF
          </Btn>
          <Btn
            onClick={() => {
              setBusiness('Your Business');
              setCustomer('Customer Name');
              setItem('Product or service');
              setQty(1);
              setPrice(1000);
              setTax(0);
            }}
          >
            <Icon name="refresh" size={17} />
            Start new
          </Btn>
        </footer>
      </div>
    </div>
  );
}

export default function LandingView() {
  const [menu, setMenu] = useState(false);
  const [feature, setFeature] = useState('Sales & Billing');
  const [preview, setPreview] = useState('Dashboard');
  const [faq, setFaq] = useState(0);
  const [builder, setBuilder] = useState(null);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [companySlug, setCompanySlug] = useState('company');

  useEffect(() => {
    document.title = 'LedgerOne | Billing, Inventory & Business Management Software';
    const description =
      document.querySelector('meta[name="description"]') ??
      document.head.appendChild(document.createElement('meta'));
    description.setAttribute('name', 'description');
    description.setAttribute(
      'content',
      'Manage retail POS billing, wholesale GST tax invoices, purchases, real-time inventory, GSTR-1/2B statutory compliance, and multi-bank BRS with LedgerOne.'
    );

    // Ensure favicon is set
    let icon = document.querySelector("link[rel*='icon']");
    if (!icon) {
      icon = document.createElement('link');
      icon.rel = 'icon';
      document.head.appendChild(icon);
    }
    icon.href = '/ledgerone/favicon.ico';

    // Detect active authenticated session from localStorage
    try {
      const token = localStorage.getItem('ledgerone_token');
      const rawUser = localStorage.getItem('ledgerone_user');
      if (token && rawUser) {
        const parsed = JSON.parse(rawUser);
        if (parsed) {
          setCurrentUser(parsed);
          const name =
            parsed?.company?.slug ||
            parsed?.company?.companyName ||
            parsed?.companyName ||
            (typeof parsed?.company === 'string' ? parsed.company : null);
          const slug = name
            ? String(name).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')
            : 'company';
          setCompanySlug(slug || 'company');
        }
      }
    } catch {
      // ignore parsing error
    }
  }, []);

  function submit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const next = {};
    ['name', 'business', 'email', 'phone', 'type', 'need'].forEach((x) => {
      if (!String(d.get(x) || '').trim()) next[x] = 'Required';
    });
    if (d.get('email') && !/^[^s@]+@[^s@]+.[^s@]+$/.test(String(d.get('email')))) {
      next.email = 'Enter a valid email';
    }
    setErrors(next);
    if (!Object.keys(next).length) setSent(true);
  }

  return (
    <div className="app">
      {/* Navigation Header with Login & Register Buttons */}
      <header className="nav">
        <div>
          <Logo />
          <nav className={menu ? 'open' : ''}>
            {[
              ['home', 'Home'],
              ['tools', 'Tools'],
              ['workflows', 'Workflows'],
              ['features', 'Features'],
              ['solutions', 'Solutions'],
              ['mobile', 'Mobile App'],
              ['faq', 'FAQ'],
            ].map((x) => (
              <a href={`#${x[0]}`} key={x[0]} onClick={() => setMenu(false)}>
                {x[1]}
              </a>
            ))}
          </nav>
          <section>
            {currentUser ? (
              <>
                <Btn href={`/ledgerone/${companySlug}`}>
                  Go to Dashboard <Icon name="arrow" size={17} />
                </Btn>
                <a
                  href="/ledgerone/register"
                  className="btn outline"
                  style={{ minHeight: '40px', padding: '0 16px', fontSize: '13px' }}
                >
                  Register New
                </a>
              </>
            ) : (
              <>
                <a
                  href="/ledgerone/login"
                  className="btn outline"
                  style={{ minHeight: '40px', padding: '0 16px', fontSize: '13px' }}
                >
                  Login
                </a>
                <Btn href="/ledgerone/register">
                  Get Started Free <Icon name="arrow" size={17} />
                </Btn>
              </>
            )}
          </section>
          <button
            className="menubtn"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
            type="button"
          >
            <Icon name={menu ? 'close' : 'menu'} />
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container heroGrid">
            <div className="heroCopy">
              <span className="pill">
                <Icon name="spark" size={15} />
                BUSINESS BILLING &amp; MANAGEMENT SOFTWARE
              </span>
              <h1>
                Your Business.
                <br />
                Your Finances.
                <br />
                <em>Simplified.</em>
              </h1>
              <p>
                Manage retail POS billing, wholesale GST tax invoices, purchases, live inventory, GST returns and multi-bank reconciliation in one unified workspace.
              </p>
              <div className="actions">
                {currentUser ? (
                  <>
                    <Btn href={`/ledgerone/${companySlug}`}>
                      Go to Dashboard <Icon name="arrow" size={18} />
                    </Btn>
                    <Btn href="/ledgerone/register" kind="outline">
                      Register Another Account
                    </Btn>
                  </>
                ) : (
                  <>
                    <Btn href="/ledgerone/register">
                      Get Started Free <Icon name="arrow" size={18} />
                    </Btn>
                    <Btn href="#demo" kind="outline">
                      Request a Demo
                    </Btn>
                  </>
                )}
              </div>
              <a className="textlink" href="#tools">
                Explore document tools <Icon name="arrow" size={17} />
              </a>
              <div className="trust">
                <span>
                  <Icon name="check" size={14} />
                  Retail POS &amp; Wholesale
                </span>
                <span>
                  <Icon name="check" size={14} />
                  Live Stock Ledger
                </span>
                <span>
                  <Icon name="check" size={14} />
                  GST, E-Way &amp; E-Invoice
                </span>
                <span>
                  <Icon name="check" size={14} />
                  Multi-Bank BRS
                </span>
              </div>
            </div>

            <div className="heroVisual">
              <Mock />
              <Phone />
              <div className="float f1">
                <Icon name="receipt" size={18} />
                <span>
                  <small>INVOICE STATUS</small>
                  <b>Payment recorded</b>
                </span>
                <Icon name="check" size={15} />
              </div>
              <div className="float f2">
                <Icon name="box" size={18} />
                <span>
                  <small>STOCK UPDATE</small>
                  <b>Purchase received</b>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Business Document Tools */}
        <section className="section tools" id="tools">
          <div className="container">
            <Title
              eyebrow="PRACTICAL BUSINESS TOOLS"
              title="Create Business Documents in Minutes"
              text="Prepare professional quotations and invoices using LedgerOne’s available document-generation preview tools."
            />
            <div className="toolgrid">
              {[
                [
                  'Quotation',
                  'Quotation Maker',
                  'Prepare itemised quotations with customer details, product quantities, pricing, applicable tax details and commercial terms.',
                  'document',
                ],
                [
                  'Invoice',
                  'Invoice Generator',
                  'Create a clear professional invoice preview with itemised document details and consistent totals.',
                  'receipt',
                ],
              ].map((x, i) => (
                <article className="toolcard" key={x[0]}>
                  <i>
                    <Icon name={x[3]} size={28} />
                  </i>
                  <small>0{i + 1}</small>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                  <button
                    onClick={() => setBuilder(x[0])}
                    type="button"
                  >
                    {i ? 'Generate an Invoice' : 'Create a Quotation'} <Icon name="arrow" size={18} />
                  </button>
                  <div className="minipaper">
                    <b>{x[0].toUpperCase()}</b>
                    <span />
                    <span />
                    <span />
                    <strong>₹{i ? '12,400' : '28,500'}</strong>
                  </div>
                </article>
              ))}
            </div>
            <p className="honest">
              <Icon name="shield" size={16} />
              Previews run locally in your browser. Register an account to save records permanently and track customer payments.
            </p>
          </div>
        </section>

        {/* Why LedgerOne / Clarity Section */}
        <section className="section clarity">
          <div className="container">
            <Title
              eyebrow="WHY LEDGERONE"
              title="Less Manual Work. Total Business Clarity."
              text="Keep billing, inventory, purchasing, banking, and statutory compliance connected in a single operational workspace."
            />
            <div className="claritygrid">
              {[
                [
                  'Unified Business Operations',
                  'Keep products, customers, vendors, multi-bank ledgers, and transactions synchronized across your business.',
                  'layers',
                ],
                [
                  'Dual Sales Engines (POS & Invoices)',
                  'Process rapid counter sales with barcode scanning, while generating compliant B2B quotations and GST invoices.',
                  'store',
                ],
                [
                  'Automated GST & Statutory Filing',
                  'Generate GSTR-1 summaries, auto-reconcile GSTR-2B JSON, and generate government E-Way Bills & E-Invoices with QR codes.',
                  'scale',
                ],
                [
                  'Live Inventory & Multi-Bank BRS',
                  'Track real-time stock movements with low-stock alerts, upload bank statements for BRS, and inspect dynamic Balance Sheets.',
                  'landmark',
                ],
              ].map((x, i) => (
                <article key={x[0]}>
                  <small>0{i + 1}</small>
                  <i>
                    <Icon name={x[2]} size={25} />
                  </i>
                  <h3>{x[0]}</h3>
                  <p>{x[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workflows Section */}
        <section className="section workflows" id="workflows">
          <div className="container">
            <Title
              eyebrow="CONNECTED OPERATIONS"
              title="Your Daily Business Workflows, Connected"
              text="Understand how products, purchases, sales, GST compliance, and banking fit together seamlessly."
            />
            <div className="flowlist">
              {[
                [
                  '01',
                  'Product master to live stock',
                  'Maintain item masters with HSN and barcodes, log inward supplier bills, and track real-time stock balances.',
                  [
                    ['Product Master', 'box'],
                    ['Purchase Inward', 'bag'],
                    ['Stock Ledger', 'layers'],
                    ['Reorder Alert', 'eye'],
                  ],
                ],
                [
                  '02',
                  'Wholesale quotation to collection',
                  'Prepare commercial estimates, convert to GST tax invoices, and track inward payments and party aging.',
                  [
                    ['Customer Party', 'users'],
                    ['Quotation', 'document'],
                    ['Tax Invoice', 'receipt'],
                    ['Payment Voucher', 'creditcard'],
                    ['Party Ledger', 'wallet'],
                  ],
                ],
                [
                  '03',
                  'Retail counter POS billing',
                  'High-speed counter terminal for barcode scanning, multi-mode tender, and instant thermal receipt printing.',
                  [
                    ['Barcode Scan', 'tag'],
                    ['POS Cart', 'store'],
                    ['Cash / UPI Split', 'wallet'],
                    ['Thermal Receipt', 'file'],
                  ],
                ],
                [
                  '04',
                  'GST compliance & statutory filing',
                  'End-to-end statutory compliance with automated returns, reconciliation, and logistics documents.',
                  [
                    ['Tax Invoice', 'receipt'],
                    ['E-Way Bill', 'truck'],
                    ['E-Invoice IRN', 'file'],
                    ['GSTR-2B JSON', 'scale'],
                    ['GSTR-1 Summary', 'chart'],
                  ],
                ],
                [
                  '05',
                  'Banking, BRS & financial statements',
                  'Upload bank statements, reconcile entries against vouchers, track expenses, and view real-time Balance Sheets.',
                  [
                    ['Bank Account', 'landmark'],
                    ['Statement Upload', 'upload'],
                    ['BRS Reconciliation', 'refresh'],
                    ['Expense Log', 'wallet'],
                    ['Balance Sheet', 'chart'],
                  ],
                ],
              ].map((row) => (
                <article key={row[0]}>
                  <div className="flowcopy">
                    <small>{row[0]}</small>
                    <h3>{row[1]}</h3>
                    <p>{row[2]}</p>
                  </div>
                  <div className="steps">
                    {row[3].map((s, i) => (
                      <section key={s[0]}>
                        <div>
                          <i>
                            <Icon name={s[1]} size={21} />
                          </i>
                          <b>{s[0]}</b>
                        </div>
                        {i < row[3].length - 1 && <Icon name="arrow" size={19} />}
                      </section>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="note">
              <Icon name="shield" />
              <p>
                <b>Clear by design:</b> retail counter payments, wholesale customer collections, vendor disbursements, and banking contra transfers remain separate, audited flows.
              </p>
            </div>
          </div>
        </section>

        {/* Module Explorer Tabs Section */}
        <section className="section featureSection" id="features">
          <div className="container">
            <Title
              eyebrow="MODULE EXPLORER"
              title="Everything Your Daily Operations Need"
              text="Explore supported workflows across billing, inventory, purchasing, reporting and administration."
            />
            <div className="tabs">
              {Object.keys(features).map((x) => (
                <button
                  className={feature === x ? 'active' : ''}
                  onClick={() => setFeature(x)}
                  key={x}
                  type="button"
                >
                  {x}
                </button>
              ))}
            </div>
            <div className="featuregrid">
              {features[feature].map((x, i) => (
                <article className={i === 0 ? 'featured' : ''} key={x[0]}>
                  <i>
                    <Icon name={x[2]} size={24} />
                  </i>
                  <h3>{x[0]}</h3>
                  <p>{x[1]}</p>
                  <span>
                    <Icon name="arrow" size={17} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product Experience Showcase Section */}
        <section className="section showcase">
          <div className="container">
            <Title
              eyebrow="PRODUCT EXPERIENCE"
              title="See LedgerOne in Action"
              text="Explore illustrative previews built from documented product concepts. Demo records below are fictional."
            />
            <div className="previewtabs">
              {Object.keys(previews).map((x) => (
                <button
                  className={preview === x ? 'active' : ''}
                  onClick={() => setPreview(x)}
                  key={x}
                  type="button"
                >
                  {x}
                </button>
              ))}
            </div>
            <div className="showframe">
              <div>
                <small>0{Object.keys(previews).indexOf(preview) + 1}</small>
                <h3>{previews[preview][0]}</h3>
                <p>{previews[preview][1]}</p>
                <ul>
                  {['Focused operational workspace', 'Clear, readable records', 'Designed for daily use'].map(
                    (x) => (
                      <li key={x}>
                        <Icon name="check" size={15} />
                        {x}
                      </li>
                    )
                  )}
                </ul>
                <Btn href="#demo" kind="light">
                  See it in a demo <Icon name="arrow" size={17} />
                </Btn>
              </div>
              <section>
                <Mock type={previews[preview][2]} />
              </section>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="section solutions" id="solutions">
          <div className="container">
            <Title
              eyebrow="BUILT FOR BUSINESS"
              title="A Better Fit for the Way You Operate"
              text="Distinct workflows for different business models, with the records connecting them kept in view."
            />
            <div className="solutiongrid">
              {[
                [
                  'RETAIL SHOPS & STORES',
                  'Rapid Counter POS & Barcode Billing',
                  'Process customer checkouts in seconds with barcode scanning, split cash/UPI/card tender, and thermal slip printing.',
                  'store',
                ],
                [
                  'WHOLESALERS & DISTRIBUTORS',
                  'Quotations, GST Invoicing & Credit Ledgers',
                  'Send commercial quotations, generate compliant GST invoices with HSN codes, and track overdue receivables with aging analysis.',
                  'truck',
                ],
                [
                  'MANUFACTURERS & TRADERS',
                  'Procurement, Stock Ledgers & Reorder Alerts',
                  'Manage vendor inward bills, track stock movements across multi-unit measures, and prevent stockouts with automated reorder alerts.',
                  'box',
                ],
                [
                  'ENTERPRISES & GST DEALERS',
                  'Statutory Filing, E-Way Bills & Multi-Bank BRS',
                  'Reconcile vendor ITC with GSTR-2B JSON, generate E-Way Bills and E-Invoices, and maintain real-time Balance Sheets.',
                  'scale',
                ],
              ].map((x) => (
                <article key={x[0]}>
                  <header>
                    <span>{x[0]}</span>
                    <Icon name={x[3]} size={29} />
                  </header>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                  <a href="#workflows">
                    Explore workflow <Icon name="arrow" size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Section */}
        <section className="section mobileSection" id="mobile">
          <div className="container mobilegrid">
            <div className="mobilevisual">
              <div />
              <Phone large />
              <aside className="mfloat one">
                <Icon name="check" size={16} />
                <span>
                  <b>Sale recorded</b>
                  <small>Retail workflow</small>
                </span>
              </aside>
              <aside className="mfloat two">
                <Icon name="box" size={18} />
                <span>
                  <b>Stock overview</b>
                  <small>Within reach</small>
                </span>
              </aside>
            </div>
            <div className="mobilecopy">
              <span>LEDGERONE MOBILE</span>
              <h2>
                Your Business,
                <br />
                <em>Within Reach</em>
              </h2>
              <p>
                Explore the LedgerOne mobile experience for supported business tasks. Stay close to
                key records and day-to-day activity when you’re away from your desk.
              </p>
              <section>
                <div>
                  <i>
                    <Icon name="eye" />
                  </i>
                  <span>
                    <b>Quick visibility</b>
                    <small>Review supported operational information in a clear mobile layout.</small>
                  </span>
                </div>
                <div>
                  <i>
                    <Icon name="spark" />
                  </i>
                  <span>
                    <b>Simple interactions</b>
                    <small>
                      Navigate common mobile tasks without carrying a desktop workflow everywhere.
                    </small>
                  </span>
                </div>
              </section>
              <div className="actions">
                <Btn href="#demo">
                  Explore the mobile app <Icon name="arrow" size={17} />
                </Btn>
                <Btn href="#demo" kind="outline">
                  Request a demo
                </Btn>
              </div>
              <small className="availability">
                Feature availability may vary by module and release. Confirm current mobile capability with the
                product team.
              </small>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section faq" id="faq">
          <div className="container faqgrid">
            <div className="faqintro">
              <span>FREQUENTLY ASKED</span>
              <h2>Questions, Answered Clearly.</h2>
              <p>Understand the core workflows and where to confirm release-specific capabilities.</p>
              <article>
                <Icon name="users" size={25} />
                <span>
                  <b>Still have a question?</b>
                  <small>Walk through your requirements with the LedgerOne team.</small>
                </span>
                <a href="#demo">
                  Talk to us <Icon name="arrow" size={15} />
                </a>
              </article>
            </div>
            <div>
              {faqs.map((x, i) => (
                <article className="faqitem" key={x[0]}>
                  <button
                    onClick={() => setFaq(faq === i ? -1 : i)}
                    aria-expanded={faq === i}
                    type="button"
                  >
                    <span>{x[0]}</span>
                    <i>{faq === i ? '−' : '+'}</i>
                  </button>
                  {faq === i && <p>{x[1]}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Request a Demo Section */}
        <section className="section demo" id="demo">
          <div className="container demogrid">
            <div className="democopy">
              <span>PERSONALISED PRODUCT WALKTHROUGH</span>
              <h2>
                See How LedgerOne
                <br />
                Fits Your Business
              </h2>
              <p>
                Walk through your billing, purchasing, inventory and collection workflows with the
                LedgerOne team.
              </p>
              <ul>
                {[
                  'Discuss your current processes',
                  'Explore relevant LedgerOne workflows',
                  'Clarify setup and release-specific features',
                ].map((x) => (
                  <li key={x}>
                    <Icon name="check" size={15} />
                    {x}
                  </li>
                ))}
              </ul>
              <a href="https://oneassist.net.in/contact" target="_blank" rel="noreferrer">
                Visit the official OneAssist contact page <Icon name="arrow" size={16} />
              </a>
            </div>
            <div className="democard">
              {sent ? (
                <div className="success">
                  <i>
                    <Icon name="check" size={30} />
                  </i>
                  <h3>Your request is ready for integration</h3>
                  <p>
                    Your details passed local validation. Our team will contact you shortly to schedule
                    your personalized walkthrough.
                  </p>
                  <Btn kind="outline" onClick={() => setSent(false)}>
                    Submit another request
                  </Btn>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h3>Request a demo</h3>
                  <p>Tell us a little about your business.</p>
                  <div className="fields">
                    <label>
                      Full name *
                      <input name="name" placeholder="Your full name" />
                      {errors.name && <small>{errors.name}</small>}
                    </label>
                    <label>
                      Business name *
                      <input name="business" placeholder="Company or shop name" />
                      {errors.business && <small>{errors.business}</small>}
                    </label>
                  </div>
                  <div className="fields">
                    <label>
                      Email address *
                      <input name="email" type="email" placeholder="you@business.com" />
                      {errors.email && <small>{errors.email}</small>}
                    </label>
                    <label>
                      Phone number *
                      <input name="phone" placeholder="+91 98765 43210" />
                      {errors.phone && <small>{errors.phone}</small>}
                    </label>
                  </div>
                  <div className="fields">
                    <label>
                      Business type *
                      <select name="type" defaultValue="">
                        <option value="" disabled>
                          Select type
                        </option>
                        <option>Retail Shop / Store</option>
                        <option>Wholesale / Distribution</option>
                        <option>Manufacturing / Assembly</option>
                        <option>GST-Registered Enterprise</option>
                        <option>Other</option>
                      </select>
                      {errors.type && <small>{errors.type}</small>}
                    </label>
                    <label>
                      Primary requirement *
                      <select name="need" defaultValue="">
                        <option value="" disabled>
                          Select requirement
                        </option>
                        <option>Retail POS &amp; Barcode Billing</option>
                        <option>Quotations &amp; GST Invoicing</option>
                        <option>Inventory Control &amp; Reorder Alerts</option>
                        <option>GST Returns, E-Way Bills &amp; E-Invoice</option>
                        <option>Multi-Bank BRS &amp; Balance Sheet</option>
                        <option>Vendor Purchases &amp; Payables</option>
                        <option>Complete ERP Walkthrough</option>
                      </select>
                      {errors.need && <small>{errors.need}</small>}
                    </label>
                  </div>
                  <label>
                    Additional message
                    <textarea rows={3} placeholder="Share any workflow questions (optional)" />
                  </label>
                  <Btn type="submit">
                    Validate demo request <Icon name="arrow" size={17} />
                  </Btn>
                  <small className="privacy">
                    <Icon name="shield" size={13} />
                    Prototype form—details are validated locally and our team will get in touch.
                  </small>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footgrid">
          <div>
            <Logo />
            <p>
              Business billing, inventory and operations software for retail, wholesale and growing
              teams.
            </p>
          </div>
          <section>
            <b>Explore</b>
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#mobile">Mobile App</a>
          </section>
          <section>
            <b>Tools</b>
            <button onClick={() => setBuilder('Quotation')} type="button">
              Quotation Maker (Preview)
            </button>
            <a href="/ledgerone/tools/quotation-maker">Quotation Maker (Online)</a>
            <button onClick={() => setBuilder('Invoice')} type="button">
              Invoice Generator (Preview)
            </button>
            <a href="/ledgerone/tools/invoice-generator">Invoice Generator (Online)</a>
          </section>
          <section>
            <b>Account &amp; Access</b>
            {currentUser ? (
              <>
                <a href={`/ledgerone/${companySlug}`}>
                  Go to Dashboard ({currentUser.company?.companyName || currentUser.name || 'Workspace'})
                </a>
                <a href="/ledgerone/register">Register Another Organization</a>
                <button
                  type="button"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: 'var(--muted)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    font: 'inherit',
                    fontSize: '13px',
                  }}
                  onClick={() => {
                    localStorage.removeItem('ledgerone_token');
                    localStorage.removeItem('ledgerone_user');
                    setCurrentUser(null);
                    window.location.reload();
                  }}
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <a href="/ledgerone/login">Login to Account</a>
                <a href="/ledgerone/register">Register Free</a>
              </>
            )}
            <a href="#demo">Request a Demo</a>
            <a href="https://oneassist.net.in/contact">Contact Support</a>
          </section>
        </div>
        <div className="container copyright">
          © 2026 OneAssist Technologies. All rights reserved.
          <span>LedgerOne — connected business operations.</span>
        </div>
      </footer>

      {/* Interactive In-Browser Document Builder Modal */}
      {builder && <Builder kind={builder} close={() => setBuilder(null)} />}
    </div>
  );
}
