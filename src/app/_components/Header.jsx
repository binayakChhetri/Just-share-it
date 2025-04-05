import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white py-3">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <Image src="/logo.svg" width={50} height={50} alt="Logo" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm tracking-wider">
              <li>
                <a className="transition hover:text-gray-500/75" href="#">
                  Home
                </a>
              </li>

              <li>
                <a className="transition hover:text-gray-500/75" href="#">
                  Upload
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-500/75" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="transition hover:text-gray-500/75" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <a
                className="block border-1 rounded-sm sm:px-[40px] px-[20px] sm:py-2.5 py-1.5 text-sm font-medium text-white transition tracking-wider bg-[#ff7a00] hover:bg-white hover:text-[#ff7a00] hover:border-1 hover:scale-[1.1]"
                href="#"
              >
                Login
              </a>

              <a
                className="block border-1 rounded-sm sm:px-[40px] px-[20px] sm:py-2.5 py-1.5 text-sm font-medium text-[#222020] transition tracking-wider bg-white hover:bg-[#222020] hover:text-white hover:border-1 hover:scale-[1.1]"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
