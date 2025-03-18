import { useState } from 'react';


function ContactRow({contact }) {
  const { name, phone, email, type } = contact;

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'social':
        return 'bi-people';
      case 'trabajo':
        return 'bi-briefcase';
      case 'familia':
        return 'bi-house';
      default:
        return 'bi-person';
    }
  };

  const handleHighlightClick = () => {
    console.log(`Contacto destacado: ${name}`);
    // Aquí puedes añadir la lógica para destacar el contacto
  };

  const handleDeleteClick = () => {
    console.log(`Contacto eliminado: ${name}`);
    // Aquí puedes añadir la lógica para eliminar el contacto
  };

  return (
    <div className="card mb-1">
      <div className="card-header d-flex justify-content-between align-items-center" onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
        <span>{name}</span>
        <i className={`bi ${getIcon(type)}`}></i>
      </div>
      <div className={`collapse ${isOpen ? 'show' : ''}`}>
        <div className="card-body">
          <div className="mb-1">
            <strong>Phone:</strong> {phone}
          </div>
          <div className="mb-1">
            <strong>Email:</strong> {email}
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary btn-sm me-2" onClick={handleHighlightClick}>
              <i className="bi bi-star-fill"></i> Destacar
            </button>
            <button className="btn btn-primary btn-sm" onClick={handleDeleteClick}>
              <i className="bi bi-trash"></i> Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default ContactRow;