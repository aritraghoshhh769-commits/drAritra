import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
                <p className="text-foreground/70 mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Button asChild size="lg">
                    <Link href="/">
                        <Home className="mr-2 h-5 w-5" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </main>
    );
}
