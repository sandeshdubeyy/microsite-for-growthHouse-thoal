import type { ReactNode } from "react";
import Navbar from "../components/Navbar";

interface LandingLayoutProps {
    children: ReactNode;
}

function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <>

            <main className="w-full px-12">
            <Navbar />
                {children}
            </main>
        </>
    );
}

export default LandingLayout;