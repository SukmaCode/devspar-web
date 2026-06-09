import React, { useEffect, useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(count);
    }, []);
  return (
    <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  )
}