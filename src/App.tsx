import React from "react";
import { ThemeProvider } from "styled-components";
import Button, { VARIANT } from "./components/button/Button";
import defaultTheme from "./theme";

function App() {
  // const [theme, setTheme] = React.useState(defaultTheme);
  // const updateTheme = () => {
  //   setTheme({
  //     primary: {
  //       main: "#726a95",
  //       contrastText: "#ffffff",
  //     },
  //     secondary: {
  //       main: "#709fb0",
  //       contrastText: "#ffffff",
  //     },
  //   });
  // };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant={VARIANT.PRIMARY}>PRIMARY BUTTON</Button>
      <Button variant={VARIANT.SECONDARY}>SECONDARY BUTTON</Button>
    </ThemeProvider>
  );
}

export default App;
