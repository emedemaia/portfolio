import React from 'react';
import "../styles/Main.css"

export  const Contact = () => {
  return (
    <>

<div className="font langEn">
  <a  href="mailto:contacto@maia.com.ar?&subject=From Website">
    <button className="btn fontColorPink btnLightMode">Contact me!</button>
</a> 
</div>

<div className="font langEs hidden" id="langEs" >
 <a href="mailto:contacto@maia.com.ar?&subject=Del sitio web">
<button className="btn fontColorPink btnLightMode">¡Contactame!</button>
</a> 

</div>
    </>
  );
}
