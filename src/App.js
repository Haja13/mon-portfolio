import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import { HomePage } from './screens/HomeScreen/homePage';
import { ServicePage } from './screens/ServiceScrenn/ServicePage';
import { ExperiencePage } from './screens/ExperienceScreen/ExperiencePage';
import { ProjectPage } from './screens/ProjectScreen/ProjectPage';
import { EducationPage } from './screens/EducationScreen/EducationPage';
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
        <Route path='/portfolio'  element={<HomePage/>}  />
        <Route path='/about' element={<ExperiencePage/>} />
        <Route path='/services' element={<ServicePage/>} />
        <Route path='/work' element={<ProjectPage/>} />
        <Route path='/education' element={<EducationPage/>} />
     </Routes>
    </div>
  );
}

export default App;
