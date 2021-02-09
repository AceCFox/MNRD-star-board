import './App.css';
import EventForm from '../EventForm/EventForm.jsx';
import HeadBar from '../HeadBar/HeadBar.jsx';

function App() {
  return (
    <div className="App">
    <HeadBar/>
      <header className="App-header">
   
        <img src="https://www.mnrollerderby.com/wp-content/uploads/2019/08/minnesota-roller-derby-logo-card.png" className="App-logo" alt="logo" />
        <EventForm/>
      </header>

    </div>
  );
}

export default App;
