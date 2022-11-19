import Sugestao from "./Sugestao"
export default function Sugestoes() {

  const sugestoes = [
{imagemUser:"assets/img/bad.vibes.memes.svg", nomeUser:"bad.vibes.memes", razao:"Segue você"},
{imagemUser:"assets/img/chibirdart.svg", nomeUser:"chibirdart", razao:"Segue você"},
{imagemUser:"assets/img/razoesparaacreditar.svg", nomeUser:"razoesparaacreditar", razao:"Novo no Instagram"},
{imagemUser:"assets/img/adorable_animals.svg", nomeUser:"adorable_animals", razao:"Segue você"},
{imagemUser:"assets/img/smallcutecats.svg", nomeUser:"smallcutecats", razao:"Segue você"}
  ]


  return (
    <div>
      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestoes.map((sugestao) => <Sugestao imagemUser={sugestao.imagemUser} nomeUser={sugestao.nomeUser} razao={sugestao.razao}></Sugestao>)}
        
        
      </div>
    </div>
  )
}


