import { useState } from 'react';

function ContactRow(props){

    const {id,name,phone,email,type}=props;

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
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactRow;
