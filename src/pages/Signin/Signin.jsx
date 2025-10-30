import { useContext } from "react";
import { myContex } from "../../ContexApi/ContexApi";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";

const Signin = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { createAccount, updateUser} = useContext(myContex);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createAccount(data.email, data.password)
    .then((result) => {
      updateUser(data.name,data.photoUrl)
      .then(() => {
        const userInfo = {
            name : data.name,
            email: data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res => {
          if(res.data.insertedId){

            reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/login');
          }
        })
      })
      
    })
    .catch(err => console.log(err))
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss || Order now</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
              </div>
              {errors.name && <span>This field is required</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoUrl</span>
                </label>
                <input
                  className="input input-bordered"
                  {...register("photoUrl", { required: true })}
                />
              </div>
              {errors.photoUrl && <span>This field is required</span>}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    minLength: 6,
                    required: true,
                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <span>This field is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>This field is 6 minLength</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span>
                    Password must have one and one lower case, one less than 20
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Signin"
                  className="btn btn-primary"
                />
              </div>
              <Link to="/login" className="btn btn-link">Already you have an account?</Link>
            </form>
            <SocialLogin></SocialLogin>
            <div >
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
