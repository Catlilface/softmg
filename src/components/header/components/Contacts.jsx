const Contacts = (props) => (
  <div className="main-nav-contacts">
    {
      props.whatsApp.show && ( <a href={ props.whatsApp.link }><img src="src/assets/whatsapp.svg" /></a> )
    }
    {
      props.telegram.show && ( <a href={ props.whatsApp.link }><img src="src/assets/telegram.svg" /></a> )
    }
    {
      props.email.show && ( <a href={ `mailto:${ props.email.link }` }>{ props.email.link }</a> )
    }
    {
      (props.email.show && props.phone.show) && ( <img width="2" src="src/assets/border.svg" /> )
    }
    {
      props.phone.show && ( <a href={ `tel:${ props.phone.link }` }>{ props.phone.link }</a> )
    }
    {
      props.request.show && ( <a href={ props.request.link } className="leave-query">Оставить заявку</a> )
    }
  </div>
)

export default Contacts