import React,{useState} from 'react'
import Ativar from './imgs/relatorios.png'
import Desativar from './imgs/relatorios2.png'



export default function Relatorios(props) {



          const azul={border:'solid 2px', borderRadius:'20px', width:'100px', height:'100px', marginLeft:'10px'}
  
          const verde={border:'solid 2px', borderRadius:'20px', padding:'5px', backgroundColor:'#E3E3E3'}

        
          const ativo=() => {
              if(props.ligado === true){
                   
                 
                  return azul;

              }else {

                  return verde;

              }
          }


        return (

          <>
          
            

            <input type='image' style={ativo()} src={props.ligado?Ativar:Desativar} onClick={()=>props.setLigado(!props.ligado) }/>
            
          
          </>



        );



}


  
 