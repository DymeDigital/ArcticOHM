import React from 'react';
import { MapPin, Phone, Mail, AtSign } from 'lucide-react';
import SectionHead from './SectionHead';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS, SOCIAL_LINKS } from '../constants';

export default function LocationMap() {
  return (
    <section className="section section--mist map-section" id="location">
      <div className="container">
        <SectionHead
          code="LOC"
          title="Visit the counter"
          intro="Come in to compare units, grab a spare part over the counter, or drop off an appliance for repair."
        />

        <div className="map-grid">
          <div className="map-info-card">
            <h3>Arctic Ohm</h3>

            <div className="map-info-item">
              <MapPin size={18} />
              <div>
                <h4>Address</h4>
                <p>{ADDRESS}</p>
              </div>
            </div>

            <div className="map-info-item">
              <Phone size={18} />
              <div>
                <h4>Phone / WhatsApp</h4>
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </div>
            </div>

            <div className="map-info-item">
              <Mail size={18} />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>

            <div className="map-info-item">
              <AtSign size={18} />
              <div>
                <h4>Follow</h4>
                <div className="map-follow-icons">
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

          <div className="map-frame-wrap">
            <iframe
              src="https://www.google.com/maps?q=294+Titren+Road,+Seaview&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arctic Ohm location on Google Maps"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
