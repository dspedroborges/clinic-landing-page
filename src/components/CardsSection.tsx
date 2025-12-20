import type { CardType } from "./Card";
import Card from "./Card";

export default function CardsSection({ title, cards }: { title: string, cards: CardType[] }) {
    return (
        <section>
            <h2 className="text-4xl text-center mt-8 mb-12 mx-auto lg:w-[25ch]">{title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4">
                {
                    cards.map((c, i) => {
                        return <Card key={i} {...c} />
                    })
                }
            </div>
        </section>
    )
}