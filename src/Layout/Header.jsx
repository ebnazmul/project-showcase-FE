import { Link, useNavigate } from "react-router-dom";
import Button from "../componant/Button";

const Header = () => {
  const navigate = useNavigate()
  
  return (
    <div className="w-full bg-gray-700/20">
      <div className="max-w-screen-2xl mx-auto py-4 flex justify-between p-1 md:p-2">
        <div>
          <Link to="/"><img
            className="w-12 h-12"
            src="https://cdn-icons-png.flaticon.com/512/2489/2489815.png"
            alt=""
          /></Link>
        </div>
        <Button fn={()=>navigate("/login")} text="Sign In" />
      </div>
    </div>
  );
};

export default Header;
