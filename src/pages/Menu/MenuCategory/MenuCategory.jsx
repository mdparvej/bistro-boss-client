import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover/Cover";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover title={title} img={coverImg}></Cover>}
      <div className="py-10">
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
      </div>
      {title && <Link to={`/order/${title}`}>
        <button className="btn btn-outline btn-primary border-x-0 border-t-0 ">
          {title}
        </button>
      </Link>}
    </div>
  );
};

export default MenuCategory;
