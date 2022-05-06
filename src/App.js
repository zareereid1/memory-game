import axios from 'axios'
import { useEffect, useState} from 'react';
import "../src/App.css";
import PokeCard from "../src/Components/pokeCard/PokeCard"
 


const App = () => {
  const [pokeImg, setPokeImg] = useState("")
  const [pokeName, setPokeName] = useState("")
 
  
  useEffect(() => {
    
    const getData = async () => {
      
      let res = await axios.get("https://pokeapi.co/api/v2/pokemon/5");

      setPokeImg(res?.data?.sprites?.front_default);
      setPokeName(res?.data?.name);
    };
 
    getData();
  }, []);
 
  return (
  <PokeCard imgUrl={pokeImg} />
  );
};
 
export default App;
