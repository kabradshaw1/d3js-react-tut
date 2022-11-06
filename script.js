console.log(react)

const App = () => (
  <h1>Hello JSX</h1>
);

const rootElement = document.getElementById('root')
ReactDom.render(<App />, rootElement);