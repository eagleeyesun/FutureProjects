import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import Landing from './pages/landing/Landing';
import Login from './components/LoginPage';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';
import Protected from './components/Protected';
import SignUpPage from './components/SignUpPage';


export const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Landing />
			},
			{
				path: '/signup',
			    element: <SignUpPage /> 
			},
			{
				path: '/login',
			    element: <Login /> 
			},
			{
				path: '/list',
				element: <Protected><ListPage /></Protected>,
			  },
			  {
				path: '/detail/:id',
				element: <Protected><DetailPage /></Protected>,
			  },
		]
	}
];

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			cacheTime: 1000 * 60 * 15
		}
	}
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>
);
