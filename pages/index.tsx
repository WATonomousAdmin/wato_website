import Link from "next/link";
import WatoVideo from "../components/WatoVideo";
import ProjectHighlights from "../components/ProjectHighlights";

export default function Home() {
    return (
        <div className="z-0 w-screen h-screen cursor-pointer overflow-hidden bg-VideoPlaceholder bg-cover">
            <Link href="/about" className="fixed">
                <WatoVideo />
            </Link>
            {/* //Links are internal to the highlight component */}
            <ProjectHighlights/>
            <div className="fixed z-0 h-screen w-screen bg-TopGradient pointer-events-none" />
        </div>
    );
}
