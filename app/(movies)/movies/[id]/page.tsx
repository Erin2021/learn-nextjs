import { Suspense } from "react"
import MovieInfo, { getMovie } from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"

export async function generateMetadata({params:{id}}:{params:{id:string}}){
  const movie=await getMovie(id);
  return{title:movie.title}//캐싱된 데이터를 가져온거라 api호출되는게 아니지. 여기서 제목을 얻으려고 getMovie를 한번 호출했잖아?그럼 movieinfo에서 또 호출할 필요가 없는거임
}


export default function MovieDetail({params:{id}}:{params:{id:string}}){
  return(
    <>
    <Suspense fallback={<h1>Loading movie info</h1>}>
      <MovieInfo id={id}/>
    </Suspense>
    <Suspense fallback={<h1>Loading movie videos</h1>}>
      <MovieVideos id={id}/>
    </Suspense>
    </>
  )
}