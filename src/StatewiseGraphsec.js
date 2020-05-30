import React,{Component} from 'react'
import StateGraphProj from './StateGraphProj'
import Popup from "reactjs-popup";
class StatewiseGraphsec extends Component
{
    state={states_daily:[],graphval:[],graphexp:'',displayMessage: false}
    constructor()
    {
        super();
        this.state={displayMessage: false};
        this.toggleDisplayContacts=this.toggleDisplayContacts.bind(this);
    }

    toggleDisplayContacts()
    {

       this.setState({displayMessage:!this.state.displayMessage})
        //this.setState({displayMessage :!this.state.displayMessage})
    
    } componentDidMount()
    {
        this.setState({displayMessage :false})
    }
   



    render(){


        let bio =(

            <div>
            <p>Don't panic. With time you will also become powerfull to overcome this virus</p>
            <p>It's a time given by god to retrospect and setup the pavement for the future. </p>
            <p>But don't forget to spread the awareness.</p>
    
        </div>)
         if(!this.state.displayMessage)
         {
             bio=(
      
                  <button onClick ={this.toggleDisplayContacts} >Graphical Statistics</button>
      
             )}
          else
          {
              bio =(
      
                  <div>
                          <div>
                              
                                <StateGraphProj strecover={this.tval}/>
                        </div>
      
                  <button onClick ={this.toggleDisplayContacts} >Graphical Statistics -Hide/referesh </button>
          
              </div>
          
              );}
        console.log('data creation  1 ',this.props.statecode)
        //this.setState({graphexp:this.props.statecode})
     
         //this.stateconfirmednumber=["14", "18", "6", "3", "3", "4", "4", "12", "10", "23", "10", "15", "3", "31", "30", "17", "17", "82", "33", "88", "64", "148", "112", "121", "150", "117", "229", "210", "187", "221", "352", "346", "236", "285", "120", "327", "552", "466", "552", "431", "778", "390", "811", "440", "522", "728", "597", "583", "1008", "790", "678", "1567", "984", "1233", "1216", "1089", "1165", "1943", "1230", "1026", "1495", "1602"]
        // this.stateconfirmednumberdate=["14-Mar-20", "15-Mar-20", "16-Mar-20", "17-Mar-20", "18-Mar-20", "19-Mar-20", "20-Mar-20", "21-Mar-20", "22-Mar-20", "23-Mar-20", "24-Mar-20", "25-Mar-20", "26-Mar-20", "27-Mar-20", "28-Mar-20", "29-Mar-20", "30-Mar-20", "31-Mar-20", "01-Apr-20", "02-Apr-20", "03-Apr-20", "04-Apr-20", "05-Apr-20", "06-Apr-20", "07-Apr-20", "08-Apr-20", "09-Apr-20", "10-Apr-20", "11-Apr-20", "12-Apr-20", "13-Apr-20", "14-Apr-20", "15-Apr-20", "16-Apr-20", "17-Apr-20", "18-Apr-20", "19-Apr-20", "20-Apr-20", "21-Apr-20", "22-Apr-20", "23-Apr-20", "24-Apr-20", "25-Apr-20", "26-Apr-20", "27-Apr-20", "28-Apr-20", "29-Apr-20", "30-Apr-20", "01-May-20", "02-May-20", "03-May-20", "04-May-20", "05-May-20", "06-May-20", "07-May-20", "08-May-20", "09-May-20", "10-May-20", "11-May-20", "12-May-20", "13-May-20", "14-May-20"]
        this.stateconfirmednumber=this.props.statecode[0]
        this.stateconfirmednumberdate=this.props.statecode[1]
     
         this.tval=[]
         this.tval=[this.stateconfirmednumber,this.stateconfirmednumberdate,this.props.statecode[2],this.props.statecode[3]]

        let lin
        
    if(this.tval[0]!==undefined  && this.tval[1]!==undefined && this.tval[2]!==undefined && this.tval[3]!==undefined)
    {
        
     lin=(
         <div>
             <StateGraphProj strecover={this.tval}/>
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
        return(
            <div>   
                {bio}

                
                          <Popup
                             trigger={<button className="button"> Open Graph in Seperate Window </button>}
                                    modal
                                 closeOnDocumentClick
                                >
                    <span style={{height:"700px" ,width:"1200px"}}> <StateGraphProj strecover={this.tval}/>
                         </span>
                                    </Popup>
                    
            </div>

        )
            
        
        }
}
export default StatewiseGraphsec