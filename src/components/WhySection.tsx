import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsHeart, BsStar } from "react-icons/bs";
import { BiSolidMedal } from "react-icons/bi";

type Props = {
    title: string;
    description: string;
    images: string[];
    achievements: string[];
}

export default function WhySection({ title, description, images, achievements }: Props) {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        adaptiveHeight: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className="overflow-hidden">
            <h2 className="text-4xl text-center mt-8 mb-4 mx-auto lg:w-[25ch]">{title}</h2>
            <p className="text-center text-lg">{description}</p>
            <div className="slider-container py-8">
                <Slider {...settings}>
                    {images.map((img, i) => (
                        <div key={i} className="flex justify-center">
                            <img
                                src={img}
                                className="block mx-auto max-w-full h-auto"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 p-4 my-16 gap-8 lg:gap-0">
                {
                    achievements.map((a, i) => {
                        return (
                            <div key={i} className="flex flex-col lg:flex-row items-center gap-4">
                                <div className="w-16 h-16 border rounded-full flex items-center justify-center text-4xl bg-gray-50">
                                    {i == 0 && <BiSolidMedal />}
                                    {i == 1 && <BsStar />}
                                    {i == 2 && <BsHeart />}
                                </div>
                                <span className="lg:w-[25ch] text-xl text-center">{a}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}