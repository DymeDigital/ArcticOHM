import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import logo from '../assets/arctic-ohm-logo.webp';
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL, SOCIAL_LINKS } from '../constants';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'specials', label: 'Specials' },
  { id: 'about', label: 'About' },
  { id: 'location', label: 'Contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const socialRow = (className) => (
    <div className={className}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <Icon size={15} />
        </a>
      ))}
    </div>
  );

  return (
    <div className="header-sticky-wrap">
      {/* Main header */}
      <header className="header">
        <div className="header-inner">
          <div
            className="header-logo"
            onClick={() => goToSection('hero')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                goToSection('hero');
              }
            }}
          >
            <img
              src={logo}
              alt="Arctic Ohm — HVAC system spares, repairs, new appliances"
              width={210}
              height={44}
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="nav-actions">
            <a className="header-phone" href={`tel:${PHONE_TEL}`}>
              <Phone size={15} />
              <span>{PHONE_DISPLAY}</span>
            </a>

            <a
              className="btn btn-primary btn-sm"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              className={`mobile-menu-btn ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Navigation bar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="nav-links-social">{socialRow('nav-socials')}</li>
          </ul>
          {socialRow('nav-socials nav-socials--desktop')}
        </div>
      </nav>
    </div>
  );
};

export default Header;
