import SectionHeader from "@/components/common/section-header";
import { SparkleIcon } from "lucide-react";
import ProductSubmitForm from "@/components/products/product-submit-form";

export default function Submit() {
    return (
        <section className="py-20">
            <div className="wrapper">
                <SectionHeader
                    title="Submit your product"
                    icon={SparkleIcon}
                    description="Share your creation with the community.
                    Your submission will be reviewed before going live."
                />
                <div className="max-2-2xl mx-auto">
                    <ProductSubmitForm />
                </div>
            </div>
        </section>

    )
}