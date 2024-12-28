import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import CartService from "@/services/cart";
import { TCart } from "@/types/cart";
import OrderService from "@/services/order";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const [cartData, setCartData] = useState<TCart | null>(null);

  const getCartItems = async () => {
    try {
      const cartItems = await CartService.getCartItems();
      setCartData(cartItems);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromCart = (id: string) => {
    console.log("remove from cart", id);
  };

  const handleCheckout = async () => {
    try {
      await OrderService.createOrder();
      toast({
        title: "Order created",
        description: "Order created",
      });
      getCartItems();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const total =
    cartData?.items.reduce(
      (acc, item) => acc + item.item.price * item.quantity,
      0
    ) || 0;
  const discount = cartData?.discount ? cartData?.discount.discount : 0;
  const discountAmount = (total * discount) / 100;
  const totalAfterDiscount = total - discountAmount;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
      {cartData?.items.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty.</p>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Cart Items</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {cartData?.items.map((item) => (
                <li
                  key={item.item._id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{item.item.title}</h2>
                    <p className="text-gray-600">
                      ${item.item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.item._id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-lg">
                Subtotal: ${total ? total.toFixed(2) : 0}
              </p>
              {discount > 0 && (
                <p className="text-sm text-green-600">
                  {cartData?.discount.code} ({discount}%): -$
                  {discountAmount.toFixed(2)}
                </p>
              )}
              <p className="text-xl font-semibold">
                Total: ${totalAfterDiscount ? totalAfterDiscount.toFixed(2) : 0}
              </p>
            </div>
            <Button onClick={handleCheckout}>
              <ShoppingBag className="w-4 h-4 mr-2" />
              Checkout
            </Button>
          </CardFooter>
        </Card>
      )}
      <div className="mt-6">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
