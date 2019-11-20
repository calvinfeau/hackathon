import React, {createContext, useState} from 'react';
import { updateUser, createUser } from '../services/api';

export const FormContext = createContext();

const FormContextProvider = (props) => {

    const strToBool = value => {
        if (value && typeof value === "string") {
          if (value.toLowerCase() === "true") return true;
          if (value.toLowerCase() === "false") return false;
        }
        return value;
      };

    const [ form, setForm ] = useState({
        applicant: "",
        birth: "",
        phone: "",
        email: "",
        driverId: "",
        driverStatus: "",
        drivable: null,
        gender: "",
        race: "",
        language: "",
        veteran: null,
        healthcare: "",
        vehicleType: "",
        people: 1,
        pets: 0,
        currParking: {
            street: "",
            city: "",
            zip: "",
            other: ""
        },
        neighborhood: {
            desired: "",
            work: null,
            school: null,
            family: null,
            other: ""
        },
        employed: null,
        employerLocation: "",
        otherIncome: "",
        govAssistance: null,
        govIncome: {
          calworks: null,
          cashProgImmigrants: null,
          ebt: null,
          gr: null,
          medIncome: null,
          other: ""
        },
        situation: {
            jobLoss: null,
            highBills: null,
            eviction: null,
            homeAbuse: null,
            incarceration: null,
            sick: null,
            familyChange: null,
            substance: null,
            expensiveHouse: null,
            other: ""
        },
        story: "",
        homelessness: {
            length: "",
            date: ""
        },
        healthConcern: {
            none: null,
            pregnancy: null,
            handicapped: null,
            other: ""
        },
        emergencyContact: {
            name: "",
            relation: "",
            phone: "",
            email: ""
        }
    });

    const [ userId, setUserId ] = useState('');

    const [ formProgress, setFormProgress ] = useState(1);
    
    const onChange = (currProperty, value) => {
        console.log('onChange hit');
        setForm({ ...form, [currProperty]: strToBool(value)});
    }

    const onChangeNested = (currProperty, value, parrentProperty) => {
        console.log('onChangeNested hit');
        setForm({ ...form, [parrentProperty]: { ...form[parrentProperty], [currProperty]: strToBool(value) } });     
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('current form on submit', form);
        setFormProgress(formProgress + 1);

        return userId ? 
        updateUser({ userId, form }) : createUser(form).then(id => setUserId(id))
    }

    const onNext = () => {
        setFormProgress(formProgress + 1);
        console.log('current form on next button', form);
    }

    const onPrevious = () => {
        setFormProgress(formProgress - 1);
        console.log('current form on back button', form);
    }

    return (
        <FormContext.Provider value={{ form, onChange, onChangeNested, onSubmit, onNext, onPrevious, formProgress }}>
            {props.children}
        </FormContext.Provider>
    )

}

export default FormContextProvider;