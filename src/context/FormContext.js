import React, {createContext, useState} from 'react';
import { updateUser, createUser, getUser } from '../services/api';

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
        applicant: {
            firstName: "",
            lastName: ""
        },
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

    const [ formProgress, setFormProgress ] = useState(0);

    const [ isLoggedIn, setIsLoggedIn ] = useState(null);
    
    const onChange = (currProperty, value) => {
        setForm({ ...form, [currProperty]: strToBool(value)});
    }

    const onChangeNested = (currProperty, value, parrentProperty) => {
        setForm({ ...form, [parrentProperty]: { ...form[parrentProperty], [currProperty]: strToBool(value) } });     
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setFormProgress(formProgress + 1);

        return userId ? 
        updateUser({ userId, form }) : createUser(form).then(id => setUserId(id))
    }

    const onNext = () => {
        setFormProgress(formProgress + 1);
    }

    const onPrevious = () => {
        setFormProgress(formProgress - 1);
    }

    const resetForm = () => {
        setFormProgress(1);
    }

    const checkUser = (e) => {
        e.preventDefault();
        console.log('check user reached');
        getUser(form)
        .then(profile => {
            let user = profile[0];
            for (let property in user) {
                if (property in form) {
                    setForm(prevState => ({ ...prevState, [property]: strToBool(user[property]) }))
                }
            }
            return user;
        })
        .then(user =>  
            user ? 
                (
                    setUserId(user._id), 
                    console.log('user._id in checkUser context function: ', user._id),
                    setIsLoggedIn(true)
                ) : 
                (
                    setUserId('No User Found'), 
                    console.log('user in checkUser context function: ', userId),
                    setIsLoggedIn(false)
                )
        );
    }

    return (
        <FormContext.Provider value={{ form, onChange, onChangeNested, onSubmit, onNext, onPrevious, formProgress, resetForm, isLoggedIn,  checkUser, userId }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;