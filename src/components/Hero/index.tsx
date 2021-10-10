import React from "react";
import { FiSearch } from 'react-icons/fi';

import {Formik,ErrorMessage} from 'formik';
import * as yup from 'yup';

import {HeroContainer, HeroContent, HeroBg,Input,Button, FormElement, InputSection,ErrorSection} from './HeroElements';

function Hero(){
    const Validationschema = yup.object().shape({
        city: yup.string().required("City name is required")
    })
    return(
        <HeroContainer>
            <HeroBg>
                <HeroContent>
                            <Formik
                                validationSchema = {Validationschema}
                                initialValues= {{
                                    city:''
                                }}

                                onSubmit={(values) =>{
                                    alert(JSON.stringify(values))
                                }}
                            >
                            {({handleSubmit,values,handleChange}) =>(
                                <FormElement onSubmit={handleSubmit}>
                                    <InputSection>
                                        <Input 
                                            id="city" 
                                            name="city"
                                            placeholder="search city..."
                                            value={values.city}
                                            onChange={handleChange}
                                        />
                                        <Button type="submit">
                                            <FiSearch />
                                        </Button>
                                    </InputSection>
                                    <ErrorSection>
                                        <ErrorMessage name="city" />
                                    </ErrorSection>
                                </FormElement>
                            )}
                </Formik>
                </HeroContent>
            </HeroBg>
        </HeroContainer>
    )
}

export default Hero