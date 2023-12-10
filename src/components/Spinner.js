import React from 'react'
import '../App.css';
import loading from './loading.gif'

const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3 spinner" src={loading} alt="loading" />
            </div>
        )
}
export default Spinner