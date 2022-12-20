
import Menu from "../Navbar/navbar";
import CompnentMain from "../container/container";

function Home() {
  return (
  
     <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Menu/>
      <CompnentMain/>
     </div>
    
    
  );
}

export default Home;