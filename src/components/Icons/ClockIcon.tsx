import React from 'react';
import colors from '../../styles/colors';
import { SVGIconProps } from './types';

export default function ClockIcon({ active }: SVGIconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.75 3C6.92455 3 3 6.92427 3 11.75C3 16.5757 6.92427 20.5 11.75 20.5C16.5757 20.5 20.5 16.5757 20.5 11.75C20.5 6.92427 16.5757 3 11.75 3ZM11.75 4.14126C15.9589 4.14126 19.3585 7.54104 19.3585 11.7498C19.3585 15.9585 15.9587 19.3583 11.75 19.3583C7.54128 19.3583 4.1415 15.9585 4.1415 11.7498C4.1415 7.54104 7.54128 4.14126 11.75 4.14126ZM11.75 5.47281C11.4348 5.47281 11.1794 5.72824 11.1794 6.04344V11.7497C11.1794 12.0649 11.4348 12.3203 11.75 12.3203H17.0759C17.3911 12.3203 17.6465 12.0649 17.6465 11.7497C17.6465 11.4345 17.3911 11.1791 17.0759 11.1791H12.3207V6.04316C12.3207 5.72796 12.0653 5.47253 11.7501 5.47253L11.75 5.47281Z"
				fill={active ? colors.lightBlue : 'white'}
			/>
		</svg>
	);
}
