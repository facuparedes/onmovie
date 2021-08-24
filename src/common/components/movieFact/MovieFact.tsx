import { MovieFactInterface } from "../../interfaces/mainSection";

export default function MovieFact({ icon: Icon, iconColor, text, textColor = "text-custom-first", customClassName = "font-poppins font-normal text-base sm:text-xl ml-4" }: MovieFactInterface) {
  return (
    <div className="flex">
      <Icon color={iconColor} />
      <span className={`${textColor} ${customClassName}`}>{text}</span>
    </div>
  );
}
