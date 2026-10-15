'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const iconPaths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
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
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
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
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </>
  ),
  moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
  plus: <path d="M5 12h14M12 5v14" />,
  tag: (
    <>
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7" cy="7" r="1.5" />
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
  bank: (
    <>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22V12h6v10" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  upload: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </>
  ),
  chevronDown: <polyline points="6 9 12 15 18 9" />,
  chevronRight: <polyline points="9 18 15 12 9 6" />,
  chevronLeft: <polyline points="15 18 9 12 15 6" />,
  cart: (
    <>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </>
  ),
  warning: (
    <>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </>
  ),
  trendingUp: (
    <>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
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
      {iconPaths[name] || iconPaths.check}
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

// 8 Core Modules and all 26+ Sub-Modules matching the LedgerOne architecture
export const modulesData = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    badge: 'Real-Time Insights',
    icon: 'chart',
    description:
      'Executive command center providing live visibility into daily revenue, gross profit margins, inventory status, low-stock warnings, and performance trends.',
    submodules: [
      { name: "Today's Sales", desc: "Live counter and tax invoice revenue tracking with period filters", icon: 'trendingUp', tag: 'Real-Time KPI' },
      { name: "Today's Estimated Profit", desc: "Gross profit calculations and operational margin visibility", icon: 'wallet', tag: 'Margin KPI' },
      { name: "Total Products", desc: "In-stock catalog counts, product categories and active valuation", icon: 'box', tag: 'Catalog' },
      { name: "Low Stock Items", desc: "Automated replenishment warnings for items nearing depleted stock thresholds", icon: 'warning', tag: 'Alert System' },
      { name: "Total Invoiced", desc: "Cumulative billing overview and pending customer receivables", icon: 'document', tag: 'Receivables' },
      { name: "Total Customers", desc: "Active customer trading database and credit ledger summaries", icon: 'users', tag: 'CRM Ledger' },
      { name: "Total Vendors", desc: "Supplier directory and payable obligations tracking", icon: 'building', tag: 'Procurement' },
      { name: "Today's Orders", desc: "Real-time order count and retail counter checkout volume", icon: 'cart', tag: 'Fulfillment' },
      { name: "Revenue & Profit Trend", desc: "Interactive performance trend analytics across custom date ranges", icon: 'chart', tag: 'Analytics' },
      { name: "Today Sales Breakdown", desc: "Detailed breakdown of sales performance by payment method and staff", icon: 'receipt', tag: 'Breakdown' },
    ],
  },
  {
    id: 'sales-billing',
    name: 'Sales & Billing',
    badge: 'Revenue & POS',
    icon: 'store',
    description:
      'Complete revenue engine: rapid retail counter POS billing, customer ledgers, proforma quotes, GST tax invoices, payments collection and promotional discounts.',
    submodules: [
      { name: 'Customers', desc: 'Customer profiles with GSTIN, billing addresses, credit limits and statement of accounts', icon: 'users', tag: 'Customer Master' },
      { name: 'Quotations', desc: 'Itemized commercial quotations with price margins, custom terms, print and PDF export', icon: 'document', tag: 'Estimates' },
      { name: 'Invoices', desc: 'GST-compliant sales tax invoices with status tracking, thermal printing and WhatsApp sharing', icon: 'receipt', tag: 'GST Invoices' },
      { name: 'Sales & Billing (POS)', desc: 'Lightning-fast retail counter checkout with barcode scanner support and cash/UPI receipts', icon: 'store', tag: 'Rapid POS' },
      { name: 'Payments Received', desc: 'Track customer collections across Cash, UPI, Cards, Bank NEFT/RTGS and Cheques', icon: 'wallet', tag: 'Collections' },
      { name: 'Discounts', desc: 'Line-item percentages, invoice markdowns, festive schemes and customer promotional pricing', icon: 'tag', tag: 'Pricing Rules' },
    ],
  },
  {
    id: 'purchases',
    name: 'Purchases',
    badge: 'Procurement & Payables',
    icon: 'cart',
    description:
      'Procurement operations connecting supplier bills directly into live stock balances, purchase orders and automated vendor payables.',
    submodules: [
      { name: 'Vendors', desc: 'Supplier master directory with tax registration, contact info and historical payables', icon: 'building', tag: 'Vendor Directory' },
      { name: 'Purchases', desc: 'Record incoming supplier bills, purchase orders and automated inventory inward addition', icon: 'bag', tag: 'Inward Billing' },
      { name: 'Purchase Payments', desc: 'Record outgoing payment vouchers, supplier settlements and monitor payment due dates', icon: 'wallet', tag: 'Payables Ledger' },
    ],
  },
  {
    id: 'inventory',
    name: 'Inventory',
    badge: 'Stock & Catalog',
    icon: 'box',
    description:
      'Real-time inventory management with multi-category product master, batch tracking, stock ledger, barcode labels and automated reorder alerts.',
    submodules: [
      { name: 'Products', desc: 'Item master catalog with SKU, HSN codes, categories, barcodes, tax rates and unit pricing', icon: 'box', tag: 'Item Master' },
      { name: 'Inventory', desc: 'Live stock balances, stock adjustment logs, transfer vouchers and low-stock reorder points', icon: 'layers', tag: 'Live Ledger' },
    ],
  },
  {
    id: 'gst-compliance',
    name: 'GST & Compliance',
    badge: 'Statutory & Tax',
    icon: 'scale',
    description:
      'Built-in statutory compliance for Indian businesses including automated GSTR summaries, E-Way bills, tax rates and government E-invoicing.',
    submodules: [
      { name: 'GST Returns', desc: 'Automated GSTR-1, GSTR-3B monthly and quarterly summaries ready for direct tax filing', icon: 'report', tag: 'GSTR-1 & 3B' },
      { name: 'E-Way Bill', desc: 'Generate consignment transport bills with vehicle details, distance and portal export', icon: 'truck', tag: 'NIC E-Way Bill' },
      { name: 'E-Invoice', desc: 'Real-time B2B e-invoicing with IRN generation and signed official government QR code', icon: 'receipt', tag: 'IRN & QR Code' },
      { name: 'Tax Rates', desc: 'Pre-configured Indian GST tax slabs (0%, 5%, 12%, 18%, 28%) and custom cess mapping', icon: 'tag', tag: 'Tax Slabs' },
    ],
  },
  {
    id: 'finance-reports',
    name: 'Finance & Reports',
    badge: 'Accounting & Audit',
    icon: 'bank',
    description:
      'End-to-end financial accounting spanning multi-account banking, daily operating expenses, comprehensive P&L and real-time Balance Sheets.',
    submodules: [
      { name: 'Banking', desc: 'Manage company bank accounts, track deposits, withdrawals, fund transfers and reconciliations', icon: 'bank', tag: 'Bank Accounts' },
      { name: 'Expenses', desc: 'Record operating overheads, petty cash vouchers, utility payments and tax expense deductions', icon: 'wallet', tag: 'Expense Logging' },
      { name: 'Reports', desc: 'Over 20+ granular reports covering Sales, Purchases, Stock Aging, Daybook and Profit & Loss', icon: 'chart', tag: '20+ Reports' },
      { name: 'Balance Sheet', desc: 'Live financial statement depicting total assets, liabilities, owner equity and business solvency', icon: 'scale', tag: 'Audit Ready' },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    badge: 'Free Public Tools',
    icon: 'wrench',
    description:
      'Interactive browser-based productivity tools and high-speed data migration utilities available right on the website for public usage.',
    submodules: [
      {
        name: 'Quotation Maker',
        desc: 'Free interactive browser tool to create, customize and download professional PDF quotes instantly',
        icon: 'document',
        tag: 'Free Online Tool',
        link: '/ledgerone/tools/quotation-maker',
      },
      {
        name: 'Invoice Generator',
        desc: 'Free instant tax invoice generator with automatic GST math, custom branding and PDF export',
        icon: 'receipt',
        tag: 'Free Online Tool',
        link: '/ledgerone/tools/invoice-generator',
      },
      {
        name: 'Data Import',
        desc: 'One-click bulk CSV/Excel import for products, opening inventory, customer and vendor lists',
        icon: 'upload',
        tag: 'Bulk Migration',
      },
    ],
  },
  {
    id: 'system-settings',
    name: 'System & Settings',
    badge: 'Governance & Setup',
    icon: 'gear',
    description:
      'Granular access governance, multi-user role assignments, branch profiles, print layouts and document sequence customization.',
    submodules: [
      { name: 'Users', desc: 'Staff account administration with role-based access control (Super Admin, Cashier, Manager, Accountant)', icon: 'users', tag: 'RBAC Security' },
      { name: 'Settings', desc: 'Company GSTIN profile, multi-branch addresses, thermal print formats and invoice prefix rules', icon: 'gear', tag: 'Configuration' },
    ],
  },
];

const faqs = [
  [
    'What is LedgerOne?',
    'LedgerOne is a comprehensive business billing, inventory and operations ERP platform by OneAssist Technologies. It brings together 8 core operational modules and over 26 sub-modules spanning counter sales, purchasing, inventory, GST compliance, banking, and accounting.',
  ],
  [
    'What modules are included in LedgerOne?',
    'LedgerOne includes Dashboard & Analytics, Sales & Billing (Customers, Quotations, Invoices, POS, Payments, Discounts), Purchases (Vendors, Purchase Orders, Payments), Inventory (Products, Stock Tracking), GST & Compliance (GST Returns, E-Way Bill, E-Invoice, Tax Rates), Finance & Reports (Banking, Expenses, Reports, Balance Sheet), Tools (Quotation Maker, Invoice Generator, Data Import), and System & Settings (Users, RBAC, Settings).',
  ],
  [
    'Can I try creating quotations and invoices for free without an account?',
    'Yes! You can use our interactive Quotation Maker and Invoice Generator tools for free right here in your browser without logging in. Create professional PDFs with tax calculations instantly.',
  ],
  [
    'Are my documents GST-compliant?',
    'Yes. LedgerOne automatically calculates SGST, CGST, and IGST breakdowns according to Indian state tax rules and HSN/SAC specifications, with support for official E-Way Bill and E-Invoicing.',
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

// Authentic ERP Workspace Mockup matching the user's software interface
function Mock({ activeModule = 'dashboard', onSelectModule }) {
  const currentMod = modulesData.find((m) => m.id === activeModule) || modulesData[0];

  return (
    <div className="mockReal" aria-label="LedgerOne Enterprise Workspace Mockup">
      {/* Top Global App Header */}
      <div className="mockAppTop">
        <div className="mockAppBrand">
          <div className="mockAppBrandLogo">
            <Icon name="box" size={14} />
          </div>
          <span>Kongu Engineering...</span>
          <Icon name="chevronLeft" size={14} />
        </div>

        <div className="mockAppSearch">
          <Icon name="search" size={13} />
          <input
            type="text"
            readOnly
            value="Search products, customers, invoices..."
            aria-label="Search"
          />
        </div>

        <div className="mockAppActions">
          <button className="mockNewSaleBtn" type="button">
            <Icon name="plus" size={12} /> New Sale
          </button>
          <div className="mockIconBtn">
            <Icon name="calendar" size={13} />
          </div>
          <div className="mockIconBtn">
            <Icon name="moon" size={13} />
          </div>
          <div className="mockIconBtn">
            <Icon name="bell" size={13} />
          </div>
          <div className="mockUserProfile">
            <div className="mockUserAvatar">N</div>
            <div className="mockUserInfo">
              <b>Nitheesh K V</b>
              <small>SUPER_ADMIN</small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace with Sidebar & Content */}
      <div className="mockAppBody">
        {/* Left Sidebar Menu */}
        <aside className="mockSidebar">
          <button
            className={`mockSidebarItem ${activeModule === 'dashboard' ? 'active' : ''}`}
            onClick={() => onSelectModule && onSelectModule('dashboard')}
            type="button"
          >
            <span className="mockSidebarItemLeft">
              <Icon name="chart" size={14} /> Dashboard
            </span>
          </button>

          <div className="mockSidebarGroupTitle">SALES &amp; BILLING</div>
          <button
            className={`mockSidebarItem ${activeModule === 'sales-billing' ? 'active' : ''}`}
            onClick={() => onSelectModule && onSelectModule('sales-billing')}
            type="button"
          >
            <span className="mockSidebarItemLeft">
              <Icon name="store" size={14} /> Sales &amp; Billing
            </span>
            <Icon name="chevronDown" size={11} />
          </button>
          {activeModule === 'sales-billing' && (
            <div className="mockSidebarSubList">
              <span className="mockSidebarSubItem">👤 Customers</span>
              <span className="mockSidebarSubItem">📄 Quotations</span>
              <span className="mockSidebarSubItem">🧾 Invoices</span>
              <span className="mockSidebarSubItem">🏪 Sales &amp; Billing</span>
              <span className="mockSidebarSubItem">💳 Payments Received</span>
              <span className="mockSidebarSubItem">🏷️ Discounts</span>
            </div>
          )}

          <div className="mockSidebarGroupTitle">PURCHASES</div>
          <button
            className={`mockSidebarItem ${activeModule === 'purchases' ? 'active' : ''}`}
            onClick={() => onSelectModule && onSelectModule('purchases')}
            type="button"
          >
            <span className="mockSidebarItemLeft">
              <Icon name="cart" size={14} /> Purchases
            </span>
            <Icon name="chevronDown" size={11} />
          </button>
          {activeModule === 'purchases' && (
            <div className="mockSidebarSubList">
              <span className="mockSidebarSubItem">👥 Vendors</span>
              <span className="mockSidebarSubItem">🛒 Purchases</span>
              <span className="mockSidebarSubItem">💳 Purchase Payments</span>
            </div>
          )}

          <div className="mockSidebarGroupTitle">INVENTORY</div>
          <button
            className={`mockSidebarItem ${activeModule === 'inventory' ? 'active' : ''}`}
            onClick={() => onSelectModule && onSelectModule('inventory')}
            type="button"
          >
            <span className="mockSidebarItemLeft">
              <Icon name="box" size={14} /> Inventory
            </span>
            <Icon name="chevronDown" size={11} />
          </button>
          {activeModule === 'inventory' && (
            <div className="mockSidebarSubList">
              <span className="mockSidebarSubItem">📦 Products</span>
              <span className="mockSidebarSubItem">🏢 Inventory</span>
            </div>
          )}

          <div className="mockSidebarGroupTitle">GST &amp; COMPLIANCE</div>
          <button
            className={`mockSidebarItem ${activeModule === 'gst-compliance' ? 'active' : ''}`}
            onClick={() => onSelectModule && onSelectModule('gst-compliance')}
            type="button"
          >
            <span className="mockSidebarItemLeft">
              <Icon name="scale" size={14} /> GST &amp; Compliance
            </span>
            <Icon name="chevronDown" size={11} />
          </button>
          {activeModule === 'gst-compliance' && (
            <div className="mockSidebarSubList">
              <span className="mockSidebarSubItem">⚖️ GST Returns</span>
              <span className="mockSidebarSubItem">🚚 E-Way Bill</span>
              <span className="mockSidebarSubItem">🧾 E-Invoice</span>
              <span className="mockSidebarSubItem">🏷️ Tax Rates</span>
            </div>
          )}

          <div className="mockSidebarGroupTitle">FINANCE &amp; REPORTS</div>
          <button
            className={`mockSidebarItem ${activeModule === 'finance-reports' ? 'active' : ''}`}
            onClick={() => onSelectModule && onSelectModule('finance-reports')}
            type="button"
          >
            <span className="mockSidebarItemLeft">
              <Icon name="bank" size={14} /> Finance &amp; Reports
            </span>
            <Icon name="chevronDown" size={11} />
          </button>
          {activeModule === 'finance-reports' && (
            <div className="mockSidebarSubList">
              <span className="mockSidebarSubItem">🏛️ Banking</span>
              <span className="mockSidebarSubItem">👛 Expenses</span>
              <span className="mockSidebarSubItem">📊 Reports</span>
              <span className="mockSidebarSubItem">⚖️ Balance Sheet</span>
            </div>
          )}

          <div className="mockSidebarGroupTitle">TOOLS</div>
          <button
            className={`mockSidebarItem ${activeModule === 'tools' ? 'active' : ''}`}
            onClick={() => onSelectModule && onSelectModule('tools')}
            type="button"
          >
            <span className="mockSidebarItemLeft">
              <Icon name="wrench" size={14} /> Tools
            </span>
            <Icon name="chevronDown" size={11} />
          </button>
          {activeModule === 'tools' && (
            <div className="mockSidebarSubList">
              <span className="mockSidebarSubItem">📄 Quotation Maker</span>
              <span className="mockSidebarSubItem">🧾 Invoice Generator</span>
              <span className="mockSidebarSubItem">☁️ Data Import</span>
            </div>
          )}

          <div className="mockSidebarGroupTitle">SYSTEM &amp; SETTINGS</div>
          <button
            className={`mockSidebarItem ${activeModule === 'system-settings' ? 'active' : ''}`}
            onClick={() => onSelectModule && onSelectModule('system-settings')}
            type="button"
          >
            <span className="mockSidebarItemLeft">
              <Icon name="gear" size={14} /> System &amp; Settings
            </span>
            <Icon name="chevronDown" size={11} />
          </button>
          {activeModule === 'system-settings' && (
            <div className="mockSidebarSubList">
              <span className="mockSidebarSubItem">👤 Users</span>
              <span className="mockSidebarSubItem">⚙️ Settings</span>
            </div>
          )}
        </aside>

        {/* Main Content Area */}
        <main className="mockMain">
          {activeModule === 'dashboard' ? (
            <>
              {/* Dashboard Header matching screenshot */}
              <div className="mockMainHeader">
                <div>
                  <h3>Dashboard</h3>
                  <p>Welcome back! Here&apos;s what&apos;s happening today.</p>
                </div>
                <div className="mockMainHeaderControls">
                  <button className="mockHeaderBtn" type="button">
                    <Icon name="calendar" size={11} /> Today <Icon name="chevronDown" size={9} />
                  </button>
                  <button className="mockHeaderBtn" type="button">
                    <Icon name="gear" size={11} /> Customize
                  </button>
                  <button className="mockHeaderBtn" type="button">
                    <Icon name="refresh" size={11} /> Refresh
                  </button>
                </div>
              </div>

              {/* 8 KPI Cards Grid exactly from user's dashboard */}
              <div className="mockKpiGrid">
                {/* 1. Today's Sales */}
                <div className="mockKpiCard">
                  <div className="mockKpiCardContent">
                    <span className="mockKpiTitle">TODAY&apos;S SALES</span>
                    <b className="mockKpiValue">₹0.00</b>
                    <span className="mockKpiMeta">Filtered period</span>
                  </div>
                  <div className="mockKpiBadge green">
                    <Icon name="trendingUp" size={14} />
                  </div>
                </div>

                {/* 2. Today's Estimated Profit */}
                <div className="mockKpiCard">
                  <div className="mockKpiCardContent">
                    <span className="mockKpiTitle">TODAY&apos;S ESTIMATED PROFIT</span>
                    <b className="mockKpiValue">₹0.00</b>
                    <span className="mockKpiMeta neutral">Estimated margin</span>
                  </div>
                  <div className="mockKpiBadge blue">
                    <Icon name="wallet" size={14} />
                  </div>
                </div>

                {/* 3. Total Products */}
                <div className="mockKpiCard">
                  <div className="mockKpiCardContent">
                    <span className="mockKpiTitle">TOTAL PRODUCTS</span>
                    <b className="mockKpiValue">0</b>
                    <span className="mockKpiMeta neutral">In stock catalog</span>
                  </div>
                  <div className="mockKpiBadge purple">
                    <Icon name="box" size={14} />
                  </div>
                </div>

                {/* 4. Low Stock Items */}
                <div className="mockKpiCard">
                  <div className="mockKpiCardContent">
                    <span className="mockKpiTitle">LOW STOCK ITEMS</span>
                    <b className="mockKpiValue">0</b>
                    <span className="mockKpiMeta warn">Needs replenishment</span>
                  </div>
                  <div className="mockKpiBadge orange">
                    <Icon name="warning" size={14} />
                  </div>
                </div>

                {/* 5. Total Invoiced */}
                <div className="mockKpiCard">
                  <div className="mockKpiCardContent">
                    <span className="mockKpiTitle">TOTAL INVOICED</span>
                    <b className="mockKpiValue">₹0.00</b>
                    <span className="mockKpiMeta neutral">Billed receivables</span>
                  </div>
                  <div className="mockKpiBadge violet">
                    <Icon name="document" size={14} />
                  </div>
                </div>

                {/* 6. Total Customers */}
                <div className="mockKpiCard">
                  <div className="mockKpiCardContent">
                    <span className="mockKpiTitle">TOTAL CUSTOMERS</span>
                    <b className="mockKpiValue">0</b>
                    <span className="mockKpiMeta neutral">Active directory</span>
                  </div>
                  <div className="mockKpiBadge pink">
                    <Icon name="users" size={14} />
                  </div>
                </div>

                {/* 7. Total Vendors */}
                <div className="mockKpiCard">
                  <div className="mockKpiCardContent">
                    <span className="mockKpiTitle">TOTAL VENDORS</span>
                    <b className="mockKpiValue">0</b>
                    <span className="mockKpiMeta neutral">Supplier accounts</span>
                  </div>
                  <div className="mockKpiBadge amber">
                    <Icon name="building" size={14} />
                  </div>
                </div>

                {/* 8. Today's Orders */}
                <div className="mockKpiCard">
                  <div className="mockKpiCardContent">
                    <span className="mockKpiTitle">TODAY&apos;S ORDERS</span>
                    <b className="mockKpiValue">0</b>
                    <span className="mockKpiMeta neutral">POS checkout volume</span>
                  </div>
                  <div className="mockKpiBadge teal">
                    <Icon name="cart" size={14} />
                  </div>
                </div>
              </div>

              {/* Analytics Rows matching screenshot */}
              <div className="mockAnalyticsGrid">
                <div className="mockAnalyticsCard">
                  <div className="mockAnalyticsHead">
                    <b>Revenue &amp; Profit Trend</b>
                    <p>Today performance</p>
                  </div>
                  <div className="mockEmptyState">
                    No sales data found for the selected period.
                  </div>
                </div>

                <div className="mockAnalyticsCard">
                  <div className="mockAnalyticsHead">
                    <b>Today Sales</b>
                    <p>Today performance breakdown</p>
                  </div>
                  <div className="mockEmptyState">
                    No sales data found for the selected period.
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Contextual Module View for other modules */
            <div className="mockModuleDetailView">
              <div className="mockMainHeader">
                <div>
                  <h3>{currentMod.name}</h3>
                  <p>{currentMod.description}</p>
                </div>
                <span className="submoduleBadge">{currentMod.badge}</span>
              </div>

              {/* Submodules Pills Bar */}
              <div className="mockSubmodulesPills">
                {currentMod.submodules.map((sub, i) => (
                  <span className="mockSubmoduleChip" key={i}>
                    <Icon name={sub.icon} size={11} />
                    {sub.name}
                  </span>
                ))}
              </div>

              {/* Realistic Operational Preview Table */}
              <table className="mockPreviewTable">
                <thead>
                  <tr>
                    <th>Item / Sub-Module</th>
                    <th>Capability</th>
                    <th>Indian Compliance</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMod.submodules.slice(0, 4).map((sub, i) => (
                    <tr key={i}>
                      <td>
                        <b>{sub.name}</b>
                      </td>
                      <td>{sub.desc}</td>
                      <td>
                        <span className="mockStatusTag info">{sub.tag}</span>
                      </td>
                      <td>
                        <span className="mockStatusTag success">Active &bull; Ready</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
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
  const [heroModule, setHeroModule] = useState('dashboard');
  const [featureModule, setFeatureModule] = useState('sales-billing');
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

  const activeHeroModuleData = modulesData.find((m) => m.id === heroModule) || modulesData[0];
  const activeFeatureModuleData = modulesData.find((m) => m.id === featureModule) || modulesData[1];

  return (
    <div className="landing-page app">
      {/* Navigation Bar */}
      <header className="nav">
        <div>
          <Logo logoUrl={logoUrl} />
          <nav className={menu ? 'open' : ''}>
            {[
              ['home', 'Home'],
              ['modules', 'Modules'],
              ['tools', 'Tools'],
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
                ALL-IN-ONE BUSINESS ERP &amp; BILLING PLATFORM
              </span>
              <h1>
                Your Business.
                <br />
                Your Finances.
                <br />
                <em>Simplified.</em>
              </h1>
              <p>
                Unify front-counter POS billing, quotations, wholesale tax invoices, supplier purchases,
                connected inventory, GST compliance and real-time Balance Sheets in one seamless software suite.
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
                Try free Quotation &amp; Invoice tools <Icon name="arrow" size={17} />
              </a>

              <div className="trust">
                <span>
                  <Icon name="check" size={14} />
                  8 Core ERP Modules
                </span>
                <span>
                  <Icon name="check" size={14} />
                  26+ Sub-Modules
                </span>
                <span>
                  <Icon name="check" size={14} />
                  GST &amp; E-Way Bill Ready
                </span>
                <span>
                  <Icon name="check" size={14} />
                  Multi-User RBAC
                </span>
              </div>

              {/* Hero Modules & Sub-modules Interactive Navigator */}
              <div className="heroModules" id="modules">
                <div className="heroModulesHead">
                  <small>EXPLORE CORE MODULES ({modulesData.length})</small>
                  <span>Click to preview in workspace</span>
                </div>
                <div className="heroModulePills">
                  {modulesData.map((m) => (
                    <button
                      className={`heroModulePill ${heroModule === m.id ? 'active' : ''}`}
                      key={m.id}
                      onClick={() => setHeroModule(m.id)}
                      type="button"
                    >
                      <Icon name={m.icon} size={14} />
                      {m.name}
                      <span className="pillCount">{m.submodules.length}</span>
                    </button>
                  ))}
                </div>

                {/* Submodules Strip */}
                <div className="heroSubmodulesStrip">
                  <div className="heroSubmodulesTitle">
                    <span>
                      {activeHeroModuleData.name} Sub-Modules ({activeHeroModuleData.submodules.length}):
                    </span>
                    <small>{activeHeroModuleData.description}</small>
                  </div>
                  <div className="heroSubmodulesList">
                    {activeHeroModuleData.submodules.map((sub, idx) => (
                      <span className="heroSubmoduleTag" key={idx}>
                        <Icon name={sub.icon} size={12} />
                        {sub.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Visual Mockup */}
            <div className="heroVisual">
              <Mock
                activeModule={heroModule}
                onSelectModule={(id) => setHeroModule(id)}
              />
            </div>
          </div>
        </section>

        {/* Free Interactive Document Tools */}
        <section className="section tools" id="tools">
          <div className="container">
            <Title
              eyebrow="PRACTICAL BUSINESS UTILITIES"
              title="Create Business Documents in Minutes — 100% Free"
              text="Prepare professional quotations and invoices using LedgerOne’s interactive tools right in your browser without logging in."
            />
            <div className="toolgrid">
              {[
                [
                  'Quotation',
                  'Quotation Maker',
                  'Prepare itemised quotations with customer details, product quantities, unit pricing, applicable tax rates and commercial terms.',
                  'document',
                ],
                [
                  'Invoice',
                  'Invoice Generator',
                  'Create a clear professional tax invoice preview with itemised document details, GST calculations and instant PDF export.',
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
                    {i ? 'Generate an Invoice Now' : 'Create a Quotation Now'}{' '}
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

        {/* Features & Sub-modules Deep Dive */}
        <section className="section features" id="features">
          <div className="container">
            <Title
              eyebrow="FULL ERP CAPABILITIES"
              title="Every Module & Sub-Module Built for Real Operations"
              text="Explore all 8 integrated modules and 26+ specialized sub-modules engineered to automate your trade from counter sales to statutory tax filings."
            />

            {/* Category Selector Bar */}
            <div className="featuresCategoryBar">
              {modulesData.map((m) => (
                <button
                  className={`featureCategoryBtn ${featureModule === m.id ? 'active' : ''}`}
                  key={m.id}
                  onClick={() => setFeatureModule(m.id)}
                  type="button"
                >
                  <Icon name={m.icon} size={15} />
                  {m.name}
                  <span className="countBadge">{m.submodules.length}</span>
                </button>
              ))}
            </div>

            {/* Sub-modules Feature Grid */}
            <div className="featureSubmoduleGrid">
              {activeFeatureModuleData.submodules.map((sub, i) => (
                <article className="submoduleCard" key={i}>
                  <div className="submoduleCardHead">
                    <div className="submoduleCardIcon">
                      <Icon name={sub.icon} size={22} />
                    </div>
                    <span className="submoduleBadge">{sub.tag}</span>
                  </div>
                  <h3>{sub.name}</h3>
                  <p>{sub.desc}</p>
                  <div className="submoduleCardFooter">
                    <span className="submoduleRoleTag">
                      <Icon name="check" size={12} /> {activeFeatureModuleData.name}
                    </span>
                    {sub.link && (
                      <Link href={sub.link} className="submoduleLink">
                        Try Online <Icon name="arrow" size={13} />
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Enterprise Architecture Summary Matrix */}
            <div className="architectureMatrix">
              <div className="architectureMatrixHead">
                <h3>Enterprise Modules &amp; Sub-Modules Architecture</h3>
                <p>
                  A complete operational blueprint of what you can control and automate within LedgerOne ERP.
                </p>
              </div>
              <div className="matrixTableWrapper">
                <table className="matrixTable">
                  <thead>
                    <tr>
                      <th>Module</th>
                      <th>Included Sub-Modules</th>
                      <th>Operational Purpose</th>
                      <th>Compliance / Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modulesData.map((m) => (
                      <tr key={m.id}>
                        <td>
                          <span className="matrixModuleName">
                            <Icon name={m.icon} size={16} />
                            {m.name}
                          </span>
                        </td>
                        <td>
                          <div className="matrixSubmodulesList">
                            {m.submodules.map((sub, idx) => (
                              <span className="matrixSubmoduleChip" key={idx}>
                                {sub.name}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td>{m.description}</td>
                        <td>
                          <span className="submoduleBadge">{m.badge}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section solutions" id="solutions">
          <div className="container">
            <Title
              eyebrow="BUSINESS FIT"
              title="Tailored for Growing Enterprises Across India"
              text="Whether running a retail counter, wholesale distributorship, manufacturing plant, or service enterprise, LedgerOne adapts to your workflow."
            />
            <div className="solutiongrid">
              {[
                [
                  'Retail Shops & Counters',
                  'Fast counter billing workflow with quick product barcode lookups, thermal receipts, cash drawers, and instant UPI payment reconciliation.',
                  'store',
                ],
                [
                  'Wholesalers & Distributors',
                  'Commercial quotations with volume discounts, custom credit terms, automated GST tax invoices, and customer payment collection ledgers.',
                  'truck',
                ],
                [
                  'Service Providers & Agencies',
                  'Itemized milestone billing, formal quotation terms, bank payment details, and real-time Profit & Loss accounting.',
                  'document',
                ],
                [
                  'Multi-Branch Enterprises',
                  'Centralized warehouse inventory tracking, role-based user management (RBAC), and consolidated audit-ready Balance Sheets.',
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
              <h2>Run Your Enterprise from Any Screen</h2>
              <p>
                Monitor counter receipts, approve supplier purchase bills, verify stock counts, and check daily revenue summaries whether in your store or on the move.
              </p>
              <ul>
                <li><Icon name="check" size={16} /> Live dashboard revenue and gross margin summaries</li>
                <li><Icon name="check" size={16} /> Mobile-ready billing and quick quotation generation</li>
                <li><Icon name="check" size={16} /> Real-time low stock replenishment alerts</li>
                <li><Icon name="check" size={16} /> Cloud synchronization with zero data loss</li>
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
              eyebrow="FREQUENTLY ASKED QUESTIONS"
              title="Everything You Need to Know"
              text="Common answers about LedgerOne modules, public tools, GST compliance, and enterprise features."
            />
            <div className="faqgrid">
              {faqs.map((f, i) => (
                <div
                  className={`faqitem ${faq === i ? 'open' : ''}`}
                  key={i}
                  onClick={() => setFaq(faq === i ? -1 : i)}
                >
                  <button type="button">
                    <b>{f[0]}</b>
                    <Icon name={faq === i ? 'close' : 'plus'} size={18} />
                  </button>
                  {faq === i && <p>{f[1]}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request a Demo Form */}
        <section className="section demo" id="demo">
          <div className="container demogrid">
            <div className="democopy">
              <span>SCHEDULE A PERSONALIZED WALKTHROUGH</span>
              <h2>Ready to Simplify Your Business Operations?</h2>
              <p>
                Speak with our ERP specialists to see how LedgerOne’s 8 modules and 26+ sub-modules can be tailored to your specific retail, wholesale or distribution setup.
              </p>
              <div className="demotrust">
                <span><Icon name="check" size={14} /> Free guided demo</span>
                <span><Icon name="check" size={14} /> Custom onboarding assistance</span>
                <span><Icon name="check" size={14} /> Full data migration support</span>
              </div>
            </div>

            <div className="demoform">
              {sent ? (
                <div className="demosuccess">
                  <Icon name="check" size={32} />
                  <h3>Thank you for reaching out!</h3>
                  <p>Our product specialist will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submit}>
                  <h3>Schedule Your Free Demo</h3>
                  <div className="formgroup">
                    <label>Full Name</label>
                    <input name="name" type="text" placeholder="e.g. Nitheesh" />
                    {errors.name && <small>{errors.name}</small>}
                  </div>
                  <div className="formgroup">
                    <label>Business Name</label>
                    <input name="business" type="text" placeholder="e.g. Kongu Engineering" />
                    {errors.business && <small>{errors.business}</small>}
                  </div>
                  <div className="formrow">
                    <div className="formgroup">
                      <label>Email Address</label>
                      <input name="email" type="email" placeholder="name@company.com" />
                      {errors.email && <small>{errors.email}</small>}
                    </div>
                    <div className="formgroup">
                      <label>Phone Number</label>
                      <input name="phone" type="tel" placeholder="+91 98765 43210" />
                      {errors.phone && <small>{errors.phone}</small>}
                    </div>
                  </div>
                  <div className="formgroup">
                    <label>Business Type</label>
                    <select name="type">
                      <option value="retail">Retail Shop / Counter POS</option>
                      <option value="wholesale">Wholesale &amp; Distribution</option>
                      <option value="services">Service Provider / Agency</option>
                      <option value="manufacturing">Manufacturing / Assembly</option>
                    </select>
                  </div>
                  <div className="formgroup">
                    <label>Primary Operational Need</label>
                    <textarea name="need" rows="2" placeholder="Tell us about your current billing, stock, or tax compliance challenges..." />
                    {errors.need && <small>{errors.need}</small>}
                  </div>
                  <button className="btn" type="submit">
                    Request Walkthrough <Icon name="arrow" size={18} />
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
          <div>
            <Logo logoUrl={logoUrl} />
            <p>
              Smart billing, inventory tracking, GST compliance, and operations platform for growing businesses across India.
            </p>
          </div>
          <div>
            <b>Core Modules</b>
            <a href="#modules">Dashboard &amp; KPI</a>
            <a href="#modules">Sales &amp; POS Billing</a>
            <a href="#modules">Purchases &amp; Vendors</a>
            <a href="#modules">Real-Time Inventory</a>
            <a href="#modules">GST &amp; Compliance</a>
            <a href="#modules">Finance &amp; Balance Sheet</a>
          </div>
          <div>
            <b>Free Public Tools</b>
            <Link href="/ledgerone/tools/quotation-maker">Free Quotation Maker</Link>
            <Link href="/ledgerone/tools/invoice-generator">Free Invoice Generator</Link>
            <a href="#tools">Bulk Data Importer</a>
            <a href="#faq">Frequently Asked Questions</a>
          </div>
          <div>
            <b>OneAssist Technologies</b>
            <p>Empowering commerce with intelligent business operating systems.</p>
            <small>&copy; {new Date().getFullYear()} OneAssist Technologies. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
