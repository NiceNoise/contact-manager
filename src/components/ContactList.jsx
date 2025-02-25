import PropTypes from 'prop-types';
import '../App.css';

const ContactList = ({ contact }) => {

    const { id, name, phone, email } = contact;

    return (
        <div className="contact-card">
            <div className="card-header">
                <h2>Información de Contacto</h2>
            </div>

            <div className="card-body">
                <div className="contact-item">
                    <span className="contact-label">ID:</span>
                    <div className="contact-value">{id}</div>
                </div>
            
                <div className="contact-item">
                    <span className="contact-label">Nombre:</span>
                    <div className="contact-value">{name}</div>
                </div>
            
                <div className="contact-item">
                    <span className="contact-label">Teléfono:</span>
                    <div className="contact-value">{phone}</div>
                </div>
            
                <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <div className="contact-value">{email}</div>
                </div>
            </div>
        </div>
    );
};

ContactList.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ContactList;