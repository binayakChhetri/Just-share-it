import { SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = async () => {
  const { userId } = await auth();
  return (
    <header className="bg-white py-3 border-b border-gray-100 ">
      {!userId ? (
        <div className="flex mx-auto h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center md:justify-between">
            <div className="flex items-center justify-end gap-4 w-full">
              <div className="flex gap-4 w-full justify-end">
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
            </div>
          </div>
        </div>
      ) : (
        <div className="h-16 max-w-screen-xl flex items-center justify-between md:justify-end px-4 sm:px-6 lg:px-8 mx-auto">
          <MobileNav />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </header>
  );
};

export default Header;
