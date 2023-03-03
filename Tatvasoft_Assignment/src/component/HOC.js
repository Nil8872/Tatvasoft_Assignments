import React, {Component} from "react";

 

const Hoc = (OriginalComponent, data) => {

    
    
    class WithData extends Component {
      render() {
        return (
          <OriginalComponent data={data}/>
        )
      }
    }

    
    
    return WithData
    
}

export default Hoc
