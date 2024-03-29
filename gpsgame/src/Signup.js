import React　from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


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
        marginTop: '10rem',
       display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        marginBottom: '8rem',
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
  
  
    //classes = useStyles();

render() {
    return (
      <Container className="backcolor" component="main" maxWidth="md">
      <Box mt="5rem" display={{ xs: 'block', sm: 'none' }}>
      </Box>
      <Box mt="8rem" display={{ xs: 'none', sm: 'block' }}>
        </Box>
 <Grid container className="formchoice">
   <Grid item xs={12} md={6} lg={6}>
     </Grid>
   <Grid item xs={12} md={5} lg={4}>
      <CssBaseline />
      <Box boxShadow={3} borderRadius="5%" className="zindex100">
        <Box px="2rem" py="1rem">
      <div className={this.classes.paper}>
      <div>
        <Box mt="1rem" fontWeight={900}>
        <Typography component="h1" variant="h5">
          サインアップ
        </Typography>
        </Box>
        </div>
          <Box mt="1rem">
              アカウントがある方は
                <Link href="/login" variant="body2">
                 ログイン
                </Link>
                をお願いします。
            </Box>
          <form className={this.classes.form} noValidate onSubmit={() => this.authPost(this.state.email, this.state.password, this.state.remenber)}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ユーザー名"
              name="username"
              value={this.state.name}
              onChange={this.handleInputChange}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="電子メールアドレス"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              autoComplete="current-password"
            />
            <Box mt="2rem">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
            //　onClick={() => this.handleSubmit()}
            >
              Sign Up
            </Button>
          </Box>
           
            <Box my="2rem" color="grey" fontSize={8}>
            reCAPTCHA によって保護され、Google のプライバシーポリシーと利用規約に従って提供されます。
            </Box>
          </form>
        </div>
        </Box>
        </Box>
        </Grid>
        </Grid>
      </Container>
    );
  }
}