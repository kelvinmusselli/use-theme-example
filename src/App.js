import React, { useState, useMemo, useEffect, useRef } from 'react';
import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider as StyleTheme} from 'styled-components';
import themes from './styles/themes';

import { ThemeProvider, ThemeContext } from './contexts/ThemeContext'

// function App() {
//   // const firstRender = useRef(true);

//   // const [theme, setTheme] = useState('dark');

//   // const currentTheme = useMemo(() => {
//   //   return themes[theme] ||themes.dark;
//   // },[theme]);

//   // function handleToggleTheme() {
//   //   setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   // };

//   // useEffect(() => {
//   //   if(firstRender.current) {
//   //     firstRender.current = false;
//   //     console.log('não executei os dados do useEffect')
//   //     return;
//   //   }
//   //   console.log('executei os dados do useEffect');
//   // },[theme])

//   return (
//     <>
//       <ThemeProvider>
//         <ThemeContext.Consumer>
//           {({ theme, handleToggleTheme }) => (
//             <StyleTheme theme={themes[theme] ||themes.dark}>
//               <GlobalStyle />
//               <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
//             </StyleTheme>
//           )}
//         </ThemeContext.Consumer>
//       </ThemeProvider>
//     </>
//   );
// };
class App extends React.Component {

  state ={
    change: false
  };

  componentDidMount() {
    //executa quando o componente é renderizado
    // useEffect sem array de dependencies
  }

  componentDidUpdate (prevProps, prevState) {
vvv
    // useEffect com array de dependendecias
  }

  componentDidCatch (error, info) {
    console.log(error);
    console.log(info);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', {
      currentState: this.state,
      nextProps,
      nextState,
    });
    return true
  }

  componentWillUnmount() {
    console.log('desmontou');
  }

  render() {
    console.log('renderizou');
    return (
      <>
       <ThemeProvider>
         <ThemeContext.Consumer>
           {({ theme, handleToggleTheme }) => (
             <StyleTheme theme={themes[theme] ||themes.dark}>
               <GlobalStyle />
               <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
             </StyleTheme>
          )}
         </ThemeContext.Consumer>
      </ThemeProvider>
     </>
    )
  }
}

export default App;
