import { API_URL } from "../app/(home)/page";

async function getMovie(id:string){
  console.log(`Fetching movies: ${Date.now()}`)
  await new Promise(res=>setTimeout(res,5000))
  const res=await fetch(`${API_URL}/${id}`);
  return res.json();
}


export default async function MovieInfo({id}:{id:string}){
  const movie=await getMovie(id);
  return(
    <h4>
    {JSON.stringify(movie)}
    </h4>
  )
}