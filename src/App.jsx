
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
// import Header from './component/Header';
import PDtails from './component/PDtails';
import Address from './component/Address';
import Payment from './component/Payment';
import { useReducer } from 'react';

function App() {
  const onsubmit=(e)=>{
    e.preventdefault();
  }
  const initialState={
    Name:'',
    onsubmit: onsubmit,


  }
  const reducer=(state, action)=>{

  }
  const[data,dispatch]=useReducer(reducer, initialState);
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
        path:"/",
        element:<PDtails data={data}/>,
      },
      {
        path:"address",
        element:<Address data={data}/>,
        
      },
      {
        path:"payment",
        element:<Payment data={data}/>,
      },
     
    ],
    },
  ]);

  return <RouterProvider router={router}/>
};

export default App
