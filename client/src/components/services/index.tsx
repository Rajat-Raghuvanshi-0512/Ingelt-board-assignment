import { WomanImg, servicesData } from '../../constants';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <section className="blue-purple-gradient grid grid-cols-2 pt-40 rounded-[4rem]">
      <div className="flex justify-center items-end">
        <img src={WomanImg} alt="woman" className="h-[550px]" />
      </div>
      <div className="text-white font-bold text-5xl font-inter mr-20">
        <h3 className="text-center -mt-20">Our Services</h3>

        <div className="grid grid-cols-2 gap-10 mt-20 mb-20">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
