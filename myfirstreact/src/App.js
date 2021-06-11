import React,{useState} from 'react';
/*eslint-disable*/
import Stiles from './App.css';
/*eslint-enable*/

import Cadastros from './componentes/cadastros_button.js';
import Financeiro from './componentes/financeiro_button'
import Estoque from './componentes/estoque_button'
import Graficos from './componentes/graficos_button'
import Relatorios from './componentes/relatorios_button'
import Vendas from './componentes/vendas_button'
import Configuracoes from './componentes/configuracoes_button'
import Suporte from './componentes/suporte_button'
import Ferramentas from './componentes/ferramentas_button'
import Sair from './componentes/sair_button'


export default function App(){

  
  const [ligado,setLigado]=useState(true);
  const [ligado2,setLigado2]=useState(true)
  const [ligado3,setLigado3]=useState(true)
  const [ligado4,setLigado4]=useState(true)
  const [ligado5,setLigado5]=useState(true)
  const [ligado6,setLigado6]=useState(true)
  const [ligado7,setLigado7]=useState(true)
  const [ligado8,setLigado8]=useState(true)
  const [ligado9,setLigado9]=useState(true)
  const [ligado10,setLigado10]=useState(true)
  
  
 



                  return (

                    <>
                    
                      
                    <Cadastros ligado={ligado} setLigado={setLigado}/>
                    <Financeiro ligado={ligado2} setLigado={setLigado2}/>
                    <Estoque ligado={ligado3} setLigado={setLigado3}/>
                    <Graficos ligado={ligado4} setLigado={setLigado4}/>
                    <Relatorios ligado={ligado5} setLigado={setLigado5}/>
                    <Vendas ligado={ligado6} setLigado={setLigado6}/>
                    <Configuracoes ligado={ligado7} setLigado={setLigado7}/>
                    <Suporte ligado={ligado8} setLigado={setLigado8}/>
                    <Ferramentas ligado={ligado9} setLigado={setLigado9}/>
                    <Sair ligado={ligado10} setLigado={setLigado10}/> 
                   
                    
                  
                    </>



                  );

            }        


        

      

