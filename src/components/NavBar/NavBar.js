import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3 class="bg-black text-white">HYGGE CLOTHES</h3>
      <div class="p-0 m-0 justify-content-center align-items-center">
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
