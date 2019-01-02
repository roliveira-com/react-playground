import React from 'react';

function childrenProps(children, props){
    return React.Children.map(props.children, 
        child => React.cloneElement(child, {...props})
    )
}

export { childrenProps }