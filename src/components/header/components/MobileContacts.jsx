export const MobileContacts = (props) => {

  const options = props.contacts
  
  return (
    <div style={{ right: props.margin }} className="mobile-contacts">
      <span>Связаться с нами</span>
      <div className="communicate">
        {
          options.phone.show &&
            <a href={ 'tel:' + options.phone.link } className="option">
              <img src="./src/assets/bobile-phone.svg" />
              <span>Позвонить</span>
            </a>
        }
        {
          options.email.show && 
            <a href={ 'mailto:' + options.email.link } className="option">
              <img src="./src/assets/bobile-write.svg" />
              <span>Написать</span>
            </a>
        }
        {
          options.whatsApp.show &&
            <a href={ options.whatsApp.link } className="option">
              <img src="./src/assets/bobile-whatsapp.svg" />
              <span>WhatsApp</span>
            </a>
        }
        {
          options.telegram.show &&
            <a  href={ options.telegram.link } className="option">
              <img src="./src/assets/bobile-telega.svg" />
              <span>Написать</span>
            </a>
        }
        <a href="#" className="leave-query mobile">Оставить заявку</a>
      </div>
    </div>
  )
}

export default MobileContacts 