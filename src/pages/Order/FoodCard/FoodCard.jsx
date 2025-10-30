import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Swal from 'sweetalert2'
import useAxios from "../../../hooks/useAxios";
import useCart from "../../../hooks/useCart";
const FoodCard = ({item}) => {
    const secureAxios = useAxios();
    const navigate = useNavigate();
    const location = useLocation();
    const[,refetch] = useCart();
    const {image,price,name,recipe,_id} = item;
    const {user} = useAuth();
    const handleClick = () => {
        if(user && user.email){
          console.log(item,user.email);
          const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
          }
          secureAxios.post('carts', cartItem)
          .then(res => {
              if(res.data){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: name,
                  showConfirmButton: false,
                  timer: 1500
                });
                refetch();
              }
          })
        }
        else{
          Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login',{state:{from: location}})
            }
          });
        }
    }
  return (
    <div className="h-[600px]">
      <div className=" w-96 glass">
        <figure>
          <img
            className="w-full"
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-center mx-auto">{name}</h2>
          <h3 className="bg-black text-white absolute px-5 top-4  right-4 rounded-xl">${price}</h3>
          <p className="mx-auto">{recipe}</p>
          <div className="card-actions">
            <button onClick={handleClick} className="btn btn-primary mx-auto btn-outline  border-x-0 border-t-0">Add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
