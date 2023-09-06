//SearchBar

import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const onSearchRun = () => {
      props.onSearch(id)
   }

   return (
      <div>
         <input 
         type='search'
         onChange={handleChange}
         value={id}
         />
         <button onClick={onSearchRun}>Agregar</button>
      </div>
   );

   
}
