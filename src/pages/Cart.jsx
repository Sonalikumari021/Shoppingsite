import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className=" mt-10 mb-20">
  {
    cart.length > 0  ? 
    (<div className=" flex w-[50%]  mx-auto ">


      <div className="h-[200px] w-[200px]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className=" ml-80 font-bold text-lg ">

        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className=" mt-10">
          <p>Total Amount: ${totalAmount}</p>
          <button className=" bg-green-900 px-2 py-1 rounded-md mt-8">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className=" ml-[700px] mt-[250px]  font-bold text-[20px]">
      <h1>Cart Empty</h1>
      <div className="mt-3">
      <Link to={"/"}>
        <button className="px-2 rounded-lg bg-gray-600">
          Shop Now
        </button>
      </Link>
      </div>
    </div>)
  }
    </div>
  );
};

export default Cart;
