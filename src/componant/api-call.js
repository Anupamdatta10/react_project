import react, { Component } from "react";
import "./counter.css";

class getdata extends Component {
  constructor()
  {
      super()
      this.state={
          data:[],
          url:""
      }
      this.showdata = this.showdata.bind(this);
  }
 componentDidMount()
  {
    fetch('https://api.sketchfab.com/v3/search?q=lungs').then((res)=>res.json()).then(json=>{
        this.setState(
            {
                data:json.results.models
            }
        )
    })
  }
 showdata=(e)=>{
    var {data}=this.state
    console.log(e.target.id)
    this.setState(
        {url:data[e.target.id].embedUrl}
    )
  }
  render() {
      var {data}=this.state
      var i=0
    return (<react.Fragment>
     
      <div>
          
              {data.map(item=>(
                <div id={i} key={i++} onClick={this.showdata} >
                    {item.name}
                </div >
              ))}
               <iframe title="frame" src={this.state.url} className="responsive-iframe" id="api-frame" allow="autoplay; fullscreen; vr" allowvr allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
    </react.Fragment>)
  }
}

export default getdata;
