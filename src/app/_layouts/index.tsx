import { Footer } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ILayout {
    children: ReactNode;
    className?: string;
}

export default function Layout({ children, className }: ILayout){
    return (
        <div
            suppressHydrationWarning
            className="h-screen w-full">
            <NavbarComponent />
            <div className={cn("min-h-[calc(100vh-12rem)] lg:min-h-[calc(100vh-17rem)]", className)}>
                {children}
            </div>
            <Footer />
        </div>
    );
}