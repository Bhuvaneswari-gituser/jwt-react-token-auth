import React,{useState} from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './style.module.css'

const Signup = () =>{
    const [data, setData] = useState({
        firstName: "",
        lastName:"",
        email:"",
        password:""
    })
    const navigate = useNavigate();

    const [error, setError] = useState("")

    const handleChange =({currentTarget:input})=>{
        setData({...data, [input.name]:input.value})
    }

    const handleSubmit =async(e) =>{
        e.preventDefault();
        try{
            const url = "http://localhost:8080/api/users"
            const {data: res}= await axios.post(url,data)
            navigate("/login")
            console.log(res.data)
        }
        catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }

    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create your account</h1>

                        <input type="text" placeholder='firstName' name='firstName' 
                        onChange={handleChange} value={data.firstName} required
                        className={styles.input} />

                        <input type="text" placeholder='lastName' name='lastName' 
                        onChange={handleChange} value={data.lastName} required
                        className={styles.input} />

                        <input type="email" placeholder='Email' name='email' 
                        onChange={handleChange} value={data.email} required
                        className={styles.input} />

                        <input type="password" placeholder='Password' name='password' 
                        onChange={handleChange} value={data.password} required
                        className={styles.input} />
                        
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Signup
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>New here?</h1>
                    <Link to ='/login'>
                        <button type="button" className={styles.white_btn}>
                            SignIn
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;