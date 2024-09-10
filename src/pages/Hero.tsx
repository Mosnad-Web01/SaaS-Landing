import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import frames from "./../assets/frames.svg";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="max-w-xl m-auto flex pt-20 items-center flex-col ">
      <div className="flex mb-5 px-1 py-2 gap-2 rounded-full border-2 border-solid border-[#364c09] border-b-0 items-center font-normal dark:border-black dark:border-2">
        <span className="text-white bg-[#A3DC2F] px-3 py-1 rounded-full ">
          New
        </span>
        <span className="dark:text-[#A3DC2F]">Introducing AI Automation</span>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="dark:text-[#A3DC2F]"
        />
      </div>
      <div className="w-[1088px] flex flex-col justify-center items-center">
        <h1 className="text-7xl font-[550] text-center px-24 mb-10 dark:text-white">
          The Finance Solutions For Your Business
        </h1>
        <p className="w-[880px] text-center text-[22px] font-normal text-[#828282]">
          Empower your finance team. The onestop plateform for all financial
          management of small and medium-sized business.
        </p>
      </div>
      <form className="flex mt-14 w-[640px] h-[72px] relative shadow-md rounded-[100px] bg-white dark:bg-black">
        <input
          type="email"
          name=""
          id=""
          className="w-full rounded-[100px] pl-10 outline-none dark:bg-[#242424] dark:text-white"
          placeholder="Enter your email address"
        />
        <button
          className="py-4 px-6 rounded-3xl outline-none bg-[#1D1C20] text-white absolute right-1 top-1/2 -translate-y-1/2 dark:bg-white dark:text-black"
          onClick={(event) => event.preventDefault()}
        >
          Book a Demo
        </button>
      </form>
      <div className="flex flex-col gap-2 mt-16 justify-center items-center">
        <img src={frames} alt="" className="w-28" />
        <p className="dark:text-[#9B9CA1] text-[13px]">
          1,200+ reviews (4.9 of 5)
        </p>
      </div>
    </section>
  );
};

export default Hero;
