// import React from 'react';
// import './login.css';
// import { FaUser, FaLock } from "react-icons/fa";


// const Login = () => { 
//     return (
//         <div className="full-screen-background">
//         <div className='login'>
//         <div className='wrapper'>
//             <div className='form-box-login'>
//                 <form action="">
//                     <h1>LOGIN</h1>
//                     <div className='input-box'>
//                         <input type="text" placeholder='Masukkan NISN' required/>
//                         <FaUser className='icon' style={{ color: 'black'}} />
//                     </div>
//                    <div className='input-box'>
//                     <input type="text" placeholder='Masukkan Password' required/>
//                     <FaLock className='icon' style={{ color: 'black'}}/>
//                     </div> 

//                     <div className='rememberforgot'>
//                         <label> <input type ="checkbox"/> 
//                             Remember me 
//                         </label>
//                         <a href="#">Forgot Pssword</a>
//                     </div>

//                     <button type="submit">Login</button>

//                     <div className='register-link'>
//                         <p>Don't Have Account?
//                         <a href="#"> Register</a></p>
//                         </div>
//                 </form>
//             </div>
//         </div>
//      </div> 
//      </div>
//     )};

// export default Login;


import React, { useContext, useState } from 'react';
import './login.css';
import { FaUser , FaLock } from "react-icons/fa";
import AuthContext from './AuthContext'; // Pastikan jalur ini benar

    const Login = () => { 
    const { login } = useContext(AuthContext);
    const [nisn, setNisn] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Reset error

        try {
            await login(nisn, password); // Panggil fungsi login dari AuthContext
        } catch (err) {
            setError('Login gagal. Silakan coba lagi.'); // Tangani kesalahan
        }
    };

    return (
        <div className="full-screen-background">
            <div className='login'>
                <div className='wrapper'>
                    <div className='form-box-login'>
                        <form onSubmit={handleSubmit}>
                            <h1>LOGIN</h1>
                            {error && <p className="error-message">{error}</p>} {/* Tampilkan pesan kesalahan */}
                            <div className='input-box'>
                                <input 
                                    type="text" 
                                    placeholder='Masukkan NISN' 
                                    value={nisn} 
                                    onChange={(e) => setNisn(e.target.value)} 
                                    required 
                                />
                                <FaUser  className='icon' style={{ color: 'black' }} />
                            </div>
                            <div className='input-box'>
                                <input 
                                    type="password" 
                                    placeholder='Masukkan Password' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                                <FaLock className='icon' style={{ color: 'black' }} />
                            </div> 

                            <div className='rememberforgot'>
                                <label>
                                    <input type="checkbox" /> 
                                    Remember me 
                                </label>
                                <a href="#">Forgot Password?</a>
                            </div>

                            <button type="submit">Login</button>

                     <div className='register-link'>
                         <p>Don't Have Account?
                         <a href="#"> Register</a></p>
                         </div>
                 </form>
             </div>
         </div>
      </div> 
      </div>
     )};

 export default Login;