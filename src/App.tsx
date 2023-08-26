// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import SideNav from './components/Shared/SideNav'
import Search from './pages/Search/Search'

function App() {
  // const [count, setCount] = useState(0)
  // const [collapsed, setCollapsed] = useState(false);
  return (
      <section className='h-screen w-screen flex p-2 bg-zinc-950'>
        <SideNav />
        <main className='basis-3/4'>
          <h1 className="text-3xl font-bold underline">
            Hello world!
            <Search />
          </h1>
        </main>
      </section>
  )
}

export default App
