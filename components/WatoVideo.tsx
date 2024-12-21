interface WatoVideoProps {
    transparent?: boolean;
}
const WatoVideo = ({ transparent = false }: WatoVideoProps) => {
    return (
        <div className={`${transparent ? "opacity-30" : ""}`}>
            <video
                autoPlay
                muted
                loop
                className="h-screen w-screen object-cover"
            >
                <source src="/imgs/wato-animation.mp4" />
            </video>
        </div>
    );
};

export default WatoVideo;
