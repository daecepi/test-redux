import React, { Component } from 'react';

import Formik from 'formik';

class FormElement extends Component {
    state = {   }

    onSubmit = (e) => {
        e.preventDefault();


    }

    render() { 
        return ( 
            <Formik onSubmit={this.onSubmit}> 
                
            </Formik>
         );
    }
}
 
export default FormElement;