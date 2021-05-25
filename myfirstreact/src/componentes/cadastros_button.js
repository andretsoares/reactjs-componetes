import React from 'react'
import Ativar from './imgs/cadastros.png'
import Desativar from './imgs/cadastros2.png'

export default function Cadastros(props) {


  

  return (

    <>
    
      

      <img style={{width:'50px'}} src={props.ligado?Ativar:Desativar}/>
      <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desativar':'Ativar'}</button>
      
    
    
    </>



  );



}