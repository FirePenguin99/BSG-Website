export type TeamMember = {
    name: string;
    tags: string[];
    link: string;
    description: string;
    image_url?: string;
}

export const TeamMembers: TeamMember[] = [
    {
        "name": "Gabriel L",
        "tags": ["Programmer", "Designer", "3D Modeller", "Animator"],
        "link": "https://github.com/FirePenguin99",
        "description": "lorem ipsum dolor sit amet consectetur adipiscing elit cupiditate est cillum reprehenderit est esse elit cillum et eiusmod omnis quo in aliquip aut et voluptas dolorum nihil quibusdam nulla atque imperdiet aliqua nulla quo dolor dolorem eos dolores molestias dignissimos excepteur et dolore voluptas blanditiis et deserunt quis in quos",
    },
    {
        "name": "Joe Bloggs",
        "tags": ["VFX", "Programmer", "Designer"],
        "link": "",
        "description": "lorem ipsum dolor sit amet consectetur adipiscing elit cupiditate est cillum reprehenderit est esse elit cillum et eiusmod omnis quo in aliquip aut et voluptas dolorum nihil quibusdam nulla atque imperdiet aliqua nulla quo dolor dolorem eos dolores molestias dignissimos excepteur et dolore voluptas blanditiis et deserunt quis in quos",
    },
    {
        "name": "The Dude",
        "tags": ["Concept Artist", "3D Modeller", "Texture Painter"],
        "link": "",
        "description": "lorem ipsum dolor sit amet consectetur adipiscing elit cupiditate est cillum reprehenderit est esse elit cillum et eiusmod omnis quo in aliquip aut et voluptas dolorum nihil quibusdam nulla atque imperdiet aliqua nulla quo dolor dolorem eos dolores molestias dignissimos excepteur et dolore voluptas blanditiis et deserunt quis in quos",
    },
]