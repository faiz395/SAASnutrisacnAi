import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    content: "NutriScan AI has completely transformed my approach to healthy eating. It's like having a nutritionist in my pocket!",
    author: {
      name: 'Emily Johnson',
      role: 'Fitness Enthusiast',
      image: '/placeholder.svg?height=100&width=100',
    },
  },
  {
    content: "As a professional athlete, precise nutrition is crucial. NutriScan AI provides the accuracy and insights I need to perform at my best.",
    author: {
      name: 'Michael Chen',
      role: 'Olympic Swimmer',
      image: '/placeholder.svg?height=100&width=100',
    },
  },
  {
    content: "I've tried many nutrition apps, but NutriScan AI stands out with its AI-powered analysis and personalized recommendations.",
    author: {
      name: 'Sarah Thompson',
      role: 'Registered Dietitian',
      image: '/placeholder.svg?height=100&width=100',
    },
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">What Our Users Say</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover how NutriScan AI is helping people achieve their health and fitness goals.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div
                key={testimonialIdx}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-gray-800/5"
              >
                <blockquote className="text-gray-900 dark:text-white">
                  <p>{`"${testimonial.content}"`}</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                    <AvatarFallback>{testimonial.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                    <div className="text-gray-600 dark:text-gray-400">{testimonial.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

