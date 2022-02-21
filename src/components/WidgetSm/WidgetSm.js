import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Social Traffic</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Facebook</span>
            <span className="widgetSmUserTitle">1,480</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Instagram</span>
            <span className="widgetSmUserTitle">3,678</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
         
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Google</span>
            <span className="widgetSmUserTitle">4,807</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">twitter</span>
            <span className="widgetSmUserTitle">2,654</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Snapchat</span>
            <span className="widgetSmUserTitle">5,624</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}