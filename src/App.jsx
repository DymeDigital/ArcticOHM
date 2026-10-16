import { ChevronRight } from 'lucide-react'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import MobileSpecialsCard from './components/MobileSpecialsCard'
import SectionHead from './components/SectionHead'
import ServicesAccordion from './components/ServicesAccordion'
import Footer from './components/Footer'
import WhatsAppIcon from './components/WhatsAppIcon'
import LocationMap from './components/LocationMap'
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY } from './constants'

import specialAircon from './assets/specials/special-oct-aircon-6999-9999.webp'
import specialService from './assets/specials/special-oct-service-r300.webp'

/* Capability line — reads like the header of a supplier's letter. */
const CAPABILITIES = [
  { label: 'IN STOCK', text: 'Genuine air-con & refrigeration spares on the shelf' },
  { label: 'ANY MAKE', text: 'We repair and service every major brand' },
  { label: 'HOMES & TRADE', text: 'Houses, shops, restaurants & cold rooms' },
  { label: 'NEW UNITS', text: 'Supplied, installed and commissioned properly' },
  { label: 'AUTHORISED', text: 'Authorised dealers of Samsung, Carrier & Daikin' },
  { label: 'REAL REPLIES', text: 'A person on WhatsApp, not a ticket number' },
]

/* Stock we carry — catalogue lines, text only, no product imagery yet. */
const CATALOGUE = [
  { code: 'AC', title: 'Air-conditioning units', body: 'Split, multi-split, and portable units — sized to the room and priced with installation.' },
  { code: 'REF', title: 'Refrigeration', body: 'Display fridges, chest freezers, and cold-room kit built for restaurant and retail loads.' },
  { code: 'SPR', title: 'Spares & components', body: 'Compressors, fan motors, PCBs, sensors, gas, and fittings — genuine parts, off the shelf.' },
  { code: 'APP', title: 'New appliances', body: 'Household and light-commercial appliances sourced and delivered to order.' },
]

const REASONS = [
  { label: 'HONEST', title: 'No-nonsense quotes', body: 'We price the job it actually needs — no padding, no surprise line items on the invoice.' },
  { label: 'STOCK', title: 'Parts in stock', body: 'Our own spares counter means most repairs aren’t stuck waiting on a supplier order.' },
  { label: 'SKILLED', title: 'Technicians, not fitters', body: 'Trained across every major brand, so the fault is found and fixed the first time.' },
  { label: 'EFFICIENT', title: 'Lower power bills', body: 'Right-sized systems and honest advice that cut what your cooling costs to run.' },
  { label: 'LOCAL', title: 'Around the corner', body: 'Based in Seaview, so call-outs across the area are quick — and the call-out fee is small.' },
  { label: 'DIRECT', title: 'Answered by a person', body: 'Message us on WhatsApp and get a real reply with real pricing, fast.' },
]

