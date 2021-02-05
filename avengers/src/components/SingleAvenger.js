import React, {useEffect} from 'react';



const SingleAvenger = (props) => {

    useEffect(() => {
        const id = props.match.params.userId;
        // do something with the id
      }, [props.match.params.userId])
      console.log(id);
    return (
        <div>
            AVENGER!
        </div>
    )
}

export default SingleAvenger;