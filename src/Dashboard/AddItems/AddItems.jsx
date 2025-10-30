import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_image_token;
const image_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const secureAxios = useAxios();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_url, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await secureAxios.post('menu', menuItem);
      if (menuRes.data.insertedId) {
        console.log("yes add menu item");
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is an Admin Now`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };
  return (
    <div>
      <SectionTitle
        titleHead={"Add an item"}
        titleBody={"what's new?"}
      ></SectionTitle>
      <div className=" bg-white p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipi Name *</span>
            </div>
            <input
              type="text"
              placeholder="Recipi Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category *</span>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select w-full"
              >
                <option disabled value="default">
                  Pick your favorite Simpson
                </option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
                <option value="desert">Desert</option>
                <option value="soup">Soup</option>
                <option value="soup">Soup</option>
              </select>
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="text"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("details")}
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Your text here"
            ></textarea>
          </label>
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs my-4"
            />
          </div>
          <button className="btn">
            Add Item <FaUtensils></FaUtensils>{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
