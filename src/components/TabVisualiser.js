import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class TabVisualiser extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() { 
        const { tab, progress, width, height } = this.props;
        
        return (
            <>
                <Typography fontFamily="Monospace" component="h2" variant="body1" gutterBottom><pre>{tab}</pre></Typography>
            </>
        );
    }
}
 
export default TabVisualiser;