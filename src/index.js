import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./reset.css"

import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

import { ReactQueryDevtools } from 'react-query/devtools'


const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()



root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>


      <ChakraProvider>
        <App />
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
