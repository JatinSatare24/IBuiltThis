import SectionHeader from "@/components/common/section-header"
import { RocketIcon, CalendarIcon } from "lucide-react"
import ProductCard from "@/components/products/product-card"
import EmptyState from "../common/empty-state"

const recentlyLaunchedProducts = [
    {
        id: 1,
        name: 'blah1',
        description: 'blah 1 description',
        tags: ['a', 'b', 'c'],
        votes: 24,
        isFeatured: true
    },
    {
        id: 2,
        name: 'blah2',
        description: 'blah 2 description',
        tags: ['a', 'z', 'c'],
        votes: 48,
        isFeatured: false
    }
]

export default function RecentlyLaunchedProducts() {
    return (
        <section className="py-20">
            <div className="wrapper space-y-12">
                <SectionHeader
                    title="Recently Launched"
                    icon={RocketIcon}
                    description="Discover the latest products from our community"
                />

                {recentlyLaunchedProducts.length > 0 ? (
                    <div className="grid-wrapper">
                        {recentlyLaunchedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <EmptyState
                        message="No products launched in the last week. Check back soon for new launches."
                        icon={CalendarIcon}
                    />
                )}
            </div>
        </section>
    );
}