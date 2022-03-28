import React from 'react';
import colors from '../../styles/colors';
import { SVGIconProps } from './types';

export default function CautionIcon({ active }: SVGIconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M18.7975 16.1664L13.2947 6.73939C13.0069 6.24651 12.5034 6 11.9998 6C11.4963 6 10.9928 6.24651 10.705 6.73939L5.20252 16.1664C4.6271 17.1522 5.34635 18.3845 6.49734 18.3845L17.5027 18.3846C18.6536 18.3846 19.3729 17.1523 18.7975 16.1664V16.1664ZM11.9998 16.6762C11.5938 16.6762 11.2647 16.3507 11.2647 15.949C11.2647 15.5474 11.5939 15.2218 11.9998 15.2218C12.4059 15.2218 12.735 15.5475 12.735 15.949C12.7352 16.3505 12.4059 16.6762 11.9998 16.6762ZM12.7352 11.001C12.7352 11.0059 12.7349 11.0108 12.7344 11.0157L12.4004 14.4312C12.3928 14.5088 12.3268 14.5682 12.2478 14.5682H11.7567C11.6778 14.5682 11.6119 14.5091 11.6041 14.4314L11.2653 11.0159C11.2648 11.011 11.2645 11.006 11.2645 11.0012V9.51434C11.2645 9.43058 11.3332 9.36283 11.4177 9.36283H12.5817C12.6664 9.36283 12.7349 9.43071 12.7349 9.51434L12.7352 11.001Z"
				fill={active ? colors.lightBlue : 'white'}
			/>
		</svg>
	);
}
