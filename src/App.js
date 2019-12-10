import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FactPresentation from './components/FactPresentation/FactPresentation';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      catFact: '',
      show: false,
    }
  }

  componentDidMount() {
    let animalType = 'cat';
    let amount = 1;

    //https://stackoverflow.com/questions/43262121/trying-to-use-fetch-and-pass-in-mode-no-cors
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    fetch(proxyUrl + `https://cat-fact.herokuapp.com/facts/random?animal_type=${animalType}&amount=${amount}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          catFact: data.text,
        })
      });
  }


  render() {
    return (
      <div class="App">
        <Header />
        <FactPresentation catFact={this.state.catFact}/>
      </div>
    );
  }
}

export default App;
