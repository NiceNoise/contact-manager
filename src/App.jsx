
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import ContactPinned from "./components/ContactPinned";
import contacts from './data/contacts.json';



const App = () => {

  const agenda=contacts;

  return (
    <div className="d-flex flex-column vh-100">
      {/* Cabecera fija de 50px */}
      <header style={{ height: "50px" }}>
        <Header name="Administrador de Contactos" />
      </header>

      {/* Main con contenedores responsivos */}
      <main className="flex-grow-1 p-3" style={{ backgroundColor: "#edf4fa" }}>
        <div className="container-fluid">
          <div className="row">
            {/* Primer contenedor - En pantallas medianas y grandes ocupará 6 columnas (mitad) */}
            {/* En pantallas pequeñas ocupará 12 columnas (toda la anchura) */}
            <div className="col-12 col-md-3 mb-3 mb-md-0">
              <div
                className="border rounded p-3"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <h5 style={{ color: "#244ea3" }}>Contacto Destacado</h5>
                <ContactPinned contact={agenda[1]} />
              </div>
            </div>

            {/* Segundo contenedor - En pantallas medianas y grandes ocupará 6 columnas (mitad) */}
            {/* En pantallas pequeñas ocupará 12 columnas (toda la anchura) */}
            <div className="col-12 col-md-4">
              <div
                className="border rounded p-3"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <h5 style={{ color: "#244ea3" }}>Mis Contactos</h5>
                <ContactList agenda={agenda}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
