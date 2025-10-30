import { useLoaderData } from "react-router";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

//const image_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItems = () => {
    const {name,price,category,_id} = useLoaderData();
    const secureAxios = useAxiosPublic();
    const { register, handleSubmit} = useForm();
    const onSubmit =(data) => {
      secureAxios.patch(`menu/${_id}`,data)
      // fetch(`https://bistro-boss-server-seven-gray.vercel.app/menu/${_id}`,{
      //   method: 'PATCH',
      //   headers: {
      //     'content-type' : 'application/json'
      //   },
      //   body: JSON.stringify(data)
      // })

      };
    return (
        <div>
            <SectionTitle titleHead="UpdateItem" titleBody="u"></SectionTitle>
            <div className=" bg-white p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipi Name *</span>
            </div>
            <input
              type="text"
              placeholder={name}
              {...register("name")}
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
                {...register("category")}
                className="select w-full"
              >
                <option disabled value="default">
                  {category}
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
                placeholder={price}
                {...register("price")}
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
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs my-4"
            />
          </div>
          <button className="btn">
            Updata Menu Item <FaUtensils></FaUtensils>{" "}
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItems;