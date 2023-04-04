import React from 'react';
import '@styles/global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@Containers/Layout';
import Home from '@Pages/Home';
import NoEncontrado from '@Pages/NoEncontrado';
import MiCuenta from '@Pages/MiCuenta';
import Login from '@Pages/Login';
import AppContext from '../context/AppContext';
import useEstadoInicial from '../hooks/useEstadoInicial';
import Callback from '../pages/Callback';
import SearchResultsPage from '../pages/SearchResultPage';
import SearchResults from '../components/SearchResults';
import BookDetails from '../pages/BookDetails';
import CategoryResult from '../pages/CategoryResult';

const App =() => {
    
const estadoInicial = useEstadoInicial()

    return(
<AppContext.Provider value ={estadoInicial}>
<BrowserRouter>
        
        <Layout>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element ={<Login/>}/>
            <Route path='/micuenta' element ={<MiCuenta/>}/>
            <Route path='*' element ={<NoEncontrado/>}/>
            <Route path="/oauth2callback" element={<Callback/>} />
            <Route path='/' element ={<Home/>}/>
            <Route path="/search-results/:searchTerm" element={<SearchResultsPage />} />
            <Route path="/categories/:categoryName" element={<CategoryResult/>} />
            <Route path="/book/:bookId" element={<BookDetails />} />
        </Routes>
        </Layout>
    </BrowserRouter>
   
</AppContext.Provider>
     
    );
}

export default App;