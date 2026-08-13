import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface LandingLayoutProps {
    children: ReactNode;
}

function LandingLayout({
    children,
}: LandingLayoutProps) {
    return (
        <>
            <Navbar />

            <main>
                {children}
            </main>
        </>
    );
}

export default LandingLayout;