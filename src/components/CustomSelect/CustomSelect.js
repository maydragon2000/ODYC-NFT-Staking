import React, { Fragment } from "react";
import Select, { components } from "react-select";

const MultiValueLabel = ({ children, ...props }) => {
    React.useEffect(() => {
    }, [children, props])
    return (
        <components.MultiValueLabel {...props}>#{props.data.id}</components.MultiValueLabel>
    );
};

const IconOption = ({ data, ...restProps }) => (
    <components.Option {...restProps}>
        <img src={data.image} style={{ height: '30px', width: '30px', borderRadius: '50%', marginRight: '10px' }} />
        {data.id}
    </components.Option>
);

const CustomSelect = ({ onChange, value, options }) => {

    // const options = [
    //     {
    //         id: 'Option 1',
    //         image: "https://lh3.googleusercontent.com/SOZtVxcGcx34df2yKjCzTzSBgdMgKTygVtKeGAtkUr0sbULcFd6C4hhHosCcKlzDwCEVkBZ6EIi4c4sDXBMGYt2-a8iWEJy7oQhO",
    //     },
    //     {
    //         id: 'Option 2',
    //         image: "https://lh3.googleusercontent.com/sxggxadQBy2o3LozK2bVw9Oc4IOLeZo1aGrZ6cCNFHpUUM6MyV5FYcUozKzxgA7TP6s_ACqLici9V32Lr3VJBiUNlNS7pDOprwjR",
    //     }
    // ];


    // const IconSingleValue = (props) => (
    //     <SingleValue  {...props}>
    //         {props.data.id}
    //         {/* <img src={props.data.image} style={{ height: '30px', width: '30px', borderRadius: '50%', marginRight: '10px' }} /> */}
    //     </SingleValue>
    // );





    const customStyles = {
      
        indicatorSeparator: (provided, state) => ({
            ...provided,
    
        }),

        clearIndicator: (provided, state) => ({
            ...provided,
  
        }),

        dropdownIndicator: (provided, state) => ({
            ...provided,
     
        }),

        placeholder: (provided, state) => ({
            ...provided,
       
        }),

        multiValue: (provided, state) => ({
            ...provided,
          
        }),

        multiValueRemove: (provided, state) => ({
            ...provided,
            "&:hover": {
             
            },
        }),

        noOptionsMessage: () => ({
            padding: "8px 12px",
        }),
        option: (provided) => ({
            ...provided,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: undefined,
            "&:hover": {
            
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            
        }),
    }

    return (
        <div>
            <Select
                value={value}
                styles={customStyles}
                components={{ Option: IconOption, MultiValueLabel }}
                options={options.map(item => ({ ...item, value: item.id }))}
                isMulti
                NoOptionsMessage="No options"
                onChange={onChange}
                closeMenuOnSelect={false}
            />
        </div>
    );
};

export default CustomSelect;