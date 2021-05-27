import cx from 'classnames';

interface PropTypes {
    className?: string;
    title: string;
    copy?: string;
    href?: string;
    onClick?: () => void;
}

const Error: React.FC<PropTypes> = ({
    className,
    onClick,
    href,
    title,
    copy = 'Go to a safe place',
}) => {
    return (
        <div className={cx('flex flex-col items-center', className)}>
            <img
                className="w-1/2 md:w-3/4 max-w-sm md:max-w-lg avatar"
                src="/avatar-error.png"
                alt="Ruben's avatar"
                width="421"
                height="421"
            />
            <h1 className="h2 text-center mt-12">{title}</h1>
            {onClick && !href && (
                <button className="mt-12" onClick={onClick}>
                    {copy}
                </button>
            )}
            {href && !onClick && (
                <a className="button mt-12" href={href}>
                    {copy}
                </a>
            )}
        </div>
    );
};

export default Error;
