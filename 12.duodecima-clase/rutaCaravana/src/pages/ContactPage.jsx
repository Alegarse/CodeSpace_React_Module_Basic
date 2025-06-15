import React from 'react'
import MenuComponent from '../components/MenuComponent'

const ContactPage = () => {
  return (
    <div>
      <MenuComponent />
      <h1>Página de contacto</h1>
      <div className="contact-container">
          <div className="input-row">
            <span>Cristian Codespace</span>
          </div>
          <div className="input-row">
            <span>Preferencias: Planchar la ropa</span>
          </div>
          <div className="input-row">
            <span>Programador top</span>
          </div>
          <div className="input-row">
            <span>Dice que nos dará un paseo en la caravana</span>
          </div>

          <div className="error_message">\u200B</div>
    </div>
    </div>
  )
}

export default ContactPage