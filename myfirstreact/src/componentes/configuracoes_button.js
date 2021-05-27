import React,{useState} from 'react'
import Ativar from './imgs/configuracoes.png'
import Desativar from './imgs/configuracoes2.png'



export default function Configuracoes(props) {



  const azul={border:'solid 2px', borderRadius:'20px', width:'100px', padding:'3px', backgroundColor:'#00BFFF', height:'100px', marginLeft:'10px'}
  
  const verde={border:'solid 2px', borderRadius:'20px', padding:'5px', backgroundColor:'#FF4500' }

          const ativo=() => {
              if(props.ligado === true){

                  return azul;

              }else {

                  return verde;

              }
          }


        return (

          <>
          
            

            <input type='image' class='btn' style={ativo()} src={props.ligado?Ativar:Desativar} onClick={()=>props.setLigado(!props.ligado)}/>
            
          
          </>



        );



}


  
 