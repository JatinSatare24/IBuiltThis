'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2Icon, SparklesIcon } from "lucide-react";
import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";

export default function ProductSubmitForm() {
    return (
        <form className="space-y-6">
            <FormField
                label="Product Name"
                name="name"
                id="name"
                placeholder="My Awesome Product"
                required
                onChange={() => { }}
                error=''
            />
            <FormField
                label="Slug"
                name="slug"
                id="slug"
                placeholder="my-awesome-product"
                required
                onChange={() => { }}
                helperText="URL-friendly version of your product name"
                error=''
            />

            <FormField
                label="Tagline"
                name="tagline"
                id="tagline"
                placeholder="A brief, catchy description"
                required
                onChange={() => { }}
                error=''
            />

            <FormField
                label="Description"
                name="description"
                id="description"
                placeholder="Tell us more about your product..."
                required
                onChange={() => { }}
                error=''
                textarea
            />

            <FormField
                label="Website URL"
                name="websiteUrl"
                id="websiteUrl"
                placeholder="https://yourproduct.com"
                required
                onChange={() => { }}
                error=''
                helperText="Enter your product's website or landing page"
            />
            <FormField
                label="Tags"
                name="tags"
                id="tags"
                placeholder="AI, Productivity, SaaS"
                required
                onChange={() => { }}
                error=''
                helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
            />

            <Button type="submit" size="lg" className="w-full">
                <SparklesIcon className="size-4" />
                Submit Product
            </Button>
        </form>
    );

}