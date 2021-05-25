import React,{useState} from 'react'
import Ativar from './imgs/cadastros.png'
import Desativar from './imgs/cadastros2.png'



export default function Cadastros(props) {



          const azul={border:'solid 2px', borderRadius:'20px', boxShadow: '2px 2px 1px 2px blue'}
  
          const verde={border:'solid 2px', borderRadius:'20px',  boxShadow: '2px 2px 1px 2px green'}

          const ativarDesativar={}
  



        return (

          <>
          
            

            <input type='image' src={props.ligado?Ativar:Desativar} onClick={()=>props.setLigado(!props.ligado)}/>
            
          
          </>



        );



}


  
 