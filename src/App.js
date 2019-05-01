import React, { Component } from 'react';
// import { Route, Link, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import './styles.scss';
import Title from './components/Title';
import Times from './components/Times';


class App extends Component {
  state = {
    fontFamily: "Montserrat",
    title: "",
    formData: {}

  }
  changeFont = (fontFamily) => {
    this.setState({
      fontFamily
    })
  }

  titleInput = (title) => {
    this.setState({
      title
    })
  }

  formInput = (formData) => {
    this.setState({
      formData
    })
  }

  render() {
    return (
      <div className="App">
        {/* <BrowserRouter>
          <ul>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/schedule'>Schedule</Link></li>
          </ul>
          <Switch>
            <Route path="/" />

          </Switch>
        </BrowserRouter> */}


        <Title
          fontFamily={this.state.fontFamily}
          changeFont={this.changeFont}
          titleInput={this.titleInput}
          title={this.state.title}></Title>

        <Times formInput={this.formInput} />

      </div>
    );
  }
}

export default App;
