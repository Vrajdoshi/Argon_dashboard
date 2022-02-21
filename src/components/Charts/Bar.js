import React from "react";
import "./Bar.css";
import Paper from '@material-ui/core/Paper';
import {
ArgumentAxis,
ValueAxis,
Chart,
BarSeries,
} from '@devexpress/dx-react-chart-material-ui';


const App = () => {

// Sample data
const data = [
{ argument: 'Jul', value: 25 },
{ argument: 'Aug', value: 20 },
{ argument: 'Sep', value: 30 },
{ argument: 'Oct', value: 22 },
{ argument: 'Nov', value: 17 },
{ argument: 'Dec', value: 29 }
];
return (
	<Paper>
	<Chart
	data={data}
	>
	<ArgumentAxis />
	<ValueAxis />

	<BarSeries valueField="value" argumentField="argument" />
	</Chart>
</Paper>
);
}

export default App;
