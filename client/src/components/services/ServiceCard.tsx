import { DetailCardBg } from '../../constants';

interface ServiceCardProps {
  icon: string;
  title: string;
  points: string[];
}

const ServiceCard = ({ icon, title, points }: ServiceCardProps) => {
  return (
    <div className=" text-white p-5 rounded-[2rem] services-card relative mb-5">
      <div className="w-16 flex justify-center items-center h-16 rounded-2xl bg-white absolute left-9 -top-10">
        <img src={icon} alt="icon" width={30} />
      </div>
      <img
        src={DetailCardBg}
        alt="bg"
        className="absolute right-0 top-0 w-40"
      />
      <h4 className="py-5 font-bold font-inter text-xl ">{title}</h4>
      <ul className="list-disc text-xs px-5 mb-5">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
