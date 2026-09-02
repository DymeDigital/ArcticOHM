import { useState } from 'react'
import { AlertTriangle, X, Phone, CheckCircle, Clock } from 'lucide-react'

const EMERGENCY_TYPES = [
  { id: 'ac-failure', label: '🥵 Complete AC / HVAC System Failure' },
  { id: 'refrigerant-leak', label: '💧 Refrigerant Leak Detected' },
  { id: 'commercial-fridge', label: '🧊 Commercial Fridge / Freezer Down' },
  { id: 'electrical', label: '⚡ Electrical / Safety Concern with Unit' },
  { id: 'water-leak', label: '💦 Water Leak from AC Unit' },
  { id: 'other', label: '🔧 Other Emergency' },
]

export default function EmergencyModal({ isOpen, onClose }) {
  const [selectedType, setSelectedType] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [dispatched, setDispatched] = useState(false)
  const [ticketId] = useState(() =>
    'AO-EMG-' + Math.floor(100000 + Math.random() * 900000)
  )

  const handleSubmit = () => {
    if (!selectedType || !name || !phone) return
    setDispatched(true)
  }

  const handleClose = () => {
    setSelectedType('')
    setName('')
    setPhone('')
    setAddress('')
    setDispatched(false)
    onClose()
  }

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--red-500)'
          }}>
            <AlertTriangle size={22} /> Emergency HVAC Service
          </h3>
          <button className="cart-close" onClick={handleClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {!dispatched ? (
            <>
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xl)',
                lineHeight: '1.6'
              }}>
                Need urgent assistance? Select the type of emergency below and we'll
                dispatch a technician to your location as quickly as possible.
              </p>

              <div className="emergency-options">
                {EMERGENCY_TYPES.map(type => (
                  <button
                    key={type.id}
                    className={`emergency-option ${selectedType === type.id ? 'selected' : ''}`}
                    onClick={() => setSelectedType(type.id)}
                    id={`emergency-${type.id}`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>

              <div className="form-row" style={{ marginBottom: 'var(--space-md)' }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Full Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    id="emergency-name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="082 123 4567"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    id="emergency-phone"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Your location for dispatch"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                  id="emergency-address"
                />
              </div>

              <button
                className="btn btn-danger btn-lg"
                style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-md)' }}
                onClick={handleSubmit}
                id="emergency-submit"
              >
                <Phone size={18} /> Request Emergency Dispatch
              </button>

              <p style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textAlign: 'center',
                marginTop: 'var(--space-md)'
              }}>
                Or call us directly: <strong style={{ color: 'var(--text-secondary)' }}>041 555 0123</strong>
              </p>
            </>
          ) : (
            <div className="dispatch-card">
              <div className="dispatch-pulse">
                <CheckCircle size={28} />
              </div>
              <h3 style={{ color: 'var(--emerald-500)' }}>Technician Dispatched!</h3>
              <p style={{
                color: 'var(--text-secondary)',
                marginTop: 'var(--space-md)',
                marginBottom: 'var(--space-lg)'
              }}>
                We've received your emergency request. A technician has been notified
                and will contact you shortly.
              </p>

              <div className="dispatch-info">
                <p><strong>Ticket:</strong> {ticketId}</p>
                <p>
                  <strong>
                    <Clock size={14} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                    Est. Response:
                  </strong>{' '}
                  30 - 60 minutes
                </p>
                <p><strong>Contact:</strong> Operations@arcticohm.co.za</p>
                <p><strong>Address:</strong> 294 Titren Road, Seaview</p>
              </div>

              <button
                className="btn btn-secondary"
                onClick={handleClose}
                style={{ marginTop: 'var(--space-xl)' }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
