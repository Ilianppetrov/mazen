import Star from "./svgs/Star";

interface RateCardProps {
  name: string;
  rating: number;
  text: string;
}

function RateCard({ name, rating, text }: RateCardProps) {
  return (
    <div className="h-[254px] w-[322px] rounded-md bg-white p-5">
      <div className="mb-[12px] flex items-end justify-between">
        <span className="text-[32px] font-medium leading-[32px] text-[#00945F]">
          {name}
        </span>
        <div>
          <span className="text-[15px] font-medium">trustpilot.com</span>
          <div className="flex">
            <Star fill />
            <Star fill />
            <Star fill />
            <Star fill />
            <Star />
          </div>
        </div>
      </div>
      <div className="text-[30px] font-medium leading-[31px]">{text}</div>
    </div>
  );
}

export default RateCard;
