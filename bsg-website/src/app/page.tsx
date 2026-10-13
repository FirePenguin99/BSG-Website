import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme_toggle";

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
    <main className="mx-auto flex w-full flex-col px-6 py-8 sm:px-10 sm:py-12">
      <section className="flex flex-1 flex-col justify-center py-5">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Our dream Indie game studio...
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          BROKEN STAR GAMES
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          A hobbyist conceptual game studio where we make the games we'd want to
          play. Across all genres, we probably have an opinion about it, and therefore a 
          game idea that at least makes sense to us!
        </p>
        <div className="inline mt-6 max-w-2xl italic text-base leading-8 text-muted-foreground">
          <p className="inline">{"This website was made to practice React.js by Gabriel Lewington (git). The source-code can be found "}
          </p>
          <Link href="https://github.com/FirePenguin99/BSG-Website" className="inline underline">
            here
          </Link>
          <p className="inline">{". It is entirely mobile responsive and created with "}</p>
          <Link className="inline text-link underline" href="https://ui.shadcn.com/docs">
          Shadcn/ui 
          </Link>
          <p className="inline">{" component library"}</p>
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
