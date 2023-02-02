import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './state/store'
import { Provider } from 'react-redux'
import ThemedSuspense from './components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'
import { ThemeProvider } from './context/ThemeContext';
import './assets/css/tailwind.output.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Suspense fallback={<ThemedSuspense />}>
            <Windmill usePreferences>
                <Provider store={store}>
                    <App />
                </Provider>
            </Windmill>
        </Suspense>
    </ThemeProvider>
);


