import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Chronicles from "./components/Chronicles";
import Tips from "./components/Tips";
import News from "./components/News";
import BooksAndVideos from "./components/BooksAndVideos";
import Instagram from "./components/Instagram";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/sobre" component={About} />
          <Route exact path="/contato" component={Contact} />
          <Route exact path="/cronicas" component={Chronicles} />
          <Route exact path="/dicas" component={Tips} />
          <Route exact path="/noticias" component={News} />
          <Route exact path="/indicacoes" component={BooksAndVideos} />
          <Route exact path="/instagram" component={Instagram} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
