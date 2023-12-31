import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function TestPieChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="vertical"
          align="right"
          width="30%"
          verticalAlign="middle"
          iconSize={15}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default TestPieChart;
