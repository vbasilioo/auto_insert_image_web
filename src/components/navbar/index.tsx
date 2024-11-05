import { useTheme } from "next-themes";
import Image from "next/image";

export function NavbarComponent() {

    const { theme } = useTheme();

    return (
        <nav className="w-full flex justify-center items-center pt-6 bg-muted z-10">
            <div className="container mx-auto flex justify-center items-center border-b-[1px] border-secondary">
                <Image
                    src={theme === 'light' ? '/assets/logo.svg' : '/assets/logo-dark.svg'}
                    alt="Logo"
                    width={200}
                    height={50}
                    className="object-contain mb-8"
                />
            </div>
        </nav>
    );
}
