import { useState } from "react";
import "./App.css";
import Alface from"./Assets/alface.png"
import Beterraba from"./Assets/beterraba.png"
import Cenoura from"./Assets/cenoura.png"
import Cereja from"./Assets/cereja.png"
import Laranja from"./Assets/laranja.png"
import Limao from"./Assets/limao.png"
import Manga from"./Assets/manga.png"
import Tomate from"./Assets/tomate.png"



function App() {
  const [frutas, setFrutas] = useState([
    Alface, Beterraba, Cenoura, Cereja, Laranja, Limao, Manga, Tomate
  ])
  return (
    <div className="logo">
       <header>
        <h1>HORTIFRUTI</h1>
        <h2>VnW</h2>
        <h2> Nossos Produtos </h2>

    </header>
    
    <main>
      <div className="produtos">
      {frutas.map((item)=> (
        <div className="produtos-container">
        <img className= 'produtos-fotos'src={item} alt=""/>
        </div>
    ))}
      </div>
    


      
    </main>
    </div>
  
  );
}

export default App;
