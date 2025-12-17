import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cream dark:bg-plum-dark text-center px-6">
            <h1 className="font-serif text-9xl font-bold text-charcoal/10 dark:text-cream/10 select-none">
                404
            </h1>
            <div className="absolute">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal dark:text-cream mb-4">
                    Page Not Found
                </h2>
                <p className="font-sans text-lg text-charcoal/60 dark:text-cream/60 mb-8 max-w-md mx-auto">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link href="/">
                    <Button size="lg">Return Home</Button>
                </Link>
            </div>
        </div>
    );
}
