import React from "react";
import './login.css';
import logo from '../../Images/uverse-logo.png';

import Facebookicon from '@material-ui/icons/Facebook';
import  ArrowBackIosIcon  from "@material-ui/icons/ArrowBackIos";
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Api from '../../Api'



export default ({onReceiveGoogle}) =>{

    const actionLoginGoogle = async () => {
       let result = await Api.googleLogar();

       if(result){

        onReceiveGoogle(result.user);

       }else{
         alert('error')  
       }

    }

    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/register" className="bd">

                <div className="locale-register">

                    <h1 className="organize">
                        <Link to="/"><ArrowBackIosIcon/></Link>
                        Crie sua Conta
                    </h1>
                    

                    <p className="register-free">Crie Sua conta, é gratís!</p>

                    <form>

                    <div className="form--input">
                            <label>Nome</label>
                            <input type="text" />

                        </div>
                        <div className="form--input">
                            <label>E-mail</label>
                            <input type="email" />

                        </div>

                        <div className="form--input">
                            <label>Senha</label>
                            <input type="password" />

                        </div>

                        <button className="btn-login">
                            Começe Agora
                        </button>

                        <div className="footer-login">
                            Já tem uma conta?

                            <Link  to="/" className="link-register"> Fazer Login</Link>
                        </div>
                    </form>
                

                </div>

            </Route>

        <Route exact path="*">

                <div className="login">
                    <div className="logo-initial">
                        <img className="logo-login" src={logo} alt="audio-book-logo" / >
                    </div>
                    <h1>Faça Login em sua conta</h1>

                    <button className="btn-facebook">
                        <Facebookicon/>
                        Fazer login com o Facebook
                    </button>

                    <button className="btn-google" onClick={actionLoginGoogle}>
                    <i class="fab fa-google px-2 "></i>

                        Fazer login com o google
                    </button>

                    <p>Ou</p>

                    <form>
                        <div className="form--input">
                            <label>E-mail</label>
                            <input type="email" />

                        </div>

                        <div className="form--input">
                            <label>Senha</label>
                            <input type="password" />

                        </div>

                        <button className="btn-login">
                            Entrar
                        </button>

                        <div className="footer-login">
                            Não tem uma conta?
                            <Link exact to="/register" className="link-register">Registre-se</Link>
                        </div>
                    </form>
                
                
                </div>
                
            </Route>
            
        </Switch>
      
    </BrowserRouter>   
    )
}