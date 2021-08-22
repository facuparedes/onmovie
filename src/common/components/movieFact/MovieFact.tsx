import { MovieFactInterface } from "../../interfaces/mainSection";

export default function MovieFact({
  icon: Icon,
  iconColor,
  text,
  textColor = "text-custom-first",
  customClassName = "font-poppins font-normal text-xl ml-4",
  bottomPadding = true,
}: MovieFactInterface) {
  return (
    <div className={`flex ${bottomPadding ? "mb-4" : ""}`}>
      <Icon color={iconColor} />
      <span className={`${textColor} ${customClassName}`}>{text}</span>
    </div>
  );
}
