import { content } from "../content";
import Button from "./Button";

export default function HowSection({ title, description, videoSrc }: { title: string, description: string, videoSrc: string }) {
    return (
        <section className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-16 justify-center py-24">
            <div className="relative">
                <div className="hidden lg:block absolute -top-4 -right-4 h-[500px] w-[250px] bg-gray-300 rounded-xl" />
                <video
                    className="relative z-10 h-[500px] rounded-xl"
                    src={videoSrc}
                    playsInline
                />
            </div>
            <div className="lg:w-1/3">
                <h2 className="text-4xl text-center mt-8 mb-12 mx-auto">{title}</h2>
                <p className="text-center mx-auto">{description}</p>
                <div className="flex items-center justify-center p-8">
                    <Button link={content.button.link} name={content.button.name} />
                </div>
            </div>
        </section>
    )
}