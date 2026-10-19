import GameCard from "@/components/game_card";

export default function GameList() {
  const data = [
      {
          title: "Heaven Sent Angels",
          description: "Hear and Obey. The tides of Hell are ceaseless and once more must be cut down. Take up arms of your choosing, plunge into the mouth of Hell, and scavenge off your deactivated brethren. Hold the line.",
          tags: ["Character Action", "Roguelike", "Co-op"],   
          url: "" ,
          imageUrl: "",
          isInDevelopment: false,
      },
      {
          title: "Ecosmos",
          description: "An ancient, great calamity has left the cosmos barren and lifeless. Create new ecosystems to revive dead worlds, and bring the cosmos back to its former verdant glory.",
          tags: ["Cozy", "Logistics-sim", "Co-op"],   
          url: "" ,
          imageUrl: "",   
          isInDevelopment: false,
      },
      {
          title: "Court Casters",
          description: "Cast a myriad of spells with your fellow mages in local co-op. First one to destroy the opposing wizard tower wins! But don't get overzealous my aspiring neophyte, for your own spells can be reflected back at you, inciting your doom if thou art careless in thy assault!",
          tags: ["Local co-op", "Casual", "Party Game"],
          url: "",
          imageUrl: "",
          isInDevelopment: true,
      },
  ];

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
        {data.map((game, index) => (
          <GameCard
            className="lg:basis-1/3"
            key={index} 
            addedHeight="h-60"
            game_title={game.title} game_description={game.description} game_tags={game.tags} gamePageUrl={game.url} imageUri={game.imageUrl} isInDevelopment={game.isInDevelopment} />
        ))}
      </section>
    </main>
  );
}
