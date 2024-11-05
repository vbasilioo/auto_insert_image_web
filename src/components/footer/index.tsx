import { useTheme } from "next-themes";
import Image from "next/image";

export function Footer() {

    const { theme } = useTheme();

    return (
        <footer className="flex justify-end items-center bg-muted py-4 mt-8">
            <div className="container mx-auto flex justify-end">
                <div className="flex flex-col items-end">
                    <Image 
                        src={theme === 'light' ? '/assets/logo.svg' : '/assets/logo-dark.svg'}
                        alt="Logo"
                        width={100}
                        height={50}
                        className="object-contain"
                    />
                    <span className="text-secondary">{new Date().getFullYear()}</span>
                </div>
            </div>
        </footer>
    );
}
