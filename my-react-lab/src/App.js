import './App.css';
import Greeting from './component/Greeting';
import Header from './component/Header';
import Content from './component/content';
import Footer from './component/footer';

function App(){

  return(
    <div>
      <Header/>
      <Greeting/>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default App;