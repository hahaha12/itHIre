
import { useFormik } from 'formik';
import {useDispatch} from 'react-redux'
import { getFormData } from '../../redux/feuters/listSlice/listSlices';
import { FormInputs } from './formInputData';


const ListForm = () => {

   const dispatch = useDispatch()  
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => void dispatch(getFormData({...values, id:Math.random().toString()})) 
    });
    return (
       
        <form className='listForm' onSubmit={formik.handleSubmit}>
            {
                FormInputs.map(({id, name, type, placeholder}) => (
                    <input
                    key={`${id}`}
                    id={id}
                    name={name}
                    type={type} 
                    onChange={formik.handleChange}
                    /* @ts-ignore */
                    value={formik.values[`${id}`]}
                    placeholder={placeholder}
                />
                ))
            }
            <button className='listForm--button' type="submit">Submit</button>
        </form>
    );
};

export default ListForm 