import { Logo } from '../constants';

const Navbar = () => {
  return (
    <nav className="px-5 py-2 z-50 fixed w-full md:px-10 lg:px-20 2xl:px-40 bg-[#051C45] font-inter">
      <img src={Logo} alt="logo" width={50} />
    </nav>
  );
};

export default Navbar;
