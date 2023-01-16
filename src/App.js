import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ItemDetail from "./components/ItemDetail";
import List from "./components/List";

import data from "./data.json";

const App = function () {
  const { movies, series } = data;
  return (
    <div>
      <Header />
      <main>
        <nav>
          <Link to='/movies' style={{textDecoration: 'none'}}>
            <h3>Movies</h3>
          </Link>
          <Link to='/series' style={{textDecoration: 'none'}}>
            <h3>Series</h3>
          </Link>
        </nav>
        <ul>
          <Routes>
            <Route 
              path='/' 
              element={<p>Bien venidos al sitio...</p>} />
            <Route 
              path='/movies' 
              element={<List list={movies} />} />
            <Route path="/movies/:name" element={<ItemDetail data={data} />} />
            <Route 
              path='/series' 
              element={<List list={series} />} />
            <Route path="/series/:name" element={<ItemDetail data={data} />} />
          </Routes>
          {/* <List list={movies} />
          <List list={series} /> */}
        </ul>
      </main>
    </div>
  );
};

export default App;