const SPECIALS = [
  { img: specialAircon, w: 1024, h: 1536, tag: 'DEAL·01', caption: '12 000 BTU R6 999 · 18 000 BTU R9 999 — incl. install kit up to 3 m', alt: 'Arctic Ohm aircon special — 12000 BTU for R6999 and 18000 BTU for R9999, including installation kit up to 3 metres.' },
  { img: specialService, w: 832, h: 1248, tag: 'DEAL·02', caption: 'Aircon service — R300 within 30 km', alt: 'Aircon service special — R300 within a 30 km radius. Book with Arctic Ohm.' },
]

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  return (
    <div className="app">
      <Header />

      <HeroSection />

      {/* Capability conveyor — runs below the hero on a loop */}
      <div className="capability-strip" aria-label="What Arctic Ohm offers">
        <div className="capability-track">
          {Array.from({ length: 4 }).flatMap((_, pass) =>
            CAPABILITIES.map((item) => (
              <div
                className="capability-item"
                key={`${pass}-${item.label}`}
                aria-hidden={pass > 0 || undefined}
              >
                <span className="capability-label">{item.label}</span>
                <span className="capability-text">{item.text}</span>
                <ChevronRight className="capability-sep" size={14} aria-hidden="true" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* October specials — phone only, sits under the conveyor */}
      <MobileSpecialsCard />

      {/* Coming soon band */}
      <section className="section section--tight" id="coming-soon">
        <div className="container">
          <div className="coming-soon-band">
            <span className="coming-soon-badge">Coming soon</span>
            <p>
              The full online store and instant booking land shortly. Until then, WhatsApp us
              for pricing, stock checks, and to book a technician.
            </p>
            <a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services — accordion */}
      <section className="section services" id="services">
        <div className="container">
          <SectionHead
            code="SVC"
            title="Services"
            intro="Installation, repairs, servicing, and spares — for the air conditioning, refrigeration, and appliances that keep a home comfortable and a business running. Tap a line for detail."
          />
          <ServicesAccordion />
        </div>
      </section>

      {/* Products / stock */}
      <section className="section section--mist" id="products">
        <div className="container">
          <SectionHead
            code="STK"
            title="What we stock"
            intro="New units, refrigeration equipment, and a working spares counter — so most repairs don’t wait on a supplier order."
          />
          <div className="catalogue-grid">
            {CATALOGUE.map((item) => (
              <div className="catalogue-item" key={item.code} data-code={item.code}>
                <span className="catalogue-code">{item.code}</span>
                <h3 className="catalogue-title">{item.title}</h3>
                <p className="catalogue-body">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="catalogue-note">
            Need a specific part or unit?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Send the make and model on WhatsApp</a>{' '}
            and we&rsquo;ll check stock and price.
          </p>
        </div>
      </section>

      {/* Current specials — ad campaign plates */}
      <section className="section" id="specials">
        <div className="container">
          <SectionHead
            code="PROMO"
            title="October specials"
            intro="October pricing while stock lasts. Tap any deal to check availability and book on WhatsApp."
          />
          <div className="specials-grid">
            {SPECIALS.map((s, i) => (
              <a
                key={s.caption}
                className="special-plate"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire about: ${s.alt}`}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <span className="special-caption">
                  <span className="special-tag">{s.tag}</span>
                  {s.caption}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Arctic Ohm */}
      <section className="section section--mist" id="why">
        <div className="container">
          <SectionHead
            code="WHY"
            title="Why Arctic Ohm"
            intro="Six reasons homeowners and businesses across Seaview keep our number saved."
          />
          <div className="reason-grid">
            {REASONS.map((r) => (
              <div className="reason" key={r.label}>
                <span className="reason-label">{r.label}</span>
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-body">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <SectionHead code="CO" title="About Arctic Ohm" />
          <div className="about-body">
            <p>
              Arctic Ohm is an air-conditioning, refrigeration, and appliance centre at{' '}
              <strong>294 Titren Road, Seaview</strong>. We stock genuine spares for the leading
              air-con and refrigeration brands, and supply new units for homes and businesses
              across the area.
            </p>
            <p>
              Behind the counter is a team that does the work — installations, gas repairs,
              cold-room faults, and appliance servicing. Whether you need a single part, a new
              system, or a technician on site, you get straight pricing and a job done properly.
            </p>
            <p className="about-tagline">
              Genuine parts. Reliable units. Repairs that last.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--tight">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-inner">
              <h2>Get a price, fast</h2>
              <p>
                Send us the make, model, or a photo of the fault on WhatsApp. We&rsquo;ll reply
                with pricing and the next available booking slot — quoting is free.
              </p>
              <div className="cta-actions">
                <a className="btn btn-primary btn-lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={18} /> Get a quote on WhatsApp
                </a>
                <a className="btn btn-ghost btn-lg" href={`tel:${PHONE_TEL}`}>
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationMap />

      <Footer onNavigate={scrollToId} />

      {/* WhatsApp FAB */}
      <a
        className="whatsapp-btn"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        id="whatsapp-fab"
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  )
}
