import logo from "./logo.svg";
import "./App.css";
import Member from "./components/Member";
import { Component } from "react";
import Button from "./components/button";

const family = {
  member1: {
    name: "didjer",
    age: 27,
  },
  member2: {
    name: "rogay",
    age: 40,
  },
  member3: {
    name: "fabriss",
    age: 14,
  },
  member4: {
    name: "henri",
    age: 27,
  },
};

// function App({ title }) {
//   return (
//     <div className="App">
//       <h1>{title}</h1>
//       <Member name="didjer" hobby="branlette" />
//       <Member name="rogay" />
//       <Member name="fabrissss" />
//       <Member name="henri">
//         <h3>Je suis Henri Connard</h3>
//       </Member>
//     </div>
//   );
// }

class App extends Component {
  handleClick = (num) => {
    const family = { ...this.state.family };
    family.member1.age += num;
    this.setState({ family });
  };

  handleChange = (event) => {
    const family = { ...this.state.family };
    const name = event.target.value;
    family.member1.name = name;
    this.setState({ family });
  };

  // state = { family: family };
  state = { family };
  render() {
    const { title } = this.props;
    const { family } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <Member name={family.member1.name} age={family.member1.age} />
        <input
          value={family.member1.name}
          type="text"
          onChange={this.handleChange}
        />

        <Member name={family.member2.name} age={family.member2.age} />
        <Member name={family.member3.name} age={family.member3.age} />
        <Member name={family.member4.name} age={family.member4.age}>
          <h3>Je suis Henri Connard</h3>
        </Member>
        {/* <button onClick={this.handleClick}>Older</button> */}
        <Button older={() => this.handleClick(2)} />
      </div>
    );
  }
}

export default App;
