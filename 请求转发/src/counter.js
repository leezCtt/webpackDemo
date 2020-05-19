import React, { useState } from 'react'

export default () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            {count}
            <br/>
            <button onChange={() => setCount(count +1)}>
                添加
            </button>
            <button onChange={() => setCount(count -1)}>
                减少
            </button>
        </div>
    )

}