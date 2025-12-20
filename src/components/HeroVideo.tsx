import Button, { type ButtonType } from "./Button";

type Props = {
    title: string;
    description: string;
    button: ButtonType;
    videoSrc: string;
    logo: string;
};

export default function Hero({ title, description, button, videoSrc, logo }: Props) {
    return (
        <div className="relative h-screen overflow-hidden text-white">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="absolute inset-0 bg-neutral-700/50" />

            <div className="relative lg:w-1/2 h-full flex flex-col justify-center gap-4 px-8">
                <img src={logo} className="w-[200px]" />
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold">{title}</h2>
                <p className="text-lg lg:text-xl">{description}</p>

                <Button link={button.link} name={button.name} />
            </div>
        </div>
    );
}