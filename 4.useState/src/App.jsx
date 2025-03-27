// useState: hook. Verileri tutmak için kullanılır.
//useState: Bir state'in değerini set metodunu kullanarak değiştirdiğinde state'in bulunduğu component yeniden render edilir. Bu yüzden çok kodda proje yavaş çalışır.
import { useState } from 'react'
import './App.css'

function App() {
  //firstname bizim değişkenimizin ilk girilen hali ,setFirstname'de bu firstname'in güncellenmiş halini tutar. useState("default") bu şekilde useState içine değer girersek ilk başlangıç değerini belirlemiş oluruz.
  const [firstname, setFirstname] = useState("Esra");
  const [lastname, setLastname] = useState("Sülün");
  const [names, setNames] = useState(["Ali", "Baha", "Enes", "Yakup"]);
  const [userInfo, setUserInfo] = useState({ username: "bayram", password: "123" });
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  console.log(names)

  // 1.yol fonksiyon oluşturmak
  const handleChange = () => {
    debugger;
    setFirstname("Baha")
  }

  const arttir = () => {
    setCount(count + 1)
  }
  const azalt = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  console.log("component render edildi")

  return (
    <div>
      <div>
        <div>{firstname} </div>
        <div><button onClick={handleChange}>İsmi Değiştir</button></div>
        {/* 2.yol
       <div><button onClick={() => { setFirstname("Baha") }}>İsmi Değiştir</button></div> */}

        <div>
          {names.map((names, index) => (
            <div key={index}>{names}</div>
          ))}
        </div>

        {show ? <div> {userInfo.username} {userInfo.password}</div> : <div>Bilgileri Gösterme</div>}
      </div>
      <div>
        <div>{count}</div>
        <div><button onClick={arttir}>Arttır</button></div>
        <div><button onClick={azalt}>Azalt</button></div>
      </div>
    </div>
  )
}

export default App
