// src/App.jsx
import React from 'react';
import Button from './components/Button/Button';
import Select from './components/Select/Select';
import './fg.css';
function App() {



    const handleMouseEnter = () => {
      console.log("Mouse entered the button!");
    };

    const handleMouseLeave = () => {
      console.log("Mouse left the button!");
    };
  return (
    <div>
      <h1>My UI Library - Development</h1>
      {/* کامپوننت‌هات رو اینجا اضافه می‌کنی برای تست */}
      <Button>Click Me</Button>



      <Select options={[{ value: "option1", label: "Option 1" }]} />


      <Button onClick={() => { }} size="medium" variant="secondary">
        Secondary Button
      </Button>

      <Button onClick={() => {}} size="medium" variant="outline">
        Outline Button
      </Button>
      
      <Button
        variant="outline"
        style={{
          backgroundColor: "lightgreen",
          borderColor: "darkgreen",
          color: "darkgreen",
        }}
      >
        Green Outline Button
      </Button>


      <Button variant="outline" className="yellow">
        Yellow Outline Button
      </Button>


      

       <Button
        variant="primary"
        onClick={() => console.log('Button clicked!')}
        size="small"
        onMouseEnter={handleMouseEnter} // 👈 اضافه کردن onMouseEnter
        onMouseLeave={handleMouseLeave} // 👈 اضافه کردن onMouseLeave
      >
        Hover Me
      </Button>









       <Button variant='dd'>
       youtube
    </Button>



    </div>
  );
}

export default App;