import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { useCount, usePop } from '../context/Count';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(0.5),
        color: 'red',
        fontSize: 15,
        fontWeight: 700,
        padding: 8,
        '@media (max-width:500px)': {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '0px'
        }
    },
    title: {
        padding: theme.spacing(1),
        backgroundColor: '#F09035',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        fontSize: 18,
        padding: 10,
        marginRight: 5,
        marginLeft: -10,
        fontWeight: 700,
        width: '100%',
        '@media (max-width:500px)': {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '-10px'
        }

    },
    pop: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginLeft: '79%',
        marginTop: '2%',
        '@media (max-width:500px)': {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '55%',
            marginTop: 80,
        }
    },
    ingre: {
        margin: '0px 50px',
        marginTop: -10,
        fontSize: 13,
        padding: '10px 0px',
        '@media (max-width:500px)': {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '30px'
        }
    },

}));

export default function SimplePopover() {
    const { count, setCount } = useCount(0);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { pop, setPop } = usePop(1)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };

    const handleClose = () => {
        setPop(0)
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Popover
                className={classes.pop}
                id={id}
                open={count > 0 && pop >= 1 ? true : false}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'end',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'end',
                }}
            >
                <Typography className={classes.title}>Adicionado com sucesso</Typography>
                <Typography className={classes.typography}>Oferta Cheddar Bacon :</Typography>
                <ul className={classes.ingre} type="oi">
                    <li>1 Carne 250gr</li>
                    <li>2 Queijo Cheddar</li>
                    <li>1 Bacon</li>
                    <li>Molho Especial</li>
                </ul>
            </Popover>
        </div >
    );
}