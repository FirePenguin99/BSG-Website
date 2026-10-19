import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button";
import RouterButton from "./router_button";
import { type GameDataStructure } from "@/app/game_data";

export interface GameCardProps {
    className?: string;
    addedHeight?: string;
    game_data: GameDataStructure;
}

export default function GameCard({ className, addedHeight, game_data }: GameCardProps) {
    return (
        <div className={`p-1 ${className}`}>
            <Card>
                <CardContent
                    style={{ "--image-url": `url(${game_data.imageUri})` } as React.CSSProperties}
                    className="relative bg-[image:var(--image-url)] aspect-5/4 flex flex-col items-end justify-between">

                    <span className={`h-30 w-0 ${addedHeight}`}></span>

                    <div className="flex flex-col gap-1">
                        <h1 className="md:text-2xl font-bold">{game_data.title}</h1>
                        <h2 className="text-xs lg:text-lg text-muted-foreground">{game_data.description}</h2>

                        {game_data.inspirations && game_data.inspirations.length > 0 && (
                            <span className="text-sm lg:text-lg">{`Inspired by: ${game_data.inspirations.join(", ")}`}</span>
                        )}
                        
                        <div className="flex flex-wrap gap-2 justify-between">
                            {game_data.tags && game_data.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2 ">
                                    {game_data.tags.map((tag, index) => (
                                        <span key={index} className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-2xs md:text-sm  shrink">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <RouterButton className="md:p-5 text-xs md:text-sm" url={game_data.gamePageUrl} variant="secondary">
                                {"Learn More"}
                            </RouterButton>
                        </div>
                    </div>
                    {game_data.isInDevelopment && (
                        <span className="bg-blue-500 p-1 lg:py-2 px-10 rotate-45 text-xs whitespace-nowrap absolute top-4 -right-12">IN DEVELOPMENT</span>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}