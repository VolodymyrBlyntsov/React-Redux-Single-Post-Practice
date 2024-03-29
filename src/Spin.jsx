import { TailSpin } from  'react-loader-spinner';
import { useSelector } from 'react-redux';


const Spin = (props) => {

    const spinner = useSelector(state => state.appReducer.loading)

    return (
        <div className='loader-styles'>
            <TailSpin 
                color="#00BFFF"
                height={80}
                width={80}
                visible={spinner}
            />
        </div>
    )
}

export default Spin;