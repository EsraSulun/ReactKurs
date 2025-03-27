import { useEffect, useState } from 'react'
import './App.css'
//clg : console.log kısaltması
//ctrl+g : componentlerde search kısa yolu
function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır")
  })
  useEffect(() => {
    console.log("sadece component ilk render edildiğinde çalışır.")
  }, [])
  useEffect(() => {
    console.log("component ilk render edildiğinde ve FİRSTNAME her değiştiğinde render edilir.")
  }, [firstname])
  useEffect(() => {
    console.log("component ilk render edildiğinde ve LASTNAME her değiştiğinde render edilir.")
  }, [lastname])
  useEffect(() => {
    console.log("component ilk render edildiğinde ve FİRSTNAMEVEYA LASTNAME her değiştiğinde render edilir.")
  }, [firstname, lastname])
  //yani bu şekild eiki parametre birden de alabilir.
  return (
    <div>
      <button onClick={() => setFirstname("Esra")}>Adı Değiştir</button>
      <button onClick={() => setLastname("Sülün")}>Soyismi Değiştir</button>
    </div>
  )
}

export default App
