import Post from "./Post"

export default function Posts() {

  const posts = [
    { imagemUser: "assets/img/meowed.svg", texto: "meowed", imagemPost: "assets/img/gato-telefone.svg", imagemCurtidas: "assets/img/respondeai.svg", userCurtidas: "respondeai", textoCurtidas: "outras 101.523 pessoas" },
    { imagemUser: "assets/img/barked.svg", texto: "barked", imagemPost: "assets/img/dog.svg", imagemCurtidas: "assets/img/adorable_animals.svg", userCurtidas: "adorable_animals", textoCurtidas: "outras 99.159 pessoas" }
  ]

  return (
    
      <div class="posts">
        {posts.map((post) => <Post imagemUser={post.imagemUser} texto={post.texto} imagemPost={post.imagemPost} imagemCurtidas={post.imagemCurtidas} userCurtidas={post.userCurtidas} textoCurtidas={post.textoCurtidas}></Post>)}
      </div>
   
  )
}




