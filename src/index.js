import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// class HelloWorld extends Component {
//   render() {
//     return (
//       <div>Hello {this.props.name}</div>
//     )
//   }
// }

// ReactDOM.render(<HelloWorld  name="Tyler"/>, document.getElementById('root'));

// const items = [
//   {
//     id: 1,
//     value: 'Ola k ace'
//   },
//   {
//     id: 2,
//     value: 'Hola mundo'
//   },
//   {
//     id: 3,
//     value: ':-O'
//   }
// ]

// class List extends Component {
//   render() {
//     return (
//       <ul>
//         { items.map(item => <li>{ item.value }</li>) }
//       </ul>
//     )
//   }
// }

// ReactDOM.render(<List />, document.getElementById('root'));

const recipes = [
  {
    id: 1,
    name: 'Dogos con ketchup',
    ingredients: [
      'Salchicha',
      'Pan',
      'Ketchup'
    ]
  }
]

class IngredientList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map((item, index) => {
            return <li key={ index }> { item } </li>
          })
        }
      </ul>
    )
  }
}

class Recipe extends Component {
  render() {
    return (
      recipes.map(recipe => {
        return (
          <div>
            <h1>{ recipe.name }</h1>
            <IngredientList items={ recipe.ingredients }/>
            <br/>
          </div>
        )
      })
    )
  }
}

Recipe.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
}

ReactDOM.render(<Recipe />, document.getElementById('root'));
