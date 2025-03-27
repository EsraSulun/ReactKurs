// props: bir componentten bir diğeine veri taşıma
import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container';

function App() {
  const productName = "Buzdolabı";
  return (
    <div>
      <div>
        <Product productName="Ayakkabı" price={3200} />
        <Product productName="Pantolon" price={950} />
        <Product productName={productName} price={15000} />
      </div>
      <hr />
      <div>
        <Container>
          <Product productName="telefon" price={20500} />
        </Container>
      </div>
    </div>
  )
}

export default App
