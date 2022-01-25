import { keyframes } from 'styled-components';

export const slideLeft = keyframes`
	0% {
		transform: translateX(+5%);
        opacity: 0;
	}
    50% {
        transform: translateX(+5%);
        opacity: 0;
    }
	100% {
		transform: translateY(0);
        opacity: 1;
	}
`;

export const slideRight = keyframes`
	0% {
		transform: translateX(-5%);
        opacity: 0;
	}
    50% {
        transform: translateX(-5%);
        opacity: 0;
    }
	100% {
		transform: translateY(0);
        opacity: 1;
	}
`;

export const slideDown = keyframes`
	0% {
		transform: translateY(-8%);
        opacity: 0;
	}
    50% {
        transform: translateY(-8%);
        opacity: 0;
    }
	100% {
		transform: translateY(0);
        opacity: 1;
	}
`;
