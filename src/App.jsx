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
          <article className="actor-card">
            <h2>Marco Fiordi</h2>
            <img src="https://picsum.photos/300/300"
              alt="Marco Fiordi"
            />
            <p>1997- Italian</p>

            <p>
              Marco Fiordi è uno studente del corso Boolean appassionato di videogiochi manga e anime,
              ex pro player di call of duty e vice presidente di una asd che organizza tornei italiani ed europei
            </p>

            <p>
              <strong>know for</strong> Il Signore dei Console.log, Fast & Fetchious,
              AnsiaScript: Episodio I, e React contro tutti.
            </p>

            <p>
              <strong>Awards:</strong> Campione italiano di ansia da prestazione,
              vice campione di sollevatore di polemiche e lancio del coriandolo.
              Il suo sogno: 'Avere un sogno'.
            </p>
          </article>
        </section>
      </main>
    </>
  )
}
export default App;
