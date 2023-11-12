/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";


// reactstrap components
//import { Container } from "reactstrap";
//import Slider from "../Slider/Slider";

const PageHeader=() =>{

  return (
    <div className="flex items-center justify-center flex-col p-4 w-full">
    {/* Create post section */}
    <form >
        <div className="flex flex-col items-center border mt-4 border-gray-500 p-5 space-x-2 w-96">
            <div className="flex flex-col space-y-2 w-full">
                <label htmlFor="message">What are you thinking about?</label>
                <input id="message" required className="border border-gray-500 px-2" type="text"/>
                <button type="submit" className="w-full p-2 rounded-sm bg-gray-950 hover:bg-gray-900 text-white text-lg font-bold">Create</button>
            </div>
            
        </div>
    </form>

</div>
      
      
      
    
  );
}

export default {PageHeader};