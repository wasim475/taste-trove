import { Link } from "react-router-dom";
import slider1 from "../../assets/SliderImages/sl1.png";
import slider2 from "../../assets/SliderImages/sl2.png";
import slider3 from "../../assets/SliderImages/sl3.png";
import slider4 from "../../assets/SliderImages/sl4.png";
const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div
          id="slide1"
          className="carousel-item relative w-full bg-gradient-to-r from-orange-400 to-orange-500"
        >
          <div data-aos="slide-right"  data-aos-duration="1500" className="w-3/6 flex flex-col items-center justify-center px-20 ">
            <h1 className="text-3xl font-bold mb-3 font-Lora ">
              Bowl biryani with chicken pieces
            </h1>
            <h2 className="text-gray-50 mb-10">
              It is a delectable dish that combines fragrant basmati rice cooked
              with aromatic spices and tender pieces of succulent chicken. This
              dish is known for its rich flavors and irresistible aroma, making
              it a favorite among biryani enthusiasts.{" "}
            </h2>

            <Link to="/allFoods">
              <button data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1000" className="border px-10 py-1 rounded-lg bg-green-400 text-white font-semibold">
                See More
              </button>
            </Link>
          </div>
          <div data-aos="slide-left"  data-aos-duration="2000" className="w-3/6">
            <img src={slider1} className="w-full h-[99vh]" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full bg-gradient-to-r from-orange-400 to-orange-500"
        >
          <div className="w-3/6 flex flex-col items-center justify-center px-20 ">
            <h1 className="text-3xl font-bold mb-3 font-Lora ">
            Delicious Fried Chicken with French Fries Isolated
            </h1>
            <h2 className="text-gray-50 mb-10">
            The <strong>Delicious Fried Chicken with French Fries Isolated</strong> is a mouthwatering feast that combines crispy, golden-brown fried chicken with perfectly cooked French fries. The chicken boasts a tantalizingly crunchy exterior, revealing tender, succulent meat with each bite. Coated in a secret blend of herbs and spices, the fried chicken bursts with flavor, offering a delightful balance of savory and savory notes. 
            </h2>

            <Link to="/allFoods">
              <button className="border px-10 py-1 rounded-lg bg-green-400 text-white font-semibold">
                See More
              </button>
            </Link>
          </div>
          <div className="w-3/6">
            <img src={slider2} className="w-full h-[99vh]" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full bg-gradient-to-r from-orange-400 to-orange-500"
        >
          <div className="w-3/6 flex flex-col items-center justify-center px-20 ">
            <h1 className="text-3xl font-bold mb-3 font-Lora ">
            Grilled Chicken Roasted BBQ with Spices & Tomato
            </h1>
            <h2 className="text-gray-50 mb-10">
              It  presents a tantalizing blend of flavors and textures. Succulent chicken, marinated in a medley of spices, is grilled to perfection, resulting in juicy, tender meat with a smoky charred exterior. The addition of roasted BBQ sauce adds a rich, tangy sweetness that enhances the natural flavors of the chicken.
            </h2>

            <Link to="/allFoods">
              <button className="border px-10 py-1 rounded-lg bg-green-400 text-white font-semibold">
                See More
              </button>
            </Link>
          </div>
          <div className="w-3/6">
            <img src={slider3} className="w-full h-[99vh]" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full bg-gradient-to-r from-orange-400 to-orange-500">
          <div className="w-3/6 flex flex-col items-center justify-center px-2 md:px-10 lg:px-20 ">
            <h1 className="lg:text-3xl md:text-xl text-lg font-bold mb-3 font-Lora ">
            Hamburger Isolated
            </h1>
            <h2 className="text-gray-50 mb-10">
            The <strong>Hamburger Isolated</strong>  is a classic American comfort food, beloved for its simplicity and deliciousness. Consisting of a juicy beef patty sandwiched between two soft and toasted burger buns, it offers a satisfying combination of flavors and textures.
            </h2>

            <Link to="/allFoods">
              <button className="border px-10 py-1 rounded-lg bg-green-400 text-white font-semibold">
                See More
              </button>
            </Link>
          </div>
          <div  className="w-3/6 flex justify-center items-start">
            <img src={slider4} className="w-full lg:h-[99vh]" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
