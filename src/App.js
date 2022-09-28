
import './App.css';
import CreateContact from './components/CreateContact'

const App = () => {
  return (
    <>
    <div className='bg-slate-400'>
    <div className='text-3xl text-center pt-10 flex justify-center items-center h-[30vh] '>React CRUD Operations using Hooks and Axios</div>
    <CreateContact />
    </div>
    </>
  );
}

export default App;
