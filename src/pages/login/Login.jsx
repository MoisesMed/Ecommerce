import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';



const useStyles = makeStyles((theme) => ({
    paper: {
        color: '#ED3237',
        borderRadius: 10,
        backgroundColor: '#F4F4F4',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: '11vh',
    },
    avatar: {
        color: '#ED3237',
        marginTop: 15,
        padding: 5,
        fontSize: 50
    },
    form: {
        borderRadius: 20,
        padding: 15,
        backgroundColor: 'white',
        marginTop: 0,
        width: "100%", // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        backgroundColor: '#F09035',
    },
    principal: {

    },
    forgot: {
        color: '#F09035'
    }
}));

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.principal}>
            <br></br>
            <br></br>
            <br></br>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <AccountCircleOutlinedIcon fontSize="50px" className={classes.avatar} />
                    <Typography component="h1" variant="h5">
                        Entrar
                </Typography>
                    <form noValidate>
                        <TextField
                            className="forma"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Endereço de email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            className="forma"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Lembrar"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Entrar
                        </Button>
                        <Grid container className={classes.forgot}>
                            <Grid item xs >
                                <Link href="/home" variant="body2" className={classes.forgot}>
                                    Esqueceu a senha?
                                 </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/home" variant="body2" className={classes.forgot}>
                                    {"Não tem conta? Se registre!"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
}