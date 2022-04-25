import React from 'react';

export  const Contact = () => {
  return (
    <>
         <div id="contact"></div>

<div className="maia font fontColorPink langEn" data-aos="zoom-in" data-aos-duration="500">
    <h1>Contact</h1>
</div>
<div className="maia font fontColorPink langEs hidden" data-aos="zoom-in" data-aos-duration="500"  >
    <h1>Contacto</h1>
</div>

<div className="font fontColorLightMode text langEn" data-aos="fade-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-duration="500">
    <p>Any Questions?</p> <a className="fontColorPink" href="mailto:contacto@maia.com.ar?&subject=From Website">
    Contact me!
</a> 
</div>

<div className="font fontColorLightMode text langEs hidden" id="langEs" data-aos="fade-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-duration="500">
<p>¿Alguna pregunta?</p> <a className="fontColorPink" href="mailto:contacto@maia.com.ar?&subject=Del sitio web">
    ¡Contactame!
</a> 

</div>
    </>
  );
}
