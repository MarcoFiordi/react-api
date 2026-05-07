import { useEffect } from "react";
import { useState } from "react";

const API_URL = "https://lanciweb.github.io/demo/api/actors/";
function App() {
  const [actors, setActors] = useState([]);
  const fetchActors = () => {
    return fetch(API_URL)
    .then((response) => {
      console.log(response);
      return response.json();
      
    })
    .then((data) => {
      console.log(data);
      return data;
      
    });
  };

  useEffect(()=> {
    console.log('useEffect partito');

    fetchActors()
    .then((data) => {
      setActors(data);

    });
    

  }, []);

  console.log('valore di actors:', actors);




  return (
    <>
      <header>
        <p>Wonderful Cast</p>
      </header>

      <main>
        <section>
          <h1>Actors</h1>
          <p>List of actors fetched from API</p>
        </section>

        <section>
          {actors.map((actor) => {
            return (
              <article className="actor-card" key={actor.id}>
                <h2>{actor.name}</h2>
                <img 
                src={actor.image} 
                alt={actor.name}
                />

                <p>
                  {actor.birth_year} - {actor.nationality}
                </p>
              </article>
            );
          })}
        </section>
      </main>
    </>
  )
}
export default App;
