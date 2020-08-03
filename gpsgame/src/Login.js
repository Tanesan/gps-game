import React　from 'react';
import './App.css';
import axios from 'axios';
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



  export default class Signin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password: '',
      remenber: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }



  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }
//バックエンド　json 受け渡し
/*
    authPost = () => {
      //alert('A name was submitted: ' + this.state.remenber);
      //受け取り側が素のPHP($_POST['']なのでstringifyする)
      //Laravelとかならいらない
      //var qs = require('qs');
      axios
        .post('http://127.0.0.1:5000/auth/api',{email: this.state.email, password: this.state.password, remenber: this.state.remenber})
        .then((res) => { 
          if(res.data.auth){
            alert('認証OK');
            alert(res.data.auth);
          }else{
            alert(res.data.auth);
            alert('認証NG');
          }
        })
        .catch(error => alert(error));
    }
*/
  classes = makeStyles((theme) => ({
      paper: {
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
  
  
    //classes = useStyles();

render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.classes.paper}>
        <div className='mt-10'>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          </div>
          <form className={this.classes.form} noValidate onSubmit={() => this.authPost(this.state.email, this.state.password, this.state.remenber)}>            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              name="remenber"
              label="remenber"
              type="remenber"
              id="remenber"
              label="Remember me"
              value={this.state.remenber}
              onChange={this.handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
            //　onClick={() => this.handleSubmit()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}