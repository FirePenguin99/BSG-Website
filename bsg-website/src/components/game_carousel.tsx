import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"

export interface GameCarouselProps {
    className?: string;
}

const data = [
    {
        title: "Game 1",
        description: "A fun and exciting game!"
    },
    {
        title: "Game 2",
        description: "Another great game!"
    },
    {
        title: "Game 3",
        description: "Yet another amazing game!"
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
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{game.title}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </section>
    );
}
