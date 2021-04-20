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
        padding: '20px 25px ',
        width: '499px',
        height: '620px',
        left: '775px',
        top: '24px',
        border: '1px solid #686868',
        borderRadius: '8px',
        margin: '0px 100px',
        '@media (max-width:350px)': {
            border: '0px solid #686868',
        }
    },
    optionsTitle: {
        padding: 0,
        width: '375px',
        height: '800px',
        overflow: 'hidden',
        '@media (max-width:350px)': {
            overflow: 'visible',
            width: '520px'
        }
    },
    optionsType: {
        width: '340px',
        height: '88px',
        borderBottom: '1px solid #E8A634',
        margin: '10px 10px',
        overflow: 'hidden',
        '@media (max-width:350px)': {
            width: '500px'
        }
    },
    ingre: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#4E4E4E',
        '@media (max-width:350px)': {
            fontSize: 17
        }
    },
    ingrePrice: {
        fontSize: '12px',
        fontWeight: 400,
        color: '#E49700',
        '@media (max-width:350px)': {
            fontSize: 13
        }
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
        '@media (max-width:350px)': {
            height: "36",
            width: '95px',
            marginLeft: 380
        }
    },
    menuTitle: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#4E4E4E',
        '@media (max-width:350px)': {
            fontSize: 17
        }
    },
    menuPrice: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#F09035',
        '@media (max-width:350px)': {
            fontSize: 17
        }
    },
    talher: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#4E4E4E',
        '@media (max-width:350px)': {
            fontSize: 17
        }
    },
    num: {
        marginBottom: 3,
        marginLeft: -10,
        marginRight: -10
    },
    numInv: {
        marginBottom: 3,
        marginLeft: -10,
        marginRight: -10,
        visibility: 'hidden'
    },
    butInv: {
        visibility: 'hidden'
    },
    buttonsInv: {
        width: '89px',
        height: '32px',
        marginLeft: '250px',
        borderRadius: '5px',
        border: '0px solid #F09035',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        '@media (max-width:350px)': {
            height: "36",
            width: '95px',
            marginLeft: 380
        }
    },
    iconsRed: {
        color: '#ED3237'
    },
    carBut: {
        width: '140px',
        border: '1px solid #F09035',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '@media (max-width:350px)': {
            width: '200px',
            height: '50px',
            fontSize: '20px'
        }
    },
    butAdd: {
        width: '220px',
        height: '40px',
        backgroundColor: '#F09035',
        color: 'white',
        marginLeft: 16,
        fontSize: 14,
        '@media (max-width:350px)': {
            width: '300px',
            height: '50px',
            fontSize: '16px'
        }
    },
    butOpt: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 12px'
    },
    butRadio: {
        flex: 1,
        fontSize: '16px',
        fontWeight: 400,
        color: '#4E4E4E',
        '@media (max-width:350px)': {
            fontSize: 17
        }
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
    const [qtd, setQtd] = useState(1);
    const { count, setCount } = useCount(0);
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
                    <div className={classes.ingre}>
                        Adicionar Ingredientes
                        </div>
                    <div className={classes.ingrePrice}>
                        Até 8 ingredientes
                     </div>
                </div>
                <div className={classes.optionsType}>
                    <div className={classes.menuTitle}>Queijo Cheddar</div>
                    {um > 0 ? (<div className={classes.buttons}>
                        <Button onClick={() => setUm(um - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                        <div className={classes.num}>{um}</div>
                        <Button onClick={() => setUm(um + 1)}><AddIcon className={classes.iconsRed} /></Button>
                    </div>)
                        :
                        (<div className={classes.buttonsInv}>
                            <Button className={classes.butInv} onClick={() => setUm(quatro - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                            <div className={classes.numInv} >{um}</div>
                            <Button onClick={() => setUm(um + 1)}><AddIcon className={classes.iconsRed} /></Button>
                        </div>)}
                    <div className={classes.menuPrice}>+ R$4,99</div>
                </div>

                <div className={classes.optionsType}>
                    <div className={classes.menuTitle}>Cebola crispy</div>
                    {dois > 0 ? (<div className={classes.buttons}>
                        <Button onClick={() => setDois(dois - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                        <div className={classes.num}>{dois}</div>
                        <Button onClick={() => setDois(dois + 1)}><AddIcon className={classes.iconsRed} /></Button>
                    </div>)
                        :
                        (<div className={classes.buttonsInv}>
                            <Button className={classes.butInv} onClick={() => setDois(quatro - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                            <div className={classes.numInv} >{dois}</div>
                            <Button onClick={() => setDois(dois + 1)}><AddIcon className={classes.iconsRed} /></Button>
                        </div>)}
                    <div className={classes.menuPrice}>+ R$1,50</div>
                </div>

                <div className={classes.optionsType}>
                    <div className={classes.menuTitle}>Molho cheddar</div>
                    {tres > 0 ? (<div className={classes.buttons}>
                        <Button onClick={() => setTres(tres - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                        <div className={classes.num}>{tres}</div>
                        <Button onClick={() => setTres(tres + 1)}><AddIcon className={classes.iconsRed} /></Button>
                    </div>)
                        :
                        (<div className={classes.buttonsInv}>
                            <Button className={classes.butInv} onClick={() => setTres(tres - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                            <div className={classes.numInv} >{tres}</div>
                            <Button onClick={() => setTres(tres + 1)}><AddIcon className={classes.iconsRed} /></Button>
                        </div>)}
                    <div className={classes.menuPrice}>+ R$3,50</div>
                </div>
                <div className={classes.optionsType}>
                    <div className={classes.menuTitle}>Molho de picanha</div>
                    {quatro > 0 ? (<div className={classes.buttons}>
                        <Button onClick={() => setQuatro(quatro - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                        <div className={classes.num}>{quatro}</div>
                        <Button onClick={() => setQuatro(quatro + 1)}><AddIcon className={classes.iconsRed} /></Button>
                    </div>)
                        :
                        (<div className={classes.buttonsInv}>
                            <Button className={classes.butInv} onClick={() => setQuatro(quatro - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                            <div className={classes.numInv} >{quatro}</div>
                            <Button onClick={() => setQuatro(quatro + 1)}><AddIcon className={classes.iconsRed} /></Button>
                        </div>)}
                    <div className={classes.menuPrice}>+ R$1,50</div>
                </div>
                < div style={{ backgroundColor: 'rgba(253, 215, 14, 0.2)', padding: 12, marginTop: 10, marginBottom: 10, height: '60px' }}>
                    <div className={classes.talher}>
                        Precisa de talher?
                            </div>
                </div>
                <div className={classes.butOpt}>
                    <div className={classes.butRadio}> Sim</div>
                    <GreenRadio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'B' }}
                        size="small"
                    />
                </div>
                <div className={classes.butOpt}>
                    <div className={classes.butRadio}>Não</div>
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
                <div className={classes.carBut}>
                    <Button onClick={() => setQtd(qtd - 1)}><RemoveIcon className={classes.iconsRed} /></Button>
                    <div style={{ marginBottom: 3 }} >{qtd}</div>
                    <Button onClick={() => setQtd(qtd + 1)}><AddIcon className={classes.iconsRed} /></Button>
                </div>
                <div style={{ flex: 1 }}>
                    <Button className={classes.butAdd} onClick={() => setCount(count + qtd)} >Adicionar</Button>
                </div>
            </div>
        </Container >

    );

}