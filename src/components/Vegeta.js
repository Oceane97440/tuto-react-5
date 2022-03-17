import React, { Component } from 'react'
import CoutHits from './CoutHits'
import vegeta from './vegeta.png'
import rip from './rip.png'


class Vegeta extends Component {


    render() {
        //on accède au propos du super composent CoutHits on eviter de répéter 2 fois les même fonctio
        //destruturing  equivalent this.propos.message ect...
        const { message, addhit, hocState, life,addBg } = this.props

        const lifeValue = life > 0 ? (<td>{life}% </td>) : (<td> Dead</td>);
        const lifeImg = life > 0 ? ( <img onClick={addBg} src={vegeta} style={{ width: '20%' }} />) : ( <img src={rip} style={{ width: '91%' }} />);
        const boutton =  life > 0 ? (<button onClick={addhit} className='btn btn-danger m-2'>{message} à Tapper</button>) : (<button className='btn btn-danger m-2' disabled>{message}Dead</button>);

        return (
            <div className={`col bg-${hocState.bg}`}>
                {lifeImg}
               <br />
               {boutton}

                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Coup</th>
                            <th scope='col'>Vie</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {hocState.hits}
                            </td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CoutHits(Vegeta, 10)
