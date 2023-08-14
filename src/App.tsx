import './App.css';
import { Menubar } from './components/Menu/Menubar';
import { db } from './firebase';
import { collection, getDocs, query, doc, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react';



function App() {

  const menubarCollection = collection(db, 'menubar')

  useEffect( () => {
    
    // const getMenubar = async () => {
    //     let data = await getDocs(menubarCollection)
    //     let links = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    //     console.log(links)
    //     // return data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    // }

    // getMenubar()
  }, [])
  

  return (
    <div className="App">
      <Menubar test = {'Test'} />
    </div>
  );
}

export default App;