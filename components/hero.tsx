import { Button } from '@/components/ui/button'
import Image from 'next/image'
import hero1 from '@/public/hero1.svg'
export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 ">
      <div className="container">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20  max-w-7xl mx-auto max-sm:px-4">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Your Personal AI Nutritionist
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Instant Meal Analysis at Your Fingertips. Upload a photo of your meal and get detailed nutritional information in seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <Button>Scan Your Meal</Button>
              <Button variant="outline">Start Tracking</Button>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <Image
                src={hero1}
                alt="AI Nutritionist Illustration"
                width={600}
                height={600}
                className="w-full"
              />
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob dark:bg-purple-800"></div>
              <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000 dark:bg-yellow-700"></div>
              <div className="absolute -bottom-4 right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000 dark:bg-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

