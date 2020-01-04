import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ChatIndex from './components/ChatIndex';

const store = configureStore();

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <ChatIndex/>
    </Provider>
  );
}

export default App;
