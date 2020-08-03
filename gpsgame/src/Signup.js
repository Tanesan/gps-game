import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import './App.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form, Field } from "formik";

axios.defaults.withCredentials = true; 

  export default class Signin extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email : '',
      password: '',
      email_error_text: null,
      password_error_text: null,
      disabled: true,
      email_error: false,
      pass_error: false
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
  };


  validateEmail(value) {
    let error;
    
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Invalid email address";
    }
    
    return error;
  }


  isDisabled() {
    let emailIsValid = false;
    let passwordIsValid = false;

    if (this.state.email === "") {
        this.setState({
            email_error_text: "メールアドレスを入力してください",
            email_error:true
        });
    } else {
        if (this.validateEmail(this.state.email)) {
            emailIsValid = true
            this.setState({
                email_error_text: "Sorry, this is not a valid email",
                email_error:true
            });
        } else {
            this.setState({
                email_error_text: null,
                email_error:false
            });
        }
    }

    if (this.state.password === "" || !this.state.password) {
        this.setState({
            password_error_text: null,
            pass_error:false
        });
    } else {
        if (this.state.password.length >= 6) {
            passwordIsValid = true;
            this.setState({
                password_error_text: null,
                pass_error:false
            });
        } else {
            this.setState({
                password_error_text: "Your password must be at least 6 characters",
                pass_error:true
            });
        }
    }

    if (emailIsValid && passwordIsValid) {
        this.setState({
            disabled: false
        });
    }
}

changeValue(e, type) {
    const value = e.target.value;
    const nextState = {};
    nextState[type] = value;
    this.setState(nextState, () => {
        this.isDisabled()
    });
}

//バックエンド　json 受け渡し
/*
    authPost = () => {
      //alert(this.state.email_error_text);
      //alert('A name was submitted: ' + this.state.remenber);
      //受け取り側が素のPHP($_POST['']なのでstringifyする)
      //Laravelとかならいらない
     // var qs = require('qs');
      axios
        .post('http://127.0.0.1:5000/auth/api/signup', {name: this.state.name,  email: this.state.email, password: this.state.password})
        .then((res) => {
          if(res.data.auth){
            alert('アカウント作成完了');
         //   alert(res.data.auth);
          }else{
           // alert(res.data.auth);
            alert('すでにメールアドレスが登録されています。');
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
  let {open, email, password, email_error_text, password_error_text, disabled} = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.classes.paper}>
        <div className='mt-10'>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          </div>
          <form className={this.classes.form} onSubmit={() => this.authPost(this.state.email, this.state.password, this.state.name)}
          >
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              type="text"
              label="UserName"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              autoComplete="name"
            //  rules={{ required: true , maxLength: 20 ,pattern: /^[A-Za-z]+$/i }}
              autoFocus
              maxLength = "10"
              pattern =  "/^[A-Za-z]+$/i+"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              error={this.state.email_error}
              helperText={this.state.email_error_text}
              onChange={e => this.changeValue(e, 'email')} 
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
              error={this.state.pass_error}
              helperText={this.state.password_error_text}
              value={this.state.password}
              onChange={e => this.changeValue(e, 'password')} 
              autoComplete="current-password"
              rules={{ required: true  }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
            >
              Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
            >
              FaceBook
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.classes.submit}
            >
              Apple
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
