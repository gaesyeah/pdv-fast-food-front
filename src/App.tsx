import { Navigate, Route, Routes } from "react-router-dom";
import { AppContainer } from "./styles/AppContainer";
import { route } from "./utils/routes";
import { FoodsPage } from "./pages/FoodsPage/FoodsPage";
import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
import { KitchenPage } from "./pages/KitchenPage/KitchenPage";
import { PickupPage } from "./pages/PickupPage/PickupPage";
import { Header } from "./components/Header/Header";

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={route.foods} />}></Route>
        <Route path={route.foods} element={<FoodsPage />}></Route>
        <Route path={route.payment} element={<PaymentPage />}></Route>
        <Route path={route.kitchen} element={<KitchenPage />}></Route>
        <Route path={route.pickup} element={<PickupPage />}></Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
