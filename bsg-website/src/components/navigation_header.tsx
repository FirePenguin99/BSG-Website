'use client';

import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "./BSG_logo_no_bg.png";
import { 
    DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/components/navigation";
import { ThemeToggle } from "./theme_toggle";

type NavigationHeaderProps = {
    pageUrls: { page: string; url: string }[];
}

const mobileBreakpoint = 640;


export function NavigationHeader({ pageUrls: tagAndUrls }: NavigationHeaderProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < mobileBreakpoint) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const router = useRouter()

    return (
        <header className="w-screen h-36 bg-backerground flex items-center justify-between">
            <Image src={logo} alt="Logo" className="h-full object-contain w-fit md:pl-4 py-2" onClick={() => router.push('/')} />
            {isMobile && (
                <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="ghost" className="py-2 h-full aspect-square object-contain"/>}> 
                        <Menu className="size-12"/> 
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="h-full">
                        <DropdownMenuGroup>
                            {tagAndUrls.map((item) => (
                            <Button variant="link" 
                                    onClick={() => router.push(item.url)}
                                    className="w-full justify-center py-8">
                                {item.page}
                            </Button>
                            ))}
                        </DropdownMenuGroup>
                        <ThemeToggle label={true} className="w-full justify-center py-4 my-4"></ThemeToggle>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
            {!isMobile && (
                <nav className="inline-flex gap-6 lg:gap-12 pr-8">
                    {tagAndUrls.map((item) => (
                        <Button variant="link"
                            onClick={() => router.push(item.url)}
                            className="justify-center"
                        >
                            {item.page}
                        </Button>
                    ))}
                    <ThemeToggle label={true}></ThemeToggle>
                </nav>
            )}
        </header>
    );
}