import React, { useState } from "react"

export default function Post(props) {
const [salvar, setsalvar] = useState ("bookmark-outline") //Salvar Post
const [curtir, setcurtir] = useState ("heart-outline") // Curtir o post (coração)
const [colorir, setcolorir] = useState ("black") // Colorir o coração
const [somarLikes, setsomarLikes] = useState (props.nCurtidas) // Somar Likes)

function Curtir(){
if(curtir === "heart-outline"){
  setcurtir("heart")
  setcolorir("red")
  setsomarLikes(Number(props.nCurtidas) + 0.001)
  console.log(setsomarLikes)
} else {
  setcurtir("heart-outline")
  setcolorir("black")
  setsomarLikes(Number(props.nCurtidas))
}
}

function CurtirFoto(){
  if(curtir === "heart-outline"){
    setcurtir("heart")
    setcolorir("red")
    setsomarLikes(Number(props.nCurtidas) + 0.001)
}}

    return (
      <div data-test="post" class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagemUser} />
            {props.texto}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
  
        <div class="conteudo">
          <img onClick={CurtirFoto}data-test="post-image" src={props.imagemPost} />
        </div>
  
        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon data-test="like-post"name={curtir} onClick={Curtir} style={{color: colorir}}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon data-test="save-post" name={salvar} onClick={()=> salvar==="bookmark-outline" ? setsalvar("bookmark"): setsalvar("bookmark-outline")}></ion-icon>
            </div>
          </div>
  
          <div class="curtidas">
            <img src={props.imagemCurtidas} />
            <div class="texto">
              Curtido por <strong>{props.userCurtidas}</strong> e outras <strong data-test="likes-number">{somarLikes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
  }


  /*function salvarPost(){  
    if (setsalvar) {
    return setsalvar(salvo) 
   } 
   console.log(salvar)
 if (setsalvar = "bookmark" ){
   setsalvar(NaoSalvo)
 }
 }*/