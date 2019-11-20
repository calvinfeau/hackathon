import React, { useContext, useEffect } from 'react';
import styled from "styled-components";
import FormIntro from "../components/FormIntro";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form3";
import Form4 from "../components/Form4";
import FormEnd from "../components/FormEnd";
import { FormContext } from '../context/FormContext';

const FormsPage = () => {
  const { formProgress } = useContext(FormContext);
  var currentForm = () => {
    return formProgress === 0 ?
      <FormIntro /> : formProgress === 1 ? 
        <Form1 /> : formProgress === 2 ? 
          <Form2 /> : formProgress === 3 ?
            <Form3 /> : formProgress === 4 ?
              <Form4 /> : <FormEnd />
  }

  useEffect(() => {
    console.log('value of formProgress in context: ', formProgress)
    currentForm();
  }, [formProgress]);

  return ( 
      <Wrapper>
        <Banner>FIND YOUR SPOT</Banner>
        {currentForm()}
      </Wrapper>
   );
}

export default FormsPage;

const Banner = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 5vh;
margin-bottom: 3vh;
background-color: #F4F4F4;
color: #12679B;
font-weight: 700;
font-size: 1.2vmax;

@media screen and (max-width: 1100px) and (orientation: portrait) {
  font-size: 1.5vmax;
}
`;

const Wrapper = styled.div`
min-height: 70vh;
`;

// import { Route, Switch } from "react-router-dom";

// class FormsPage extends Component {
//   render() {
//     return (
//       <Wrapper>
//         <Banner>FIND YOUR SPOT</Banner>
//         <Switch>
//           <Route exact path="/forms/intro" render={() => <FormIntro />} />
//           <Route exact path="/forms/1" render={props => <Form1 {...props} />} />
//           <Route exact path="/forms/2" render={props => <Form2 {...props} />} />
//           <Route exact path="/forms/3" render={props => <Form3 {...props} />} />
//           <Route exact path="/forms/4" render={props => <Form4 {...props} />} />
//           <Route exact path="/forms/end" render={props => <FormEnd {...props} />} />
//         </Switch>
//       </Wrapper>
//     );
//   }
// }

// export default FormsPage;
