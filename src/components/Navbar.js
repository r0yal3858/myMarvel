import "./navbar.css";
export const Navbar = () => (
  <>
    <div className="navbar">
      <div className="navbar__logo">
        <p>MARVEL</p>
      </div>
      <div className="navbar__list_container">
        <ul className="navbar__list">
          <li>
            <a href="/characters" className="navbar__list-link">
              CHARACTERS
            </a>
          </li>
          <li>
            <a href="/comics" className="navbar__list-link">
              COMICS
            </a>
          </li>
          <li>
            <a href="/events" className="navbar__list-link">
              EVENTS
            </a>
          </li>
          <li>
            <a href="/series" className="navbar__list-link">
              SERIES
            </a>
          </li>
          <li>
            <a href="/stories" className="navbar__list-link">
              STORIES
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);
