
import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './components/ConditionalRendering';
import ConditionalRenderingUsingTernary from './components/ConditionalRenderingUsingTernary';
import ConditionalRenderingUsingANDORLogicalOperators from './components/ConditionalRenderingUsingANDORLogicalOperators';
import StateEx from './components/StateEx';
import TogglePara from './components/TogglePara';
import ChangeEvent from './components/ChangeEvent';
import SubmitEvent from './components/SubmitEvent';
import RegistrationForm from './components/RegistrationForm';
import Form from './components/Form';
import FormOnSubmit from './components/FormOnSubmit';
import Todo from './components/Todo';
import Todo2 from './components/Todo2';
import FetchApiaxios from './components/FetchApiaxios';
import FetchApiAxiosUseEffect from './components/FetchApiAxiosUseEffect';
import FetchApiAxiosUseEffectImagesKey from './components/FetchApiAxiosUseEffectImagesKey';
import FetchApiAxiosUseEffectImagesKeySuperHeros from './components/FetchApiAxiosUseEffectImagesKeySuperHeros';
import FetchApiAxiosUseEffectImagesKeyGitcardComponent from './components/FetchApiAxiosUseEffectImagesKeyGitcardComponent';
import FetchApiAxiosUseEffectKeyCovid from './components/FetchApiAxiosUseEffectKeyCovid';
import FetchCovidStatewise from './components/FetchCovidStatewise';
import FetchCovidStatewiseOneTable from './components/FetchingCovidStatewiseOneTable';
import A from './propsDrilling/A';
import FetchOmdbApiSearchingOption from './components/FetchingOmdbApiSearchingOption';
import A1 from './OverCommingPropsDrilling/A1';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path='/' element={<FetchApiAxiosUseEffectImagesKeyGitcardComponent/>}/>
     <Route  path='/togglepara' element={<TogglePara/>}/>
     <Route  path='/covidtable' element={<FetchCovidStatewiseOneTable/>}/>
     <Route  path='/FetchApiAxiosUseEffect' element={<FetchApiAxiosUseEffectImagesKeyGitcardComponent/>}/>
     <Route  path='/RegistrationForm' element={<RegistrationForm/>}/>
     <Route  path='/FormOnSubmit' element={<FormOnSubmit/>}/>
     <Route  path='/FetchOmdbApiSearchingOption' element={<FetchOmdbApiSearchingOption/>}/>
     <Route  path='/ConditionalRendering' element={<ConditionalRendering/>}/>
     <Route  path='/ConditionalRenderingUsingTernary' element={<ConditionalRenderingUsingTernary/>}/>
     <Route  path='/ConditionalRenderingUsingANDORLogicalOperators' element={<ConditionalRenderingUsingANDORLogicalOperators/>}/>
     <Route  path='/StateEx' element={<StateEx/>}/>
     <Route  path='/ChangeEvent' element={<ChangeEvent/>}/>
     <Route  path='/SubmitEvent' element={<SubmitEvent/>}/>
     <Route  path='/Form' element={<Form/>}/>
     <Route  path='/Todo' element={<Todo/>}/>
     <Route  path='/Todo2' element={<Todo2/>}/>
     <Route  path='/FetchApiAxiosUseEffect' element={<FetchApiAxiosUseEffect/>}/>
     <Route  path='/FetchApiAxiosUseEffectImagesKey' element={<FetchApiAxiosUseEffectImagesKey/>}/>
     <Route  path='/FetchApiAxiosUseEffectImagesKeySuperHeros' element={<FetchApiAxiosUseEffectImagesKeySuperHeros/>}/>
     <Route  path='/FetchApiAxiosUseEffectKeyCovid' element={<FetchApiAxiosUseEffectKeyCovid/>}/>
     <Route  path='/FetchCovidStatewise' element={<FetchCovidStatewise/>}/>
     <Route  path='/FetchApiaxios' element={<FetchApiaxios/>}/>
     <Route  path='/A' element={<A/>}/>
     <Route  path='/A1' element={<A1/>}/>


    </Routes>
    

   </BrowserRouter>
   {/* <A1/>
   {/* <A/>
   <FetchOmdbApiSearchingOption/> */}
   {/* <FetchApiAxiosUseEffectImagesKey/>  */}
 {/* <FetchApiAxiosUseEffect/> */}
 {/* <FetchApiAxiosUseEffectKeyCovid/> */}
 {/* <FetchCovidStatewise/> */}
 {/* <FetchCovidStatewiseOneTable/> */}

 {/* <FetchApiAxiosUseEffectImagesKeyGitcardComponent/> */}
  {/* <FetchApiAxiosUseEffectImagesKeySuperHeros/> */}

   {/* <FetchApiaxios/>

    <Todo2/>

    <Todo/>

  <FormOnSubmit/>

   <Form/>
   <RegistrationForm/>
   <ConditionalRendering/>
   <ConditionalRenderingUsingTernary/>
   <ConditionalRenderingUsingANDORLogicalOperators/>

   <StateEx/>

   <TogglePara/>
   <ChangeEvent/>
   <SubmitEvent/>   */}
   </>
    
  );
}

export default App;
