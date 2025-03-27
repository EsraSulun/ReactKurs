import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let a = 15;
  const firstname = "Esra";
  let vize1 = 80;
  let vize2 = 90;
  let sonuc = true;
  let isimler = [
    "Esra",
    "Baha",
    "Zehra",
    "Elmas"
  ];
  return (
    // sadece return içine html kodu yazılır
    //jsx javascript kodu olarak anlaması için {} kullanırız.
    //return içine js yazabilmemizi {} sağlar.
    <div>
      <p> a değişkeninin değeri: a </p>
      {/*  burda a string olarak algılanır. */}
      <p> a değişkeninin değeri: {a} </p>
      {/* a'nın js kodunda tanımlanan değişken olması için {} kullanılır. */}
      <p>Müşteri Adı: {firstname}</p>

      <p>Ortalama= {(vize1 + vize2) / 2}</p>

      {sonuc ? <p>Ehliyeti alabilirsin.</p> : <p>Ehliyeti alamazsın, kaybol</p>}
      {/*  sonuc ifadesi true ise "?"den sonraki kısım gerçekleşir.
           sonuc ifadesi false ise ":"dan sonraki kısım gerçekleşir. */}

      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: "orange",
            border: "1px solid black"
          }} key={index}> {isim} </div>
        ))
      }
    </div>
  )
}

export default App
