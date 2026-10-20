import GameCard from "@/components/game_card";
import { AllGameData, SlugifyTitle } from "@/app/game_data";

export function generateStaticParams() {
  return AllGameData.map((game) => ({
    slug: SlugifyTitle(game.title)
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = AllGameData.find((data) => SlugifyTitle(data.title) == slug);

  return (
    <main className="mx-auto max-w-8xl flex w-full flex-col px-6 py-8 sm:px-10 sm:py-12">
      <p>{slug}</p>
      <section className="flex flex-1 flex-col justify-center py-5">
        <p className="mb-4 text-sm font-medium text-muted-foreground">
          Welcome to...
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {game?.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Here you can find a list of all the games we want to create, along with their descriptions and genre tags. Click on any game to learn more about it and see if it's something you'd play in a distant future!
        </p>
      </section>
    </main>
  );
}
