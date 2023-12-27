export const Header = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="header">
      <h1 className="h1-header">
        Programando!
      </h1>
      <nav className="navbar-header">
        <ul className="ul-header">
          <li>
            <a href="#inicio" onClick={() => scrollToElement('inicio')}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#cursos" onClick={() => scrollToElement('cursos')}>
              Cursos
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={() => scrollToElement('contacto')}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
