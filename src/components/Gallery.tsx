import Slider from "react-slick";

export default function Gallery({ images }: { images: string[]}) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="overflow-hidden py-8">
      <Slider {...settings}>
        {images?.map((img, i) => (
          <div key={i} className="px-2 flex justify-center">
            <img
              src={img}
              className="block max-w-full h-auto rounded-lg mx-auto"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}