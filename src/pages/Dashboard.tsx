import Card from "../components/Card";
import Card2 from "../components/Card2";
import CustomLineChart from "../components/CustomLineChart";
import Employee from "../components/Employee";

const dashboard = () => {
  return (
    <div className="w-full mt-10">
      <section className="bg-[#eee] w-[1536px] max-w-xl mx-auto pb-5 rounded-3xl shadow-custom2 dark:bg-[#161616]">
        <div className="flex gap-5 justify-center pt-9">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex mt-5 gap-6 ">
          <Card2 />
          <CustomLineChart />
          <Employee />
        </div>
      </section>
    </div>
  );
};

export default dashboard;
