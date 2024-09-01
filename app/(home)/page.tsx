import Link from "next/link";

export const metadata={
  title:"Home"
}
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){
  // return fetch(URL).then(res=>res.json())
  await new Promise(res=>setTimeout(res,1000))//강제5초 로딩. 이때 화면이 아예 출력되지 않는걸 발견 들어가기까지 5초걸림. 로딩상태->로딩화면을 보여주는 작업을 하면좋겠ㄷ다.
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage(){
  const movies=await getMovies();
  return (
    <div>
      {movies.map(movie=>
      <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>
      )}
    </div>
  )
}