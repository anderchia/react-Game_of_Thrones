
import React, {useEffect, useState} from 'react'
import axios from 'axios'


export default function CardCharacterDetails({ character }) {
  
  const [house, setHouses] = useState({})
  console.log('ÁQUI EL CARACTER', house);


  useEffect(() => {
    axios({
      url:`https://api.got.show/api/show/houses/${character.house}`,
    })
      .then((response) => {
        console.log('ÁQUI ESTA LA RESPUESTA', response.data);
        setHouses(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [character.house, setHouses]);
       
    return (
    <section>
      <figure>
        <div className="b-detail">
          <img src={character.image} alt="" />
          <h2>{character.name}</h2>
        </div>
      </figure>

      <figure className="b-boxdetail">
        <div className="b-boxdetaiddetail">
          <h3>CASA</h3>
          {house &&<img src={house.logoURL} alt=""/>}
        </div>
        <div>
          <h3>ALIANZAS</h3>
          <p className="b-tipo">{character.allegiances}</p>
        </div>
        <div>
          <h3>APARICIONES</h3>
          <p className="b-tipo">{character.appearances}</p>
        </div>
        <div>
          <h3>PADRE</h3>
          <p className="b-tipo">{character.father}</p>      
        </div>
        <div>
          <h3>DESCENDIENTES</h3>
          <p className="b-tipo">{character.siblings}</p>
        </div>
        <div>
          <h3>TÍTULOS</h3>
          <p className="b-tipo">{character.titles}</p>
        </div>
      </figure>
    </section>
  );
}
