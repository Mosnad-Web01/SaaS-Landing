const Card2 = () => {
  return (
    <div className="w-[259px] h-[470px] bg-white ml-8 rounded-3xl px-7 border-2 border[#E0E0E0] dark:bg-[#1A1A1A] dark:text-white dark:border-[#242424]">
      <div className="h-[149px] mt-5 flex flex-col justify-between">
        <p className="text-[18px] text-[#4F4F4F] dark:text-white">
          Total Balance
        </p>
        <p className="text-[44px] font-medium">$350.0</p>
        <button className="bg-black text-white rounded-lg h-[40px] text-center dark:bg-black dark:text-white">
          Transfer
        </button>
      </div>
      <div className="h-[123px] mt-6 flex flex-col justify-evenly">
        <p className="text-[18px] text-[#4F4F4F] dark:text-white">
          Total Income
        </p>
        <p className="text-[44px] font-medium">$320.0</p>
      </div>
      <div className="h-[127px] mt-2 flex flex-col justify-evenly">
        <p className="text-[18px] text-[#4F4F4F] dark:text-white">
          Total Expense
        </p>
        <p className="text-[44px] font-medium">$220.0</p>
      </div>
    </div>
  );
};

export default Card2;
