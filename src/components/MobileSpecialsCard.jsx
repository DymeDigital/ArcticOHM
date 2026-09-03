import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import promo1 from '../assets/specials/special-service-r300.webp';
import promo2 from '../assets/specials/special-hantech-4999.webp';
import promo3 from '../assets/specials/special-hantech-5999.webp';
import promo4 from '../assets/specials/special-signs-service.webp';

const PROMO_IMGS = [promo1, promo2, promo3, promo4];

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

/* Phone-only twin of the hero's opening-specials card. The hero copy is
   hidden below 768px (.hero-side-stack); this one runs under the conveyor. */
export default function MobileSpecialsCard() {
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
    <div className="mobile-specials">
      <button
        type="button"
        className="hero-side hero-side--promo mobile-specials-card"
        onClick={() => scrollToId('specials')}
        aria-label="View current opening specials"
      >
        <div className="hero-side-body">
          <span className="hero-side-eyebrow">On now</span>
          <h3>Opening specials</h3>
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
  );
}
