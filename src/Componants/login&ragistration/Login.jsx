import { Link } from 'react-router-dom';
import loginimg from '../../assets/login.jpg'
import { useContext } from 'react';
import { Authcontext } from '../../Authprovider/Authprovider';
import Swal from 'sweetalert2';
const Login = () => {
    const { signin, googlelogin } = useContext(Authcontext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signin(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
            .catch(error => {
                console.log(error.messagge)
            })
    }

    const handleGooglelogin = () =>{
        googlelogin()
        .then(result =>{
            console.log(result.user)
            if (result.user) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="my-10">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='h-96 w-11/12 rounded-lg' src={loginimg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 ml-7 max-w-sm w-full border-2 rounded-lg">
                        <form className="card-body" onSubmit={handleLogin}>
                            <h1 className="text-5xl font-bold">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                            </div>
                            <button className="btn font-bold text-xl btn-outline" onClick={handleGooglelogin}>Google</button>
                            <h2 className='mt-5'>If you new go to <Link to='/register' className=" font-bold text-blue-600 text-xl">Register</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;