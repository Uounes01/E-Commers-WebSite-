import { useState, useEffect } from 'react';

const Header = ({ backCol }) => {
  const [changeHeader, setChangeHeader] = useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeaderColor);
    return () => {
      window.removeEventListener('scroll', changeHeaderColor);
    };
  }, []);

  return (
    <header className={`header ${changeHeader ? 'scroll-header' : ''}`} id="header" style={{ backgroundColor: backCol ?? "inherit" }}>
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img src='./media/ECOCART-MUCH-BETTER-bg-removed.png' alt='logo' width={200} height={100} />
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <>{

              backCol ? (
                <>

                  <a href="/" className="nav__link active-link">Home</a>
                </>
              ) : (
                <>
                  <li className="nav__item">
                    <a href="#" className="nav__link active-link">Home</a>
                  </li>
                  <li className="nav__item">
                    <a href="#products" className="nav__link">Products</a>
                  </li>
                  <li className="nav__item">
                    <a href="#place" className="nav__link">Place</a>
                  </li>
                  <li className="nav__item">
                    <a href="#blog" className="nav__link">Blog</a>
                  </li>
                </>
              )
            }
            </>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
