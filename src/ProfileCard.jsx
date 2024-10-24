import ProfileCardComponent from "./ProfileCardComponent.jsx"

function ProfileCard(){
    const students = [
        {
          name: "John Doe",
          age: 20,
          score: 85,
          bio: "John is a hardworking computer science student who enjoys coding in his free time.",
          hobby: "Playing video games",
          occupation: "Part-time web developer",
          location: "New York, USA"
        },
        {
          name: "Emily Smith",
          age: 22,
          score: 92,
          bio: "Emily is passionate about graphic design and loves bringing ideas to life through visuals.",
          hobby: "Photography",
          occupation: "Freelance designer",
          location: "London, UK"
        },
        {
          name: "Michael Johnson",
          age: 21,
          score: 68,
          bio: "Michael is an aspiring engineer who enjoys solving complex problems and building machines.",
          hobby: "Building model airplanes",
          occupation: "Mechanical engineering intern",
          location: "Sydney, Australia"
        },
        {
          name: "Sophia Lee",
          age: 23,
          score: 58,
          bio: "Sophia is a literature major with a keen interest in classic novels and writing short stories.",
          hobby: "Writing poetry",
          occupation: "Library assistant",
          location: "Toronto, Canada"
        },
        {
          name: "David Kim",
          age: 19,
          score: 63,
          bio: "David is a physics enthusiast who enjoys experimenting and discovering how things work.",
          hobby: "Stargazing",
          occupation: "Lab assistant",
          location: "Seoul, South Korea"
        }
      ];
      
return(


    <div>
        {
            students.map((Student, index)=>(
                Student.score > 70 ? (
                <div key={index}>
              <ProfileCardComponent 
              name = {Student.name}
              age ={Student.age}
              location={Student.location}
              bio = {Student.bio}
              occupation={Student.occupation}
              hobby={Student.hobby}
              />

              </div>
 ): null
 ))}
           
        
    </div>
)

}

export default ProfileCard