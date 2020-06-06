import React, { Component } from 'react';
import MultiStep from 'react-multistep'
import '../../style/StepFormCSS/custom.css'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'


const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> },
    { component: <StepFour /> }
]

class Main extends Component {
    render() {
        return (
            <div>
                <MultiStep steps={steps} />
                <div className='container app-footer'>
                    <h6>Press 'Enter' or click on progress bar for next step.</h6>
                </div>
            </div>
        )
    }
}
export default Main;