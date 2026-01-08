import type { ButtonType } from "./Button";
import Button from "./Button";

type Props = {
    title: string;
    description: string;
    list: string[];
    image: string;
    button: ButtonType
}

export default function MiddleSection({ title, description, list, image, button }: Props) {
    return (
        <div className="h-screen bg-linear-90 from-neutral-300 to-gray-100 w-full p-8 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4">
            <img src={image} className="h-full rounded-xl" />
            <div className="p-4 flex flex-col items-center gap-4">
                <h2 className="text-4xl text-center mx-auto">{title}</h2>
                <p className="text-center mx-auto text-lg">{description}</p>
                <ul className="list-disc mt-4 mb-12 text-center flex flex-col items-start">
                    {
                        list.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>

                <Button {...button} />
            </div>
        </div>
    )
}