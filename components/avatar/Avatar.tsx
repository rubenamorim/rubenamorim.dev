import React, { useRef, useEffect } from 'react';
import cx from 'classnames';

import { useHydrationRender } from 'hooks/useHydrationRender';
import { useViewport } from 'hooks/useViewport';

interface PropTypes {
    className?: string;
}

const ROTATION_COEFFICIENT = 25;

const Avatar: React.FC<PropTypes> = ({ className }) => {
    const ref = useRef<HTMLImageElement>(null);

    const isHydrationRender = useHydrationRender();
    const { lteSmall } = useViewport();

    const hasTouchAnimation = isHydrationRender || lteSmall;

    useEffect(() => {
        if (hasTouchAnimation) {
            return;
        }

        const handleMouseMove = (event: MouseEvent) => {
            requestAnimationFrame(() => {
                if (!ref.current) {
                    return;
                }

                const { innerHeight: height, innerWidth: width } = window;
                const { clientX: xVal, clientY: yVal } = event;

                const yRotation =
                    ROTATION_COEFFICIENT * ((xVal - width / 2) / width);
                const xRotation =
                    -ROTATION_COEFFICIENT * ((yVal - height / 2) / height);

                const transform =
                    'perspective(250px) scale(1.1) rotateX(' +
                    xRotation +
                    'deg) rotateY(' +
                    yRotation +
                    'deg)';

                ref.current.style.transform = transform;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [hasTouchAnimation]);

    return (
        <img
            ref={ref}
            className={cx(
                'filter drop-shadow-2xl select-none drag-none',
                {
                    'transform active:scale-110 transition-transform':
                        hasTouchAnimation,
                },
                className
            )}
            src="/avatar.png"
            alt="Ruben's avatar"
            width="421"
            height="421"
        />
    );
};

export default Avatar;
