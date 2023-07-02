import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>HYGGE CLOTHES</h3>
      <div p-0 m-0>
        <button class="btn btn-primary purple-btn p-1 m-1">Prendas</button>
        <button class="btn btn-primary purple-btn p-1 m-1">Accesorios</button>
        <button class="btn btn-primary purple-btn p-1 m-1">
          Sobre Nosotros
        </button>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
