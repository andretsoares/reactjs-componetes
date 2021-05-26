import React,{useState} from 'react'
import Ativar from './imgs/financeiro.png'
import Desativar from './imgs/financeiro2.png'



export default function Financeiro(props) {



          const azul={border:'solid 2px', borderRadius:'20px', boxShadow: '2px 2px 2px 2px blue'}
  
          const verde={border:'solid 2px', borderRadius:'20px',  boxShadow: '1px 1px 1px 1px'}

        
          const ativo=() => {
              if(props.ligado === true){

                  return azul;

              }else {

                  return verde;

              }
          }


        return (

          <>
          
            

            <input type='image' style={ativo()} src={props.ligado?Ativar:Desativar} onClick={()=>props.setLigado(!props.ligado)}/>
            
          
          </>



        );



}


  
 