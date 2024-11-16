import Footers from "../../UI/Footers.jsx"; 
import Headers from "../../UI/Headers.jsx";
import { Outlet } from "react-router-dom"; // Ensure this is imported from 'react-router-dom'

export const AppLayout = () =>{
  return <>
    <Headers />
    <Outlet />
    <Footers />
  </>
}