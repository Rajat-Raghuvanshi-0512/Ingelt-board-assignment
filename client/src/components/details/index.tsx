import { detailsData } from '../../constants';
import DetailCard from './DetailCard';

const Details = () => {
  return (
    <div className="grid grid-cols-3 gap-20 px-24 py-20">
      {detailsData.map((item) => (
        <DetailCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Details;
