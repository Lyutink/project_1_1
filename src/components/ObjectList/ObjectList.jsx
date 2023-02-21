import {ObjContainer, ObjItem, ObjLink, ObjImg, ObjCard, ObjCardWrapper, ObjCardTitle } from "./ObjectList.styled";
import { useLocation} from "react-router-dom";
//import PropTypes from "prop-types";
  

export default function ObjectList({ movies }) {
   const location = useLocation();
    return (  
    <>
          <ObjContainer>
             <ul>
         {movies.map(({ id, title, poster_path,  name }) => (
             <ObjItem key={id} text={title ?? name}>
               <ObjLink to={`/movies/${id}`}
                  state={{ from: location }}>
                  {title ?? name} 
                  <ObjCard>
                     <ObjImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="50px" langht='50px' />
                     <ObjCardWrapper>
                        <ObjCardTitle>Title {title}</ObjCardTitle>
                        <div ObjCardInfo></div>
                     </ObjCardWrapper>
                  </ObjCard>
                  </ObjLink>
               
            </ObjItem>
            )
                )} 
                </ul>
      </ObjContainer>
   </>
        )
}

// MoviesList.propTypes = {
//    movies: PropTypes.arrayOf(
//       PropTypes.shape({
//          id: PropTypes.number.isRequired,
//          title: PropTypes.string,
//          name: PropTypes.string,
//       })
//    )
// }