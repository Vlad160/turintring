import React, { useEffect } from 'react';
import { useLayoutEffect, useRef } from 'react';
import './styles.scss';

declare var angular: any;

export interface IAppAngularjsProps {
	component: string;
	module: string;
}

const AppAngularjs: React.FC<IAppAngularjsProps> = ({ component, module }) => {
	const mountRef = useRef<HTMLDivElement>();
	useLayoutEffect(() => {
		if (!mountRef.current) {
			return;
		}
		const el = document.createElement(component);
		mountRef.current.appendChild(el);
		angular.bootstrap(mountRef.current, [module]);
	}, [component, module]);
	return <div className="angular-js-root" ref={mountRef} key={`${component}-${module}`}/>;
};

export default AppAngularjs;