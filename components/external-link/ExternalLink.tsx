import React from 'react';

const ExternalLink: React.FC<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>
> = ({ href, children, ...remainingProps }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            {...remainingProps}
        >
            {children}
        </a>
    );
};

export default ExternalLink;
