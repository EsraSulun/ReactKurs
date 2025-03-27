//ANA COMPONENT her zaman App.jsx'dir
import { useState } from 'react'
import './App.css'
import Random from './Login'
// export default yaptıklarımız ilk harfi büyük olmak şartıyla random bir isim alabilir.
import { users } from './Login'  //sadece export yaptıklarımız bu şekilde import
function App() {
  console.log(users)
  return (
    <div>
      <Random />
    </div>
  )
}

export default App
