import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { Navbar } from './Components/NavBarComponent/Navbar';
import { MainLayout } from './Layouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import './main.css'
import { Nosotros } from './Components/Nosotros/Nosotros';
import { Contacto } from './Components/Contacto/Contacto';
import { Carrito } from './Components/Carrito/Carrito';
import { CartProvider } from './context/CartContext';
import {Checkout} from './Components/Checkout/Checkout'

function App() {

  return (
    <MainLayout>
      <CartProvider>
      <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/productos/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer  />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />         
            <Route path='/carrito' element={<Carrito />}/>
            <Route path='/checkout' element={<Checkout />}/>
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </MainLayout>
    
  );
}

export default App;
