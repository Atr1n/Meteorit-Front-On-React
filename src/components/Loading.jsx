import React from 'react'
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='loader'>
            <Loader
				type="ThreeDots"
				color="#f6b828"
				width={200}
				height={200}
			/>
        </div>
    )
}

export default Loading