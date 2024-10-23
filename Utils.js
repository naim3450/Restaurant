import { FaHeart } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

function favouriteMessage(
  title = "sucess",
  position = "top-right",
  theme = "light",
  delay = 4000,
  transition = Bounce,
  icon = FaHeart
) {
  toast.success(
    <div className="flex items-center gap-x-2 font-montserrat">
      <span className="text-white">{title}</span>
      <span className={`text-xl text-red-600`}>{icon}</span>
    </div>,
    {
      position: position,
      autoClose: delay,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: theme,
      transition: transition,
    }
  );
}

function errorMessage(
  title = "error",
  position = "bottom-right",
  theme = "light",
  delay = 4000,
  transition = Bounce,
  icon = FaHeart
) {
  toast.error(
    <div className="flex items-center gap-x-2 font-montserrat">
      <span className="text-white">{title}</span>
      <span className={`text-xl text-red-600`}>{icon}</span>
    </div>,
    {
      position: position,
      autoClose: delay,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
      transition: transition,
    }
  );
}

function successMessage(
  title = "error",
  position = "bottom-right",
  theme = "light",
  delay = 4000,
  transition = Bounce,
  icon = FaHeart
) {
  toast.error(
    <div className="flex items-center gap-x-2 font-montserrat">
      <span className="text-white">{title}</span>
      <span className={`text-xl text-green-500`}>{icon}</span>
    </div>,
    {
      position: position,
      autoClose: delay,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
      transition: transition,
    }
  );
}
