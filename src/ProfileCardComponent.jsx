


function ProfileCardComponent({name,age,bio,hobby,occupation,location,score}) {
  return(
    <div className="profileCard">
      
        

            <div className="infoCard">
                <div className="info">
                    
                      <p><i class="fa-solid fa-user"></i> {name}, {age}</p>
                </div>
               
                <div className="info">
                      <p><i class="fa-solid fa-location-pin"></i> {location}</p>
                </div>
                <div className="info">
                      
                      <p className="bio"> {bio}</p>
                </div>
                <div className="info">
                      
                      <p> <i class="fa-solid fa-briefcase"></i> {occupation} </p>
                </div>
                <div className="info">
                      
                      <p><i class="fa-solid fa-medal"></i> {hobby}</p>
                </div>
            </div>

    </div>
  )    
}

export default ProfileCardComponent