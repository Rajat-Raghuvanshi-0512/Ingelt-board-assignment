import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  TwitterIcon,
} from '../constants';

const ContactForm = () => {
  return (
    <div className="contact-form m-20 rounded-l-2xl flex">
      <div className="flex-[1.6] pt-20 pb-40 px-20 font-inter">
        <h2 className="text-5xl font-bold">Contact Us</h2>
        <p className="w-96 text-lg py-3">
          Feel Free to contact us any time. We will get back to you as soon as
          we can!.
        </p>
        <form className="mt-10 font-inter text-sm">
          <div className="flex flex-col mb-10">
            <label className="font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-80 outline-none border-b-[1.5px] border-gray-400 mt-2 py-2"
              placeholder="Enter your Name"
            />
          </div>
          <div className="flex flex-col mb-10">
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-80 outline-none border-b-[1.5px] border-gray-400 mt-2 py-2"
              placeholder="Enter your Name"
            />
          </div>
          <div className="flex flex-col mb-10">
            <label className="font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              cols={5}
              className="w-80 outline-none border-b-[1.5px] border-gray-400 mt-2 py-2"
              placeholder="Write your message"
            />
          </div>
          <button
            type="submit"
            className="bg-[#0064E1] hover:bg-[#0152b5] duration-300 text-white text-lg px-7 hover:scale-95 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex-[0.4] bg-[#0064E1] flex items-end gap-10 relative justify-center pb-20">
        <img src={TwitterIcon} alt="twitter" width={24} />
        <img src={InstagramIcon} alt="Insta" width={30} />
        <img src={FacebookIcon} alt="facebook" width={24} />
        <div className="absolute w-[350px] font-inter bg-dark-blue text-white p-10 rounded-l-3xl right-0 top-[50%] translate-y-[-50%]">
          <h4 className="text-2xl mb-5">Contact Information</h4>
          <div className="flex gap-5 text-sm pt-5">
            <img src={PhoneIcon} alt="email" className="object-contain w-5" />
            +1012 3456 789
          </div>
          <div className="flex gap-5 text-sm py-5">
            <img src={EmailIcon} alt="email" className="object-contain w-5" />
            demo@gmail.com
          </div>
          <div className="flex gap-5 text-sm pb-5">
            <img
              src={LocationIcon}
              alt="email"
              className="object-contain w-5"
            />
            132 Dartmouth Street Boston, Massachusetts 02156 United States
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section>
      <div className="text-center font-inter">
        <h2 className="text-4xl font-semibold">Get in Touch with Us</h2>
        <div className="h-[2px] w-40 mx-auto bg-black"></div>
        <h5 className="text-black/60 text-2xl py-5">
          Elevate Your Institute Management and Student Success - Contact Us
          Now!
        </h5>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
