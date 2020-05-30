import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
//import CovidLatestStat from './CovidLatestStat';
//import axios from "axios";

 let StateGraphProj = props => {
  let [chartData, setChartData] = useState({});
  console.log('sdsdsd',props.strecover);
  let val1=props.strecover[0]
  let date=props.strecover[1]
//  let temp=length(date)
  //console.log('typ1 ', (temp));
 let jj=['323','3223']
  console.log('sahgd gdygjhgdsajsa date  ',date)
  console.log('sahgd gdygjhgdsajsa  val1 22',val1)
  console.log('sahgd gdygjhgdsajsa  strecover 23',props.strecover[3])
  console.log('sahgd gdygjhgdsajsa strecover  24',props.strecover[2])

 
  let chart = () => {
        setChartData({
          labels: date,
          datasets: [
            {
              label: props.strecover[3],
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
      <h1>{props.strecover[2]}</h1>
      <div style={{height:"700px" ,width:"800px"}}>
       <Line data={chartData} options={ {responsive :true}}/>
       {console.log("refreshed hogaya",val1)
             
       }
       {console.log('chart ki value ai ====>>',chartData)}
       {console.log("hogaya",date)}
      </div>
    </div>
  )
}

export default StateGraphProj;