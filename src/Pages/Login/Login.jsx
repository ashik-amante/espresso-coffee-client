import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {login} = useContext(AuthContext)
    const [success,setSuccess] = useState(null)
    const [error,setError] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get('password')
        // login user
        login(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
        })
    }
    return (
        <div>
            
            <div className="mt-24">
                <h1 className="text-center text-5xl font-bold  mt-10">Log In Your Account !!</h1>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#E3B577]">Login</button>
                    </div>
                    <div>
                        <p className="text-center mr-3">Do Not have an account ? <Link to='/register'><button className="text-blue-600 font-bold ml-2">Register</button></Link> </p>
                    </div>
                    <div>
                        {
                            success && <p className="text-xl text-green-600 text-center">{success}</p>
                        }
                        {
                            error && <p className="text-xl text-red-600 text-center">{error}</p>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;