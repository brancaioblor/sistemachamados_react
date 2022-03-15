import React, { useState, useContext } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

 const SignUp = () => {
  const [nome, setNome] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nome !== '' && email !== '' && password !== ''){
      signUp(email,password,nome);
    }

  }


  return (
  <div className='container-central'>
    <div className='login'>
      <div className='login-area'>
        <img src={logo} alt="Sistema logo"/>
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Cadastrar uma conta</h1>
        <input type="text" placeholder='nome completo' value={nome} onChange={(e) => setNome(e.target.value)}/>
        <input type="text" placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='*****' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit'>{loadingAuth ? 'Carregando...' : 'Cadastrar'}</button>
      </form>
      <Link to="/">Já tem uma conta? Entre.</Link>
    </div>
  </div>
  );
};


export default SignUp;
