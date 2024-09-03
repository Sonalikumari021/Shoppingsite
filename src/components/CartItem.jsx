
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className=" m-3">

      <div>

        <div>
          <img src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1 className="  font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>        
          <div className=" flex gap-32">
            <p>{item.price}</p>
            <div className=" h-9 hover:cursor-pointer"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
