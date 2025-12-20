import { BsStarFill } from "react-icons/bs";
import Slider from "react-slick";
import { content } from "../content";
import Button from "./Button";

type TestimonialType = {
    author: string;
    picture: string;
    stars: number;
    content: string;
}

type Props = {
    testimonials: TestimonialType[];
};

export default function Testimonials({ testimonials }: Props) {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        adaptiveHeight: true,
        slidesToShow: 3,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div className="py-8 overflow-hidden">
            <h2 className="text-4xl text-center mt-8 mb-4 mx-auto lg:w-[25ch]">Depoimentos</h2>
            <Slider {...settings}>
                {testimonials.map((t, i) => (
                    <div key={i} className="px-3 h-full">
                        <div className="h-full shadow-xl rounded-xl p-6 flex flex-col gap-4 bg-white">
                            <div className="flex items-center gap-4">
                                <img
                                    src={t.picture}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{t.author}</p>
                                    <div className="flex text-yellow-400">
                                        {Array.from({ length: t.stars }).map((_, i) => (
                                            <BsStarFill key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {t.content}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="flex justify-center items-center p-16">
                <Button {...content.button} />
            </div>
        </div>
    );
}