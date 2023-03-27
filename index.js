/* function MyComponent() {
  return (
    <nav>
      <h1>website</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

ReactDOM.render(<MyComponent />, document.querySelector("#root")); */

const navigation = (
  <nav>
    <h1>website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
console.log(navigation);
ReactDOM.render(navigation, document.querySelector("#root"));
