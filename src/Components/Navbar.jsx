import image from "../assets/kevinRushLogo.png"
import {FaLinkedin} from "rea"
const Navbar = () => {
  return (
    <div className=" mb-20 flex items-center bg-green-700 justify-between py-6">
        <div className=" bg-red-300 flex flex-shrink-0  items-center">
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Navbar