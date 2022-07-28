import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const router = useRouter();
  const filtros = router.query;
  return ( 
    <div>
      busqueda de productos: 
      {
        filtros.id && (
          <p> 
            ID: {filtros.id}
          </p>
        )
      }
      {
        filtros.envio && (
          <p> 
            Envio: {filtros.envio}
          </p>
        )
      }
      {
        filtros.ciudad && (
          <p> 
            Ciudad: {filtros.ciudad}
          </p>
        )
      }
    </div>
   );
}
 
export default ProductItem;