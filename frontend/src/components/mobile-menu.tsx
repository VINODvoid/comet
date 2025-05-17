import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link to="/" className="text-lg font-semibold hover:text-primary">
            Home
          </Link>
          <a href="#features" className="text-lg font-semibold hover:text-primary">
            Features
          </a>
          <a href="#testimonials" className="text-lg font-semibold hover:text-primary">
            Testimonials
          </a>
          <a href="#pricing" className="text-lg font-semibold hover:text-primary">
            Pricing
          </a>
          <a href="#faq" className="text-lg font-semibold hover:text-primary">
            FAQ
          </a>
          <div className="flex flex-col gap-2 mt-4">
            <Link to="/login">
              <Button variant="outline" className="w-full">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button className="w-full">Sign up</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}