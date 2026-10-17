import Link from "next/link";
import GameCarousel from "@/components/game_carousel";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl flex w-full flex-col px-6 py-8 sm:px-10 sm:py-12">
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
          <p className="inline">{"This website was made to practice React.js by Gabriel Lewington "} </p>
          <Link href="https://github.com/FirePenguin99" className="inline underline">
            {"(git)"}
          </Link>
          <p className="inline"> {" The source-code can be found "} </p>
          <Link href="https://github.com/FirePenguin99/BSG-Website" className="inline underline">
            here
          </Link>
          <p className="inline">{". It is entirely mobile responsive and created with "}</p>
          <Link className="inline text-link underline" href="https://ui.shadcn.com/docs">
            Shadcn/ui
          </Link>
          <p className="inline">{" component library"}</p>
        </div>
      </section>

      <div className="my-5 md:my-10"></div>

      <section>
        <h2 className="max-w-3xl my-5 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">Our Games</h2>
        <GameCarousel className="my-5" />
      </section>

      <footer className="border-t pt-5 text-sm text-muted-foreground">
        Start building in <code className="font-mono">src/app/page.tsx</code>
      </footer>
    </main>
  );
}
