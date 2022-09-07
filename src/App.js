import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddData from './Form/AddData';
// import GetData from './Form/GetData';
import ReduxToolkit from './Form/ReduxToolkit';

function App() {

  return (
    <div className="App">
        <Routes>
          {/* <Route path='/' element={<GetData/>}/> */}
          <Route path='/' element={<ReduxToolkit/>}/>

          <Route path='/edit/:id' element={<AddData/>}/>
        </Routes>
    </div>
  );
}

export default App;
