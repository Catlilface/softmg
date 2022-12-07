import Logo from "./components/Logo"
import Contacts from "./components/Contacts"
import Menu from "./components/Menu"
import MobileMenu from "./components/MobileMenu"
import data from "./navbar.json"

const Navbar = () => (
  <nav className="main-menu">
    <div className="main-nav">
      <Logo src="../src/assets/softmg logo.svg" />
      <Menu menu={ data } />
    </div>
    <Contacts 
      whatsApp = {{
        show: true,
        link: "#"
      }}
      telegram = {{
        show: true,
        link: "#"
      }}
      email = {{
        show: true,
        link: "support@softmg.ru"
      }}
      phone = {{
        show: true,
        link: "+7 (495) 978-15-05"
      }}
      request = {{
        show: true,
        link: "#"
      }}
    />
  </nav>
)

export default Navbar