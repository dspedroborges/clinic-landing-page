import { BsGeoAlt, BsEnvelope, BsWhatsapp } from "react-icons/bs";

export default function Contact({ address, email, telephone }: { address: string, email: string, telephone: string }) {
    return (
        <section className="text-gray-600 body-font relative">
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=pt-BR&q=São%20Paulo&t=&z=14&iwloc=B&output=embed"
                    style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                />
            </div>

            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-xl p-8 flex flex-col gap-6 md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-xl">
                    <h2 className="text-gray-900 text-2xl font-semibold">
                        Entre em contato
                    </h2>

                    <p className="text-gray-600">
                        Estamos prontos para te atender. Fale conosco pelos canais abaixo.
                    </p>

                    <div className="flex items-start gap-4">
                        <BsGeoAlt className="text-2xl mt-1" />
                        <span>
                            { address }
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <BsEnvelope className="text-2xl" />
                        <span>{ email }</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <BsWhatsapp className="text-2xl text-green-600" />
                        <span>{ telephone }</span>
                    </div>

                    <a
                        href={`https://wa.me/55${telephone.replaceAll("(", "").replaceAll(")", "").replaceAll("-", "")}`}
                        target="_blank"
                        className="mt-4 inline-flex items-center justify-center gap-2 text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg"
                    >
                        <BsWhatsapp />
                        Falar no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    )
}