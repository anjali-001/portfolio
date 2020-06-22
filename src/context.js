import React, {createContext, Component} from 'react';

export const Context = createContext();

class ContextProvider extends Component {
    state = { 
        darkMode: true
     }

     toggleTheme = () => {
         this.setState({darkMode: !this.state.darkMode });
     }
    render() { 
        return (
            <Context.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Context.Provider>
        );
    }
}
 
export default ContextProvider;