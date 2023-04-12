import Star from "./svgs/Star";

interface RateCardProps {
  name: string;
  rating: number;
  text: string;
}

function RateCard({ name, rating, text }: RateCardProps) {
  return (
    <div className="h-[203px] w-[257px] rounded-md bg-white p-4">
      <div className="mb-[12px] flex items-end justify-between">
        <span className="text-[25px] font-medium leading-[32px] text-[#00945F] drop-shadow-medium">
          {name}
        </span>
        <div>
          <span className="text-[12px] font-medium drop-shadow-small">
            trustpilot.com
          </span>
          <div className="flex">
            <Star fill />
            <Star fill />
            <Star fill />
            <Star fill />
            <Star />
          </div>
        </div>
      </div>
      <div className="text-[24px] font-medium leading-[24px]">{text}</div>
    </div>
  );
}

export default RateCard;
