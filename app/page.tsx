import { HeroSection } from "@/components/landing-page/hero-section"
import { FeaturedProducts } from "@/components/landing-page/featured-products"
import RecentlyLaunchedProducts from "@/components/landing-page/recently-launched-products"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RecentlyLaunchedProducts />
    </div>
  )
}