import express from "express"

const posts = [
    {
        id:1,
        descricao: "Foto de teste",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        id:2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/400/300"
      },
      {
        id:3,
        descricao: "Gatinho dormindo em uma caixa",
        imagem: "https://placekitten.com/200/200"
      },
      {
        id:4,
        descricao: "Gatos olhando pela janela",
        imagem: "https://placekitten.com/300/200"
      },
      {
        id:5,
        descricao: "Gato curioso cheirando uma planta",
        imagem: "https://placekitten.com/250/250"
      },
      {
        id:6,
        descricao: "Gatos se aconchegando em um cobertor",
        imagem: "https://placekitten.com/400/400"
      },
];

const app = express()
app.use(express.json());

app.listen(3000, () =>{
    console.log("Server listening ...");
    
});

app.get("/posts", (req, res) =>{
    res.status(200).json(posts);
});

function buscarPostsPorId(id){
    return posts.findIndex((posts) =>{
        return posts.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostsPorId(req.params.id)
    res.status(200).json(posts[index])
})
