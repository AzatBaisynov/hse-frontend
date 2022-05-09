import React from 'react';

const AuthInput = ({type, placeholder, field, setAccount, account, className, id}) => {
    /*"field" in props writes from inputs, "setAccount" writes login and password to "account"*/
    /*"handleInput" writes data from inputs to "account"*/
    const handleInput = (e) =>{
        const fields = {
            ...account,
            [field] : e.target.value
        }
        setAccount(fields)
    }
    return (
        <div>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={className}
                onInput={handleInput}
            />
        </div>
    );
};

export default AuthInput;