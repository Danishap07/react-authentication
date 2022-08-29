import  { useState} from 'react'

const useForm = (callback) => {
    const [values, setValues] = useState({ username: "", email: "", password: "" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        callback();
    }

    return {
        handleChange,
        handleSubmit,
        values
    }
}
export default useForm