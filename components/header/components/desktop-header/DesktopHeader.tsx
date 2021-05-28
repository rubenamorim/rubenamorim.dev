import Link from 'next/link';

interface PropTypes {
    className?: string;
}

const LINKS = [
    {
        id: 'about',
        href: '',
        text: 'About',
        'aria-label': 'Go to the about page soon',
    },
    {
        id: 'portfolio',
        href: '',
        text: 'Portfolio',
        'aria-label': 'Go to the portfolio page soon',
    },
];

// TODO: Remove this comments when implementing the respective link pages
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/anchor-is-valid */
const DesktopHeader: React.FC<PropTypes> = ({ className }) => {
    return (
        <nav className={className} aria-label="Main navigation">
            {LINKS.map(({ id, href, text, ...remainingLinkProps }) => (
                <Link key={id} href={href} passHref>
                    <a
                        className="relative soon cursor-not-allowed opacity-50 mr-14 last:mr-0"
                        aria-disabled
                        data-after="🚧"
                        {...remainingLinkProps}
                    >
                        {text}
                    </a>
                </Link>
            ))}
        </nav>
    );
};

export default DesktopHeader;
