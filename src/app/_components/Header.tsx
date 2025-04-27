import { SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

const Header = async () => {
  const { userId } = await auth();
  return (
    <header className="bg-white py-3 border-b border-gray-100 ">
      {!userId ? (
        <div className="flex mx-auto h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm tracking-wider text-gray-900 uppercase font-medium">
                <li>
                  <Link className="transition hover:text-gray-900/75" href="/">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/upload"
                    className="transition hover:text-gray-900/75"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="transition hover:text-gray-900/75"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="transition hover:text-gray-900/75"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <div className="flex gap-4">
                <Link
                  className="block border-1 rounded-sm sm:px-[40px] px-[20px] sm:py-2.5 py-1.5 text-sm font-medium text-white transition tracking-wider bg-[#ff7a00] hover:bg-white hover:text-[#ff7a00] hover:border-1 hover:scale-[1.1]"
                  href="/signIn"
                >
                  Login
                </Link>

                <Link
                  className="block border-1 rounded-sm sm:px-[40px] px-[20px] sm:py-2.5 py-1.5 text-sm font-medium text-gray-900 transition tracking-wider bg-white hover:bg-gray-900 hover:text-white hover:border-1 hover:scale-[1.1]"
                  href="/signUp"
                >
                  Register
                </Link>
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
      ) : (
        <div className="h-16 max-w-screen-xl flex items-center justify-end px-4 sm:px-6 lg:px-8">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </header>
  );
};

export default Header;
