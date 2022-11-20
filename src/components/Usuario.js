import React, { useState } from "react"

export default function Usuario() {
  const nomePadrao = "Catana"
  const imagemPadrao = "assets/img/catanacomics.svg"
  const [nome, setNome] = React.useState(nomePadrao)
  const [imagem, setImagem] = useState(imagemPadrao)

  function inserirNome() {
    setNome(prompt('Qual seu nome?'))
  }

  function inserirImagem() {
    setImagem(prompt('Insira o link de uma foto para usar no seu perfil! :)'))
  }

  return (

    <div data-test="user" class="usuario">
      <img data-test="profile-image" onClick={inserirImagem} src={!imagem ? imagemPadrao : imagem} />
      <div class="texto">
        <strong>catanacomics</strong>
        <span data-test="name">
          {!nome ? nomePadrao : nome}
          <ion-icon name="pencil" onClick={inserirNome} data-test="edit-name"></ion-icon>
        </span>
      </div>
    </div>

  )
}