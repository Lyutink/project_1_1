import {ObjItem, ObjLink, ObjImg, ObjInfo, ObjCardWrapper, ObjCardTitle } from "./ObjectCard.styled";
import { useLocation} from "react-router-dom";

//import PropTypes from "prop-types";

export default function ObjectCard({ id, title, poster_path,  name }) {
   const location = useLocation();
    return (  
    <>
           <ObjItem text={title ?? name}>
               <ObjLink to={`/movies/${id}`}
                  state={{ from: location }}>
                  {title ?? name} 
                  <ObjInfo>
                     <ObjImg src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} width="50px" langht='50px' />
                     <ObjCardWrapper>
                        <ObjCardTitle>Title {title}</ObjCardTitle>
                        <div >ObjCardInfo</div>
                     </ObjCardWrapper>
                  </ObjInfo>
                  </ObjLink>
               
            </ObjItem>
            
   </>
        )
}