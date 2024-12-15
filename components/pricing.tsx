import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$9',
    description: 'Everything you need to get started with nutrition tracking.',
    features: ['Unlimited meal scans', 'Basic nutritional analysis', 'Daily calorie tracking', '7-day meal history'],
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    priceMonthly: '$19',
    description: 'Advanced features for health enthusiasts and fitness professionals.',
    features: [
      'All Basic features',
      'Detailed macro and micronutrient analysis',
      'Personalized nutrition recommendations',
      'Integration with fitness apps',
      'Priority customer support',
    ],
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Custom',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'All Pro features',
      'Custom AI model training',
      'API access for seamless integration',
      'Dedicated account manager',
      'Custom reporting and analytics',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="container  max-w-7xl mx-auto max-sm:px-4">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Pricing Plans</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your nutrition journey.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 dark:bg-gray-800 dark:ring-gray-700 ${
                tierIdx === 1 ? 'lg:z-10 lg:rounded-b-none' : ''
              } ${tierIdx === 0 ? 'lg:rounded-r-none' : ''} ${
                tierIdx === 2 ? 'lg:rounded-l-none' : ''
              }`}
            >
              <div>
                <h3
                  id={tier.id}
                  className="text-base font-semibold leading-7 text-primary"
                >
                  {tier.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">{tier.priceMonthly}</span>
                  <span className="text-base font-semibold leading-7 text-gray-600 dark:text-gray-400">/month</span>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">{tier.description}</p>
                <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-8 block w-full">
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

