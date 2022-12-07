const MobileContacts = (props) => {

  const options = {
    phone: {
      show: true,
      link: '+7 (495) 978-15-05'
    },
    email: {
      show: true,
      link: 'support@softmg.ru'
    },
    whatsapp: {
      show: true,
      link: '#'
    },
    telegram: {
      show: true,
      link: '#'
    }
  }
  
  return (
    <div style={{ right: props.margin }} className="mobile-contacts">
      <span>Связаться с нами</span>
      <div className="communicate">
        <a href="" className="option">
          <img src="./src/assets/bobile-phone.svg" />
          <span>Позвонить</span>
        </a>
        <a className="option">
          <img src="./src/assets/bobile-write.svg" />
          <span>Написать</span>
        </a>
        <a className="option">
          <img src="./src/assets/bobile-whatsapp.svg" />
          <span>WhatsApp</span>
        </a>
        <a className="option">
          <img src="./src/assets/bobile-telega.svg" />
          <span>Написать</span>
        </a>
        <a href="#" className="leave-query mobile">Оставить заявку</a>
      </div>
    </div>
  )
}

export default MobileContacts 