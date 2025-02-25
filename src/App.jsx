import React, { useState } from 'react';
import ContactList from './components/ContactList';
import contacts from './data/contacts';
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar contactos según término de búsqueda
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Directorio de Contactos</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar contactos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </header>
      
      <div className="contacts-container">
        {filteredContacts.length > 0 ? (
          filteredContacts.map(contact => (
            <ContactList key={contact.id} contact={contact} />
          ))
        ) : (
          <p className="no-results">No se encontraron contactos</p>
        )}
      </div>
    </div>
  );
}

export default App;