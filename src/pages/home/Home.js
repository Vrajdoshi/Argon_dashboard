import Chart from "../../components/Charts/Chart";
import FeaturedInfo from "../../components/Featuredlnfo/Finfo";
import "./home.css";
import Bar from "../../components/Charts/Bar";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Sales Value" grid dataKey="Active User"/>
      <Bar/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
