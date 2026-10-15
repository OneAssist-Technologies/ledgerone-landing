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
      'Retail Sales & Billing',
      'A dedicated counter-sales flow for product selection, payment and supported receipt output.',
      'store',
    ],
    [
      'Wholesale Invoicing',
      'Prepare customer invoices with item, pricing and applicable tax details.',
      'receipt',
    ],
    [
      'Quotation Management',
      'Build itemised quotations with clear commercial information.',
      'document',
    ],
    [
      'Customer Collections',
      'Review eligible invoice collections separately from counter payments.',
      'wallet',
    ],
  ],
  'Products & Stock': [
    [
      'Product Management',
      'Organise items, categories, pricing and available attributes.',
      'box',
    ],
    [
      'Inventory Tracking',
      'Follow stock movement created by supported business transactions.',
      'layers',
    ],
    [
      'Sales & Purchase Returns',
      'Record returns through their appropriate stock workflows.',
      'refresh',
    ],
    [
      'Inventory Reports',
      'Review available summaries and product movement reports.',
      'chart',
    ],
  ],
  'Purchasing & Vendors': [
    [
      'Purchase Management',
      'Record purchases and connect incoming items to stock movement.',
      'bag',
    ],
    [
      'Vendor Records',
      'Keep vendor information and transaction history together.',
      'users',
    ],
    [
      'Vendor Payments',
      'Review purchase-related payments as a distinct business flow.',
      'wallet',
    ],
    [
      'Purchase Reports',
      'Understand purchasing activity with operational reports.',
      'report',
    ],
  ],
  'Reports & Admin': [
    [
      'Dashboard Summaries',
      'See supported business indicators in one operational view.',
      'chart',
    ],
    [
      'Business Reports',
      'Review available reports across key transactions.',
      'report',
    ],
    [
      'Roles & Permissions',
      'Configure access according to supported business roles.',
      'shield',
    ],
    [
      'Company Settings',
      'Manage available company and document configuration.',
      'building',
    ],
  ],
};

const previews = {
  Dashboard: [
    'A clear view of your business day',
    'Bring operational shortcuts, recent activity, stock visibility and outstanding records into one clean workspace.',
    'dashboard',
  ],
  'Retail Billing': [
    'Fast, focused counter billing',
    'Select products, review quantities, record a retail payment and prepare a supported receipt.',
    'billing',
  ],
  'Quotations & Invoices': [
    'Professional documents, organised',
    'Prepare detailed customer documents with item, pricing, tax and commercial information.',
    'invoice',
  ],
  'Inventory & Purchasing': [
    'Purchasing connected to stock',
    'Record vendor purchases, follow incoming stock movement and review inventory.',
    'inventory',
  ],
  'Collections & Reports': [
    'Follow eligible outstanding balances',
    'Keep wholesale invoice collections distinct from counter sales and vendor payments.',
    'reports',
  ],
};

const faqs = [
  [
    'What is LedgerOne?',
    'LedgerOne is a business billing, inventory and operations platform by OneAssist Technologies. It connects supported sales, purchasing, stock, customer, vendor and reporting workflows.',
  ],
  [
    'Who can use LedgerOne?',
    'It is positioned for retail shops, wholesalers, distributors and growing businesses that need clearer day-to-day operational records.',
  ],
  [
    'How does retail billing differ from wholesale invoicing?',
    'Retail billing supports counter transactions and immediate payment flows. Wholesale workflows use customer quotations and invoices, with collections reviewed separately.',
  ],
  [
    'Can I create quotations and invoices?',
    'Yes. LedgerOne supports quotation and invoice document workflows. The builder here is a client-side preview and does not post to a company workspace.',
  ],
  [
    'How do purchases relate to inventory?',
    'Supported purchase transactions create stock movement, helping teams review incoming products and inventory through a connected process.',
  ],
  [
    'What tax capabilities are supported?',
    'Configured tax breakdowns may be displayed. Tax display is not the same as statutory filing or government-portal integration.',
  ],
  [
    'Can multiple staff members use the system?',
    'Published product information includes role-based access. Exact roles and provisioning should be confirmed during a product demonstration.',
  ],
  [
    'Is a mobile application available?',
    'LedgerOne has a mobile experience for supported tasks. Availability by module may vary, so confirm current capability with the product team.',
  ],
];

