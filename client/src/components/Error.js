import React from 'react'


function Error({message}) {

    // let [loading, setLoading] = useState(true);


    return (
        <div>
            <div class="alert alert-danger" role="alert">
               {message}

            </div>
        </div>
    )
}

export default Error