import React from 'react'
import Ativar from './imgs/suporte_ajuda.png'
import Desativar from './imgs/suporte_ajuda2.png'



export default function Suporte(props) {



  const azul={
    
    border:'solid 2px',
    borderRadius:'20px',
    width:'100px',
    padding:'3px',
    backgroundColor:'#00BFFF', 
    height:'100px', 
    marginLeft:'10px'}
    
    const verde={
      
      
    borderRadius:'20px',  
    width: '100px',
    height: '100px',
    animationName: 'example',
    animationDelay: '1',
    animationDuration: '5s',
    animationIterationCount: 15,    
    border:'solid 2px #00BFFF',
    borderColor:'10px',
    padding:'3px',
    backgroundColor:'#fff'
  
  
  
  
  
  }
  
        
          const ativo=() => {
              if(props.ligado === true){

                  return azul;

              }else {

                  return verde;

              }
          }


        return (

          <>
          
            

            <input className="btn" type="image" alt=""  style={ativo()} src={props.ligado?Ativar:Desativar} onClick={()=>props.setLigado(!props.ligado)}/>
            
          
          </>



        );



}


  
 