import React,{Component} from 'react'
import Popup from "reactjs-popup";
var ReactDOM = require('react-dom');
var ScrollArea = require('react-scrollbar');
class Statewisedata extends Component
{
  state={listofstate:[],selectedstate :'',zonaldata:[]}
  componentDidMount()
  {
    fetch('https://api.covid19india.org/zones.json').then(
        response=>response.json()).then
        (json=>this.setState({zonaldata:json.zones}));
  }

handlesubmit()
  {
      
       console.log('State selected function me hai' ,this.props.statew.statecode)
       console.log('State selected function me hai statewaa' ,this.state.selectedstate)
        const stateparticular=((this.props.statew).filter(x=>x.statecode===(this.state.selectedstate)))
        let paticularstateinf=this.state.zonaldata.filter(y=>y.statecode===(this.state.selectedstate))
        console.log('particu 34234332432',paticularstateinf)
    
       this.stateveiwleft=(
           <div>
               <table>
                  <tr><td>State</td><td>{stateparticular.map(s=>s.state)[0]}</td></tr>
                  <tr><td>Active</td><td>{stateparticular.map(s=>s.active)[0] }</td></tr>
                  <tr><td>Confirmed</td>{stateparticular.map(s=>s.onfirmed)[0] }<td></td></tr>
                  <tr><td>Deaths</td><td>{stateparticular.map(s=>s.deaths)[0] }</td></tr>
                  <tr><td>Deltaconfirmed</td><td>{stateparticular.map(s=>s.deltaconfirmed)[0] }</td></tr>
                  <tr><td>Deltadeaths</td><td>{stateparticular.map(s=>s.deltadeaths)[0] }</td></tr>
                  <tr><td>Deltarecovered</td><td>{stateparticular.map(s=>s.deltarecovered)[0] }</td></tr>
                  <tr><td>Lastupdatedtime</td><td>{stateparticular.map(s=>s.lastupdatedtime)[0] }</td></tr>
                  <tr><td>Recovered</td><td>{stateparticular.map(s=>s.recovered)[0] }</td></tr>
                  <tr><td>Statenotes</td><td>{ stateparticular.map(s=>s.statenotes)[0]}</td></tr>
                  
               </table>
               <Popup trigger={<button> Trigger</button>} position="right center">
                <div>
                    
                    {

                        
                        paticularstateinf.map(x=>{
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

                </div>
              </Popup>

           </div>
       )
       if(stateparticular===null){
       console.log('State selected ---->',stateparticular.deltarecovered)
       }
       else{
           let s=stateparticular.map(s=>s)
           console.log('State selected  null s',s.active)
       console.log('State selected  null s',s.map(s=>s.active)[0])
       
       console.log('State selected 2---->',((this.props.statew).filter(x=>x.state===(this.state.selectedstate))))
       }
       
  }

render()
{

   
    let l=(this.props.statew).map(x=>x.state)
    
    return(

         (
                

            <div>
                
                {console.log('selected state' ,this.state.selectedstate)}
    
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