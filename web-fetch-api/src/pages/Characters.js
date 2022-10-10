import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

import "./Characters.css"


const Characters = () => {
    const[isOpen, setIsOpen] = useState(false)

    //const {data:item, loading, error} = useFetch("https://rickandmortyapi.com/api/character/1");

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const [isLoading, setIsLoading]=useState(false);
    const [data,setData]=useState([]);
    async function fetchData(){
      setIsLoading(true);
      const result= await fetch("https://randomuser.me/api/?results=12&gender=female");
      const {results}=await result.json();
      console.log("debil- ", results)
      setData(results);
      console.log("kokot- ", results)
      results.sort((a,b)=>{
        const nameA = a.name.first.toUpperCase();
        const nameB = b.name.first.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setIsLoading(false);
    }
  
    useEffect(() =>{
        fetchData();
        
    },[]);
    


    //if (error) console.log(error);
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <div className="App">
      <button 
      onClick={fetchData}
      
      >{isLoading ? "Loading..." : "Refetch"}</button>
      {data.map((item) =>{
        return(
          <div className= "gallery" key={item.id}>
            <div className="zaznam">
              <div className="obraz">
              <img src={item.picture.medium} alt="characterImage"/>
              </div>
              <div className="meno">
              Meno: {item?.name.first} {item?.name.last}
                <div className="mail">
                E-mail: {item?.email}
                </div>
            </div>
          </div>
      </div>
        )
      })}
      
    </div>

    <Footer />
    </>
  )
}

export default Characters