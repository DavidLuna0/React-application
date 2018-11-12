import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

// import { Container } from './styles';

export default class Login extends Component {
    state = {
        username: ""
    };

    handleSubmit = e => {
        // evita comportamento padrão do form
        e.preventDefault();
        const { username } = this.state;
        if(!username.length) return;
        localStorage.setItem('@GoTwitter:username', username);
        this.props.history.push('/timeline');

    }


    /*Criada com arrow function. toda função criada que 
    nao é padrão do react
    é criada como arrow function pra n perder o escopo da classe
    pra que o this seja sempre referenciado a classe */

    handleInputChange = e => {
        //pegar o texto que esta sendo digitado no input
        this.setState({ username:  e.target.value });
    }
    render() {
        return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt="GoTwitter"/>
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder="Nome de Usuario" />
                <button type="submit">Entrar</button>
            </form>
        </div>
        );   
    }
}