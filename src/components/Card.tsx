const Card = () => {
  return (
    <div className="w-[475px] h-[180px] p-7 flex gap-[104px] bg-white rounded-3xl dark:bg-[#1A1A1A] dark:text-white dark:border-[#242424] border-2">
      <div className="w-[256px] flex flex-col justify-between">
        <p className="text-xl">Total Profit</p>
        <p className="text-5xl font-medium">$350.240</p>
      </div>
      <div className="">
        <p className="text-sm text-[#72A700] text-center">+18.23</p>
        <div className="flex gap-3 py-10 items-end">
          <span className="block w-0 h-7 border-4 border-[#72A7008A] rounded-full"></span>
          <span className="block w-0 h-10 border-4 border-[#72A700] rounded-full"></span>
          <span className="block w-0 h-9 border-4 border-[#72A7008A] rounded-full"></span>
          <span className="block w-0 h-11 border-4 border-[#72A7008A] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
