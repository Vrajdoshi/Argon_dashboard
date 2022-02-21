import "./widgetLg.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Page Visits</h3>
      <button class="btn btn-outline-success " type="submit">See All</button>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Page Name</th>
          <th className="widgetLgTh">Visitors</th>
          <th className="widgetLgTh">UNIQUE USERS</th>
          <th className="widgetLgTh">BOUNCE RATE</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            
            <span className="widgetLgName">/argon/</span>
          </td>
          <td className="widgetLgDate">4,569</td>
          <td className="widgetLgAmount">340</td>
          <td className="featuredMoneyRate">
            46.53% <ArrowDownward className="featuredIcon negative"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">/argon/index.html</span>
          </td>
          <td className="widgetLgDate">3,985</td>
          <td className="widgetLgAmount">294</td>
          <td className="featuredMoneyRate">
            46.68% <ArrowUpward className="featuredIcon"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">/argon/charts.html</span>
          </td>
          <td className="widgetLgDate">3,513</td>
          <td className="widgetLgAmount">319</td>
          <td className="featuredMoneyRate">
            36.45% <ArrowDownward className="featuredIcon negative"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">/argon/tables.html</span>
          </td>
          <td className="widgetLgDate">2,050</td>
          <td className="widgetLgAmount">147</td>
          <td className="featuredMoneyRate">
            50.48% <ArrowUpward className="featuredIcon"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">/argon/tables.html</span>
          </td>
          <td className="widgetLgDate">2,050</td>
          <td className="widgetLgAmount">147</td>
          <td className="featuredMoneyRate">
            50.48% <ArrowUpward className="featuredIcon"/>
          </td>
        </tr>
      </table>
    </div>
  );
}