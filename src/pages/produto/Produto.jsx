import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import hamburguer from '../../components/assets/img/hamburguer.png'

const useStyles = makeStyles((theme) => ({

}));

export default function Produto() {
    const classes = useStyles();

    return (
        <Container maxWidth="xl" style={{ display: 'flex' }}>
            <Container maxWidth="md">
                <div>
                    <img src="hamburguer" />
                </div>
            </Container>
            <Container maxWidth="md">
                <div>oi1</div>
            </Container>
        </Container>

    );

}