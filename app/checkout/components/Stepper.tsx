
'use client'

import { usePathname } from 'next/navigation'

const steps = [
  { name: 'Contact', path: '/checkout/contact' },
  { name: 'Address', path: '/checkout/address' },
  { name: 'Payment', path: '/checkout/payment' },
]

export default function Stepper() {
  const pathname = usePathname()

  return (
    <div className="flex items-center justify-center gap-4 text-sm">
      {steps.map((step, index) => {
        const active = pathname === step.path

        return (
          <div key={step.name} className="flex items-center gap-2">
            <span
              className={`px-4 py-1 rounded-full border ${
                active ? 'border-black font-semibold' : 'border-gray-300'
              }`}
            >
              {step.name}
            </span>
            {index < steps.length - 1 && <span>›</span>}
          </div>
        )
      })}
    </div>
  )
}
