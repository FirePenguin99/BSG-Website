'use client'

import type { ComponentProps } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export interface RouterButtonProps {
    children: React.ReactNode;
    className?: string;
    url: string;
    variant?: ComponentProps<typeof Button>["variant"];
}

export default function RouterButton({ children, className, url, variant }: RouterButtonProps) {
    const router = useRouter();

    return (
        <Button className={className} onClick={() => router.push(url)} variant={variant}>
            {children}
        </Button>
    );
}