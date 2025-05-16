import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ModeToggle } from "../components/mode-toggle"
import { BookmarkIcon, Bookmark, Users, Link2, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookmarkIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Comet</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="hidden md:flex gap-2">
              <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Save and share your favorite links with Comet
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Comet helps you organize, discover, and share the best of the web. Save articles, videos, and more
                    with just one click.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/signup">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="#features">
                    <Button size="lg" variant="outline">
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=550&width=550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to save and share
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Comet provides powerful tools to help you organize your online discoveries and share them with the
                  world.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Bookmark className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Save Anything</h3>
                <p className="text-sm text-muted-foreground">
                  Save articles, videos, recipes, and more with our browser extension or mobile app.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Share with Friends</h3>
                <p className="text-sm text-muted-foreground">
                  Create collections and share them with friends, family, or the world.
                </p>
              </div>
              <div className="grid gap-2 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Link2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Discover Content</h3>
                <p className="text-sm text-muted-foreground">
                  Find new content based on your interests and what your network is saving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by thousands of users</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Don't just take our word for it. Here's what our users have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src="/placeholder.svg?height=40&width=40" alt="User" className="rounded-full" />
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Designer</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  "Comet has completely changed how I save inspiration. I can easily organize everything and access it
                  from any device."
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src="/placeholder.svg?height=40&width=40" alt="User" className="rounded-full" />
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">Developer</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  "As a developer, I'm constantly finding useful resources. Comet helps me organize them all in one
                  place and share with my team."
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src="/placeholder.svg?height=40&width=40" alt="User" className="rounded-full" />
                  <div>
                    <h4 className="font-semibold">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Content Creator</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  "I use Comet daily to save research for my content. The collections feature is a game-changer for
                  organizing topics."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose the plan that's right for you
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Save up to 100 links
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Create 3 collections
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Basic search
                  </li>
                </ul>
                <Link to="/signup" className="mt-auto">
                  <Button className="mt-6 w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">For power users</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Unlimited links
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Unlimited collections
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Advanced search
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Priority support
                  </li>
                </ul>
                <Link to="/signup" className="mt-auto">
                  <Button className="mt-6 w-full">Get Started</Button>
                </Link>
              </div>
              <div className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Team</h3>
                  <p className="text-muted-foreground">For teams and organizations</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Team collaboration
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Admin controls
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-primary"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    API access
                  </li>
                </ul>
                <Link to="/signup" className="mt-auto">
                  <Button className="mt-6 w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to start saving?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join thousands of users who are already organizing their online discoveries with Comet.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/signup">
                  <Button size="lg">Get Started for Free</Button>
                </Link>
                <a href="#features">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <BookmarkIcon className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Comet</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Comet. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
