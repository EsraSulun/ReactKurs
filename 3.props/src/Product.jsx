import React from 'react'

function Product({ productName, price }) {
    // Product(props) yerine de böyle yazılabilir.
    return (
        <div>
            <div>ÜRÜN BİLGİLERİ</div>

            <div>
                <div>İsim: {productName}</div>
                <div>Fiyat: {price} TL</div>
            </div>

            {/* const { productName, price } = props; sayesinde uzun yazmaktan kurtuluruz. 
        
            <div>
                <div>İsim: {props.productName}</div>
                <div>Fiyat: {props.price} TL</div>
            </div> */}

        </div>
    )
}

export default Product
