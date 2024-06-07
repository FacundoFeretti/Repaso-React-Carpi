import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Navbar } from './Components/NavBarComponent/Navbar';
import { MainLayout } from './Layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import './main.css'
import { Nosotros } from './Components/Nosotros/Nosotros';


function App() {

  return (
    <MainLayout>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/productos/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer  />} />
          <Route path='/nosotros' element={<Nosotros />} />

        </Routes>

        {/* <ItemListContainer /> */}
      </BrowserRouter>
    </MainLayout>
    
  );
}

export default App;
