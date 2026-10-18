import { StarIcon, ArrowUpRightIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import ProductCard from "@/components/products/product-card";

const featuredProducts = [
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

export function FeaturedProducts() {

    return (
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                    <SectionHeader
                        title='Featured Today'
                        icon={StarIcon}
                        description='Top picks from our community this week'
                    />
                    <Link
                        className={buttonVariants({ variant: 'outline', className: 'hidden sm:flex' })}
                        href='/explore'>
                        View All
                        <ArrowUpRightIcon className='size-4' />
                    </Link>
                </div>

                <div className="grid-wrapper">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}