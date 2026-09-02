import { useState } from 'react'
import {
  Wrench, Thermometer, Wind, Snowflake, Shield, Zap,
  Calendar, Clock, CheckCircle, ArrowRight
} from 'lucide-react'

const SERVICES = [
  { id: 'ac-install', label: 'AC Installation', icon: Snowflake },
  { id: 'ac-repair', label: 'AC Repair & Maintenance', icon: Wrench },
  { id: 'heating', label: 'Heating & Heat Pumps', icon: Thermometer },
  { id: 'hvac-replace', label: 'HVAC Replacement', icon: Wind },
  { id: 'preventative', label: 'Preventative Maintenance', icon: Shield },
  { id: 'air-quality', label: 'Indoor Air Quality', icon: Wind },
  { id: 'commercial', label: 'Lite Commercial HVAC', icon: Zap },
  { id: 'appliance', label: 'Appliance Repair', icon: Wrench },
]

const TIME_SLOTS = [
  '08:00 - 10:00',
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
]

export default function BookingForm() {
  const [selectedService, setSelectedService] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [refNumber] = useState(() =>
    'AO-SRV-' + Math.floor(100000 + Math.random() * 900000)
  )

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedService || !formData.name || !formData.email || !formData.date || !formData.time) return
    setSubmitted(true)
  }

  const handleReset = () => {
    setSelectedService('')
    setFormData({ name: '', email: '', phone: '', address: '', date: '', time: '', description: '' })
    setSubmitted(false)
  }

  return (
    <section className="booking section" id="booking">
      <div className="container">
        <h2 className="section-title">Book a Service</h2>
        <p className="section-subtitle">
          Schedule an appointment with our experienced HVAC technicians. Fast, reliable, and professional.
        </p>

        <div className="booking-grid">
          {/* Left Info */}
          <div className="booking-info">
            <h3>Why Choose Arctic Ohm?</h3>
            <p>
              Our team of certified technicians delivers reliable service with honest
              recommendations. We focus on energy-efficient solutions and quality workmanship
              to keep your systems running at peak performance.
            </p>
            <ul className="booking-features">
              <li>
                <span className="check-icon"><CheckCircle size={18} /></span>
                Qualified and experienced HVAC technicians
              </li>
              <li>
                <span className="check-icon"><CheckCircle size={18} /></span>
                Same-day service available for urgent repairs
              </li>
              <li>
                <span className="check-icon"><CheckCircle size={18} /></span>
                Transparent pricing with no hidden costs
              </li>
              <li>
                <span className="check-icon"><CheckCircle size={18} /></span>
                Genuine parts and quality workmanship guaranteed
              </li>
              <li>
                <span className="check-icon"><CheckCircle size={18} /></span>
                Serving Seaview and surrounding areas
              </li>
            </ul>
          </div>

          {/* Right Form */}
          <div className="booking-form-card glass">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <h4 style={{
                  fontSize: '0.8125rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-md)'
                }}>
                  Select a Service
                </h4>
                <div className="service-select-grid">
                  {SERVICES.map(svc => {
                    const Icon = svc.icon
                    return (
                      <button
                        type="button"
                        key={svc.id}
                        className={`service-option ${selectedService === svc.id ? 'selected' : ''}`}
                        onClick={() => setSelectedService(svc.id)}
                        id={`service-${svc.id}`}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Icon size={16} /> {svc.label}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => handleChange('name', e.target.value)}
                      required
                      id="booking-name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
                      required
                      id="booking-email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="082 123 4567"
                      value={formData.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      id="booking-phone"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="123 Main Road, Seaview"
                      value={formData.address}
                      onChange={e => handleChange('address', e.target.value)}
                      id="booking-address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      <Calendar size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      className="form-input"
                      value={formData.date}
                      onChange={e => handleChange('date', e.target.value)}
                      required
                      id="booking-date"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      <Clock size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-2px' }} />
                      Time Slot *
                    </label>
                    <select
                      className="form-input"
                      value={formData.time}
                      onChange={e => handleChange('time', e.target.value)}
                      required
                      id="booking-time"
                    >
                      <option value="">Select a time slot</option>
                      {TIME_SLOTS.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Describe the Issue</label>
                  <textarea
                    className="form-input"
                    rows="3"
                    placeholder="Tell us about the problem or service you need..."
                    value={formData.description}
                    onChange={e => handleChange('description', e.target.value)}
                    id="booking-description"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="booking-submit"
                >
                  Confirm Booking <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="booking-success">
                <div className="success-icon">
                  <CheckCircle size={40} />
                </div>
                <h3>Booking Confirmed!</h3>
                <p>
                  Thank you, {formData.name}. Our team will reach out to confirm your
                  appointment. Please save your reference number below.
                </p>
                <div className="booking-ref">{refNumber}</div>
                <button
                  className="btn btn-secondary"
                  onClick={handleReset}
                  style={{ marginTop: 'var(--space-xl)' }}
                >
                  Book Another Service
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
