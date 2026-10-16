import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import heroAcImg from '../assets/hero-bg.webp';
import heroMobileImg from '../assets/hero-mobile.webp';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL, PHONE_DISPLAY, ADDRESS } from '../constants';

import promo1 from '../assets/specials/special-oct-aircon-6999-9999.webp';
import promo2 from '../assets/specials/special-oct-service-r300.webp';

const PROMO_IMGS = [promo1, promo2];

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function HeroSection() {
  const [promo, setPromo] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(
      () => setPromo((p) => (p + 1) % PROMO_IMGS.length),
      3200,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" id="hero">
      <div
        className="hero-bg"
        style={{
          '--hero-desktop': `url(${heroAcImg})`,
          '--hero-mobile': `url(${heroMobileImg})`,
        }}
        aria-hidden="true"
      />
      <div className="hero-scrim" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-split">
          {/* Main content */}
          <div className="hero-tile-main">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="pulse-dot"></span>
                <span>Durban&rsquo;s cooling specialists</span>
              </div>

              <h1>
                Air conditioning &amp;<br className="hero-br" />{' '}
                refrigeration, <span className="accent-text">done properly.</span>
              </h1>

              <p className="hero-description">
                New units, genuine spares, and repairs on any make — Authorised dealers of
                Samsung, Carrier &amp; Daikin.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary btn-lg"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={18} />
                  <span>Get a quote on WhatsApp</span>
                </a>
                <button
                  type="button"
                  className="btn btn-ghost btn-lg"
                  onClick={() => scrollToId('specials')}
                >
                  <span>See October specials</span>
                  <ArrowDown size={18} />
                </button>
              </div>

              <dl className="hero-readout">
                <div>
                  <dt>WhatsApp / Call</dt>
                  <dd>{PHONE_DISPLAY}</dd>
                </div>
                <div>
                  <dt>Trade counter</dt>
                  <dd>{ADDRESS}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Side stack — specials carousel */}
          <div className="hero-side-stack">
            <button
              type="button"
              className="hero-side hero-side--promo"
              onClick={() => scrollToId('specials')}
              aria-label="View current specials"
            >
              <div className="hero-side-body">
                <span className="hero-side-eyebrow">On now</span>
                <h3>October specials</h3>
                <span className="hero-side-link">See all deals <ArrowRight size={14} /></span>
              </div>
              <div className="hero-promo">
                <div className="hero-promo-frame">
                  {PROMO_IMGS.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className={i === promo ? 'is-active' : ''}
                    />
                  ))}
                </div>
                <div className="hero-promo-dots" aria-hidden="true">
                  {PROMO_IMGS.map((src, i) => (
                    <span key={src} className={i === promo ? 'is-active' : ''} />
                  ))}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
