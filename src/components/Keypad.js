// Code Keypad Component Here
import react, { Component} from 'react';

export default class Keypad extends Component {

  render() {
    return <input type="password" onkeyUp={
      console.log("Entering password...")
    } />
  }
}