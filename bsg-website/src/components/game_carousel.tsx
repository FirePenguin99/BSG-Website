import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import GameCard from "./game_card";

export interface GameCarouselProps {
    className?: string;
}

const data = [
    {
        title: "Heaven Sent Angels",
        description: "Hear and Obey. The tides of Hell are ceaseless and once more must be cut down. Take up arms of your choosing, plunge into the mouth of Hell, and scavenge off your deactivated brethren. Hold the line.",
        tags: ["Character Action", "Roguelike", "Co-op"],   
        url: "" ,
        imageUrl: "",
    },
    {
        title: "Ecosmos",
        description: "An ancient, great calamity has left the cosmos barren and lifeless. Create new ecosystems to revive dead worlds, and bring the cosmos back to its former verdant glory.",
        tags: ["Cozy", "Logistics-sim", "Co-op"],   
        url: "" ,
        imageUrl: "",   
    },
    {
        title: "Court Casters",
        description: "Cast a myriad of spells with your fellow mages in local co-op. First one to destroy the opposing wizard tower wins! But don't get overzealous my aspiring neophyte, for your own spells can be reflected back at you, inciting your doom if thou art careless in thy assault!",
        tags: ["Local co-op", "Casual", "Party Game"],
        url: "",
        imageUrl: "",
    },
];

export default function GameCarousel({ className }: GameCarouselProps) {
    return (
        <section className={className} aria-label="Game carousel">
            <Carousel className="md:mx-10"
            // plugins={[
            //     Autoplay({
            //     delay: 2000,
            //     }),
            // ]}
            >
                <CarouselContent>
                    {data.map((game, index) => (
                        <CarouselItem key={index} className="lg:basis-1/2">
                            <GameCard game_title={game.title} game_description={game.description} game_tags={game.tags} gamePageUrl={game.url} imageUri={game.imageUrl} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </section>
    );
}
