import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button";
import RouterButton from "./router_button";

export interface GameCardProps {
    className?: string;
    game_title: string;
    game_description: string;
    game_tags?: string[];
    gamePageUrl: string;
    imageUri?: string;
}

export default function GameCard({ className, game_title, game_description, game_tags, gamePageUrl, imageUri }: GameCardProps) {
    return (
        <div className={`p-1 ${className}`}>
            <Card>
                <CardContent
                    style={{ "--image-url": `url(${imageUri})` } as React.CSSProperties}
                    className="bg-[image:var(--image-url)] aspect-5/4 flex flex-row gap-3 items-end justify-between">
                    <div>
                        <h1 className="md:text-2xl font-bold">{game_title}</h1>
                        <h2 className="text-xs lg:text-lg text-muted-foreground">{game_description}</h2>
                        {game_tags && game_tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2 ">
                                {game_tags.map((tag, index) => (
                                    <span key={index} className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-2xs md:text-sm  shrink">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <RouterButton className="md:p-5 text-xs md:text-sm" url={gamePageUrl}>
                        {"Learn More"}
                    </RouterButton>
                </CardContent>
            </Card>
        </div>
    );
}