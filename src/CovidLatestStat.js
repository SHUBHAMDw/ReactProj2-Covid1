import React,{Component} from 'react'

class CovidLatestStat extends Component
{
    state ={zonaldata:[],cases_time_series:[],statewise:[],tested:[],totaltoday:0}
    
    componentDidMount()
    {
        fetch('https://api.covid19india.org/zones.json').then(
            response=>response.json()).then
            (json=>this.setState({zonaldata:json.zones}));
            
        fetch('https://api.covid19india.org/data.json').then(
                response=>response.json()).then
                (json=>this.setState({cases_time_series :json.cases_time_series,
                    statewise : json.statewise,
                    tested  :   json.tested
                }));
                this.setState({totaltoday :this.state.cases_time_series.filter(cases_time_series=>cases_time_series.date==='07 May') })           
        
    }
 
    render()
    {
        
        
        return(

            <div>
                {          
                  

                  this.state.cases_time_series.map((x,index) => {
                      let j
                      if(x.date==='07 May')
                      {j=x.dailyrecovered}
                      return(
                          
                      <div>{x.date}</div>
                      )
                    //  console.log(this.state.zonaldata)
                      
                  })
                  
                  
                  
                }
                <div></div>
                
            </div>

        )
    }
}

export default CovidLatestStat;