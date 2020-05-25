import React,{Component} from 'react'
import Popup from "reactjs-popup";
import StateGraphProj from './StateGraphProj'
import StatewiseGraphsec from './StatewiseGraphsec'
var ReactDOM = require('react-dom');
var ScrollArea = require('react-scrollbar');
class Statewisedata extends Component
{
  state={listofstate:[],selectedstate :'',zonaldata:[],states_daily:[]}
  componentDidMount()
  {
    fetch('https://api.covid19india.org/zones.json').then(
        response=>response.json()).then
        (json=>this.setState({zonaldata:json.zones}));
    fetch('https://api.covid19india.org/states_daily.json').then(
        response=>response.json()).then
        (json=>this.setState({states_daily:json.states_daily})
    )

  }

handlesubmit()
  {
      
      
      // console.log('State selected function me hai' ,this.props.statew.statecode)
      // console.log('State selected function me hai statewaa' ,this.state.selectedstate)
        const stateparticular=((this.props.statew).filter(x=>x.statecode===(this.state.selectedstate)))
        let paticularstateinf=this.state.zonaldata.filter(y=>y.statecode===(this.state.selectedstate))
        //console.log('particu 34234332432',paticularstateinf)

        this.stateconfirmed=this.state.states_daily.filter(x=>(x.status==='Confirmed'))
        
        let stateconfirmednumber=(this.stateconfirmed.map(x=>(
            
           (
          x[(this.state.selectedstate).toString().toLowerCase()]
           // x['mh']
          )
            )));
        let stateconfirmednumberdate=this.stateconfirmed.map(x=>x.date)

        console.log('render6666666662 stateconfirmednumber 1',stateconfirmednumber)
        console.log('render6666666662 stateconfirmednumberdate 1',stateconfirmednumberdate)
        
     //  stateconfirmednumber=["14", "18", "6", "3", "3", "4", "4", "12", "10", "23", "10", "15", "3", "31", "30", "17", "17", "82", "33", "88", "64", "148", "112", "121", "150", "117", "229", "210", "187", "221", "352", "346", "236", "285", "120", "327", "552", "466", "552", "431", "778", "390", "811", "440", "522", "728", "597", "583", "1008", "790", "678", "1567", "984", "1233", "1216", "1089", "1165", "1943", "1230", "1026", "1495", "1602"]
    //   stateconfirmednumberdate=["14-Mar-20", "15-Mar-20", "16-Mar-20", "17-Mar-20", "18-Mar-20", "19-Mar-20", "20-Mar-20", "21-Mar-20", "22-Mar-20", "23-Mar-20", "24-Mar-20", "25-Mar-20", "26-Mar-20", "27-Mar-20", "28-Mar-20", "29-Mar-20", "30-Mar-20", "31-Mar-20", "01-Apr-20", "02-Apr-20", "03-Apr-20", "04-Apr-20", "05-Apr-20", "06-Apr-20", "07-Apr-20", "08-Apr-20", "09-Apr-20", "10-Apr-20", "11-Apr-20", "12-Apr-20", "13-Apr-20", "14-Apr-20", "15-Apr-20", "16-Apr-20", "17-Apr-20", "18-Apr-20", "19-Apr-20", "20-Apr-20", "21-Apr-20", "22-Apr-20", "23-Apr-20", "24-Apr-20", "25-Apr-20", "26-Apr-20", "27-Apr-20", "28-Apr-20", "29-Apr-20", "30-Apr-20", "01-May-20", "02-May-20", "03-May-20", "04-May-20", "05-May-20", "06-May-20", "07-May-20", "08-May-20", "09-May-20", "10-May-20", "11-May-20", "12-May-20", "13-May-20", "14-May-20"]
       
        console.log('render6666666662 stateconfirmednumber 2',stateconfirmednumber)
        console.log('render6666666662 stateconfirmednumberdate 2',stateconfirmednumberdate)
        let nl=this.state.selectedstate.toString();
        nl='maha'
        nl=this.state.selectedstate.toString();
        console.log('Selaected ',nl)

       this.x=[stateconfirmednumber,stateconfirmednumberdate,'State Confirmed Status '+this.state.selectedstate.toString(),'Numbers Confirmed ('+nl+') ',nl]

      


    // Recovered

    this.stateRecovered=this.state.states_daily.filter(x=>(x.status==='Recovered'))
        
    let stateRecoverednumber=(this.stateRecovered.map(x=>(
        
       (
      x[(this.state.selectedstate).toString().toLowerCase()]
       // x['mh']
      )
        )));
        this.x2=[stateRecoverednumber,stateconfirmednumberdate,'State Recovery Status '+this.state.selectedstate.toString(),'Numbers Recovered ('+nl+') ',nl]

    //Recovered


        
    


  let grapshow
    //test
    console.log('test---1',this.state.selectedstate)
    if((this.state.selectedstate).toString()==='')
    {
        console.log('wooolllllla')
    }
    if(this.state.selectedstate!==undefined && (this.state.selectedstate).toString()!=='')
    {
        console.log('If condition satisfied')
        this.grapshow=( (<StatewiseGraphsec statecode ={this.x}/>))
        this.graphshow2=( (<StatewiseGraphsec statecode ={this.x2}/>))
    }
 
        
    
       this.stateveiwleft=(
           <div>
               <table><tr>
                   <td>
                       
                  
               <table>
                  <tr><td>State</td><td>{stateparticular.map(s=>s.state)[0]}</td></tr>
                  <tr><td>Active</td><td>{stateparticular.map(s=>s.active)[0] }</td></tr>
                  <tr><td>Confirmed</td>{stateparticular.map(s=>s.confirmed)[0] }<td></td></tr>
                  <tr><td>Deaths</td><td>{stateparticular.map(s=>s.deaths)[0] }</td></tr>
                  <tr><td>Deltaconfirmed</td><td>{stateparticular.map(s=>s.deltaconfirmed)[0] }</td></tr>
                  <tr><td>Deltadeaths</td><td>{stateparticular.map(s=>s.deltadeaths)[0] }</td></tr>
                  <tr><td>Deltarecovered</td><td>{stateparticular.map(s=>s.deltarecovered)[0] }</td></tr>
                  <tr><td>Lastupdatedtime</td><td>{stateparticular.map(s=>s.lastupdatedtime)[0] }</td></tr>
                  <tr><td>Recovered</td><td>{stateparticular.map(s=>s.recovered)[0] }</td></tr>
                  <tr><td>Statenotes</td><td>{ stateparticular.map(s=>s.statenotes)[0]}</td></tr>
                  
               </table>


               <Popup
                trigger={<button className="button"> In a seperate window </button>}
                    modal
                closeOnDocumentClick
                    >
                <span> 
                    
                    
                     {

                        <table>
                            <td>{
                        paticularstateinf.filter(y=>y.zone==='Red').map(x=>{
                            return (
                                                   
                                <div >
                                   
                                     <h3 style={{color:x.zone}}>{x.district}</h3>
                                &nbsp;
                                <hr></hr>
                                <div>
                                    
                                    </div>
                                </div>

                           
                            )

                        })
                    }
                        </td>
                        <td>{
                        paticularstateinf.filter(y=>y.zone==='Orange').map(x=>{
                            return (
                                                   
                                <div >
                                   
                                     <h3 style={{color:x.zone}}>{x.district}</h3>
                                &nbsp;
                                <hr></hr>
                                <div>
                                    
                                    </div>
                                </div>

                           
                            )

                        })
                    }
                        </td>
                        <td>{
                        paticularstateinf.filter(y=>y.zone==='Green').map(x=>{
                            return (
                                                   
                                <div >
                                   
                                     <h3 style={{color:x.zone}}>{x.district}</h3>
                                &nbsp;
                                <hr></hr>
                                <div>
                                    
                                    </div>
                                </div>

                           
                            )

                        })
                    }
                        </td>
                        </table>
                    }



                </span>
                </Popup>


               <Popup trigger={<button> Zonal Cities</button>} position="right">
                   
                <div>
                    
                    {

                        <table>
                            <td>{
                        paticularstateinf.filter(y=>y.zone==='Red').map(x=>{
                            return (
                                                   
                                <div >
                                   
                                     <h3 style={{color:x.zone}}>{x.district}</h3>
                                &nbsp;
                                <hr></hr>
                                <div>
                                    
                                    </div>
                                </div>

                           
                            )

                        })
                    }
                        </td>
                        <td>{
                        paticularstateinf.filter(y=>y.zone==='Orange').map(x=>{
                            return (
                                                   
                                <div >
                                   
                                     <h3 style={{color:x.zone}}>{x.district}</h3>
                                &nbsp;
                                <hr></hr>
                                <div>
                                    
                                    </div>
                                </div>

                           
                            )

                        })
                    }
                        </td>
                        <td>{
                        paticularstateinf.filter(y=>y.zone==='Green').map(x=>{
                            return (
                                                   
                                <div >
                                   
                                     <h3 style={{color:x.zone}}>{x.district}</h3>
                                &nbsp;
                                <hr></hr>
                                <div>
                                    
                                    </div>
                                </div>

                           
                            )

                        })
                    }
                        </td>
                        </table>
                    }

                </div>
              </Popup>

              </td>
              </tr>
              <tr>
              {console.log('graphshow111111 --1',this.grapshow)}
              {console.log('graphshow111111 --2',grapshow)}
              {this.grapshow}
              <hr></hr>
              {this.graphshow2}
              {console.log('graphshow111111')}
                        
                        </tr>

              
                    </table>

           </div>
       )
       if(stateparticular===null){
       
       }
       else{
           let s=stateparticular.map(s=>s)
         //  console.log('State selected  null s',s.active)
     //  console.log('State selected  null s',s.map(s=>s.active)[0])
       
      // console.log('State selected 2---->',((this.props.statew).filter(x=>x.state===(this.state.selectedstate))))
       }
       
  }

render()
{


    
   
    let l=(this.props.statew).map(x=>x.state)
    
    return(

         (
                

            <div>
                
               
    
            <table>
                <tr>
                <div>
                    <form onChange={this.handlesubmit()}> 
                    <select value={this.props.statew.statecode}  
                        onChange={(e) => this.setState({selectedstate: e.target.value})}>   
                       {this.props.statew.map((team) => <option key={team.statecode} value={team.statecode}>{team.state}</option>)}
                        </select>
                        <input type="submit" value="Fetch Details"/>
                     </form>
                </div>
                </tr>
                <tr>
                    <td>
                        {this.stateveiwleft}
                    </td>
                </tr>
            </table>
           



            </div>




          )
        
          

    )


}











}
export default Statewisedata;