function Mock({ type = 'dashboard' }) {
  return (
    <div className="mock" aria-hidden="true">
      <aside>
        <b>L1</b>
        {['chart', 'receipt', 'box', 'bag', 'users', 'report'].map((x, i) => (
          <i
            className={i === (type === 'inventory' ? 2 : type === 'invoice' ? 1 : 0) ? 'on' : ''}
            key={x}
          >
            <Icon name={x} size={15} />
          </i>
        ))}
      </aside>
      <div className="mockbody">
        <header>
          <span>
            <small>MY WORKSPACE</small>
            <b>
              {type === 'billing'
                ? 'Retail billing'
                : type === 'invoice'
                ? 'Documents'
                : type === 'inventory'
                ? 'Inventory overview'
                : type === 'reports'
                ? 'Collections'
                : 'Good morning, Arjun'}
            </b>
          </span>
          <i>AS</i>
        </header>
        {type === 'invoice' ? (
          <div className="paper">
            <header>
              <b>QUOTATION</b>
              <span>#QTN-0248</span>
            </header>
            <div className="parties">
              <span>
                FROM<b>Northstar Traders</b>
              </span>
              <span>
                PREPARED FOR<b>Aster Retail</b>
              </span>
            </div>
            <div className="table">
              <b>Item</b>
              <b>Qty</b>
              <b>Amount</b>
              <span>Product starter pack</span>
              <span>12</span>
              <span>₹24,000</span>
              <span>Delivery & setup</span>
              <span>1</span>
              <span>₹4,500</span>
            </div>
            <strong>Total &nbsp; ₹28,500</strong>
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
              <button type="button">Complete sale</button>
            </aside>
          </div>
        ) : (
          <>
            <div className="stats">
              {[
                ['Today’s sales', '₹24,860', 'chart'],
                ['Products', type === 'inventory' ? '386 in stock' : '428 items', 'box'],
                ['Outstanding', '12 records', 'wallet'],
              ].map(([a, b, c]) => (
                <article key={a}>
                  <i>
                    <Icon name={c} size={15} />
                  </i>
                  <small>{a}</small>
                  <b>{b}</b>
                  <em>Illustrative data</em>
                </article>
              ))}
            </div>
            <div className="mocklower">
              <div className="bars">
                <b>
                  {type === 'inventory'
                    ? 'Stock movement'
                    : type === 'reports'
                    ? 'Collection overview'
                    : 'Sales overview'}
                </b>
                <section>
                  {[38, 61, 47, 76, 56, 88, 68].map((x, i) => (
                    <i key={i} style={{ height: `${x}%` }} />
                  ))}
                </section>
              </div>
              <div className="activity">
                <b>Recent activity</b>
                {['Invoice #INV-842', 'Purchase #PUR-291', 'Retail sale #POS-715'].map((x, i) => (
                  <p key={x}>
                    <i />
                    <span>
                      {x}
                      <small>{['Aster Retail', 'Bluebay Supplies', 'Counter sale'][i]}</small>
                    </span>
                    <b>{['₹12,400', '₹8,720', '₹2,897'][i]}</b>
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

  useEffect(() => {
    document.title = 'LedgerOne | Billing, Inventory & Business Management Software';
    const description =
      document.querySelector('meta[name="description"]') ??
      document.head.appendChild(document.createElement('meta'));
    description.setAttribute('name', 'description');
    description.setAttribute(
      'content',
      'Manage retail billing, wholesale quotations and invoices, purchases, inventory, customer collections and business reports with LedgerOne.'
    );
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
            <a href="/ledgerone/app/login" className="btn outline" style={{ minHeight: '40px', padding: '0 16px', fontSize: '13px' }}>
              Login
            </a>
            <Btn href="/ledgerone/app/signup">
              Get Started Free <Icon name="arrow" size={17} />
            </Btn>
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
                Manage retail billing, wholesale quotations and invoices, purchases, inventory and
                customer collections in one organised workspace.
              </p>
              <div className="actions">
                <Btn href="/ledgerone/app/signup">
                  Get Started Free <Icon name="arrow" size={18} />
                </Btn>
                <Btn href="#demo" kind="outline">
                  Request a Demo
                </Btn>
              </div>
              <a className="textlink" href="#tools">
                Explore document tools <Icon name="arrow" size={17} />
              </a>
              <div className="trust">
                <span>
                  <Icon name="check" size={14} />
                  Retail &amp; wholesale
                </span>
                <span>
                  <Icon name="check" size={14} />
                  Connected stock
                </span>
                <span>
                  <Icon name="check" size={14} />
                  Role-based access
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
                  '/ledgerone/app/tools/quotation-maker',
                ],
                [
                  'Invoice',
                  'Invoice Generator',
                  'Create a clear professional invoice preview with itemised document details and consistent totals.',
                  'receipt',
                  '/ledgerone/app/tools/invoice-generator',
                ],
              ].map((x, i) => (
                <article className="toolcard" key={x[0]}>
                  <i>
                    <Icon name={x[3]} size={28} />
                  </i>
                  <small>0{i + 1}</small>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                    <button
                      onClick={() => setBuilder(x[0])}
                      type="button"
                    >
                      {i ? 'Generate an Invoice' : 'Create a Quotation'} <Icon name="arrow" size={18} />
                    </button>
                    <a
                      href={x[4]}
                      style={{ fontSize: '12px', color: 'var(--blue)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      Open Full Screen Tool &rarr;
                    </a>
                  </div>
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
              title="Less Manual Work. More Business Clarity."
              text="Keep the records behind your daily operations structured, connected and easier to follow."
            />
            <div className="claritygrid">
              {[
                [
                  'Organised Business Records',
                  'Keep product, customer, vendor and transaction information within connected workflows.',
                  'layers',
                ],
                [
                  'Separate Sales Workflows',
                  'Use distinct processes for retail counter billing and wholesale invoicing.',
                  'store',
                ],
                [
                  'Clearer Outstanding Follow-up',
                  'Review eligible customer collections and outstanding invoice balances.',
                  'wallet',
                ],
                [
                  'Better Stock Visibility',
                  'Understand how purchases, sales and returns affect stock movement.',
                  'box',
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
              text="Understand how products, purchases, sales and collections fit together—without mixing distinct payment flows."
            />
            <div className="flowlist">
              {[
                [
                  '01',
                  'Product to stock',
                  'Maintain product records, record purchases and follow stock movement.',
                  [
                    ['Product', 'box'],
                    ['Purchase', 'bag'],
                    ['Stock movement', 'layers'],
                    ['Inventory review', 'chart'],
                  ],
                ],
                [
                  '02',
                  'Wholesale sale to collection',
                  'Prepare customer documents and track eligible collections against outstanding balances.',
                  [
                    ['Customer', 'users'],
                    ['Quotation', 'document'],
                    ['Invoice', 'receipt'],
                    ['Collection', 'wallet'],
                    ['Outstanding', 'eye'],
                  ],
                ],
                [
                  '03',
                  'Retail billing',
                  'Use a dedicated retail sales flow for counter transactions and supported receipts.',
                  [
                    ['Product selection', 'box'],
                    ['Retail sale', 'store'],
                    ['Counter payment', 'wallet'],
                    ['Receipt', 'file'],
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
                <b>Clear by design:</b> retail counter payments, wholesale customer collections and
                purchase-related vendor payments remain separate flows.
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
                  'RETAIL SHOPS',
                  'Keep Counter Billing Organised',
                  'Use a focused retail sales flow with product records, counter payment and supported receipt output.',
                  'store',
                ],
                [
                  'WHOLESALERS & DISTRIBUTORS',
                  'Manage Quotations, Invoices and Collections',
                  'Organise customer documents and follow eligible collections against outstanding balances.',
                  'truck',
                ],
                [
                  'GROWING BUSINESSES',
                  'Bring Purchases, Stock and Reports Together',
                  'Connect vendor records, purchase activity, stock movement and available reports.',
                  'building',
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
                        <option>Retail</option>
                        <option>Wholesale / Distribution</option>
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
                        <option>Retail billing</option>
                        <option>Quotations and invoices</option>
                        <option>Inventory and purchasing</option>
                        <option>Collections and reports</option>
                        <option>General walkthrough</option>
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
            <a href="/ledgerone/app/tools/quotation-maker">Quotation Maker (Online)</a>
            <button onClick={() => setBuilder('Invoice')} type="button">
              Invoice Generator (Preview)
            </button>
            <a href="/ledgerone/app/tools/invoice-generator">Invoice Generator (Online)</a>
          </section>
          <section>
            <b>Account &amp; Access</b>
            <a href="/ledgerone/app/login">Login to Account</a>
            <a href="/ledgerone/app/signup">Register Free</a>
            <a href="#demo">Request a Demo</a>
            <a href="https://oneassist.net.in/contact">Contact Support</a>
          </section>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} OneAssist Technologies. All rights reserved.
          <span>LedgerOne — connected business operations.</span>
        </div>
      </footer>

      {/* Interactive In-Browser Document Builder Modal */}
      {builder && <Builder kind={builder} close={() => setBuilder(null)} />}
    </div>
  );
}
