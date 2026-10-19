'use cache'

import { StarIcon, ArrowUpRightIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";


export async function FeaturedProducts() {

    const featuredProducts = await getFeaturedProducts()

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