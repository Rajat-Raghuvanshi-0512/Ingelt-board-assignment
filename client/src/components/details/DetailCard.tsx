import { DetailCardBg } from '../../constants';

interface DetailProps {
  icon: string;
  title: string;
  desc: string;
}

const DetailCard = ({ icon, title, desc }: DetailProps) => {
  return (
    <div className="bg-[#051C45] text-white flex flex-col items-center p-5 rounded-[2rem] detail-card relative">
      <div className="w-16 flex justify-center items-center h-16 rounded-full bg-white">
        <img src={icon} alt="icon" width={30} />
      </div>
      <img
        src={DetailCardBg}
        alt="bg"
        className="absolute right-0 top-0 w-40"
      />
      <h4 className="py-2 font-bold font-inter text-2xl">{title}</h4>
      <p className="text-xs text-center">{desc}</p>
    </div>
  );
};

export default DetailCard;
