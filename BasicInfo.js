export default function BasicInfo(props) {
    return (
      // Very Easy Challenge
      <div className="container mx-auto bg-purple-200 rounded-lg shadow border p-8 m-10">
        <h1 className="text-3xl text-gray-700 font-bold mb-5 text-center">
           Customer's Personal Information:
        </h1>

        <ol>
          {
            props.info.map(person=> {
              return(
                <div className="container mx-auto bg-gray-200 rounded-lg shadow border p-8 m-10">
                <li className="text-gray-500 text-lg" key={person.id}>
                Our Customer: {person.id}<br />
                <ul>Name: {person.name} </ul>
                <ul>Phone Number: {person.phoneNumber} </ul>
                <ul>Date of Birth: {person.birthDate} </ul>
                <br />
              </li>
              </div>
              )
            })
          }
        </ol>
      </div>
    );
  }
