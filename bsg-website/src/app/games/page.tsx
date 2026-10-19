import GameCard from "@/components/game_card";
import { AllGameData } from "@/app/game_data";

export default function GameList() {
  return (
    <main className="mx-auto max-w-8xl flex w-full flex-col px-6 py-8 sm:px-10 sm:py-12">
      <p className="mb-4 text-md font-medium text-muted-foreground">
        Welcome to...
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        THE BSG LIBRARY
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-8 text-muted-foreground">
        Here you can find a list of all the games we want to create, along with their descriptions and genre tags. Click on any game to learn more about it and see if it's something you'd play in a distant future!
      </p>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {AllGameData.map((game, index) => (
          <GameCard
            className="lg:basis-1/3"
            key={index}
            addedHeight="h-60"
            game_data={game} />
        ))}
      </section>
    </main>
  );
}
