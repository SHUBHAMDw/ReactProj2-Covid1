import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
//import CovidLatestStat from './CovidLatestStat';
//import axios from "axios";

 let GraphProjection = props => {
  let [chartData, setChartData] = useState({});
  
  let val1=props.recover[0]
  let date=props.recover[1]
//  let temp=length(date)
  //console.log('typ1 ', (temp));
 let jj=['323','3223']


 
  let chart = () => {
        setChartData({
          labels: date,
          datasets: [
            {
              label: props.recover[3],
              data: val1,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });}
     useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
      <h1>{props.recover[2]}</h1>
      <div style={{height:"700px" ,width:"1000px"}}>
       <Line data={chartData} options={ {responsive :true}}/>
       
      </div>
    </div>
  )
}

export default GraphProjection;