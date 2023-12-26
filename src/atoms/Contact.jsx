import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar el formulario, como hacer una solicitud a un servidor o mostrar los datos en la consola.
    console.log(formData);
  };

  return (
    <div className="contact">
      <h2 className='h2-contact'>Contacto</h2>
      <p className='p-contact'>Por favor, completa el formulario con tus datos para que podamos ponernos en contacto con vos.</p>
      <form className='form-contact' onSubmit={handleSubmit}>
        <label className='label-contact'>
          Nombre y Apellido:
          <input className='input-contact'
            placeholder='Ingresa tu nombre'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input className='input-contact'
            placeholder='Ingresa tu apellido'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-contact'>
          Email:
          <input className='input-contact'
            placeholder='Ingresa tu email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-contact'>
          Celular:
          <input className='input-contact'
            placeholder='Tu Nro de Celular'
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label className='label-contact'>
          Consulta:
          <textarea className='textarea-contact'
            placeholder='Detalla tu consulta'
            name="inquiry"
            value={formData.inquiry}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button className='btn-contact' type="submit">Enviar</button>
      </form>
    </div>
  );
};

