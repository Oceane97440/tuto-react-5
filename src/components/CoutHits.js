import React, { Component } from 'react'


//cette class permet d'eviter les doublon de même code , on cré un "super composent"
const CoutHits = (WrappedComponent, powervalue) => {


    class coutHits extends Component {
        constructor(props) {
            super(props);
        }

        state = {
            hits: 0,
            bg:''
        }

        addhit = () => {
            this.setState((prevState) => {
                return {
                    hits: prevState.hits + 1
                }
            })
        }

        addBg = () => {
            this.setState({
                bg:'success'
            })
        }

        //puisuq'il y a un maj du state, on accès à la maj du composent donc methode componentDidUpdate possible
        componentDidUpdate(prevProps,prevState){
            if(this.state !== prevState){
              const compname=  this.props.message;
            
              //passe le param dans app
              this.props.reduceHanler(compname,powervalue)

            }

        }

        render() {
            //permet d'acceder au propos
            return <WrappedComponent addhit={this.addhit} hocState={this.state} {...this.props} addBg={this.addBg} />;
        }
    }

    return coutHits
}




export default CoutHits;
