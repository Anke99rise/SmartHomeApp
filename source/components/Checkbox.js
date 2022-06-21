import React from 'react';


export const Checkbox = React.memo(
  ({ label, isChecked, checkItem, disabled, title, light, small }) => {
    return (
      <div
        className={`inputCheckbox ${light ? 'light' : ''} ${small ? 'small' : ''}`}
        data-title={title}
      >
        <label className="container">{label && label}
          <input
            type="checkbox"
            checked={isChecked}
            onChange={()=> checkItem()}
            disabled={disabled}
          />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  },
);