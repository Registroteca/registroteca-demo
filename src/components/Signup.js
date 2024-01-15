import { useState } from "react"
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const Navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [CPF, setCPF] = useState("")
    const [emailReceiver, setEmailReceiver] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)





    /*
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const attributeList = [];
        attributeList.push(
            new CognitoUserAttribute({
                Name: 'email',
                Value: email,
            })
        );
        let username = email;
        userpool.signUp(username, password, attributeList, null, (err, data) => {
            if (err) {
                console.log(err);
                alert("Couldn't sign up");
            } else {
                console.log(data);
                alert('User Added Successfully');
                Navigate('/dashboard');
            }
        });

    }*/


    const handleSubmit = async (e) => {
        e.preventDefault()

        const encodedName = encodeURIComponent(username);
        const encodedemail = encodeURIComponent(email);
        const encodedCPF = encodeURIComponent(CPF);
        const encodedSendToEmail = encodeURIComponent(emailReceiver);

        const adress = `http://registroteca-demo.rj.r.appspot.com/registerClient?name=` + encodedName + `&email=` + encodedemail + `&CPF=` + encodedCPF + `&sendTo=` + encodedSendToEmail;

        axios.get(adress)
            .then(response => {
                console.log(response.data);
                // Handle the response data
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                // Handle any errors
            });

    };


 

  return (
      <div>
          <h2>SignUp</h2>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  type="CPF"
                  placeholder="CPF"
                  value={CPF}
                  onChange={(e) => setCPF(e.target.value)}
              />
              <input
                  type="emailReceiver"
                  placeholder="emailReceiver"
                  value={emailReceiver}
                  onChange={(e) => setEmailReceiver(e.target.value)}
              />
              <button type="submit">SignUp</button>
          </form>
      </div>
  )
}

export default Signup