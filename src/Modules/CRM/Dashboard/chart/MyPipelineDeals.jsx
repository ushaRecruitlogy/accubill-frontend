// MyPipelineDeals.jsx
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Qualification', value: 400 },
  { name: 'Proposal', value: 300 },
  { name: 'Negotiation', value: 200 },
  { name: 'Closed Won', value: 100 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];

export default function MyPipelineDeals() {
  return (
    <PieChart width={250} height={350}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
