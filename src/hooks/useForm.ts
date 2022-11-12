import { useState } from "react";

export enum ValidationState {
    valid,
    invalid,
    pristine
}

type ValidatorType = (_:string)=>boolean;
const defaultValidator: ValidatorType = (_) => (_.length>0);

interface RegisterArgs{
    validator?: ValidatorType,
    isRequired?: boolean,
    validate?: boolean,
}
const defaultRegisterArgs: RegisterArgs = {
    validator: defaultValidator,
    isRequired: true,
    validate: false,
}

export type FormValues = {[key: string]: string}
type FormStates = {[key: string]: ValidationState}

const useForm = () => {
    const [values, setValues] = useState<FormValues>({});
    const [states, setStates] = useState<FormStates>({})

    const register = (name: string, args?: RegisterArgs) => {

        const {validator, isRequired, validate} = {...defaultRegisterArgs, ...args}
        if (!(name in values)){
            setValues(state => ({ ...state, [name]: '' }));
            if(isRequired) setStates(state => ({ ...state, [name]: ValidationState.pristine }));
        }
        

        const onChangeText = (text: string) => {
            setValues(state => ({ ...state, [name]: text }));
            if (!validate && states[name] == ValidationState.invalid) setStates(state => ({ ...state, [name]: ValidationState.pristine}))
            if (validate && validator)
                setStates(state => ({ ...state, [name]: validator(text) ? ValidationState.valid : ValidationState.invalid }))
        }

        const onBlur = () => {
            if (validate && validator)
                setStates(state => ({ ...state, [name]: validator(values[name]) ? ValidationState.valid : ValidationState.invalid }))
        }
        return {onChangeText, onBlur, name, value: values[name], validState: states[name]}
    }

    const handleSubmit = (callback: (values: FormValues) => void) => {
        return () => {
            let allValid = true
            for (const name in states) {
                if (states[name] === ValidationState.invalid) return null;
                if (states[name] === ValidationState.pristine && values[name] == '') {
                    allValid = false;
                    setStates(state => ({ ...state, [name]: ValidationState.invalid }))
                } 
            }
            return allValid? callback(values) : null;
        }
    }

    const clear = () => {
        setValues({})
        setStates({})
    }

    return {register, handleSubmit, clear}
}

export default useForm;