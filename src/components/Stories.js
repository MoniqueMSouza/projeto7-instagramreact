import Story from "./Story"
export default function Stories() {

const stories = [
  {imagem: "assets/img/9gag.svg", texto:"9gag"},
  {imagem: "assets/img/meowed.svg", texto:"meowed"},
  {imagem: "assets/img/barked.svg", texto:"barked"},
  {imagem: "assets/img/nathanwpylestrangeplanet.svg", texto:"nathanwpylestrangeplanet"},
  {imagem: "assets/img/wawawicomics.svg", texto:"wawawicomics"},
  {imagem: "assets/img/respondeai.svg", texto:"respondeai"},
  {imagem: "assets/img/filomoderna.svg", texto:"filomoderna"},
  {imagem: "assets/img/memeriagourmet.svg", texto:"memeriagourmet"}
]
  return (
    <div>
      <div class="stories">

        {stories.map((story) => <Story imagem= {story.imagem} texto={story.texto}/> )}

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </div>
  
 )
 
}



