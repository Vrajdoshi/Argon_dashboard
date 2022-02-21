import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="60%" aspect={5/2}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="4 9" />}
        </LineChart>
    
      </ResponsiveContainer>
    </div>
    
  );
}
