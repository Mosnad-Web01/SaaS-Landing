import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "12:00AM", value: 5000 },
  { time: "01:00AM", value: 6000 },
  { time: "02:00AM", value: 3000 },
  { time: "03:00AM", value: 2000 },
  { time: "04:00AM", value: 4000 },
  { time: "05:00AM", value: 6000 },
  { time: "06:00AM", value: 3000 },
  { time: "07:00AM", value: 5000 },
  { time: "08:00AM", value: 4000 },
  { time: "09:00AM", value: 6000 },
  { time: "10:00AM", value: 7000 },
];

const CustomLineChart = () => (
  <div className="w-[881px] h-[470px] bg-white rounded-3xl p-5 dark:bg-[#1A1A1A]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#00C49F"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CustomLineChart;
