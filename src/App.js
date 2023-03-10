import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Admission from './components/Admission';
import DUWBMaster from './components/DUWBMaster';
import GetPatients from './components/GetPatients';
import Home from './components/Home';
import DeptMaster from './components/master/DeptMaster';
import UnitMaster from './components/master/UnitMaster';
import WardMaster from './components/master/WardMaster';
import Registration from './components/Registration';
import UpdatePatient from './components/UpdatePatient';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='register' element={<Registration/>} />
          <Route path='admission' element={<Admission/>} />
          <Route path='getPatients' element={<GetPatients />} />
          <Route path='updatePatient' element={<UpdatePatient/>} />
        </Route>
        <Route path='/about' element={<About/>} />
        <Route path='/department' element={<DUWBMaster/>} />
        <Route path='/doctors' element={<About/>} />
        <Route path='/contact' element={<About/>} />
        <Route path='/dept' element={<DeptMaster/>} />
        <Route path='/unit' element={<UnitMaster/>} />
        <Route path='/ward' element={<WardMaster/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
