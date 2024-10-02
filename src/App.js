/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import Index from './ConditionalRender/Index';
import EventChange from './EventHandler/EventChange';
import EventBind from './EventHandler/EventBind';
import StateHook from './StateHandling/StateHook';
import EventPropagation from './EventHandler/EventPropagation';
import Form from './Form/Form';
import Child from './State lifting/Child';
import Home from './Basic todo app/Home';
import Formik from './practice/Formik';
import Toggling from './ButtonToggle/Toggling';
import FAQS from './ButtonToggle/FAQS';
import Effect from './Effect hook/Effect';
import DataFetch from './Effect hook/DataFetch';
import DataF from './customEffectHook/DataF';
import Toastify from './Toastify';
import UseReducer from './reducer hook';
import context from './Use Context Hook/context'



function App() {
  const data="i will be accessed from parent element";
  // child theke data ante
  const handleChildData=(childData)=>{
    console.log("App:" + childData);
  }
  return (
    <div>
      <Index/>
      <EventChange/>
      <EventBind/>
      <StateHook/>
      <EventPropagation/>  
      <Form/>
      <Child data={data} onChildData={handleChildData}/>
      <Home/>
      <Formik />
      <Toggling/>
      <FAQS/>
      <Effect/>
      <Toastify/>
      <UseReducer/>
      <context/>
      
      {/* <DataFetch/> */}
      {/* <DataF/> */}

      
    </div>
  )
}
export default App;

