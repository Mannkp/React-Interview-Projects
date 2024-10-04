import data from './data';
import './styles.css';
import React, { useState, useCallback } from 'react';

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [selectedMS, setSelectedMS] = useState([]);
    const [isMultiSelect, setIsMultiSelect] = useState(false);

    const handleSingleSelection = useCallback((itemId) => {
        itemId === selected ? setSelected(null) : setSelected(itemId);
    }, [selected])

    const handleMultiSelect = useCallback((itemId) => {
        if (selectedMS.includes(itemId)) {
            setSelectedMS(selectedMS.filter(id => id !== itemId)); // Remove itemId from the array
        } else {
            setSelectedMS([...selectedMS, itemId]); // Add itemId to the array
        }
    }, [selectedMS])

    const toggleMultiSelect = useCallback(() => {
        setIsMultiSelect(!isMultiSelect);
        setSelected(null);
        setSelectedMS([]);
    }, [isMultiSelect])



    return (
        <section className='Accordian' aria-label='Accordian'>
            <div className="accordian">
                <button className='' onClick={toggleMultiSelect}>
                    {isMultiSelect ? 'Disable ' : 'Enable '} MultiSelect
                </button>

                {data && data?.map((item, index) => (
                    <div className="item" key={index + item?.id} onClick={() => (isMultiSelect ? handleMultiSelect(item?.id) : handleSingleSelection(item?.id))}>
                        <div className="title">
                            <h3>{item?.question}</h3>
                            <span>+</span>
                        </div>
                        {(isMultiSelect ? selectedMS.includes(item.id) : selected === item?.id) && (
                            <div className="accordian-body">
                                <p>{item?.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
                <div className="logic">
                    <p>Accordian logic: </p>
                    <p>at event of onClick we set id in 'selected' state and conditionally render accordian content by matching id, in case of multi-select, we have an array of selected accordians. </p>
                </div>
            </div>
        </section>
    )
}

export default Accordian