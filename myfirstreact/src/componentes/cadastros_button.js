import React, {Component} from 'react';


import styled, {keyframes} from "styled-components";
import Ativar from './imgs/cadastros.png'
import Desativar from './imgs/cadastros2.png'



export default function Cadastros(props) {


          

  const azul={border:'solid 2px', borderRadius:'20px', width:'100px', padding:'3px', backgroundColor:'#00BFFF', height:'100px', marginLeft:'10px'}
  
  const verde={border:'solid 2px', borderRadius:'20px', padding:'5px', backgroundColor:'#7CFC00' }

  
          
          const ativo=() => {
              if(props.ligado === true){

                  return azul;
                  

              }else{

                  return verde;

              }
          }


        return (

          <>
          
            
          

          <input class='btn' type='image' style={ativo()} src={props.ligado?Ativar:Desativar} onClick={()=>props.setLigado(!props.ligado)}/>
          
         
          </>



        );



}


  
 