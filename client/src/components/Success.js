import React from 'react'


function Success({message}) {

    // let [loading, setLoading] = useState(true);


    return (
        <div>

            <div class="alert alert-success" role="alert">
                {message}
            </div>
        </div>
    )
}

export default Success