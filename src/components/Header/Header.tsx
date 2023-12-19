import { Logo, HRoutes, StyledHeader, HRoute } from "./styles";
import hamburgerIcon from "./../../assets/hamburgerIcon.png";
import { Link, useLocation } from "react-router-dom";
import { route } from "../../utils/routes";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <Logo>
        <div>
          <img src={hamburgerIcon}></img>
        </div>
        <h1>fastfood</h1>
      </Logo>
      <HRoutes>
        <HRoute selected={pathname === `/${route.foods}`}>
          <Link to={`/${route.foods}`}>Pedidos</Link>
        </HRoute>
        <HRoute selected={pathname === `/${route.kitchen}`}>
          <Link to={`/${route.kitchen}`}>Cozinha</Link>
        </HRoute>
        <HRoute selected={pathname === `/${route.pickup}`}>
          <Link to={`/${route.pickup}`}>Retirada</Link>
        </HRoute>
      </HRoutes>
    </StyledHeader>
  );
};

export default Header;
