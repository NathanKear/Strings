import React, { Component } from 'react';
import TabVisualiser from '../components/TabVisualiser';
import ThreeHoursTab from '../tabs/ThreeHours';
import Slider from '@material-ui/core/Slider';


class Practice extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            song: ThreeHoursTab,
            progress: 0
        }
    }

    handleProgressSliderChange = (event, value) => {
        console.log('slider', value);
        this.setState({ progress: value });
    };

    render() { 
        const { song, progress } = this.state;

        return ( 
            <>
                <TabVisualiser tab={song.tab} />
                <Slider
                    value={progress}
                    min={0}
                    max={1}
                    onChange={this.handleProgressSliderChange}
                />
            </>
        );
    }
}
 
export default Practice;