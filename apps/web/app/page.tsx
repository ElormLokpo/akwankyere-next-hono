import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import { LuArrowRight } from "react-icons/lu";
import { RiParentLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="bg-background h-screen  " >
      <div className="sticky top-0 z-50 py-5 px-5 flex items-center justify-center">
        <div className="bg-white w-150 p-3 rounded-3xl flex items-center justify-between gap-3">
          <div className="flex items-center  gap-3">
            <div className="rounded-full"><Image className="rounded-full" src="/logo.png" alt="logo" width={35} height={35} /></div>
            <div className="text-primary-green-500 text-sm md:text-md font-bold">Akwankyere</div>
          </div>

          <div className="flex text-xs md:text-sm gap-2 text-primary-green-500">
            <div className="hover:cursor-pointer hover:font-bold transition-all">How it works</div>
            <div className="hover:cursor-pointer hover:font-bold transition-all">About Us</div>
          </div>

        </div>
      </div>

      <div className="px-8 md:px-20 lg:grid lg:grid-cols-2 lg:gap-5 lg:px-35 2xl:px-55 py-10">
        <div className="text-primary-green-500 lg:px-30 ">
          <div className="font-semibold text-center lg:text-left">Ghana&lsquo;s career pathway guide</div>
          <div className="text-[2rem] text-center lg:text-left leading-10 lg:text-[3rem] 2xl:text-[4rem] mb-3 lg:leading-13  2xl:leading-18 font-bold font-serif">Find the school path that fits your future.</div>

          <div className="mb-5 text-center lg:text-left">
            Discover SHS programme and tertiary courses built around your interests, strengths and results.
          </div>

          <div className="mb-5 lg:hidden">
            <Image src="/landing.png" alt="landing" width={1000} height={1000} />

          </div>

          <div>
          <button className="bg-primary-green-500 mb-2 md:mb-4 px-3 py-3 text-white md:px-5 md:py-3 rounded-2xl w-full flex items-center justify-between transition-transform duration-300 ease-out hover:-translate-y-3">
              <div className="flex items-center gap-4">

                <div className="bg-background p-2 md:p-4 font-semibold rounded-full text-primary-green-500 flex items-center justify-center">
                  <HiOutlineUser />
                </div>

                <div className=" text-sm md:text-md">I&lsquo;m a student</div>
              </div>

              <div>
                <LuArrowRight className="mr-2" />
              </div>
            </button>

            <button className="bg-gold md:mb-4 text-white p-3 md:px-5 md:py-3 rounded-2xl w-full flex items-center justify-between transition-transform duration-300 ease-out hover:-translate-y-3">
              <div className="flex items-center gap-4">

                <div className="bg-background p-2 md:p-4 font-semibold rounded-full text-primary-green-500 flex items-center justify-center">
                  <RiParentLine />
                </div>

                <div className="text-primary-green-500 text-sm md:text-md font-semibold">I&lsquo;m a parent or gaurdian</div>
              </div>

              <div>
                <LuArrowRight className="mr-2" />
              </div>
            </button>
          </div>

        </div>
        <div className="hidden lg:block col-span-1">
          <Image src="/landing.png" alt="landing" width={1000} height={1000} />
        </div>
      </div>

    </div>
  );
}
