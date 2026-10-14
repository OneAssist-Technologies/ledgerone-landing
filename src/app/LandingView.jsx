'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

function Logo({ logoUrl }) {
  return (
    <a className="brand" href="#home">
      <img src={logoUrl} alt="LedgerOne logo" />
      <span>
        <b>Ledger</b>
        <strong>One</strong>
        <small>BY ONEASSIST TECHNOLOGIES</small>
      </span>
    </a>
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
      'Quotations & Proformas',
      'Prepare customer-facing quotations and proforma invoices with tax details and terms.',
      'document',
    ],
    [
      'Commercial Invoices',
      'Generate clear sales invoices with line-item pricing, customer details and applied GST.',
      'receipt',
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
    'LedgerOne is a comprehensive business billing, inventory and operations platform by OneAssist Technologies. It connects supported sales, purchasing, stock, customer, vendor and reporting workflows.',
  ],
  [
    'Who can use LedgerOne?',
    'It is built specifically for retail shops, wholesalers, distributors and growing businesses across India that need clear, organized day-to-day operational records.',
  ],
  [
    'Can I try creating quotations and invoices for free?',
    'Yes! You can use our interactive Quotation Maker and Invoice Generator tools for free right here in your browser without logging in.',
  ],
  [
    'Are my documents GST-compliant?',
    'Yes. LedgerOne automatically calculates SGST, CGST, and IGST breakdowns according to Indian state tax rules and HSN/SAC specifications.',
  ],
  [
    'How do I save my invoices and quotations permanently?',
    'Simply click "Get Started Free" to register your account. Once registered, all your documents, customer ledger, inventory and payment collections are securely stored in the cloud.',
  ],
  [
    'Can multiple team members access LedgerOne?',
    'Yes, LedgerOne includes role-based access control (RBAC) so you can assign specialized permissions for billing staff, warehouse managers, accountants, and administrators.',
  ],
];

