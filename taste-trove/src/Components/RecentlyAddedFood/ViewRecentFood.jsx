const ViewRecentFood = ({Food, handleBanner}) => {
    let {photoUrl,shortDescription,price, userName}=Food
    
  return (
    <>
        <div >
            <section>
                <div onClick={()=>handleBanner(Food)} className='border-2 p-3'>

                    <img className="h-44" src={photoUrl}/>
                    <h1>{userName}</h1>
        
                </div>
                
                
            </section>
        </div>
    </>
  )
}

export default ViewRecentFood;