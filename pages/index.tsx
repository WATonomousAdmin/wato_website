import Link from "next/link";
import WatoVideo from "../components/WatoVideo";

export default function Home() {
    return (
        <Link href={"/about"}>
            <div className="z-0 h-screen cursor-pointer overflow-hidden bg-VideoPlaceholder bg-cover">
                <div className="fixed z-0">
                    <WatoVideo />
                </div>
                <div className="fixed z-10 h-screen w-screen bg-TopGradient" />
            </div>
        </Link>
    );
}
