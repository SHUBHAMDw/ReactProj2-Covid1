import React,{Component} from 'react'
import GraphProjection from './GraphProjection'
import Statewisedata from './Statewisedata'


class CovidLatestStat extends Component
{
    state ={zonaldata:[],cases_time_series:[],statewise:[],tested:[],totaltodayConfirmed:'',
    totaltodayRecovered:'',tc:'',tr:'',dc:'',dr:''}
    
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
      this.setState( {dc:this.state.cases_time_series.map(x=>x.dailyconfirmed)})
      this.setState( {dr:this.state.cases_time_series.map(x=>x.dailyrecovered)})
      this.setState( {date:this.state.cases_time_series.map(x=>x.date)})

     //this.setState( {dc:this.state.cases_time_series.map(x=>x.dailyconfirmed)})
      //this.setState( {dr:this.state.cases_time_series.map(x=>x.dailyrecovered)})

      //console.log('check dc',this.state.dc)
      //console.log('check tc',this.state.tc)
     // this.setState({tr:this.state.dr})
     // this.setState({tc:this.state.dc})
        
        
          
    }
    
    
    
    render()
    {
       // this.testfunc()
       //console.log('length',(this.state.statewise).length)
       let lin,lin2,state1
       let x=[this.state.dr,this.state.date,'Indian Recovery','Level of reovery(INDIA)']
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


        x=[this.state.dc,this.state.date,'Indian Cases','Confirmed Case(India)']
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
                <h4> Total Confirmed : <span style ={{color:'Red'}}>{ this.state.totaltodayConfirmed }</span>  &nbsp;    
                Total Recovered : <span style ={{color:'Green'}}>{this.state.totaltodayRecovered}</span></h4>


                <table border = "0" style={{height:'260px',width:'1000px'}}>
                <tr>
                    <div>{lin}</div>
                
                    <div>{lin2}</div>

                </tr>

                
                    

                
         
         
                </table>
                <div>{state1}</div>

              
            </div>
           
           
            

        )
    }
}

export default CovidLatestStat;