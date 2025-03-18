import Menu from "./Menu";

const Header = ({name}) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-2" style={{ backgroundColor: '#ebebed', minHeight: '50px' }}>
      <div className="ms-3">
        <h5 className="mb-0 fw-bold" style={{ color: '#244ea3' }}>{name}</h5>
      </div>
      <nav>
        <ul className="nav me-3 mb-0">
          <Menu name="Contactos" url="#contacto" />
          <Menu name="Nuevo" url="#nuevo" />
          <Menu name="Notas" url="#notas" />
          <Menu name="Calendario" url="#calendario" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;