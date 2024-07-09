import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";

interface CardProps extends React.PropsWithChildren {
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`flex flex-col bg-slate-400 w-[200px] min-h-[150px] rounded-2xl p-3 shadow-xl shadow-black m-3 ${className}`}
    >
      {children}
    </div>
  );
}

Card.CardHeader = CardHeader;
Card.CardBody = CardBody;
Card.CardFooter = CardFooter;
Card.CardImage = CardImage;

export default Card;
