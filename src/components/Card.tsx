import { BsCheck, BsDiamondFill } from "react-icons/bs";
import Button, { type ButtonType } from "./Button";

export type CardType = {
  title: string;
  description: string;
  features: string[];
  button: ButtonType;
};

export default function Card({ title, description, features, button }: CardType) {
  return (
    <div className="shadow-2xl rounded-xl flex flex-col gap-4 p-4 sm:p-6 w-full max-w-sm mx-auto">
      <BsDiamondFill className="text-3xl sm:text-4xl" />

      <h3 className="text-xl sm:text-2xl">
        {title}
      </h3>

      <p className="text-base sm:text-lg">
        {description}
      </p>

      <ul className="space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm sm:text-base">
            <BsCheck className="mt-1 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-2 mx-auto">
        <Button {...button} />
      </div>
    </div>
  );
}