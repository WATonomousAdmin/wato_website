import Link from "next/link";

interface WatoVideoProps {
    transparent?: boolean;
    gutter?: boolean;
}
const WatoVideo = ({ transparent = false, gutter = false }: WatoVideoProps) => {
    return (
        <div
            className={`${
                transparent ? "opacity-30" : ""
            } relative h-screen w-screen bg-VideoPlaceholder bg-cover bg-center`}
            style={{ scrollbarGutter: gutter ? "stable" : "unset" }}
        >
            <video
                autoPlay
                playsInline
                muted
                loop
                className={`absolute inset-0 h-full w-full object-cover`}
            >   
                <source src="/imgs/wato-animation.mp4" />
                
            </video>
        </div>
    );
};

export default WatoVideo;
