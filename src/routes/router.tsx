import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "@/components/navbar";

const SignUp = lazy(() => import("@/pages/signup"));
const Login = lazy(() => import("@/pages/login"));
const Home = lazy(() => import("@/pages/home"));
const Cart = lazy(() => import("@/pages/cart"));
const Orders = lazy(() => import("@/pages/orders"));
type Props = {};

const RenderProtected = ({ children }: { children: React.ReactNode }) => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

const Router = (props: Props) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Authentication */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RenderProtected>
                <Home />
              </RenderProtected>
            }
          />
          <Route
            path="/cart"
            element={
              <RenderProtected>
                <Cart />
              </RenderProtected>
            }
          />
          <Route
            path="/orders"
            element={
              <RenderProtected>
                <Orders />
              </RenderProtected>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
