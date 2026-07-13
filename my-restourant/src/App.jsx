import './App.css'
import Navbar from './Components/navbar'
import line from './assets/icons/navbar__line.svg'
import header__spoon from './assets/icons/header__spoon.svg'
import Header from './Components/header';
import History from './Components/history';
import Header__img from './assets/imgs/header__img.jpg'
import History__spoon from './assets/icons/history__spoon.svg'
import History__spoon1 from './assets/icons/history__spoon-2.svg'
import History__knife from './assets/icons/history__knife.svg'
import Book from './Components/book'
import Menu from './Components/menu'


function App() {

  return (
    <>
    {/* <Navbar line={line}/> */}
    {/* <Header spoon={header__spoon} header={Header__img}/> */}
    {/* <History spoon={History__spoon} spoon1={History__spoon1} knife={History__knife}/> */}
    {/* <Book spoon={History__spoon1}/> */}
    <Menu />

    </>
  )
}

export default App
