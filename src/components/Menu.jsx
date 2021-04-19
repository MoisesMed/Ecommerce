import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { withStyles } from '@material-ui/core/styles';
import { useCount } from '../context/Count';


import './Menu.css'

const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 25px ',
        width: '499px',
        height: '620px',
        left: '775px',
        top: '24px',
        border: '1px solid #686868',
        borderRadius: '8px',
        margin: '0px 100px',
    },
    optionsTitle: {
        padding: 0,
        width: '375px',
        height: '800px',
        overflow: 'auto'
    },
    optionsType: {
        width: '340px',
        height: '88px',
        borderBottom: '1px solid #E8A634',
        margin: '10px 10px',
    },
    buttons: {
        width: '89px',
        height: '32px',
        marginLeft: '250px',
        borderRadius: '5px',
        border: '1px solid #F09035',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    }
}));


export default function Menu() {
    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const [um, setUm] = useState(0);
    const [dois, setDois] = useState(0);
    const [tres, setTres] = useState(0);
    const [quatro, setQuatro] = useState(0);
    const [qtd, setQtd] = useState(0);
    const { count, setCount } = useCount();
    const classes = useStyles();

    const GreenRadio = withStyles({
        root: {
            color: '#E8A634',
            '&$checked': {
                color: "#E8A634",
            },
        },
    })((props) => <Radio color="default" {...props} />);

    return (
        <Container className={classes.menu} style={{ marginBottom: 0 }}>
            <div className={classes.optionsTitle}>
                < div style={{ backgroundColor: 'rgba(253, 215, 14, 0.2)', padding: 12, marginTop: 10 }}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>
                        Adicionar Ingredientes
                        </div>
                    <div style={{ fontSize: '12px', fontWeight: 400, color: '#E49700' }}>
                        Até 8 ingredientes
                     </div>
                </div>
                <div className={classes.optionsType}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>Queijo Cheddar</div>
                    <div className={classes.buttons}>
                        <Button onClick={() => setUm(um - 1)}><RemoveIcon style={{ color: '#ED3237' }} /></Button>
                        <div style={{ marginBottom: 3, marginLeft: -10, marginRight: -10 }} >{um}</div>
                        <Button onClick={() => setUm(um + 1)}><AddIcon style={{ color: '#ED3237' }} /></Button>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 400, color: '#F09035' }}>+ R$4,99</div>
                </div>

                <div className={classes.optionsType}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>Cebola crispy</div>
                    <div className={classes.buttons}>
                        <Button onClick={() => setDois(dois - 1)}><RemoveIcon style={{ color: '#ED3237' }} /></Button>
                        <div style={{ marginBottom: 3, marginLeft: -10, marginRight: -10 }} >{dois}</div>
                        <Button onClick={() => setDois(dois + 1)}><AddIcon style={{ color: '#ED3237' }} /></Button>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 400, color: '#F09035' }}>+ R$3,50</div>
                </div>

                <div className={classes.optionsType}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>Molho cheddas</div>
                    <div className={classes.buttons}>
                        <Button onClick={() => setTres(tres - 1)}><RemoveIcon style={{ color: '#ED3237' }} /></Button>
                        <div style={{ marginBottom: 3, marginLeft: -10, marginRight: -10 }} >{tres}</div>
                        <Button onClick={() => setTres(tres + 1)}><AddIcon style={{ color: '#ED3237' }} /></Button>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 400, color: '#F09035' }}>+ R$4,99</div>
                </div>

                <div className={classes.optionsType}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>Molho de picanha</div>
                    <div className={classes.buttons}>
                        <Button onClick={() => setQuatro(quatro - 1)}><RemoveIcon style={{ color: '#ED3237' }} /></Button>
                        <div style={{ marginBottom: 3, marginLeft: -10, marginRight: -10 }} >{quatro}</div>
                        <Button onClick={() => setQuatro(quatro + 1)}><AddIcon style={{ color: '#ED3237' }} /></Button>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 400, color: '#F09035' }}>+ R3,50</div>
                </div>

                < div style={{ backgroundColor: 'rgba(253, 215, 14, 0.2)', padding: 12, marginTop: 10, marginBottom: 10, height: '60px' }}>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>
                        Precisa de talher?
                            </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '2px 12px', marginTop: 7 }}>
                    <div style={{ flex: 1, fontSize: '16px', fontWeight: 400, color: '#4E4E4E' }}>Sim</div>
                    <GreenRadio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                        size="small"
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '2px 12px' }}>
                    <div style={{ flex: 1, fontSize: '16px', fontWeight: 400, color: '#4E4E4E' }}>Não</div>
                    <GreenRadio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                        size="small"
                    />
                </div>

            </div>
            <div style={{ display: 'flex', marginTop: 12, height: '40px', padding: 0 }} >
                <div style={{ width: '140px', border: '1px solid #F09035', borderRadius: '4px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Button onClick={() => setQtd(qtd - 1)}><RemoveIcon style={{ color: '#ED3237' }} /></Button>
                    <div style={{ marginBottom: 3 }} >{qtd}</div>
                    <Button onClick={() => setQtd(qtd + 1)}><AddIcon style={{ color: '#ED3237' }} /></Button>
                </div>
                <div style={{ flex: 1 }}>
                    <Button onClick={() => setCount(count + qtd)} style={{ width: '230px', height: '40px', backgroundColor: '#F09035', color: 'white', marginLeft: 16, fontSize: 14 }}>Adicionar</Button>
                </div>
            </div>
        </Container >

    );

}