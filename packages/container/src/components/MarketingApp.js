import React, { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingIndex';

export const MarketingApp = () => {
	const ref = useRef(); //creating a ref

	useEffect(() => {
		mount(ref.current); //passing the current element(div) to the mount function where our marketing app can be rendered
	}, []);

	return <div ref={ref} />; //referencing the ref to the div
};
