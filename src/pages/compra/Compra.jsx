import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import hamburguer from '../../components/assets/img/hamburguer.png'

import Menu from '../../components/Menu'

const useStyles = makeStyles((theme) => ({
    produto: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '24px',
        marginLeft: '64px',
        paddingBottom: '10px'
    },
    title: {
        fontSize: 28,
        fontWeight: 500,
        color: '#4E4E4E',
        padding: '15px 0px'
    },
    description: {
        fontSize: 20,
        fontWeight: 400,
        color: '#4E4E4E',
        margin: '24px 0px'
    },
    price: {
        fontSize: '32px',
        fontWeight: 400,
        margin: '24px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0
    }
}));

export default function Produto() {
    const classes = useStyles();

    return (
        <div maxWidth="false" style={{ display: 'flex', marginTop: '28px', marginBottom: '22px' }}>
            <div className={classes.produto}>
                <div className={classes.img}>
                    <img src={hamburguer} />
                </div>
                <div className={classes.title}>
                    Oferta Picanha Cheddar Bacon
                </div>
                <div className={classes.description}>
                    Hambúrguer de picanha, molho de picanha, cebola crispy,
                    bacon, queijo cheddar, molho cheddar e pão mix de gergelim
                </div>
                <div className={classes.price}>
                    <div style={{ color: '#DC6E05' }}>R$31,99</div>
                    <div style={{ textDecoration: 'line-through', margin: '0px 17px' }}>R$34,95</div>
                </div>
            </div>
            <Menu />
        </div >
    );

}