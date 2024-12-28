import React from "react";
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

type Props = {};

const Cart = (props: Props) => {
  const cartProducts = [
    {
      item: {
        _id: "1",
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday gear in the main compartment and your water bottle in the side pocket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      quantity: 1,
    },
    {
      item: {
        _id: "1",
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday gear in the main compartment and your water bottle in the side pocket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      quantity: 1,
    },
    {
      item: {
        _id: "1",
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday gear in the main compartment and your water bottle in the side pocket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 3.9,
          count: 120,
        },
      },
      quantity: 1,
    },
  ];

  const removeFromCart = (id: string) => {
    console.log("remove from cart", id);
  };

  const handleCheckout = () => {
    console.log("checkout");
  };

  const total = cartProducts.reduce(
    (acc, item) => acc + item.item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
      {cartProducts.length === 0 ? (
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
              {cartProducts.map((item) => (
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
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
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
