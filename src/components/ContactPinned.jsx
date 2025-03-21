function ContactPinned({contact}) {

  const {key,  name, phone, email, type } = contact;
  
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

    if (key === 0) {
      return (
        <div className="alert alert-info">
          No hay contacto destacado
        </div>
      );
    }
    else{
      return (
        <div className="card mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <span>{name}</span>
            <i className={`bi ${getIcon(type)}`}></i>
          </div>
          <div className="card-body">
            <div className="mb-2">
              <strong>Phone:</strong> {phone}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {email}
            </div>
            <div className="mb-2">
              <strong>Type:</strong> {type}
            </div>
          </div>
        </div>
      );
    }    
}

export default ContactPinned;