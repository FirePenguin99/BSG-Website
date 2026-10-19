export type GameDataStructure = {
    title: string;
    description: string;
    tags?: string[];
    inspirations?: string[];
    gamePageUrl: string;
    imageUri?: string;
    isInDevelopment?: boolean;
}

export const HeavenSentAngels: GameDataStructure = {
    title: "Heaven Sent Angels",
    description: "Hear and Obey. The tides of Hell are ceaseless and once more must be cut down. Take up arms of your choosing, plunge into the mouth of Hell, and scavenge off your deactivated brethren. Hold the line.",
    tags: ["Character Action", "Rogue-like", "Co-op"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};

export const Ecosmos: GameDataStructure = {
    title: "Ecosmos",
    description: "An ancient, great calamity has left the cosmos barren and lifeless. Create new ecosystems to revive dead worlds, and bring the cosmos back to its former verdant glory.",
    tags: ["Cozy", "Logistics-sim", "Co-op"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};

export const CourtCasters: GameDataStructure = {
    title: "Court Casters",
    description: "Cast a myriad of spells with your fellow mages in local co-op. First one to destroy the opposing wizard tower wins! But don't get overzealous my aspiring neophyte, for your own spells can be reflected back at you, inciting your doom if thou art careless in thy assault!",
    tags: ["Local co-op", "Casual", "Party Game"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: true,
};

export const AllGameData: GameDataStructure[] = [
    HeavenSentAngels,
    Ecosmos,
    CourtCasters
];;