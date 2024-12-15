import { Leaf, BarChart, Zap, Shield } from 'lucide-react'

const features = [
  {
    name: 'Comprehensive Nutrition Tracking',
    description: 'Track your daily calorie intake, macronutrients, and micronutrients with ease.',
    icon: BarChart,
  },
  {
    name: 'Advanced Recognition Technology',
    description: 'Our AI can identify multiple ingredients and estimate portion sizes accurately.',
    icon: Zap,
  },
  {
    name: 'Personalized Recommendations',
    description: 'Get tailored nutrition advice based on your dietary preferences and health goals.',
    icon: Leaf,
  },
  {
    name: 'Data Privacy and Security',
    description: 'Your data is encrypted and securely stored. We never share your information.',
    icon: Shield,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container  max-w-7xl mx-auto max-sm:px-4">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Key Features</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover the powerful features that make NutriScan AI your ultimate nutrition companion.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white dark:text-black" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

