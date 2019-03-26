import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const StyledTypography = withStyles({
    root: {
        fontFamily: '"Roboto Mono", "Lucida Console", monospace',
        whiteSpace: 'pre',
        fontSize: '1.6rem',
        lineHeight: '1.2em',
    },
})(Typography);

export default function MonospacedPreformattedText({ children }) {
    return <StyledTypography>{children}</StyledTypography>;
}