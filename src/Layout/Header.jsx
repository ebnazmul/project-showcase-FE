import { Link, useNavigate } from "react-router-dom";
import Button from "../componant/Button";
import { useContext } from "react";
import { AuthContexts } from "../Context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, handleSignOut } = useContext(AuthContexts);


  return (
    <div className="w-full bg-gray-700/20">
      <div className="max-w-screen-2xl mx-auto py-4 flex justify-between p-1 md:p-2">
        <div>
          <Link to="/">
            <img
              className="w-12 h-12"
              src="https://cdn-icons-png.flaticon.com/512/2489/2489815.png"
              alt=""
            />
          </Link>
        </div>
        {user.email ? (
          <div className="flex items-center gap-2">
            <img
            title={user.displayName}
            className="w-12 h-12 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt=""
          />
          <button onClick={handleSignOut}><img className="w-8 h-8" src="https://cdn-icons-png.flaticon.com/512/2529/2529508.png" alt="" /></button>
          </div>
        ) : (
          <Button fn={() => navigate("/signin")} text="Sign In" />
        )}
      </div>
    </div>
  );
};

export default Header;
