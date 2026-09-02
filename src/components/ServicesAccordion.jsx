import { useState, useId } from 'react';
import {
  Plus, Minus, Snowflake, Wrench, ThermometerSun,
  RefreshCw, ShieldCheck, Wind, Building2, Refrigerator,
} from 'lucide-react';

/* Each service reads as a line in a supplier's catalogue:
   a reference code, the work, and the detail on expand. */
const SERVICES = [
  {
    code: 'AC·01',
    icon: Snowflake,
    title: 'Air-conditioning installation',
    body: 'We size the unit to the room, run the pipework neatly, and commission it properly — then show you how to run it for the lowest bill. Backed by warranty.',
  },
  {
    code: 'AC·02',
    icon: Wrench,
    title: 'Repairs & fault-finding',
    body: 'Any make, any fault: no cooling, gas leaks, PCB and sensor failures, blocked drains, error codes. Diagnosed on the first visit wherever possible.',
  },
  {
    code: 'HTG·03',
    icon: ThermometerSun,
    title: 'Heating & heat pumps',
    body: 'One efficient unit for warm winters and cool summers — supply, installation, and servicing of reverse-cycle and heat-pump systems.',
  },
  {
    code: 'AC·04',
    icon: RefreshCw,
    title: 'System replacement',
    body: 'Old or failed unit out, a modern efficient one in — same day where we can. Less downtime, lower running costs, and a warranty you can hold us to.',
  },
  {
    code: 'SRV·05',
    icon: ShieldCheck,
    title: 'Service plans & maintenance',
    body: 'Scheduled gas checks, coil cleans, and filter changes that keep efficiency up and catch small faults before they cost you a compressor.',
  },
  {
    code: 'AIR·06',
    icon: Wind,
    title: 'Indoor air quality',
    body: 'Filtration, ventilation, and sanitising to cut dust, damp smells, and allergens from the air your system moves around the room.',
  },
  {
    code: 'COM·07',
    icon: Building2,
    title: 'Commercial & refrigeration',
    body: 'Cooling, cold rooms, and display fridges for restaurants, salons, offices, and shops — from a single unit to a small multi-site setup.',
  },
  {
    code: 'APP·08',
    icon: Refrigerator,
    title: 'Appliance repair',
    body: 'In-store and on-site repair for fridges, freezers, and household appliances, fitted with genuine parts off our own shelf.',
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="accordion">
      {SERVICES.map((svc, i) => {
        const isOpen = open === i;
        const headId = `${baseId}-head-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        const Icon = svc.icon;
        return (
          <div className={`accordion-item ${isOpen ? 'is-open' : ''}`} key={svc.code}>
            <h3 className="accordion-heading">
              <button
                type="button"
                id={headId}
                className="accordion-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="accordion-icon" aria-hidden="true"><Icon size={17} /></span>
                <span className="accordion-code">{svc.code}</span>
                <span className="accordion-title">{svc.title}</span>
                <span className="accordion-mark" aria-hidden="true">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headId}
              className="accordion-panel"
            >
              <div className="accordion-panel-inner">
                <p>{svc.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
