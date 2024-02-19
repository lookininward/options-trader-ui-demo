import React from 'react';
import classNames from 'classnames';

type CardProps = {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
    const classes = classNames(
        "bg-white p-5 md:p-10 rounded-xl shadow-lg border",
        className,
    );

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Card;
