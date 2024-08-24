import Login from "./pages/login";
import Home from "./pages/home";
import Products from "./pages/products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Register from "./pages/register";

const queryClient = new QueryClient();

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/products/:id",
      element: <Products />,
    },
    // {
    //   path: "/products/id",
    //   element: <Details />,
    // },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
