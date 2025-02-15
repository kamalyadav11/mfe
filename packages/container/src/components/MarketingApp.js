import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingIndex';
import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
	const ref = useRef();
	const history = useHistory();

	useEffect(() => {
		//passing the current element(div) to the mount function where our marketing app can be rendered
		const { onParentNavigate } = mount(ref.current, {
			onNavigate: ({ pathname: nextPathName }) => {
				const pathName = history.location;

				if (pathName !== nextPathName) history.push(nextPathName);
			},
			initialPath: history.location.pathname,
		});

		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref} />; //referencing the ref to the div
};

export default MarketingApp;
