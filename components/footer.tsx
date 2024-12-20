import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0  max-w-7xl mx-auto max-sm:px-4">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by NutriScan AI. The source code is available on{' '}
            <Link href="#" className="font-medium underline underline-offset-4">
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="text-sm font-medium underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm font-medium underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

