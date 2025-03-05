import ContactRow from './ContactRow';
import contacts from '../data/contacts.json';

function ContactList(){
    return (
        <div>
            {contacts.map(contact => (
                <ContactRow
                    key={contact.key}
                    id={contact.key}
                    name={contact.name}
                    phone={contact.phone}
                    email={contact.email}
                    type={contact.type}
                />
        ))}
        </div>
    );
};

export default ContactList;