import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/images/logo.svg';
import logo2 from '@/app/images/logo2.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-300 h-20">
      <div className="flex items-center">
        <Link href="/">
            <Image src={logo2} alt="Logo" width={100}/>
        </Link>
      </div>

      <div className="flex items-center mr-3">
        <a href="https://normandiewebschool.fr" target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 text-white bg-[#00a5a5] rounded hover:bg-[#00a5a5]">
            Normandie Web School
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
