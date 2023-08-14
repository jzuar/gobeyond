const featuresData = [
    {title : "Expertise", description : "We have team of experienced software developers who are skilled in various programming languages, software development methodologies, and tools."},
    {title : "Custom software", description : "We develop custom software solutions based on the specific needs of its clients."},
    {title : "Maintenance & Support:", description : "We offer ongoing application maintenance and support services to its clients. This might include bug fixes, software updates, and technical support."},
    {title : "Quality assurance and testing", description : "A team of QA professionals who are responsible for ensuring that the software developed meets the highest quality standards. "},
    {title : "Agile development methodologies", description : "We use Agile development methodologies such as Scrum or Kanban to manage their software development projects. This allows for greater collaboration and flexibility throughout the development process."},
    {title : "Data security and privacy", description : "A strong focus on data security and privacy, and should implement appropriate measures to protect client data and ensure compliance with relevant regulations such as GDPR or CCPA."},
]

function Features(){
    return(
        <>
        <div className="attention grid place-items-center w-full">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="copy-title">¡ATENCIÓN!</h1>
                <h3 class="copy-subtitle">
                Leer completo antes de comenzar
                </h3>
                <ul class="items">
                    <li>Si el tipo de identificación es pasaporte, la imagen que va a subir debe ser de la portada y parte donde se encuentra la fotografía..</li>
                    <li>En el caso de menores de edad se debe completar y firmar la autorización de menores e incluirla en el espacio de “Documentos Adicionales” con fotografía del documento de identificación del tutor.</li>
                    <li>El formato de la imagen a cargar solo puede ser JPEG o PNG.</li>
                    <li>El nombre del archivo de las fotografías NO debe contener espacios en el archivo adjunto.</li>
                    <li>Solo se permiten letras o números (excepto la "Ñ" o "ü"), sin tildes y sin carácteres especiales.</li>
                    <li>Su solicitud será tomada en cuenta una vez haya completado correctamente el formulario y realizado el pago correspondiente.</li>
                </ul>
                <picture class="copy-logo">
                    <img src="/images/logo_icon_black.svg" alt="copy logo black" />
                </picture>
            </div>
        </div>
        </>
    )
}

export default Features
