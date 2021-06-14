import React, { useRef, useEffect } from 'react';
import cx from 'classnames';

import { useViewport } from 'hooks/useViewport';

interface PropTypes {
    className?: string;
}

const ROTATION_COEFFICIENT = 25;

const Avatar: React.FC<PropTypes> = ({ className }) => {
    const ref = useRef<HTMLImageElement>(null);

    const { lteSmall } = useViewport();

    useEffect(() => {
        if (lteSmall) {
            if (ref.current) {
                ref.current.style.transform = '';
            }

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
    }, [lteSmall]);

    return (
        <picture
            ref={ref}
            className={cx(
                'avatar md:scale-110 md:transition-none md:active:scale-100',
                className
            )}
        >
            <source type="image/avif" srcSet="/media/avatar.avif" />
            <source type="image/webp" srcSet="/media/avatar.webp" />
            <source type="image/png" srcSet="/media/avatar.png" />
            <img
                src="/media/avatar.png"
                alt="Ruben's avatar"
                width="421"
                height="421"
            />
        </picture>
    );
};

export default Avatar;
