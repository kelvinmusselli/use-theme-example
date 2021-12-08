import React, { createContex } from 'react';

export const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('dark');

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

export class ThemeProvider extends React.Component {

  state = {
    theme: 'dark'
  };

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    },() => {
      console.log('Theme changed to: ', this.state.theme);
    }));
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
