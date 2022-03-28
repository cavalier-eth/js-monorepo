import React from 'react';
import colors from '../../styles/colors';
import { SVGIconProps } from './types';

export default function PlusBorderIcon({ active }: SVGIconProps) {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M11.6249 11.6153V12.3653C12.0391 12.3653 12.3749 12.0295 12.3749 11.6153H11.6249ZM11.6249 12.3653H12.3749C12.3749 11.9511 12.0391 11.6153 11.6249 11.6153V12.3653ZM12.3749 12.3653V11.6153C11.9607 11.6153 11.6249 11.9511 11.6249 12.3653H12.3749ZM12.3749 11.6153H11.6249C11.6249 12.0295 11.9607 12.3653 12.3749 12.3653V11.6153ZM11.9999 8.70215C11.7928 8.70215 11.6249 8.53425 11.6249 8.32715H13.1249C13.1249 7.70583 12.6212 7.20215 11.9999 7.20215V8.70215ZM12.3749 8.32715C12.3749 8.53425 12.207 8.70215 11.9999 8.70215V7.20215C11.3786 7.20215 10.8749 7.70583 10.8749 8.32715H12.3749ZM12.3749 11.6153V8.32715H10.8749V11.6153H12.3749ZM8.33325 12.3653H11.6249V10.8653H8.33325V12.3653ZM8.70825 11.9903C8.70825 12.1974 8.54036 12.3653 8.33325 12.3653V10.8653C7.71193 10.8653 7.20825 11.369 7.20825 11.9903H8.70825ZM8.33325 11.6153C8.54036 11.6153 8.70825 11.7832 8.70825 11.9903H7.20825C7.20825 12.6116 7.71193 13.1153 8.33325 13.1153V11.6153ZM11.6249 11.6153H8.33325V13.1153H11.6249V11.6153ZM12.3749 15.6535V12.3653H10.8749V15.6535H12.3749ZM11.9999 15.2785C12.207 15.2785 12.3749 15.4464 12.3749 15.6535H10.8749C10.8749 16.2748 11.3786 16.7785 11.9999 16.7785V15.2785ZM11.6249 15.6535C11.6249 15.4464 11.7928 15.2785 11.9999 15.2785V16.7785C12.6212 16.7785 13.1249 16.2748 13.1249 15.6535H11.6249ZM11.6249 12.3653V15.6535H13.1249V12.3653H11.6249ZM15.6666 11.6153H12.3749V13.1153H15.6666V11.6153ZM15.2916 11.9903C15.2916 11.7832 15.4595 11.6153 15.6666 11.6153V13.1153C16.2879 13.1153 16.7916 12.6116 16.7916 11.9903H15.2916ZM15.6666 12.3653C15.4595 12.3653 15.2916 12.1974 15.2916 11.9903H16.7916C16.7916 11.369 16.2879 10.8653 15.6666 10.8653V12.3653ZM12.3749 12.3653H15.6666V10.8653H12.3749V12.3653ZM11.6249 8.32715V11.6153H13.1249V8.32715H11.6249Z"
				fill={active ? colors.lightBlue : 'white'}
			/>
			<path
				fillRule="evenodd"
				clip-rule="evenodd"
				d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
				stroke={active ? colors.lightBlue : 'white'}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
