import React, {Component} from 'react';

class CandleStick extends Component{
    constructor(props){
        super(props);
        this.serverUrl = 'https://www.fxempire.com/api/v1/en/markets/eur-usd/chart?time=';
        this.container = React.createRef();
        this.createChart = this.createChart.bind(this);
        this.onSuccessGetDataChart = this.onSuccessGetDataChart.bind(this);
    }
    
    componentDidMount(){
        fetch(this.serverUrl + this.props.periodTime)
        .then(response => response.json())
        .then(data => this.onSuccessGetDataChart( data ))
        .catch(err => console.log(err));
    }

    onSuccessGetDataChart(pData){
        //convert object to array
        pData.forEach((obj, index )=>{
            pData[index] = Object.values(obj);
        });

        pData.sort((a,b) => {return a[0] - b[0]});
        this.createChart(pData);
    }

    createChart(pDataPoints){
    window.Highcharts.stockChart( this.container.current , {
        title: {
            text: 'EUR/USD Market Chart'
        },
        series: [{
            type: 'candlestick',
            name: 'EUR/USD',
            data: pDataPoints
        }]
    });
    }

    
render() {    
    return (
      <div ref={this.container}>
      </div>
    ); 
    }
}

export default CandleStick;