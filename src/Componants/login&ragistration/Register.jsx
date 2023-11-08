import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../assets/login.jpg'
import { useContext } from 'react';
import { Authcontext } from '../../Authprovider/Authprovider';
import Swal from 'sweetalert2';

const Register = () => {
    const { register } = useContext(Authcontext)
    const navigate = useNavigate();
    const location = useLocation();


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        register(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 1500)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="my-20">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='h-96 w-11/12 rounded-lg' src={loginimg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 ml-7 max-w-sm w-full border-2 rounded-lg">
                        <form className="card-body" onSubmit={handleRegister}>
                            <h1 className="text-5xl font-bold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-error">Register</button>
                            </div>
                            <h2 className=' mt-5'>If you have account go to <Link to='/login' className=" font-bold text-blue-600 text-xl">Login</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;