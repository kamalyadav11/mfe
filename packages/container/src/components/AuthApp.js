import React, { useEffect, useRef } from 'react';
import { mount } from 'auth/AuthIndex';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
	const ref = useRef();
	const history = useHistory();

	useEffect(() => {
		//passing the current element(div) to the mount function where our marketing app can be rendered
		const { onParentNavigate } = mount(ref.current, {
			initialPath: history.location.pathname,
			onNavigate: ({ pathname: nextPathName }) => {
				const pathName = history.location;

				if (pathName !== nextPathName) history.push(nextPathName);
			},
			onSignIn: () => {
				onSignIn();
			},
		});

		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref} />; //referencing the ref to the div
};

export default AuthApp;
