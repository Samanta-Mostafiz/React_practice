import React from 'react';
import Index from './ConditionalRender/Index';
import EventChange from './EventHandler/EventChange';
import EventBind from './EventHandler/EventBind';
import StateHook from './StateHandling/StateHook';

function App() {
  return (
    <div>
      <Index/>
      <EventChange/>
      <EventBind/>
      <StateHook/>  
    </div>
  )
}
export default App;

