import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

import img from '../../../assets/home/featured.jpg';
const Featurs = () => {
    return (
        <div style={{backgroundImage: `url(${img})`, backgroundAttachment: 'fixed'}} className="my-10 py-10">
            <SectionTitle
                titleHead={"Check it out"}
                titleBody={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="flex w-3/4 mx-auto px-4 py-10 space-x-4 bg-stone-300 opacity-60">
                <img src={img} alt="" srcSet="" className="w-1/2 " />
                <div>
                    <h2 className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, cum rem ducimus culpa officiis maxime corporis, accusamus perspiciatis iure libero beatae impedit assumenda deleniti quisquam magni necessitatibus? Libero, illum nihil?</h2>
                    <button className="btn btn-outline btn-primary border-x-0 border-t-0 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featurs;