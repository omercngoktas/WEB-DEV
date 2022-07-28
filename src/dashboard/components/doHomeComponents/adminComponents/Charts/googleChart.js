import React from 'react';
import { Chart } from "react-google-charts";
import {Dimmer, Segment, Loader} from 'semantic-ui-react';

const GoogleChart = (props) => {
    const arr = [['', props.parameter]];
    props.data.map(item => {
        arr.push(item)
    })
    return props.data !== null ? (
        <Chart
            width={'100%'}
            height={'300px'}
            chartType={props.chartType}
            loader={<Segment><Dimmer active inverted><Loader inverted></Loader></Dimmer></Segment>}
            data={arr}
            options={{
                title: props.name,
                hAxis: { minValue: 0 },
                chartArea: { width: '100%'},
            }}
              
        />
      ) : <Segment><Dimmer active inverted><Loader inverted></Loader></Dimmer></Segment>
}
export default GoogleChart
