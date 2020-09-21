import React, { useState, FC } from 'react';
import classnames from 'classnames';

export type AlertTypes = "success" | "default" | "danger" | "warning";

export interface BaseAlertProps {
    title?: string;
    description?: string;
    type?: AlertTypes;
    className?: string;
    closable?: boolean;
    onClose?(): void;
}

type AlertProps = Partial<BaseAlertProps>

export const Alert: FC<AlertProps> = (props) => {
    const [show, setShow] = useState(true);
    const {
        title,
        description,
        type,
        className,
        closable,
        onClose,
    } = props;
    const classes = classnames('alert', className, {
        [`alert-${type}`]: type
    });

    function handlerClose() {
        setShow(false);
        onClose && onClose();
    }

    return (
        <>
        {
            show && (
                <div className={classes}>
                    <h4 className="alert-title">{title}</h4>
                    <p className="alert-desc">{description}</p>
                    {
                    closable && <i className="alert-close" onClick={handlerClose}>X</i>
                    }
                </div>
            )
        }
        </>
    )
}

Alert.defaultProps = {
    description: 'desc'
}

export default Alert;