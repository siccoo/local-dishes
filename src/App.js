// import React from 'react';
// import './App.css';
// import {recipes} from './tempList';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';

// function App() {
//   state = {
//     recipe: [],
//     url: "https://allnigerianrecipes.com/search?"
//   };

//   async getRecipes() {
//     const data = await fetch(this.state.url);
//   }

//   return (
//    <React.Fragment>
//      <RecipeList />
//      <RecipeDetails />
//    </React.Fragment>
//   );
// }

// export default App;

import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component {
  state = {
    recipe: [],
    url: "https://allnigerianrecipes.com/search?"
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes
      });
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getRecipes()
  }

  render() {
    console.log(this.state.recipes)
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    )
  }
}

export default App
