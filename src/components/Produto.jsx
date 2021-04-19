// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import hamburguer from '../../components/assets/img/hamburguer.png'
// import Menu from '../../components/Menu'

// const useStyles = makeStyles((theme) => ({
//     produto: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: '24px',
//         marginLeft: '64px'
//     },
//     img: {
//         marginTop: '12px',
//         margin: '24px 0px'
//     },
//     title: {
//         fontSize: 28,
//         fontWeight: 500,
//         color: '#4E4E4E',
//         padding: '15px 0px'
//     },
//     description: {
//         fontSize: 20,
//         fontWeight: 400,
//         color: '#4E4E4E',
//         margin: '24px 0px'
//     },
//     price: {
//         fontSize: '32px',
//         fontWeight: 400,
//         margin: '24px 0px',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 0
//     },
//     menu: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '24px 12px',
//         width: '439px',
//         left: '775px',
//         top: '24px',
//         border: '1px solid #686868',
//         borderRadius: '8px',
//         margin: '0px 100px',
//     },
//     optionsTitle: {
//         padding: 0,
//         width: '375px',
//         height: '55px',

//     },
//     optionsType: {
//         width: '340px',
//         height: '88px',
//         borderBottom: '1px solid #E8A634',
//         margin: '10px 10px',
//     },
//     buttons: {
//         width: '89px',
//         height: '32px',
//         marginLeft: '250px',
//         borderRadius: '5px',
//         border: '1px solid #F09035',
//         alignItems: 'center',
//         justifyContent: 'center',
//         display: 'flex'
//     }
// }));

// export default function Produto() {
//     const classes = useStyles();

//     return (
//         <Container maxWidth="false" style={{ display: 'flex', marginTop: '28px' }}>
//             <Container className={classes.produto}>
//                 <div className={classes.img}>
//                     <img src={hamburguer} />
//                 </div>
//                 <div className={classes.title}>
//                     Oferta Picanha Cheddar Bacon
//                 </div>
//                 <div className={classes.description}>
//                     Hambúrguer de picanha, molho de picanha, cebola crispy,
//                     bacon, queijo cheddar, molho cheddar e pão mix de gergelim
//                 </div>
//                 <div className={classes.price}>
//                     <div style={{ color: '#DC6E05' }}>R$31,99</div>
//                     <div style={{ textDecoration: 'line-through', margin: '0px 17px' }}>R$34,95</div>
//                 </div>
//             </Container>
//             <Container className={classes.menu} >
//                 <Container >
//                     <div className={classes.optionsTitle}>
//                         < div style={{ backgroundColor: 'rgba(253, 215, 14, 0.2)', padding: 12, marginTop: 10 }}>
//                             <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>
//                                 Adicionar Ingredientes
//                         </div>
//                             <div style={{ fontSize: '12px', fontWeight: 400, color: '#E49700' }}>
//                                 Até 8 ingredientes
//                         </div>
//                         </div>


//                         <div className={classes.optionsType}>
//                             <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>Queijo Cheddar</div>
//                             <div className={classes.buttons}>+ 2 -</div>
//                             <div style={{ fontSize: '14px', fontWeight: 400, color: '#F09035' }}>+ R$4,99</div>
//                         </div>

//                         <div className={classes.optionsType}>
//                             <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>Cebola crispy</div>
//                             <div className={classes.buttons}>+ 2 -</div>
//                             <div style={{ fontSize: '14px', fontWeight: 400, color: '#F09035' }}>+ R$3,50</div>
//                         </div>

//                         <div className={classes.optionsType}>
//                             <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>Molho cheddas</div>
//                             <div className={classes.buttons}>+ 2 -</div>
//                             <div style={{ fontSize: '14px', fontWeight: 400, color: '#F09035' }}>+ R$4,99</div>
//                         </div>

//                         <div className={classes.optionsType}>
//                             <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>Molho de picanha</div>
//                             <div className={classes.buttons}>+ 2 -</div>
//                             <div style={{ fontSize: '14px', fontWeight: 400, color: '#F09035' }}>+ R3,50</div>
//                         </div>

//                         < div style={{ backgroundColor: 'rgba(253, 215, 14, 0.2)', padding: 12, marginTop: 10 }}>
//                             <div style={{ fontSize: '14px', fontWeight: 500, color: '#4E4E4E' }}>
//                                 Precisa de talher?
//                             </div>
//                         </div>
//                         <Container style={{ display: 'flex', marginTop: 12, height: '40px', padding: 0, }} >
//                             <div style={{ width: '140px', border: '1px solid #F09035', borderRadius: '4px', padding: 7 }}>
//                                 ola
//                             </div>

//                             <div tyle={{ flex: 1 }}>
//                                 <Button onClick={() => setCount(count + 1)} style={{ width: '230px', height: '40px', backgroundColor: '#F09035', color: 'white', marginLeft: 16, fontSize: 14 }}>Adicionar</Button>
//                             </div>
//                         </Container>
//                     </div>
//                 </Container>
//             </Container>
//         </Container >

//     );

// }