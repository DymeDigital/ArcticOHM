import { useState } from 'react'
import { Search, Plus, Eye, X, Star } from 'lucide-react'

import acSplitUnit from '../assets/ac_split_unit.png'
import heatPump from '../assets/heat_pump.png'
import compressorPart from '../assets/compressor_part.png'
import commercialFridge from '../assets/commercial_fridge.png'
import portableAc from '../assets/portable_ac.png'
import thermostat from '../assets/thermostat.png'
import airFilter from '../assets/air_filter.png'
import heroAc from '../assets/hero_ac.png'

const PRODUCTS = [
  {
    id: 1,
    name: '12,000 BTU Inverter Split AC',
    category: 'Air Conditioners',
    price: 8999,
    originalPrice: 11499,
    image: acSplitUnit,
    badge: 'sale',
    rating: 4.8,
    desc: 'Energy-efficient inverter split unit with Wi-Fi control. Ideal for bedrooms and small living areas.',
    specs: ['12,000 BTU', 'A+++ Rating', 'Wi-Fi Enabled', 'R32 Refrigerant', '5 Year Warranty']
  },
  {
    id: 2,
    name: '18,000 BTU Wall-Mount AC',
    category: 'Air Conditioners',
    price: 13499,
    image: heroAc,
    badge: 'popular',
    rating: 4.9,
    desc: 'High-performance wall-mount unit designed for larger rooms and open-plan spaces.',
    specs: ['18,000 BTU', 'A++ Rating', 'Turbo Mode', 'Anti-Bacterial Filter', '5 Year Warranty']
  },
  {
    id: 3,
    name: 'EcoHeat Air-Source Heat Pump',
    category: 'Heat Pumps',
    price: 24999,
    originalPrice: 29999,
    image: heatPump,
    badge: 'sale',
    rating: 4.7,
    desc: 'Premium air-source heat pump for efficient heating and cooling. Perfect for whole-home climate control.',
    specs: ['COP 4.2', 'Heating & Cooling', 'Low Noise 45dB', 'R410A', '7 Year Warranty']
  },
  {
    id: 4,
    name: 'Scroll Compressor 3HP',
    category: 'Spare Parts',
    price: 4299,
    image: compressorPart,
    rating: 4.6,
    desc: 'OEM-grade scroll compressor suitable for commercial refrigeration and AC systems.',
    specs: ['3HP Rating', 'R404A/R507 Compatible', 'Single Phase', 'Low Vibration', '2 Year Warranty']
  },
  {
    id: 5,
    name: 'Commercial Double-Door Fridge',
    category: 'Refrigeration',
    price: 18750,
    image: commercialFridge,
    badge: 'popular',
    rating: 4.8,
    desc: 'Stainless steel commercial refrigerator built for restaurants, cafes, and food service operations.',
    specs: ['1200L Capacity', '-2°C to 8°C Range', 'Digital Controller', 'LED Interior', '3 Year Warranty']
  },
  {
    id: 6,
    name: 'Portable AC Unit 9,000 BTU',
    category: 'Air Conditioners',
    price: 5999,
    image: portableAc,
    rating: 4.4,
    desc: 'Compact portable air conditioner with dehumidifier function. No installation required.',
    specs: ['9,000 BTU', 'Portable Design', '3-in-1 Function', 'Remote Control', '2 Year Warranty']
  },
  {
    id: 7,
    name: 'Smart Wi-Fi Thermostat',
    category: 'Spare Parts',
    price: 2499,
    image: thermostat,
    badge: 'new',
    rating: 4.5,
    desc: 'Programmable smart thermostat with app control. Compatible with most HVAC systems.',
    specs: ['Wi-Fi Enabled', 'Touch Display', '7-Day Schedule', 'Energy Reports', 'Easy Install']
  },
  {
    id: 8,
    name: 'HEPA Air Filter Panel',
    category: 'Spare Parts',
    price: 699,
    image: airFilter,
    rating: 4.3,
    desc: 'High-efficiency particulate air filter. Captures 99.97% of airborne particles for improved indoor air quality.',
    specs: ['HEPA H13 Grade', '20x25x1 inch', '6 Month Life', 'Anti-Microbial', 'Universal Fit']
  }
]

const CATEGORIES = ['All', 'Air Conditioners', 'Heat Pumps', 'Refrigeration', 'Spare Parts']

export default function ShopCatalog({ onAddToCart }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [quickView, setQuickView] = useState(null)

  const filtered = PRODUCTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
    const matchCategory = activeCategory === 'All' || p.category === activeCategory
    return matchSearch && matchCategory
  })

  return (
    <section className="shop section" id="shop">
      <div className="container">
        <h2 className="section-title">Shop Units & Parts</h2>
        <p className="section-subtitle">
          Browse our range of air-conditioning units, refrigeration equipment, and quality spare parts.
        </p>

        <div className="shop-controls">
          <div className="search-wrapper">
            <Search size={18} />
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              id="product-search"
            />
          </div>
          <div className="filter-chips">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="product-card glass fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
              id={`product-${product.id}`}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.badge && (
                  <span className={`product-badge ${product.badge === 'sale' ? 'sale' : ''}`}>
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={12}
                      fill="currentColor"
                      stroke="none"
                      style={{ opacity: s < Math.round(product.rating) ? 1 : 0.25 }}
                    />
                  ))}
                  <span>{product.rating.toFixed(1)}</span>
                </div>
                <p className="product-desc">{product.desc}</p>
                <div className="product-footer">
                  <span className="product-price">
                    R {product.price.toLocaleString()}
                    {product.originalPrice && (
                      <span className="original">R {product.originalPrice.toLocaleString()}</span>
                    )}
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => setQuickView(product)}
                      title="Quick View"
                      aria-label={`Quick view ${product.name}`}
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => onAddToCart(product)}
                      title="Add to Cart"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-muted)' }}>
            <p>No products found matching your search.</p>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <div className={`modal-overlay ${quickView ? 'open' : ''}`} onClick={() => setQuickView(null)}>
        {quickView && (
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{quickView.name}</h3>
              <button className="cart-close" onClick={() => setQuickView(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                marginBottom: 'var(--space-xl)',
                background: 'var(--mist)',
                height: '240px'
              }}>
                <img
                  src={quickView.image}
                  alt={quickView.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-md)' }}>
                <span className="product-category" style={{ margin: 0 }}>{quickView.category}</span>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: 'var(--amber-500)',
                  fontSize: '0.8125rem',
                  fontWeight: '600'
                }}>
                  <Star size={14} fill="currentColor" /> {quickView.rating}
                </span>
              </div>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                lineHeight: '1.7',
                marginBottom: 'var(--space-xl)'
              }}>
                {quickView.desc}
              </p>

              <h4 style={{
                fontSize: '0.8125rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-md)'
              }}>
                Specifications
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: 'var(--space-xl)' }}>
                {quickView.specs.map((spec, i) => (
                  <span key={i} style={{
                    padding: '0.375rem 0.875rem',
                    background: 'var(--mist)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {spec}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-lg)',
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)'
              }}>
                <div>
                  <span className="product-price" style={{ fontSize: '1.5rem' }}>
                    R {quickView.price.toLocaleString()}
                  </span>
                  {quickView.originalPrice && (
                    <span className="original" style={{ display: 'block', fontSize: '0.8rem' }}>
                      Was R {quickView.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => { onAddToCart(quickView); setQuickView(null) }}
                >
                  <Plus size={18} /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
