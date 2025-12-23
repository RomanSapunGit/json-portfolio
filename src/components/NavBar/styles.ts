import {makeStyles, Theme} from '@material-ui/core';

export default makeStyles((theme: Theme) => ({
    root: {
        boxShadow: 'none',
    },
    divider: {
        marginBottom: theme.spacing(5),
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    },

    title: {
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.4rem',
        },
    },
    navLink: {
        textDecoration: 'none',
        borderRadius: theme.spacing(0.5),
        transition: 'background-color 0.2s ease',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    linksContainer: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            justifyContent: 'flex-start',
            marginTop: theme.spacing(1),
        },
    },

    linkText: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        borderRadius: theme.spacing(0.5),
        transition: 'background-color 0.2s ease',

        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },

        '&.selected': {
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            fontWeight: 600,

            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.35)',
            },
        },
    },

    selected: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',   // darker fill
        borderRadius: theme.spacing(0.5),
        '& $linkText': {
            fontWeight: 600,
        },
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
        },
    },
}));