import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import GameCard from "./game_card";
import { Card, CardContent } from "./ui/card";
import RouterButton from "./router_button";
import { type GameDataStructure } from "@/app/game_data";

export interface GameCarouselProps {
    className?: string;
    game_data: GameDataStructure[];
}

export default function GameCarousel({ className, game_data }: GameCarouselProps) {
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
                    {game_data.map((game, index) => (
                        <CarouselItem key={index} className="lg:basis-1/2">
                            <GameCard game_data={game} />
                        </CarouselItem>
                    ))}
                    <CarouselItem className="lg:basis-1/2">
                        <div className="p-1">
                            <Card>
                                <CardContent className="aspect-5/4 flex flex-col md:flex-row items-center justify-center p-6 gap-1">
                                    <span className="text-2xl">{"Check out the full library"}</span>
                                    <RouterButton className="text-2xl" url="/games" variant="secondary">
                                        {"here!"}
                                    </RouterButton>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </section>
    );
}
