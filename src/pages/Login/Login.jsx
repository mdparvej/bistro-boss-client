import { useContext, useEffect,useState } from "react";
import { myContex } from "../../ContexApi/ContexApi";
import Swal from 'sweetalert2'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {
  const [disable,setDisable] = useState(true);
  const {login} = useContext(myContex);
  const location = useLocation();
  const navigate = useNavigate();
  let form = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    login(email,password)
    .then(result => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(form,{replace: true})
    })
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptch = (e) => {
    const value = e.target.value;
    console.log(value,'thisis s');
    if(validateCaptcha(value)){
      setDisable(false)
    }
    else{
      setDisable(true)
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  <LoadCanvasTemplate reloadColor="green"/>
                </a>
              </label>
              <input
                type="text"
                name="captcha"
                placeholder="please type your captcha"
                className="input input-bordered"
                disabled={true}
                onBlur={handleCaptch}
              />
            </div>
            <div className="form-control mt-6">
              <input disabled={!disable} type="submit" className="btn btn-primary" value="Login" />
            </div>
            <Link to="/signin" className="btn btn-link">If you are new first you Sign in</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
