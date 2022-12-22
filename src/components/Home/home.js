
import Menu from "../Navbar/navbar";
import CompnentMain from "../container/container";
import Artigos from "../artigos/artigos";
import Opinioes from "../opinioes/comentarios";

function Home() {
  return (
  <>
     <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Menu/>
      <CompnentMain/>
     </div>
     <Artigos/>
     <Opinioes/>
  </>
  );
}

export default Home;