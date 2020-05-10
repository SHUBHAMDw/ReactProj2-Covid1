import React,{Component} from 'react'
import GraphProjection from './GraphProjection'
import Statewisedata from './Statewisedata'


class CovidLatestStat extends Component
{
    state ={zonaldata:[],cases_time_series:[],statewise:[],tested:[],totaltodayConfirmed:'',
    totaltodayRecovered:'',tc:'',tr:''}
    
    componentDidMount()
    {
        fetch('https://api.covid19india.org/zones.json').then(
            response=>response.json()).then
            (json=>this.setState({zonaldata:json.zones}));
            
        fetch('https://api.covid19india.org/data.json').then(
                response=>response.json()).then
                (json=>{this.setState({cases_time_series :json.cases_time_series,
                    statewise : json.statewise,
                    tested  :   json.tested
                })
                this.Funcfetch2()
            
            });
              
             
    }

    Funcfetch2()
    {   
        
        let j=this.state.cases_time_series[(this.state.cases_time_series).length-1]
        this.setState({totaltodayConfirmed:j.totalconfirmed,
            
                totaltodayRecovered:j.totalrecovered
                       }
                  
            )
      this.setState( {tc:this.state.cases_time_series.map(x=>x.totalconfirmed)})
      this.setState( {tr:this.state.cases_time_series.map(x=>x.totalrecovered)})
      this.setState( {date:this.state.cases_time_series.map(x=>x.date)})
        
        
          
    }
    
    
    
    render()
    {
       // this.testfunc()
       //console.log('length',(this.state.statewise).length)
       let lin,lin2,state1
       let x=[this.state.tr,this.state.date,'Indian Recovery','Level of reovery(INDIA)']
       if(x[0]!==undefined && x[1]!==undefined && x[2]!==undefined && x[3]!==undefined)
       {
        lin=(
            <div>
                <GraphProjection recover={x}/>
            </div>
        
        )
       }
        else
       {
        lin=(
            <div>
                waiting for data
            </div>
        
        )
       }


        x=[this.state.tc,this.state.date,'Indian Cases','Overall Cases(India)']
       if(x[0]!==undefined && x[1]!==undefined && x[2]!==undefined && x[3]!==undefined)
       {
        lin2=(
            <div>
                <GraphProjection recover={x}/>
            </div>
        
        )
       }
        else
       {
        lin2=(
            <div>
                waiting for data
            </div>
        
        )
       }

       if((this.state.statewise).length!==0)
       {
           state1=(
               <div>

                    <Statewisedata statew={this.state.statewise}/>
                    {console.log('Statewise',(this.state.statewise))}

               </div>
           )
       }
       

        return(
        

            

            <div>
                Total Confirmed :{ this.state.totaltodayConfirmed } &nbsp;    
                Total Recovered :{this.state.totaltodayRecovered}


                <table border = "0" style={{height:'1000px',width:'1000px'}}>
                <tr>
                    <td><div>{lin}</div></td>
                    <td><div></div>{lin2}</td>
                </tr>

                
                    

                
         
         
                </table>
                <div>{state1}</div>

              
            </div>
           
           
            

        )
    }
}

export default CovidLatestStat;