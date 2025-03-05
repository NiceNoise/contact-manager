function Menu({ name, url }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={url} style={{ color: '#244ea3' }}>{name}</a>
    </li>
  );
}

export default Menu
