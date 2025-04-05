"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Hero = () => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleClick = () => {
    if (!isSignedIn) {
      return router.push("/signIn");
    }

    router.push("/upload");
  };
  return (
    <section className="bg-white lg:grid lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            Click, upload, done.
            <br />
            Just <strong className="text-[#ff7a00]"> Share </strong>
            it
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Got a file? Just Share It. Upload, share and you’re done — no ads,
            no nonsense.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <button
              className="cursor-pointer inline-block rounded border border-[#ff7a00] bg-[#ff7a00] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-[#ff7a00] hover:border-[#ff7a00]"
              onClick={handleClick}
            >
              Get Started
            </button>

            <Link
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
              href="/learn-more"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
