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


  const [ grid1, setGrid1 ] = useState([
    {parentObject: 'applicant', data: 'firstName', display: 'First name: '},
    {parentObject: 'applicant', data: 'lastName', display: 'Last name: '},
    {data: 'birth', display: 'Birth date: '},
    {data: 'phone', display: 'Phone numer: '},
    {data: 'email', display: 'Email: '},
    {data: 'driverStatus', display: 'Driver status: '},
    {data: 'driverId', display: 'Driver license #: '},
    {data: 'drivable', display: 'Is your vehicle drivable ? '},
    {data: 'gender', display: 'Gender: '},
    {data: 'race', display: 'Ethnicity: '},
    {data: 'language', display: 'Language: '},
    {data: 'veteran', display: 'Are you a veteran ? '},
    {data: 'vehicleType', display: 'Vehicle type: '},
    {data: 'people', display: 'People in the vehicle (including you): '}
  ]);

  const [ grid2, setGrid2 ] = useState([
    {data: 'vehicleType', display: 'Vehicle type: '},
    {data: 'people', display: 'People in the vehicle (including you): '},
    {data: 'pets', display: 'Pets in the vehicle: '},
    {parentObject: 'currParking', data: 'street', display: 'Street'},
    {parentObject: 'currParking', data: 'city', display: 'City'},
    {parentObject: 'currParking', data: 'zip', display: 'Zip'},
    {parentObject: 'currParking', data: 'other', display: 'Non-traditional address: '},
    {parentObject: 'neighborhood', data: 'desired', display: 'Desired neighborhood: '},
    {parentObject: 'neighborhood', data: 'work', display: 'Work ?'},
    {parentObject: 'neighborhood', data: 'school', display: 'School ?'},
    {parentObject: 'neighborhood', data: 'family', display: 'Family ?'},
    {parentObject: 'neighborhood', data: 'other', display: 'Other: '}
  ]);

  const [ grid3, setGrid3 ] = useState([
    {data: 'employed', display: 'Are you employed ? '},
    {data: 'employerLocation', display: 'Employer location: '},
    {data: 'otherIncome', display: 'Other source of income ? '},
    {data: 'govAssistance', display: 'Do you receive government assistance ?'},
    {parentObject: 'govIncome', data: 'calworks', display: 'CalWorks: '},
    {parentObject: 'govIncome', data: 'cashProgImmigrants', display: 'Cash Assistance Program for Immigrants: '},
    {parentObject: 'govIncome', data: 'ebt', display: 'Electronic Benefit Transfer: '},
    {parentObject: 'govIncome', data: 'gr', display: 'General Relief: '},
    {parentObject: 'govIncome', data: 'medIncome', display: 'Medical Advocacy Program: '},
    {parentObject: 'govIncome', data: 'other', display: 'Other: '}
  ]);

  const [grid4, setGrid4 ] = useState([
    {parentObject: 'situation', data: 'jobLoss', display: 'Job loss: '},
    {parentObject: 'situation', data: 'highBills', display: 'High bills: '},
    {parentObject: 'situation', data: 'eviction', display: 'Eviction: '},
    {parentObject: 'situation', data: 'homeAbuse', display: 'Home abuse: '},
    {parentObject: 'situation', data: 'incarceration', display: 'Incarceration: '},
    {parentObject: 'situation', data: 'sick', display: 'Sickness: '},
    {parentObject: 'situation', data: 'familyChange', display: 'Family changes: '},
    {parentObject: 'situation', data: 'substances', display: 'Substances / drugs: '},
    {parentObject: 'situation', data: 'expensiveHouse', display: 'High expenses: '},
    {parentObject: 'situation', data: 'other', display: 'Other: '},
    {data: 'story', display: 'Your story: '},
    {parentObject: 'homelessness', data: 'length', display: 'Length of current situation : '},
    {parentObject: 'homelessness', data: 'date', display: 'Approximate starting date: '},
    {parentObject: 'healthConcern', data: 'pregnancy', display: 'Pregnancy: '},
    {parentObject: 'healthConcern', data: 'handicapped', display: 'Handicapped: '},
    {parentObject: 'healthConcern', data: 'other', display: 'Other: '}
  ]);

  const [ grid5, setGrid5 ] = useState([
    {parentObject: 'emergencyContact', data: 'name', display: 'Name: '},
    {parentObject: 'emergencyContact', data: 'phone', display: 'Phone number: '},
    {parentObject: 'emergencyContact', data: 'email', display: 'Email: : '},
    {parentObject: 'emergencyContact', data: 'other', display: 'Other: '},
    {parentObject: 'emergencyContact', data: 'relation', display: 'Relationship: '}
  ])

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
        <FormContext.Provider value={{ form, onChange, onChangeNested, onSubmit, onNext, onPrevious, formProgress, resetForm, isLoggedIn,  checkUser, userId, grid1, grid2, grid3, grid4, grid5 }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;