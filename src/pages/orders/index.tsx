import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TOrder } from "@/types/order";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import OrderService from "@/services/order";

const Orders = () => {
  const [orders, setOrders] = useState<TOrder[]>([]);

  const getOrders = async () => {
    try {
      const orders = await OrderService.getOrders();
      setOrders(orders);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Order History</h1>
      {orders.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-gray-600">No orders found.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order._id}>
              <CardHeader>
                <CardTitle>
                  Order #{order._id} -{" "}
                  {dayjs(order.createdAt).format("DD/MM/YYYY")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {order.items.map((item) => (
                    <li
                      key={item.item._id}
                      className="flex justify-between text-sm"
                    >
                      <span>
                        {item.item.title} x {item.quantity}
                      </span>
                      <span className="font-semibold">
                        ${(item.item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800">
                      ${order.totalBeforeDiscount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Discount</span>
                    <span className="text-green-600">
                      -${(order.totalBeforeDiscount - order.total).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total</span>
                    <span className="text-xl font-bold text-blue-600">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
