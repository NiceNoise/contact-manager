
import ContactRow from './ContactRow';

function ContactList({agenda}) {

    
    return (
        <div>
            {agenda.map(contact => (
                <ContactRow key={contact.key} contact={contact} />
        ))}
        </div>
    );
};

export default ContactList;