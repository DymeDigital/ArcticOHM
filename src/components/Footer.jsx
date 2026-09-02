import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import logoImg from '../assets/arctic-ohm-logo.webp';
import { WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS, SOCIAL_LINKS } from '../constants';

export default function Footer({ onNavigate }) {
  const handleNav = (id) => (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate(id);
  };

  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="footer-newsletter-inner">
          {/* Brand + WhatsApp CTA */}
          <div>
            <div
              className="header-logo footer-logo"
              onClick={handleNav('hero')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleNav('hero')(e);
              }}
            >
              <img
                src={logoImg}
                alt="Arctic Ohm — HVAC system spares, repairs, new appliances"
                width={248}
                height={52}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h4>Get a quote</h4>
            <p className="footer-newsletter-copy">
              Spares, new units, installs, and repairs. Send a message on WhatsApp and
              get a real reply with real pricing.
            </p>
            <a
              className="btn btn-primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} /> Message us on WhatsApp
            </a>
          </div>

          {/* Explore Column */}
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={handleNav('services')}>Services</a></li>
              <li><a href="#products" onClick={handleNav('products')}>Products</a></li>
              <li><a href="#specials" onClick={handleNav('specials')}>Specials</a></li>
              <li><a href="#about" onClick={handleNav('about')}>About</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <Phone size={17} />
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={17} />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={17} />
              <span>{ADDRESS}</span>
            </div>
            <div className="footer-follow">
              <span>Follow @arcticohm</span>
              <div className="footer-follow-icons">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-inner">
          <p>&copy; 2026 Arctic Ohm. All rights reserved.</p>

          <div className="footer-socials">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
