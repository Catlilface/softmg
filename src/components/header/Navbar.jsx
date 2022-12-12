import Logo from "./components/Logo"
import Contacts from "./components/Contacts"
import Menu from "./components/Menu"
import data from "./navbar.json"
import propTypes from 'prop-types'
import '../../css/index.css'
import '../../css/adaptive.css'

export const Navbar = ({ 
                  displayTelegram, 
                  telegramLink, 
                  displayWhatsApp, 
                  whatsAppLink, 
                  displayPhone, 
                  phoneNumber, 
                  displayEmail, 
                  emailAddress, 
                  displayRequest, 
                  requestLink 
                }) => (
  <nav className="main-menu">
    <div className="main-nav">
      <Logo src="../src/assets/softmg logo.svg" />
      <Menu menu={ data } contacts={{ 
      whatsApp: {
        show: displayWhatsApp,
        link: whatsAppLink
      },
      telegram: {
        show: displayTelegram,
        link: telegramLink
      },
      email: {
        show: displayEmail,
        link: emailAddress
      },
      phone: {
        show: displayPhone,
        link: phoneNumber
      },
      request: {
        show: displayRequest,
        link: requestLink
      } }} />
    </div>
    <Contacts 
      whatsApp = {{
        show: displayWhatsApp,
        link: whatsAppLink
      }}
      telegram = {{
        show: displayTelegram,
        link: telegramLink
      }}
      email = {{
        show: displayEmail,
        link: emailAddress
      }}
      phone = {{
        show: displayPhone,
        link: phoneNumber
      }}
      request = {{
        show: displayRequest,
        link: requestLink
      }}
    />
  </nav>
)

Navbar.propTypes = {
  displayTelegram: propTypes.bool.isRequired,
  displayWhatsApp: propTypes.bool.isRequired,
  displayPhone: propTypes.bool.isRequired,
  displayEmail: propTypes.bool.isRequired,
  displayRequest: propTypes.bool.isRequired,
  telegramLink: propTypes.string.isRequired,
  whatsAppLink: propTypes.string.isRequired,
  phoneNumber: propTypes.string.isRequired,
  emailAddress: propTypes.string.isRequired,
  requestLink: propTypes.string.isRequired
}

Navbar.defaultProps = {
  displayTelegram: true,
  displayWhatsApp: true,
  displayPhone: true,
  displayEmail: true,
  displayRequest: true,
  telegramLink: "#",
  whatsAppLink: "#",
  phoneNumber: "+7 (495) 978-15-05",
  emailAddress: "support@softmg.ru",
  requestLink: "#"
}