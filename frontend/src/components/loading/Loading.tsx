import React from 'react'
import './loading.css'
type Props = {}

const Loading = (props: Props) => {
    return (
        <div className="loading-page">
        <div className="loading-spinner">
        </div>
        <div className="loading-message">
          <h3 >Loading...</h3>
        </div>
      </div>
    );
}

export default Loading