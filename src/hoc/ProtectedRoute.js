import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute =(props)=>{

    const {element, loginStatus} = props;

    const navigate = useNavigate();

    useEffect( ()=>{
        if(!loginStatus)
            navigate('/');
    }, []);

    return (<>
          {
            loginStatus?
            <div>
              {element}
            </div>
            :<></>
          }
        </>
    )
}

export default ProtectedRoute