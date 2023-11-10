import './App.css'
import Name from './assets/components/Name'
import Description from './assets/components/Description'
import Price from './assets/components/Price'
import Path from './assets/components/Path'
import myJSON from './assets/components/Product'
import Card from './assets/components/Card'
function App() {
  const name = "Kehinde"
  return (
    <>
    <Card />
    <p>Hello {name}</p>
    </>
  );
}

export default App
