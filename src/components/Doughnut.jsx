import React from 'react';
import {Doughnut} from 'react-chartjs-2';



export default class DoughnutChart extends React.Component{

  constructor(props){
    super(props);

    this.state={
      chartData : {}
    };
  }

  componentWillMount(props){

    this.getData();
  
  }

  componentDidUpdate(){
    this.getData();
  }

  getData(){

    //TODO : Inject AJAX here..

    this.setState (()=>
      (
        {
          chartData : {
            labels: [
              'Workflow A',
              'Workflow B',
              'Workflow C'
            ],
            datasets: [{
              data: [this.props.value1,this.props.value2,this.props.value3],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ],
              hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
              ]
            }],
            options : {
              maintainAspectRatio: false,
            }
          }
        }
      )
    );

  }
  render(){


    return (
      <div>

        <Doughnut 
          data={this.state.chartData}
          options={
            {
              title : {
                display : true,
                text : 'View of Workflows Performed in 2018',
                fontSize : 25
              },
              legend : {
                display : true,
                position : 'right'
              },
              maintainAspectRatio : false
            }
          } 

          height = {600}
          width = {500}
            
            
        />
      </div>
    );
  }


}