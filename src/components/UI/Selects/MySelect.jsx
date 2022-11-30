import React from 'react';

const MySelect = ({options, def, reference}) => {
    return (
        <select ref={reference}>
            <option disabled value={def.value}>{def.name}</option>
            {options.map(o => <option value={o.value} key={o.value}>{o.name}</option>)}
        </select>
    );
};

export default MySelect;