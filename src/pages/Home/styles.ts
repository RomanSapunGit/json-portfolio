import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    pic: {
        width: 300,
        height: 300,
        borderRadius: '50%',
        marginTop: 25,
        marginBottom: 26,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',

        [theme.breakpoints.down('sm')]: {
            width: 200,
            height: 200,
            marginTop: 16,
            marginBottom: 16,
        },

        [theme.breakpoints.down('xs')]: {
            width: 150,
            height: 150,
        },
    },

    codeBlock: {
        fontFamily: '"Fira Code", monospace',
        fontSize: theme.typography.pxToRem(18),
        lineHeight: 1.7,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        marginBottom: theme.spacing(2),

        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            lineHeight: 1.6,
        },

        [theme.breakpoints.down('xs')]: {
            fontSize: '0.85rem',
        },
    },
}));
