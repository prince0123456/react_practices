import logo from './logo.svg';
import './App.css';
import { FirstTest } from './components/FirstTest';
import SecondTest from './components/SecondTest';
import HtmlAttributeVsJSX from './components/HtmlAttributeVsJSX';
import TestCss from './components/TestCss';
import DynaGreeting from './components/DynaGreeting';

function App() {
  return (
    <div className="App">
    <DynaGreeting/>
    <TestCss/>
    <HtmlAttributeVsJSX/>
    <SecondTest/>
   <FirstTest/>
    </div>
  );
}

export default App;
