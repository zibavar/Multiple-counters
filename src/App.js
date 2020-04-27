import React from 'react'
import { Button,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'


class App extends React.Component {
  constructor(props){

    super(props)
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.increament1 = this.increament1.bind(this)
    this.increament3 = this.increament3.bind(this)
    this.decreament = this.decreament.bind(this)
    this.reset = this.reset.bind(this)
    this.state = {
        counter1:'',
        counter2:'',
        counter3:'',
        inputValue: '',
        value :'',
    }
}
updateInputValue(event){
    this.setState({
       inputValue : event.target.value,
       value:0
    })
    }
   
    handleSubmit(event){
      event.preventDefault();
      this.setState(()=>{
          return {
            value :Number(this.state.inputValue),
            counter1:0,counter2:0,counter3:0
          }
      })
    }

increament1(){
    this.setState((prevstate) => {
          return{
            counter1 :prevstate.value*1,
      }
    })
  
}
increament3(){
    this.setState((prevstate) => {
          return{
             counter2 : prevstate.value *3,
       }
    })
  
}
decreament(){
    this.setState((prevstate) => {
          return{
             counter3 : prevstate.value *(-2.6)*10/10,
     }
     })
}
reset(){
    this.setState((prevstate) => {
        return{
         value : 0,counter1:0,counter2:0,counter3:0
        }
     })
}
render(){
    return(
        <div>
  <div className="container">
  <div className="row mt-5">
  <div className="col-sm-12 Header"><h1>Multiple counters</h1></div>
    </div>
  <div className="row mt-5 form">
       <FormControl  className="col-sm-7" placeholder="Step" value={this.state.inputValue} onChange={this.updateInputValue}/>
      <div className="col-sm-1"></div>
       <Button  className="col-sm-2 secondary" variant="secondary" size="lg"  onClick ={this.handleSubmit}>Add counter </Button >
       <Button className="col-sm-2" variant="warning" size="lg" onClick={this.reset}>reset</Button>
       <p>This only accept number like 1,2,-5,3.8</p>
    </div>
  
    <div className="row mt-5 form">
        <div className="col-lg-4 mb-4 grid-margin">
          <div className="card h-100">
              <h4 className="card-header">step:{this.state.value}</h4>
              <div className="card-body">
                <p className="card-text p">{this.state.counter1}</p>
              </div>
              <div className="card-footer center">
                <Button className="btn1" variant="btn btn-info" onClick={this.increament1} >run</Button>
              </div>
          </div>
        </div>
        
        
        <div className="col-lg-4 mb-4 grid-margin">
          <div className="card h-100">
              <h4 className="card-header">step:{this.state.value}</h4>
              <div className="card-body">
                <p className="card-text p">{this.state.counter2}</p>
              </div>
              <div className="card-footer center">
                <Button className="btn1" variant="btn btn-info"onClick={this.increament3} >run</Button>
              </div>
          </div>
        </div>
      
        <div className="col-lg-4 mb-4 grid-margin">
        <div className="card h-100">
              <h4 className="card-header">step:{this.state.value}</h4>
              <div className="card-body">
                <p className="card-text p">{this.state.counter3}</p>
              </div>
              <div className="card-footer center">
                <Button className="btn1" variant="btn btn-info"onClick={this.decreament} >run</Button>
              </div>
          </div>
        </div>
      
        </div>
        </div>
    </div>

    ); 
}
}
export default App;