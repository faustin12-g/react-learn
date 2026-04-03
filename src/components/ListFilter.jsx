import React, { useCallback, useMemo, useState } from 'react'

const ListFilter = () => {
    const allItems = Array.from({length:1000}, (_, index)=>({
        id: index,
        name: `Item ${index+1}`,
        category: `Category ${Math.floor(index/100)+1}`
    }))
    const [searchTerm, setSearchTerm] = useState('')
    const filteredItems = useMemo(()=>{
        console.log('filtering items...')
        return allItems.filter(item=>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [searchTerm])
    const handleSearchChange = useCallback((e)=>{
        setSearchTerm(e.target.value)
    }, [])
  return (
    <div style={{padding: '20px'}}>
        <h2>List Filter - Performance Optimization</h2>

        <input
        type='text'
        placeholder='Search items...'
        value={searchTerm}
        onChange={handleSearchChange} 
        style={{padding: '10px', fontSize:'16px', width: '100%'}}
        />
        <p>Total items: {allItems.length} | Filtered items: {filteredItems.length}</p>
        <div style={{marginTop: '20px'}}>
            {filteredItems.map(item=>(
                <div key={item.id} style={{padding: '8px', borderBottom: '1px solid #ccc'}}>
                    {item.name} - {item.category}
                </div>
            ))}
        </div>

      
    </div>
  )
}

export default ListFilter
