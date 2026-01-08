import Slider from "react-slick";

export default function Gallery({ images, slidesToShow }: { images: string[], slidesToShow: number }) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
    adaptiveHeight: true,
    slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <section className="overflow-hidden py-8">
      <Slider {...settings}>
        {images?.map((img, i) => (
          <div key={i} className="px-2 flex justify-center">
            <img
              src={img}
              className="block max-w-full max-h-[300px] rounded-lg mx-auto"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}