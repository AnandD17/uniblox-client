import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TOrder } from "@/types/order";
import dayjs from "dayjs";
import React from "react";

type Props = {};

const Orders = (props: Props) => {
  const orders: TOrder[] = [
    {
      _id: "1",
      userId: "1",
      items: [
        {
          item: {
            _id: "1",
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description: "A backpack which is fits 15 laptops",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: {
              rate: 3.9,
              count: 120,
            },
          },
          quantity: 1,
        },
      ],
      discount: {
        code: "123456",
        description: "10% off",
        discount: 10,
        nthOrder: 1,
        isActive: true,
      },
      totalBeforeDiscount: 0,
      total: 0,
      createdAt: new Date(),
    },
  ];
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
                  Order #{order.userId} -{" "}
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
                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <span className="text-gray-600">Total</span>
                  <span className="text-xl font-bold text-blue-600">
                    ${order.total.toFixed(2)}
                  </span>
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
