import GameCard from "@/components/game_card";
import { AllGameData, SlugifyTitle } from "@/app/game_data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Image } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import RouterButton from "@/components/router_button";

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
    <div>

      {game && (
        <main className="mx-auto max-w-8xl flex w-full flex-col px-6 py-8 sm:px-10 sm:py-12">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink render={<RouterButton url="/" variant={"ghost"}></RouterButton>}>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink render={<RouterButton url="/games" variant={"ghost"}></RouterButton>}>
                  Games
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{game.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <section className="flex flex-1 flex-col justify-center py-5">
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              {game.introduction}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              {game.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              <i>{game.blurb}</i>
            </p>
            <p className="mt-6  text-lg leading-8 text-muted-foreground">
              {game.description}
            </p>
          </section>

          <Separator></Separator>

          <section className="w-full items-between flex flex-wrap justify-center gap-6 gap-y-12 mt-6">
            {game.sellingPoints?.map((point, index) => (
              <div key={index} className="w-full lg:max-w-9/20 ">
                {point.imageUrl && (
                  <Image className="w-full my-6 aspect-5/4"></Image>
                )}
                {!point.imageUrl && (
                  <div className="bg-black w-full my-6 aspect-5/4 flex justify-center items-center">NO IMAGE</div>
                )}                
                <h2 className="text-muted-foreground text-md">{point.subtitle}</h2>
                <h1 className="font-semibold text-3xl uppercase">{point.title}</h1>
                <p className="text-md md:text-lg leading-8 text-muted-foreground">
                  {point.description}
                </p>
              </div>
            ))}
          </section>
        </main>
      )}

      {!game && (
        <div>No such game or slug exists</div>
      )}
    </div>

  );
}
