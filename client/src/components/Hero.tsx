import { InputHTMLAttributes } from 'react';
import { HeroBanner, HeroBannerBg } from '../constants';

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      style={{ boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.20)' }}
      className={` px-3 py-3 rounded-lg text-sm w-full outline-none ${className}`}
      {...props}
    />
  );
};

const Hero = () => {
  return (
    <section className="pl-24 grid grid-cols-2">
      <div className="font-inter mt-20">
        <h2 className="font-bold text-4xl text-center text-dark-blue pr-10">
          Start Your IELTS Preparation And Get Desire Bands
        </h2>
        <ul className="list-disc flex items-center flex-col text-black/60 text-sm py-5">
          <li>Get access to IELTS Centralised Library</li>
          <li>British Council Certified Teacher</li>
        </ul>
        <form className="form-container rounded-[2rem] w-[35vw] px-16 mx-auto">
          <div className="flex gap-14 justify-center text-sm py-5">
            <div>Start</div>
            <div>Fill detail </div>
            <div>Confirm</div>
          </div>
          <h3 className="font-bold text-dark-blue text-2xl">
            Free IELTS Classes
          </h3>
          <div>
            <Input
              type="text"
              placeholder="Enter Your Full Name"
              className="my-5"
            />
            <Input type="number" placeholder="Phone Number" className="mb-5" />
            <button className="bg-dark-blue text-white font-bold w-full py-2 my-5 rounded-lg">
              Continue
            </button>
            <div className="text-[10px] text-center pb-5">
              By continuing, you agree to our{' '}
              <span className="text-dark-blue">
                Term of services & Privacy policy
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="relative h-screen flex justify-center items-center">
        <img src={HeroBanner} alt="banner" className="w-[90%]" />
        <img
          src={HeroBannerBg}
          alt="banner-bg"
          className="absolute top-0 right-0 w-[480px] object-contain object-right -z-10"
        />
      </div>
    </section>
  );
};

export default Hero;
