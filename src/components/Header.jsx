import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo_direita from './assets/img/logo_direita.png'
import logo_esquerda from './assets/img/logo_esquerda.png'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

import { useCount } from '../context/Count';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Popover from './Popover'

import './Header.css'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F4F4F4',
        padding: '0px 20px 0px 20px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '@media (max-width:500px)': {
            width: '560px',
            justifyContent: 'center',
        }

    },
    logo: {
        display: 'flex',
        marginRight: 50
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        '@media (max-width:500px)': {
            display: 'none',
            width: '0%'
        }
    },
    button: {
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        margin: '0px 16px',
        justifyContent: 'center'
    },
    input: {
        border: '1 px solid red',
        padding: 10,
        fontSize: 15,
        borderRadius: '4px',
        color: 'red'
    },
    arrow: {
        display: 'none',
        '@media (max-width:500px)': {
            display: 'flex',
            color: '#686868',
            alignItems: 'center',
            marginRight: '500px'
        }
    }
}));

export default function Header() {
    const { count } = useCount();

    const classes = useStyles();
    const enderecos = [
        { title: 'R. Antonio Braune, 222' },
        { title: 'R. Augusta, 254' },
    ];


    return (
        <div className={classes.root} >
            <div >
                <a className={classes.arrow} href="/home"><ArrowBackIosIcon /> </a>
            </div>
            <div className={classes.logo} style={{ position: 'absolute' }}>
                <a href="/home"><img src={logo_esquerda} /></a>
                <a href="/home"><img src={logo_direita} /></a>
            </div>
            <div class="root1" className={classes.buttons}>
                <div className={classes.button}>
                    <Autocomplete
                        className="entrega"
                        style={{ backgroundColor: 'white', width: 230, border: '1px solid white', borderRadius: '4px' }}
                        id="combo-box-demo"
                        options={enderecos}
                        getOptionLabel={(option) => option.title}
                        closeIcon={false}
                        renderInput={(params) => <TextField {...params} label="Entrega:" variant="standard" />}

                    />
                </div>
                <div className={classes.input} >
                    <input type="search" placeHolder="Busque por estabelecimentos ou produtos" outline="none" className={classes.input}></input>
                </div >
                <div className={classes.button}>
                    <AccountCircleOutlinedIcon fontSize="50px" style={{ color: 'red', fontSize: 28 }} />
                    <Button style={{ color: 'red', fontSize: 12 }} href="/home">Entrar</Button>
                </div>
                <div className={classes.button}>
                    <ShoppingCartOutlinedIcon style={{ color: 'red', fontSize: 28, marginRight: 0, margin: 0 }} />

                    <Popover></Popover>
                    <div style={{ backgroundColor: '#F09035', borderRadius: '50%', widht: '50%', height: '50%', marginRight: '0px', marginBottom: '30px', marginLeft: '0px', padding: 1, paddingLeft: 8, paddingRight: 8 }}>{count}</div>
                    <Button style={{ color: 'red', fontSize: 12 }}>Carrinho</Button>
                </div>
            </div >
        </div >
    );
}