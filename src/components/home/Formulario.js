import React from 'react';
import { TextField, TextareaAutosize, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';


const Formulario = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (

    <div className='goBeyond_form grid place-items-center w-full'>
      <div className="w-full max-w-5xl py-24 content-center justify-center">
         <hr class="division-line" />
         <div class="title">
            <p class="first-part">Solicita tu</p>
            <img src="/images/logo_no_icon_black.svg" alt="goBeyond-text" /><p class="last-part">Card</p>
          </div>
            <form>
              <legend class="container-title-1">Datos Personales</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">
                  <TextField label="Nombre" fullWidth InputLabelProps={{ shrink: true }}/>
                  <TextField label="Primer Apellido" fullWidth InputLabelProps={{ shrink: true }}/>
                  <TextField label="Segundo Apellido" fullWidth InputLabelProps={{ shrink: true }}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3">

                    <TextField
                      label="Fecha de Nacimiento"
                      type="date"
                      value={selectedDate}
                      onChange={(event) => handleDateChange(event.target.value)}
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                    <FormControl fullWidth>
                      <InputLabel>Estado Civil</InputLabel>
                      <Select>
                        <MenuItem value="soltero">Soltero</MenuItem>
                        <MenuItem value="casado">Casado</MenuItem>
                        <MenuItem value="divorciado">Divorciado</MenuItem>
                        <MenuItem value="viudo">Viudo</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField label="Nacionalidad" fullWidth InputLabelProps={{ shrink: true }}/>
                    <TextField label="Tipo de Identificación" fullWidth type="number" InputLabelProps={{ shrink: true }}/>
                    <TextField label="Identificación" fullWidth type="number" InputLabelProps={{ shrink: true }}/>
                    <TextField label="Teléfono" fullWidth type="number" InputLabelProps={{ shrink: true }}/>
                    <TextField label="Móvil" fullWidth type="number" InputLabelProps={{ shrink: true }}/>
                    <TextField label="Correo" fullWidth type="email" InputLabelProps={{ shrink: true }}/>
                </div>

                <legend>Ubicación</legend>
                <div className="grid grid-cols-2 gap-2">
                  <TextField label="País de Residencia" fullWidth InputLabelProps={{ shrink: true }}/>
                  <TextareaAutosize label="Dirección" rowsMin={3} fullWidth InputLabelProps={{ shrink: true }}/>
                  <TextField label="Provincia" fullWidth InputLabelProps={{ shrink: true }}/>
                  <TextField label="Cantón" fullWidth InputLabelProps={{ shrink: true }}/>
                  <TextField label="Distrito" fullWidth InputLabelProps={{ shrink: true }}/>
                  <FormControl fullWidth>
                    <InputLabel>Tipo de Residencia</InputLabel>
                    <Select>
                      <MenuItem value="casa propia">Casa Propia</MenuItem>
                      <MenuItem value="permanente">Permanente</MenuItem>
                      <MenuItem value="alquiler mensual">Alquiler Mensual</MenuItem>
                    </Select>
                  </FormControl>

                </div>
                <legend>Actividad económica</legend>
                <div className="grid grid-cols-2 gap-2">
                  <TextField label="Actividad Económica" fullWidth InputLabelProps={{ shrink: true }}/>
                  <TextField label="Profesión" fullWidthInputLabelProps={{ shrink: true }} />
                  <TextField label="Cargo" fullWidth InputLabelProps={{ shrink: true }}/>
                  <TextField label="Ingresos Mensuales" fullWidth type="number" InputLabelProps={{ shrink: true }}/>
                  <TextField label="Nivel de Estudios" fullWidth InputLabelProps={{ shrink: true }}/>
                </div>
                <legend>Documentos</legend>
                <div className="grid grid-cols-2 gap-2">
                  <TextField
                    label="Fecha de Expiración Identificación"
                    type="date"
                    value={selectedDate}
                    onChange={(event) => handleDateChange(event.target.value)}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                  <TextField label="Autoridad Expedidora" fullWidth InputLabelProps={{ shrink: true }}/>

                  {/* Agregar los campos de fotos */}


                </div>

                <legend>Información Adicional</legend>
                <div className="grid grid-cols-1 gap-1">
                  <FormControl fullWidth>
                    <InputLabel>Moneda de la Tarjeta Gobeyond</InputLabel>
                    <Select>
                      <MenuItem value="dolares">Dólares</MenuItem>
                      <MenuItem value="colones">Colones</MenuItem>
                    </Select>
                  </FormControl>
                </div>


                <div className="grid grid-cols-1 gap-1">
                  <FormControlLabel
                  control={<Checkbox />}
                  label="Estoy de acuerdo con los términos"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Manifiesto mi consentimiento"
                  />
                </div>



                <Button className="bg-black text-white font-bold py-2 px-4 rounded" type="submit">
                  Enviar
                </Button>
            </form>
      </div>
    </div>





  );
};

export default Formulario;
