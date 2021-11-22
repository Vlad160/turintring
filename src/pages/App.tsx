import React from 'react';
import AppAngularjs from './AppAngularjs/AppAngularjs';
import { Link, Route, Switch } from 'react-router-dom';
import './styles.scss';
import ReactCmp from '@components/ReactCmp';

const App = () => {
	return (<>
		<header>
			<nav>
				<ul className="navigation">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/first">First angular.js app</Link>
					</li>
					<li>
						<Link to="/second">Second angular.js app</Link>
					</li>
					<li>
						<Link to="/both">Two angular.js apps</Link>
					</li>
					<li>
						<Link to="/all">Two angular.js apps + React</Link>
					</li>
				</ul>

			</nav>
		</header>
		<Switch>
			<Route path="/first">
				<div>First angular.js app</div>
				<AppAngularjs component={'first-app-cmp'} module={'firstAppModule'}/>
			</Route>
			<Route path="/second">
				<div>Second angular.js app</div>
				<AppAngularjs component={'second-app-cmp'} module={'secondAppModule'}/>
			</Route>
			<Route path="/both">
				<div>Two angular.js apps</div>
				<AppAngularjs component={'first-app-cmp'} module={'firstAppModule'}/>
				<AppAngularjs component={'second-app-cmp'} module={'secondAppModule'}/>
			</Route>
			<Route path="/all">
				<div>Two angular.js apps + React</div>
				<AppAngularjs component={'first-app-cmp'} module={'firstAppModule'}/>
				<ReactCmp/>
				<AppAngularjs component={'second-app-cmp'} module={'secondAppModule'}/>
			</Route>
			<Route path="/">
				<div>React App!</div>
			</Route>
		</Switch>
	</>);
};

export default App;