function Mock() {
  return (
    <div className="mock" aria-hidden="true">
      <aside>
        <b>LO</b>
        <i className="on"><Icon name="store" size={17} /></i>
        <i><Icon name="document" size={17} /></i>
        <i><Icon name="box" size={17} /></i>
        <i><Icon name="users" size={17} /></i>
        <i><Icon name="chart" size={17} /></i>
      </aside>
      <div className="mockbody">
        <header>
          <div>
            <b>Main Branch Counter</b>
            <small>Active Shift • POS Ready</small>
          </div>
          <span>GST Active</span>
        </header>
        <div className="mockstats">
          <div>
            <small>Today&apos;s Sales</small>
            <b>₹42,850</b>
          </div>
          <div>
            <small>Invoices</small>
            <b>18</b>
          </div>
          <div>
            <small>Stock Alert</small>
            <b>3 Items</b>
          </div>
        </div>
        <div className="mocklower">
          <div className="bars">
            <b>Hourly Transaction Traffic</b>
            <section>
              <i style={{ height: '35%' }} />
              <i style={{ height: '55%' }} />
              <i style={{ height: '85%' }} />
              <i style={{ height: '65%' }} />
              <i style={{ height: '95%' }} />
              <i style={{ height: '75%' }} />
              <i style={{ height: '50%' }} />
            </section>
          </div>
          <div className="activity">
            <b>Recent Counter Activity</b>
            {[
              ['INV-00142', '₹2,450', 'Paid Cash'],
              ['INV-00143', '₹8,120', 'UPI Paid'],
              ['INV-00144', '₹1,200', 'Card'],
            ].map((row, idx) => (
              <p key={idx}>
                <i />
                <span>
                  <strong>{row[0]}</strong>
                  <small>{row[2]}</small>
                </span>
                <b>{row[1]}</b>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Phone({ logoUrl }) {
  return (
    <div className="phone" aria-hidden="true">
      <div className="speaker" />
      <header>
        <img src={logoUrl} alt="Logo" width={22} height={22} />
        <b>LedgerOne Mobile</b>
      </header>
      <div className="phonehero">
        <small>Total Revenue (MTD)</small>
        <b>₹3,48,200</b>
      </div>
      <div className="quick">
        <i><Icon name="store" size={17} /> POS</i>
        <i><Icon name="receipt" size={17} /> Invoice</i>
        <i><Icon name="box" size={17} /> Stock</i>
        <i><Icon name="users" size={17} /> Party</i>
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

export default function LandingView() {
  const [menu, setMenu] = useState(false);
  const [feature, setFeature] = useState('Sales & Billing');
  const [preview, setPreview] = useState('Dashboard');
  const [faq, setFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const logoUrl = '/ledgerone-logo.jpg';

  function submit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const next = {};
    ['name', 'business', 'email', 'phone', 'type', 'need'].forEach((x) => {
      if (!String(d.get(x) || '').trim()) next[x] = 'Required';
    });
    if (d.get('email') && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(d.get('email')))) {
      next.email = 'Enter a valid email';
    }
    setErrors(next);
    if (!Object.keys(next).length) setSent(true);
  }

  return (
    <div className="landing-page app">
      {/* Navigation Bar */}
      <header className="nav">
        <div>
          <Logo logoUrl={logoUrl} />
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

          <div className="navActions">
            <Link href="/ledgerone/login" className="btn outline">
              Login
            </Link>
            <Link href="/ledgerone/signup" className="btn">
              Get Started Free <Icon name="arrow" size={17} />
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="burger"
            onClick={() => setMenu((v) => !v)}
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
                Manage retail billing, wholesale quotations and invoices, purchases,
                inventory and customer collections in one organised workspace.
              </p>
              <div className="actions">
                <Link href="/ledgerone/signup" className="btn">
                  Get Started Free <Icon name="arrow" size={18} />
                </Link>
                <a href="#demo" className="btn light">
                  Request a Demo
                </a>
              </div>
              <a className="textlink" href="#tools">
                Explore document tools <Icon name="arrow" size={17} />
              </a>
              <div className="trust">
                <span>
                  <Icon name="check" size={14} />
                  Retail &amp; Wholesale
                </span>
                <span>
                  <Icon name="check" size={14} />
                  Connected Stock
                </span>
                <span>
                  <Icon name="check" size={14} />
                  GST Ready
                </span>
                <span>
                  <Icon name="check" size={14} />
                  Role-Based Access
                </span>
              </div>
            </div>

            <div className="heroVisual">
              <Mock />
              <Phone logoUrl={logoUrl} />
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

        {/* Free Interactive Document Tools */}
        <section className="section tools" id="tools">
          <div className="container">
            <Title
              eyebrow="PRACTICAL BUSINESS TOOLS"
              title="Create Business Documents in Minutes"
              text="Prepare professional quotations and invoices using LedgerOne’s interactive tools right here."
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
                  'Create a clear professional invoice preview with itemised document details, GST calculations and consistent totals.',
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
                  <Link
                    href={i ? '/ledgerone/tools/invoice-generator' : '/ledgerone/tools/quotation-maker'}
                  >
                    {i ? 'Generate an Invoice' : 'Create a Quotation'}{' '}
                    <Icon name="arrow" size={18} />
                  </Link>
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
              Tools run instantly in your browser. Register an account to save records permanently and track customer payments.
            </p>
          </div>
        </section>

        {/* Workflows / Process Tabs */}
        <section className="section workflows" id="workflows">
          <div className="container">
            <Title
              eyebrow="STRUCTURED BUSINESS FLOWS"
              title="Workflows Designed Around Everyday Trading"
              text="Organise front-counter billing, customer quotations, supplier purchases and inventory balances into distinct, dependable routines."
            />
            <div className="tabbar">
              {Object.keys(features).map((x) => (
                <button
                  className={feature === x ? 'active' : ''}
                  key={x}
                  onClick={() => setFeature(x)}
                  type="button"
                >
                  {x}
                </button>
              ))}
            </div>
            <div className="featuregrid">
              {features[feature].map((x, i) => (
                <article key={i}>
                  <i>
                    <Icon name={x[2]} size={24} />
                  </i>
                  <h3>{x[0]}</h3>
                  <p>{x[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Workspace Previews */}
        <section className="section features" id="features">
          <div className="container">
            <Title
              eyebrow="OPERATIONAL VISIBILITY"
              title="A Practical Look at What You Can Manage"
              text="Explore how LedgerOne brings transactions, documents, stock movement and collections into one focused workspace."
            />
            <div className="previewnav">
              {Object.keys(previews).map((k) => (
                <button
                  className={preview === k ? 'active' : ''}
                  key={k}
                  onClick={() => setPreview(k)}
                  type="button"
                >
                  {k}
                </button>
              ))}
            </div>
            <div className="previewcard">
              <div className="previewhead">
                <div>
                  <small>DEMONSTRATION VIEW</small>
                  <h3>{previews[preview][0]}</h3>
                </div>
                <p>{previews[preview][1]}</p>
              </div>
              <div className="previewbody">
                <Mock />
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section solutions" id="solutions">
          <div className="container">
            <Title
              eyebrow="BUSINESS FIT"
              title="Clear Operations for Growing Businesses"
              text="Whether running a counter retail counter, fulfilling wholesale orders, or distributing goods across regions, LedgerOne keeps your data connected."
            />
            <div className="solutiongrid">
              {[
                [
                  'Retail Shops & Counters',
                  'Fast billing workflow with quick item selection, barcode scanning support, and cash or UPI payment records.',
                  'store',
                ],
                [
                  'Wholesalers & Distributors',
                  'Itemised quotations with tax breakdown, custom credit terms, customer ledger balances, and payment follow-ups.',
                  'truck',
                ],
                [
                  'Service Providers & Agencies',
                  'Professional service invoicing, milestone billing, bank payment details, and formal commercial terms.',
                  'document',
                ],
                [
                  'Multi-Branch Enterprises',
                  'Consolidated inventory tracking, role-based user management, and central business performance reporting.',
                  'building',
                ],
              ].map((s, idx) => (
                <article key={idx}>
                  <i>
                    <Icon name={s[2]} size={24} />
                  </i>
                  <h3>{s[0]}</h3>
                  <p>{s[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Showcase */}
        <section className="section mobile" id="mobile">
          <div className="container mobilegrid">
            <div className="mobilecopy">
              <span>CONNECTED ON THE MOVE</span>
              <h2>Run Your Business from Any Screen</h2>
              <p>
                Monitor counter receipts, approve quotations, verify stock counts, and check daily revenue summaries whether on the shop floor or traveling.
              </p>
              <ul>
                <li><Icon name="check" size={16} /> Instant revenue &amp; cash summaries</li>
                <li><Icon name="check" size={16} /> Mobile-ready billing and invoice generation</li>
                <li><Icon name="check" size={16} /> Real-time low stock notifications</li>
              </ul>
              <div className="actions">
                <Link href="/ledgerone/signup" className="btn">
                  Create Free Account <Icon name="arrow" size={18} />
                </Link>
              </div>
            </div>
            <div className="mobilevisual">
              <Phone logoUrl={logoUrl} />
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="section faq" id="faq">
          <div className="container">
            <Title
              eyebrow="CLEAR QUESTIONS & ANSWERS"
              title="Frequently Asked Questions"
              text="Helpful answers about using LedgerOne, free tools, GST compliance, and getting started."
            />
            <div className="faqgrid">
              {faqs.map((f, i) => (
                <div
                  className={`faqitem ${faq === i ? 'open' : ''}`}
                  key={i}
                  onClick={() => setFaq(faq === i ? -1 : i)}
                >
                  <h4>
                    <span>{f[0]}</span>
                    <i>{faq === i ? '−' : '+'}</i>
                  </h4>
                  {faq === i && <p>{f[1]}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request a Demo / Contact Form */}
        <section className="section demo" id="demo">
          <div className="container demogrid">
            <div className="democopy">
              <span>GET IN TOUCH</span>
              <h2>Schedule a Personalized Demonstration</h2>
              <p>
                Speak with our business solutions team to see how LedgerOne fits into your specific billing, stock, and tax management workflow.
              </p>
              <div className="demofacts">
                <div>
                  <b>OneAssist Technologies</b>
                  <p>Enterprise SaaS &amp; Business Management Software</p>
                </div>
                <div>
                  <small>Support Email</small>
                  <p>support@oneassist.net.in</p>
                </div>
              </div>
            </div>

            <div className="demoform">
              {sent ? (
                <div className="successmsg">
                  <Icon name="check" size={40} />
                  <h3>Thank You!</h3>
                  <p>Your request has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <div className="formrow">
                    <label>
                      Your Name *
                      <input name="name" placeholder="Rajesh Kumar" />
                      {errors.name && <small className="err">{errors.name}</small>}
                    </label>
                    <label>
                      Business Name *
                      <input name="business" placeholder="Kumar Enterprises" />
                      {errors.business && <small className="err">{errors.business}</small>}
                    </label>
                  </div>
                  <div className="formrow">
                    <label>
                      Email Address *
                      <input name="email" type="email" placeholder="rajesh@example.com" />
                      {errors.email && <small className="err">{errors.email}</small>}
                    </label>
                    <label>
                      Phone Number *
                      <input name="phone" type="tel" placeholder="+91 98765 43210" />
                      {errors.phone && <small className="err">{errors.phone}</small>}
                    </label>
                  </div>
                  <div className="formrow">
                    <label>
                      Business Type *
                      <select name="type" defaultValue="Retail">
                        <option value="Retail">Retail Shop / Counter</option>
                        <option value="Wholesale">Wholesale &amp; Distribution</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Services">Services &amp; Agency</option>
                      </select>
                    </label>
                    <label>
                      Primary Need *
                      <select name="need" defaultValue="Billing">
                        <option value="Billing">Fast POS &amp; Billing</option>
                        <option value="Inventory">Stock &amp; Inventory Management</option>
                        <option value="Documents">Quotations &amp; Invoices</option>
                        <option value="GST">GST &amp; Accounting Reports</option>
                      </select>
                    </label>
                  </div>
                  <button className="btn w-full" type="submit">
                    Request Demonstration <Icon name="arrow" size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footergrid">
          <div className="footbrand">
            <Logo logoUrl={logoUrl} />
            <p>
              Smart billing, quotation maker, invoice generator and inventory management platform for retail shops, wholesalers and enterprises across India.
            </p>
          </div>
          <section>
            <b>Navigation</b>
            <a href="#home">Home</a>
            <a href="#tools">Document Tools</a>
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#mobile">Mobile App</a>
            <a href="#workflows">Workflows</a>
          </section>
          <section>
            <b>Tools</b>
            <Link href="/ledgerone/tools/quotation-maker">
              Quotation Maker
            </Link>
            <Link href="/ledgerone/tools/invoice-generator">
              Invoice Generator
            </Link>
            <a href="#tools">Overview</a>
          </section>
          <section>
            <b>Account &amp; Access</b>
            <Link href="/ledgerone/login">Login to Account</Link>
            <Link href="/ledgerone/signup">Register Free</Link>
            <a href="#demo">Request a Demo</a>
            <a
              href="https://oneassist.net.in/contact"
              target="_blank"
              rel="noreferrer"
            >
              Contact Support
            </a>
          </section>
        </div>
        <div className="container copyright">
          © {new Date().getFullYear()} OneAssist Technologies. All rights reserved.
          <span>LedgerOne — connected business operations.</span>
        </div>
      </footer>
    </div>
  );
}
