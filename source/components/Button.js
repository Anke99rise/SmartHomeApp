import React from 'react';


export const ButtonTypes = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning',
  danger: 'danger',
  info: 'info',
  transparent: 'transparent',
};

export const Button = React.memo(
  ({
    type = 'button',
    btnClass,
    large,
    prepend,
    append,
    disabled,
    loading,
    onClick,
    line,
    active,
    iconOnly,
    rounded,
    big,
    right,
    center,
    small,
    customClass,
    children,
  }) => {
    return (
      <button
        type={type}
        className={
            `btn 
            ${btnClass} 
            ${large ? 'large' : ''} 
            ${line ? 'line' : ''} 
            ${loading ? 'loading' : ''} 
            ${big ? 'big' : ''} 
            ${right ? 'right' : ''} 
            ${center ? 'center' : ''} 
            ${disabled ? 'disabled' : ''} 
            ${iconOnly ? 'iconOnly' : ''} 
            ${rounded ? 'rounded' : ''} 
            ${small ? 'small' : ''} 
            ${active ? 'active' : ''} 
            ${customClass}`}
        onClick={(e)=> onClick(e)}
        disabled={disabled || loading}
      >
        {prepend ? <div className="prepend">{prepend}</div> : null}
        <span className="text">{children}</span>
        {loading}
        {append ? <div className="append">{append}</div> : null}
      </button>
    );
  },
);
