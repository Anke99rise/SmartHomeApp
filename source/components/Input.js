import React from "react";

export const Input = React.memo(
    ({
        id,
        type,
        name,
        prepend,
        append,
        disabled,
        onChange,
        onBlur,
        errors,
        label,
        isOptional,
        value,
        isNumeric,
        small,
        placeholder,
        autocomplete = false,
        onKeyPress,
        light,
        isTextarea,
    }) => {
        return (
            <div
                className={`inputGroup ${errors && errors.length > 0 ? "error" : ""
                    } ${disabled ? "disabled" : ""} ${isNumeric ? "numeric" : ""} ${small ? "small" : ""
                    } ${light ? "light" : ""}`}
            >
                {label && (
                    <label htmlFor={id}>
                        {label}
                        {isOptional && (
                            <span className="optional">Optional</span>
                        )}
                    </label>
                )}
                <div className="inputInner">
                    {prepend ? <div className="prepend">{prepend}</div> : null}
                    {!isTextarea && (
                        <input
                            type={type}
                            name={name}
                            id={id}
                            placeholder={placeholder}
                            onChange={(e) => onChange(e)}
                            onKeyPress={(e) =>
                                onKeyPress ? onKeyPress(e) : null
                            }
                            onBlur={(e) => (onBlur ? onBlur(e) : null)}
                            className="formControl"
                            disabled={disabled}
                            value={value}
                            autoComplete={autocomplete ? "on" : "new-password"}
                        />
                    )}
                    {isTextarea && (
                        <textarea
                            name={name}
                            id={id}
                            placeholder={placeholder}
                            onChange={(e) => onChange(e)}
                            onKeyPress={(e) =>
                                onKeyPress ? onKeyPress(e) : null
                            }
                            onBlur={(e) => (onBlur ? onBlur(e) : null)}
                            className="formControl"
                            disabled={disabled}
                            value={value}
                            rows={7}
                        />
                    )}
                    {append ? <div className="append">{append}</div> : null}
                </div>
                <p className="errorMessage">{errors && errors.length > 0 && errors[0]}</p>
            </div>
        );
    }
);
