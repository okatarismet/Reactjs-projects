import React,{Component} from 'react';
import image from '../../../assets/image.png'
import locationIcon from '../../../assets/locationIcon.png'
import StarRating from '../../StarRating/StarRating'
import classes from './PreviousRatings.css'
import Element from '../../../containers/ResultPage/Element/Element'
const axios = require('axios');


class PreviousRatings extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [{}],
        open:false
      }
  
      // this.inputChangedHandler = this.inputChangedHandler.bind(this);
  }
 
  getData = async (value) =>{
    let previousRatings = await axios.get("http://localhost:8080/get/ratings/"+this.props.elem.id);
    console.log('----------')
    console.log(previousRatings.data);
    console.log('----------')
    this.setState({data:previousRatings.data, open:true})
  }
    componentDidMount(){
        this.getData()
    }
  render(){
    
    
    

    return <div>
        
               <h2>Previous Ratings</h2>
               { this.state.open ?   <Element type={"forPreviousRatings"} data={this.state.data}/>:null}
                 
             
           </div>
}
}

export default PreviousRatings