import { useFetchMovies } from "components/hooks";
import Loader from "components/Loader/Loader";
import { Container } from "components/Container";
import { MainBox } from "./MainPage.styled";
import MoviesList from "components/MoviesList";
import ObjectList from "components/ObjectList";

export default function MainPage() {
   // а тут его (кастомный хук useFetchMovies) использую
   const { trendingMovies, loading } = useFetchMovies();
   return (
      <>
          <MainBox>
         <Container>
           
         <h1>Актуальні збори / OBJECT</h1>
         {loading && <Loader />}
            <MoviesList movies={trendingMovies} />
               <ObjectList movies={trendingMovies} />
            
            </Container>
            </MainBox>
      </>
   )
}