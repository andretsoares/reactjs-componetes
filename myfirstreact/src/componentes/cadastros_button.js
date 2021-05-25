import React,{useState} from 'react'
import Ativar from './imgs/cadastros.png'
import Desativar from './imgs/cadastros2.png'


export default function Cadastros(props) {


  const [cor,setCor]=useState(1)

  const vermelho={color:'#f00'}
  const verde={color:'#0f0'}
  const azul={color:'#00f'}

  const retCor=(c)=>{

    if(c===1){

      return vermelho

    }else if(c===2){
      return verde

    }else {

      return azul

    }

  }


  const mudaCor=()=>{

      setCor(cor+1)
      if(cor > 2){
        setCor(1)
      }

    }



    setInterval(mudaCor,2000)
  
  


        return (

          <>
          
            

            <img style={{width:'50px'}} src={props.ligado?Ativar:Desativar}/>
            <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?'Desativar':'Ativar'}</button>
            <h1 style={retCor(cor)}>teste</h1>
            <button onClick={()=>mudaCor()}>Muda Cor</button>
          
          
          </>



        );



}


  
  