import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailspage from "./pages/ProductDetails";

// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path='/products' element={<ProductsPage />} />

//   </Route>
// );

const router = createBrowserRouter([
  {path:'/',
    element: <RootLayout />, 
    errorElement:<ErrorPage />,
    children: [
    {index: true ,path: '',element: <HomePage/> },
    {path: 'products', element: <ProductsPage />},
    { path: 'products/:productId', element: <ProductDetailspage />}
  ]}
  
]);

// const router = createBrowserRouter(routerDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;