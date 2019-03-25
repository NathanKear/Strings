import React, { Component } from 'react';
import TabVisualiser from '../components/TabVisualiser';
import ThreeHoursTab from '../tabs/ThreeHours';

class Practice extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            song: ThreeHoursTab
        }
    }

    render() { 
        const { tab } = this.state.song;

        return ( 
            <>
                <TabVisualiser tab={tab} />
            </>
        );
    }
}
 
export default Practice;