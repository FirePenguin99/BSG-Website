import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const foundations = [
  {
    name: "Next.js App Router",
    description: "File-based routing, layouts, and React Server Components.",
  },
  {
    name: "TypeScript",
    description: "Strict type checking is ready across the application.",
  },
  {
    name: "shadcn/ui",
    description: "Accessible, customizable components live in your codebase.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-8 sm:px-10 sm:py-12">
      <header className="flex items-center justify-between">
        <Link className="font-semibold tracking-tight" href="/">
          bsg-website
        </Link>
        <span className="text-sm text-muted-foreground">
          React · Next.js · TypeScript
        </span>
      </header>

      <section className="flex flex-1 flex-col justify-center py-20">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Your project starts here
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          A clean foundation for what comes next.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Your Next.js app is ready to build on, with TypeScript, Tailwind CSS,
          and shadcn/ui components configured and waiting.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            render={<Link href="#foundations" />}
            size="lg"
          >
            Explore the stack
          </Button>
          <Button
            render={
              <a
                href="https://ui.shadcn.com/docs"
                target="_blank"
                rel="noreferrer"
              />
            }
            size="lg"
            variant="outline"
          >
            shadcn/ui docs
          </Button>
        </div>

        <div
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          id="foundations"
        >
          {foundations.map((foundation) => (
            <Card key={foundation.name}>
              <CardHeader>
                <CardTitle>{foundation.name}</CardTitle>
                <CardDescription>{foundation.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-xs font-medium text-muted-foreground">
                  CONFIGURED
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t pt-5 text-sm text-muted-foreground">
        Start building in <code className="font-mono">src/app/page.tsx</code>
      </footer>
    </main>
  );
}
