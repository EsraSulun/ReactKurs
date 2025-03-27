import React from 'react'

//sadece users'başka componente taşıcaksak export kullanırız.
export const users = [
    {
        username: "esra",
        password: "1"
    },
    {
        username: "baha",
        password: "2"
    }
]
function Login() {
    return (
        // Fragment <></>
        <div>
            <div>
                <p>Kullanıcı Adı</p>
                <input type='text'></input>
            </div>

            <div>
                <p>Şifreniz</p>
                <input type='text'></input>
            </div>
        </div>
    )
}

export default Login  //export default: bir componentin hepsinin başka bir componentte çağrılmasını sağlar
