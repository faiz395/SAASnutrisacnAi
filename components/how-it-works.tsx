import { Camera, Upload, Zap } from 'lucide-react'
import Image from 'next/image'
import howItWorks from '@/public/howItWorks.svg'

const steps = [
  {
    name: 'Step 1: Upload',
    description: 'Take a photo or upload an image of your meal.',
    icon: Upload,
  },
  {
    name: 'Step 2: Analyze',
    description: 'Our AI instantly recognizes and analyzes your food.',
    icon: Zap,
  },
  {
    name: 'Step 3: Track',
    description: 'Get detailed nutritional information and track your intake.',
    icon: Camera,
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container  max-w-7xl mx-auto max-sm:px-4">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">How It Works</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover how easy it is to track your nutrition with NutriScan AI.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="flex flex-wrap flex-row justify-center gap-8 items-center">
            <div className="my-16 flex justify-center">
              <Image
                src={howItWorks}
                alt="How It Works Illustration"
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className='flex flex-col gap-y-10'>
              {steps.map((step) => (
                <div key={step.name} className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                    <step.icon className="h-8 w-8 text-white dark:text-black" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-base font-semibold leading-7 text-gray-900 dark:text-white">{step.name}</h3>
                  <p className="mt-2 text-center text-sm leading-6 text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

