import React, { Component } from 'react'
import CoutHits from './CoutHits'
import frieza from './frieza.png'


class Frieza extends Component {

    state = {
        hits: 0,
        bg:''
    }



    addBg = () => {
        this.setState({
            bg:'danger'
        })
    }

    render() {

        if(this.state.bg ==="danger"){
            throw new Error();
        }


        return (
            <div className={`col bg-${this.state.bg}`}>
              <img onClick={this.addBg} src={frieza} style={{ width: '24%' }} />
                <br />
      
            </div>
        )
    }
}

export default Frieza
