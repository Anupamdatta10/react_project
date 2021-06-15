import react, { Component } from "react";
import "./counter.css";
//import FormDialog from './input-modal.js'
import  TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
//import MenuItem from '@material-ui/core/MenuItem';
class getdata extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      url: "",
      inputValue: ""
   
    };
    this.showdata = this.showdata.bind(this);
    this.apicall = this.apicall.bind(this);
    // this.updateInputValue=this.updateInputValue(this);
  }

 
  apicall() {
    let { inputValue } = this.state;
    //if(inputValue!==""){
    fetch("https://api.sketchfab.com/v3/search?q=" + inputValue)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json.results.models,
        });
      });
    //}
  }
  showdata = (e) => {
    var { data } = this.state;
    console.log(e.target.value);
    if(e.target.value!=="")
    this.setState({ url: data[e.target.value].embedUrl });
    else
    this.setState({ url:"" });
  };
  updateInputValue = (ev) => {
    this.setState({
      inputValue: ev.target.value,
    });
   
  };
  
  render() {
    var { data } = this.state;
    var i = 0;
   
    return (
     
      <react.Fragment>
        
        <TextField
          id="outlined-basic"
         
          variant="outlined" 
          label="searech 3d model" 
        onChange={this.updateInputValue}
        />
        <Button variant="contained" color="primary" onClick={this.apicall}>
          search
        </Button>
        
        
       
        <NativeSelect onChange={this.showdata}>
         <option value="">select one</option>
          {data.map((item) => (
            <option value={i} key={i++}  >
              {item.name}
        </option>
          ))}
          </NativeSelect>
        
        <div className="responsive-iframe" >
          
        <iframe
           
            title="frame"
            src={this.state.url}
            className="responsive-iframe"
            id="api-frame"
            allow="autoplay; fullscreen; vr"
            allowvr
            allowFullScreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          
          </div>
      </react.Fragment>
    );
  }
}

export default getdata;
/* 
 
*/