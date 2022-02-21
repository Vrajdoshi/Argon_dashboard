import "./Finfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {
  TrendingUp,
  PermIdentity,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
      
        <span className="featuredTitle">TRAFFIC  </span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">350,897</span>
          <BarChart className="NavIcon" />
        </div>
        <span className="featuredMoneyRate">
          <ArrowUpward className="featuredIcon"/>3.48% Scince Last Month
          </span>
      </div>
      <div className="featuredItem">
      
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">924</span>
          <AttachMoney className="NavIcon" />
        </div>
        <span className="featuredMoneyRate">
       <ArrowDownward className="featuredIcon negative"/> 1.10% Scince Last Week
          </span>
      </div>
      <div className="featuredItem">
      
        <span className="featuredTitle">New Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,356</span>
          <PermIdentity className="NavIcon" />
        </div>
        <span className="featuredMoneyRate">
         <ArrowDownward className="featuredIcon negative"/> 3.48% Scince Yesterday
          </span>
        
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Performance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">49.65%</span>
          <TrendingUp className="NavIcon" />
        </div>
        <span className="featuredMoneyRate">
         <ArrowUpward className="featuredIcon"/>10% Scince last month
          </span>
      </div>
    </div>
  );
}