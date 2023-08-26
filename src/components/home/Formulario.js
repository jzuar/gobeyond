import React, { useState } from 'react';
import { TextField, TextareaAutosize, Button, FormControl, InputLabel, Input, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import axios from 'axios';

const Formulario = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [frontPhoto, setFrontPhoto] = useState(null);
  const [backPhoto, setBackPhoto] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleFrontPhotoChange = (file) => {
    setFrontPhoto(file);
  };

  const handleBackPhotoChange = (file) => {
    setBackPhoto(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();

      //datos personales
      formData.append('nombre', event.target.nombre.value);
      formData.append('primerApellido', event.target.primerApellido.value);
      formData.append('segundoApellido', event.target.segundoApellido.value);

      //datos personales
      formData.append('fechaNacimiento', event.target.fechaNacimiento.value);
      formData.append('estadoCivil', event.target.estadoCivil.value);
      formData.append('nacionalidad', event.target.nacionalidad.value);
      formData.append('tipoIdentificacion', event.target.tipoIdentificacion.value);
      formData.append('identificacion', event.target.identificacion.value);
      formData.append('telefono', event.target.telefono.value);
      formData.append('movil', event.target.movil.value);
      formData.append('correo', event.target.correo.value);


      //ubicacion
      formData.append('actividadEconomica', event.target.actividadEconomica.value);
      formData.append('profesion', event.target.profesion.value);
      formData.append('cargo', event.target.cargo.value);
      formData.append('canton', event.target.canton.value);
      formData.append('distrito', event.target.distrito.value);
      formData.append('tipoResidencia', event.target.tipoResidencia.value);

      //actividad economica
      formData.append('pais', event.target.pais.value);
      formData.append('direccion', event.target.direccion.value);
      formData.append('cargo', event.target.provincia.value);
      formData.append('ingresosMensuales', event.target.ingresosMensuales.value);
      formData.append('nivelEstudio', event.target.nivelEstudio.value);


      //documentos
      formData.append('fechaExpiracion', event.target.fechaExpiracion.value);
      formData.append('autoridadExpedidora', event.target.autoridadExpedidora.value);
      formData.append('frontPhoto', event.target.frontPhoto.files[0]);
      formData.append('backPhoto', event.target.backPhoto.files[0]);
      formData.append('pagoPhoto', event.target.pagoPhoto.files[0]);



      // Agrega aquí más campos de formulario según sus nombres
      formData.append('monedaTarjeta', event.target.monedaTarjeta.value);
      formData.append('consentimiento', event.target.consentimiento.value);
      formData.append('terminos', event.target.terminos.value);

      //const response = await axios.post('http://localhost:8080/send-email', formData);
      const response = await axios.post('https://beyondbe-c5805b0ca2ed.herokuapp.com/send-email', formData, {
        headers: {
        'Content-Type': 'multipart/form-data',
      },
      });

      if (response.status === 200) {
        console.log('Datos enviados exitosamente');
        // Realiza acciones adicionales después del envío exitoso si es necesario
      } else {
        console.error('Error al enviar los datos');
        // Maneja el error si la solicitud no fue exitosa
      }
    } catch (error) {
      console.error('Error de red', error);
      // Maneja los errores de red
    }
  };

  return (
    <div className="goBeyond_form bg_page grid place-items-center w-full">
      <div className="w-full max-w-5xl content-center justify-center">
         <hr class="division-line" />
         <div class="title text-4xl sm:text-7xl">
            <h3 class="first-part">Solicita tu<br/>
            <img src="/images/logo_no_icon_black.svg" alt="goBeyond-text" /> Card</h3>
          </div>
            <form onSubmit={handleSubmit} className='px-5 sm:px-1'>
              <div className='formulario-wrapper'>
                  <legend class="container-title-1 text-2xl sm:text-4xl">Datos Personales</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">
                    <TextField label="Nombre" fullWidth  name="nombre"/>
                    <TextField label="Primer Apellido" fullWidth  name="primerApellido"/>
                    <TextField label="Segundo Apellido" fullWidth  name="segundoApellido"/>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">

                      <TextField
                        label="Fecha de Nacimiento"
                        type="date"
                        value={selectedDate}
                        onChange={(event) => handleDateChange(event.target.value)}
                        InputLabelProps={{ shrink: true }}
                        name="fechaNacimiento"
                        fullWidth
                      />
                      <FormControl fullWidth>
                        <InputLabel>Estado Civil</InputLabel>
                        <Select name="estadoCivil">
                          <MenuItem value="soltero">Soltero</MenuItem>
                          <MenuItem value="casado">Casado</MenuItem>
                          <MenuItem value="divorciado">Divorciado</MenuItem>
                          <MenuItem value="viudo">Viudo</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField label="Nacionalidad" fullWidth  name="nacionalidad"/>
                      <FormControl fullWidth>
                        <InputLabel>Tipo de Identificación</InputLabel>
                        <Select name="tipoIdentificacion">
                          <MenuItem value="personaFisicaNacional">Persona Fisica Nacional</MenuItem>
                          <MenuItem value="dimax">Dimax</MenuItem>
                          <MenuItem value="gobierno">Gobierno</MenuItem>
                          <MenuItem value="institucionesAutonomas">Instituciones Autonomas</MenuItem>
                          <MenuItem value="pasaporte">Pasaporte</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField label="Identificación" fullWidth type="number"  name="identificacion"/>
                      <TextField label="Teléfono" fullWidth type="number"  name="telefono"/>
                      <TextField label="Móvil" fullWidth type="number"  name="movil"/>
                      <TextField label="Correo" fullWidth type="email"  name="correo"/>
                  </div>

                  <legend class="container-title-1 text-2xl sm:text-4xl">Ubicación</legend>
                  <div className="grid grid-cols-2 gap-2">
                    <TextField label="País de Residencia" fullWidth  name="pais"/>
                    <TextField label="Dirección" fullWidth  name="direccion"/>
                    <TextField label="Provincia" fullWidth  name="provincia"/>
                    <TextField label="Cantón" fullWidth  name="canton"/>
                    <TextField label="Distrito" fullWidth  name="distrito"/>
                    <FormControl fullWidth>
                      <InputLabel>Tipo de Residencia</InputLabel>
                      <Select name="tipoResidencia">
                        <MenuItem value="casa propia">Casa Propia</MenuItem>
                        <MenuItem value="permanente">Permanente</MenuItem>
                        <MenuItem value="alquiler mensual">Alquiler Mensual</MenuItem>
                      </Select>
                    </FormControl>

                  </div>
                  <legend class="container-title-1 text-2xl sm:text-4xl">Actividad económica</legend>
                  <div className="grid grid-cols-2 gap-2">
                    <TextField label="Actividad Económica" fullWidth  name="actividadEconomica"/>
                    <TextField label="Profesión" fullWidth name="profesion" />
                    <TextField label="Cargo" fullWidth  name="cargo"/>
                    <TextField label="Ingresos Mensuales" fullWidth type="number"  name="ingresosMensuales"/>
                    <TextField label="Nivel de Estudios" fullWidth  name="nivelEstudio"/>
                  </div>
                  <legend class="container-title-1 text-2xl sm:text-4xl">Documentos</legend>
                  <div className="grid grid-cols-2 gap-2">
                    <TextField
                      label="Fecha de Expiración Identificación"
                      type="date"
                      value={selectedDate}
                      onChange={(event) => handleDateChange(event.target.value)}
                      fullWidth
                      InputLabelProps={{ shrink: true }}
                      name="fechaExpiracion"
                    />
                    <TextField label="Autoridad Expedidora" fullWidth  name="autoridadExpedidora"/>

                    <label htmlFor="frontPhotoInput" className='w-full p-4 bg-black rounded-md shadow-md text-white text-center cursor-pointer transition duration-300 ease-in-out hover:text-xl'>
                      <input
                        style={{ display: 'none' }}
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleFrontPhotoChange(event.target.files[0])}
                        name="frontPhoto"
                        id="frontPhotoInput"
                        className="mt-1 p-2 border rounded-md bg-black hover:bg-black-700 text-white"
                      />

                      <Button color="secondary" variant="contained" component="span">
                        Foto delantera de identificacion
                      </Button>
                    </label>

                    <label htmlFor="backPhotoInput" className='w-full p-4 bg-black rounded-md shadow-md text-white text-center cursor-pointer transition duration-300 ease-in-out hover:text-xl'>
                        <input
                          style={{ display: 'none' }}
                          type="file"
                          accept="image/*"
                          onChange={(event) => handleFrontPhotoChange(event.target.files[0])}
                          name="backPhoto"
                          id="backPhotoInput"
                          className="mt-1 p-2 border rounded-md bg-black hover:bg-black-700 text-white"
                        />

                        <Button color="secondary" variant="contained" component="span">
                          Foto posterior de identificacion
                        </Button>
                    </label>
                  </div>

                  <legend class="container-title-1 text-2xl sm:text-4xl">Información Adicional</legend>
                  <div className="grid grid-cols-2 gap-2">
                    <FormControl fullWidth>
                      <InputLabel>Moneda de la Tarjeta Gobeyond</InputLabel>
                      <Select name="monedaTarjeta">
                        <MenuItem value="dolares">Dólares</MenuItem>
                        <MenuItem value="colones">Colones</MenuItem>
                      </Select>
                    </FormControl>
                  </div>


                  <div className="grid grid-cols-2 gap-2">
                    <FormControlLabel
                    control={<Checkbox />}
                    label="Estoy de acuerdo con los términos"
                    name="terminos"
                    />
                    <br/>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Manifiesto mi consentimiento"
                      name="consentimiento"
                    />


                  </div>
                </div>


                <div className="flex justify-center pb-12 sm:pb-24">
                  <footer className="footer goBeyond_footer p-10 max-w-5xl   text-base-content">
                    <div className="grid my-10 md:grid-cols-2">
                      <div className="grid grid-cols-1 gap-4 img-left">
                        <h2 className="footer-title bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
                          Enlaces de pago
                        </h2>
                        <p>Costo de la tarjeta $49.99</p>
                        <p>0x8Dc782d85a6040870B9CCa1D09b13a9bbE0563B4</p>
                        <img
                          className="max-w-full h-auto mt-2 w-16 md:w-32 lg:w-48"
                          src="/images/qr_usdt.svg"
                          alt="QR USDT"
                        />
                        <p>1JRXH6NfF1sjDqXJRG3XMKw18yGngvseZa</p>
                        <img
                          className="max-w-full h-auto mt-2 w-16 md:w-32 lg:w-48"
                          src="/images/qr_bitcoin.svg"
                          alt="QR BITCOIN"
                        />
                      </div>
                      <div className="img-right">

                        <label htmlFor="pagoPhotoInput" className='w-full p-4 bg-black rounded-md shadow-md text-white text-center cursor-pointer transition duration-300 ease-in-out hover:text-xl'>
                          <input
                            style={{ display: 'none' }}
                            type="file"
                            accept="image/*"
                            onChange={(event) => handleFrontPhotoChange(event.target.files[0])}
                            name="pagoPhoto"
                            id="pagoPhotoInput"
                            className="mt-1 p-2 border rounded-md bg-black hover:bg-black-700 text-white"
                          />

                        <Button color="secondary" variant="contained" component="span">
                          Foto comprobante de pago
                        </Button>
                       </label>
                      </div>
                    </div>


                  </footer>
                </div>

                <Button className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded" type="submit">
                  Enviar
                </Button>
            </form>
      </div>
    </div>





  );
};

export default Formulario;
