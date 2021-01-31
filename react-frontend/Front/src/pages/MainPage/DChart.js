import React,{Component} from "react";
import Plot from 'react-plotly.js';


class DChart extends Component{
    constructor(props){
        super(props);
        this.state={
            casesChartXValues:[],
            casesChartYValues:[],
            
        }
    }
    componentDidMount(){
        this.fetchCase();
    }
    fetchCase(){
        const pointerToThis=this;
        console.log(pointerToThis)
        let API_Call=`http://localhost:2000/api/lawyer/data/status`;
        let casesChartXValuesFunction=[];
        let casesChartYValuesFunction=[];
        fetch(API_Call).then(function(response){
            return response.json();
        }).then(function(data){

            console.log(data)
            for(var key in data ['dataStatus']){
                casesChartXValuesFunction.push(data['dataStatus'][key]['Caseyear']);

                 casesChartYValuesFunction.push(data['dataStatus'][key]['caseName']);

            }
           // console.log(casesChartYValuesFunction);
           pointerToThis.setState({
               casesChartXValues:casesChartXValuesFunction,
               casesChartYValues:casesChartYValuesFunction
           })
        })
    }
    render(){
        return(
            <div>
                <h1>Case Status</h1>
                <Plot
        data={[
          {
            x: this.state.casesChartXValues,
            y: this.state.casesChartYValues,
            type: 'bar',
           
            marker: {color: 'red'},
          },
         
        ]}
        datatwo={[
            {
              x: this.state.casesChartXValues,
              y: this.state.casesChartYValues,
              type: 'bar',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
           
          ]}
        layout={ {width: 720, height: 440, title: 'Case Status by Year'} }
      />
            </div>
        )
    }
}
export default DChart;








