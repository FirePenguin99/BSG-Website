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
    tags: ["Character Action RPG", "Rogue-like", "Co-op"],
    inspirations: ["Metal Gear Rising: Revengeance", "Hades", "Risk of Rain 2"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};

export const Ecosmos: GameDataStructure = {
    title: "Ecosmos",
    description: "An ancient, great calamity has left the cosmos barren and lifeless. Create new ecosystems to revive dead worlds, and bring the cosmos back to its former verdant glory.",
    tags: ["Cozy", "Logistics-sim", "Co-op"],
    inspirations: ["Astroneer", "Satisfactory", "Proteus"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};

export const CourtCasters: GameDataStructure = {
    title: "Court Casters",
    description: "Cast a myriad of spells with your fellow mages in local co-op. First one to destroy the opposing wizard tower wins! But don't get overzealous my aspiring neophyte, for your own spells can be reflected back at you, inciting your doom if thou art careless in thy assault!",
    tags: ["Local co-op", "Casual", "Party Game"],
    inspirations: ["Wii Tennis", "Clash Royale", "Overcooked"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: true,
};

export const FrutigerTurbo: GameDataStructure = {
    title: "Frutiger Turbo",
    description: "Step into cockpit of high-speed racing in various styled worlds inspired by the Frutiger Aesthetic Family. Hit the red-line in CPU and Multiplayer battles.",
    tags: ["Racing", "Multiplayer", "Artsy"],
    inspirations: ["Mario Kart", "Frutiger Aesthetic Family"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};

export const NoRestForTheWickedd: GameDataStructure = {
    title: "No Rest For The Wickedd",
    description: `"Welcome to Hell... (bummer), you are damned to forever walk the plains of the dead..." "Nah I'ma totally skate dude!" Shred the gnar across the landscapes of the Underworld, and reconstitute your skeletal body if you totally wipe out.`,
    tags: ["Skating", "3D-Speed-Platformer", "Sandbox"],
    inspirations: ["Skate 3", "Modern Sonic", "Haste"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};

export const ProjectElementiny: GameDataStructure = {
    title: "Project Elementiny (working title)",
    description: "As a member of the Elemental Sects you wield the magics of Fire, Earth, Ice and Lightning to wage holy war against the wicked. Learn and combine spells as you delve into the heart of their nest, turning a range of enemy types to dust at your feet.",
    tags: ["FPS", "Horde Shooter", "Rogue-like"],
    inspirations: ["Destiny 2", "Warhammer 40k"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: true,
};

export const RevengeOfTheBloodGod: GameDataStructure = {
    title: "Revenge of the Blood God",
    description: "You are a fanatic of the Blood God, when one day your deity is excommunicated from the Pantheon. In a fit of vengeance he demands the four greatest warriors of his worship, to aid him in re-ascending the scale of power. Kill from lowly beast to high-born god, gaining more might until you can instate his rightful place above the Pantheon that betrayed him.",
    tags: ["2D RPG", "Adventure", "Co-op"],
    inspirations: ["Terraria", "Terraria Calamity Mod", "Dark Souls"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};

export const StarlightAfterburner: GameDataStructure = {
    title: "Starlight Afterburner",
    description: "The galaxy is in turmoil, and you're the latest in space combat technology. No human can withstand the Gs that a Starlight Afterburner puts out, so we got rid of the useless parts and plugged your brain right into the frame. Do what you were designed to do and turn the tide.",
    tags: ["Flight Action", "Cinematic", "Co-op"],
    inspirations: ["Project Wingman", "Ace Combat", "Armoured Core 6"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};

export const ReachTheCitadel: GameDataStructure = {
    title: "Reach The Citadel",
    description: "Battle in a 12v12 casual team shooter, playing as any of the morally dubious experiments of an Arms Contractor's R&D division in their testing grounds. Each class is distinct in personality and role, with unique equip-able weapons and cosmetics to shake up their playstyle and looks.",
    tags: ["FPS", "Hero Shooter", "Multiplayer PVP"],
    inspirations: ["Team Fortress 2", "Dirty Bomb", "Sci-fi Military"],
    gamePageUrl: "",
    imageUri: "",
    isInDevelopment: false,
};


export const AllGameData: GameDataStructure[] = [
    HeavenSentAngels,
    Ecosmos,
    CourtCasters,
    FrutigerTurbo,
    NoRestForTheWickedd,
    ProjectElementiny,
    RevengeOfTheBloodGod,
    StarlightAfterburner,
    ReachTheCitadel
];;