import express from "express"

const posts = [
    {
        descricao: "Foto de teste",
        imagem: "https://placecats.com/millie/300/150"
      },
      {
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/400/300"
      },
      {
        descricao: "Gatinho dormindo em uma caixa",
        imagem: "https://placekitten.com/200/200"
      },
      {
        descricao: "Gatos olhando pela janela",
        imagem: "https://placekitten.com/300/200"
      },
      {
        descricao: "Gato curioso cheirando uma planta",
        imagem: "https://placekitten.com/250/250"
      },
      {
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
    res.status(200).send("Hell-o world");
});
