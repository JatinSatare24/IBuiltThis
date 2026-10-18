import Link from "next/link"
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronUpIcon, ChevronDownIcon, StarIcon } from "lucide-react"
import { cn } from "cn"

interface Product {
    id: number,
    name: string,
    description: string,
    tags: string[],
    votes: number,
    isFeatured: boolean
}

export default function ProductCard({ product }: { product: Product }) {

    const hasVoted = true

    return (
        <Link href={`/products/${product.id}`}>
            <Card className="group card-hover hover:bg-primary-foregorund/10 border-solid border-gray-400 min-h-[180px]">
                <CardHeader className="flex-1">
                    <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0 ">
                            <div className="flex items-center gap-2">
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.name}</CardTitle>
                                {product.isFeatured &&
                                    <Badge className="gap-1 bg-primary text-primary-foreground">
                                        <StarIcon className='size-3 fill-current' /> Featured
                                    </Badge>}
                            </div>
                            <CardDescription>{product.description}</CardDescription>
                        </div>
                        {/* {voting button} */}
                        <div className="flex flex-col items-center gap-1 shrink-0">
                            <Button
                                variant='ghost' size='icon-sm'
                                className={cn(
                                    'h-8 w-8 text-primary',
                                    hasVoted ? 'bg-primary/10 text-primary hover:bg-primary/20' :
                                        'hover:bg-primary/10 hover:text-primary'
                                )}
                            >
                                <ChevronUpIcon className="size-5" />
                            </Button>
                            <span className="text-sm font-semibold transition-colors text-foreground">10</span>
                            <Button
                                variant='ghost' size='icon-sm'
                                className={cn(
                                    'h-8 w-8 text-primary',
                                    hasVoted ? 'hover:text-destructive' :
                                        'opacity-50 cursor-not-allowed'
                                )}
                            >
                                <ChevronDownIcon className="size-5" />
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardFooter>
                    <div className="flex items-center gap-2">
                        {product.tags.map((tag) =>
                            (<Badge variant='secondary' key={tag}>{tag}</Badge>))}
                    </div>
                </CardFooter>
            </Card>
        </Link >
    )
}