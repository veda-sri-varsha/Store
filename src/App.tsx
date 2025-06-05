import { RouterProvider } from "react-router";
import { router } from "../src/routers/index"; 

export default function App() {
  return <RouterProvider router={router} />;
}
