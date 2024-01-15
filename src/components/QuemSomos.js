import { useState } from "react"
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';

const quemSomos = () => {

    


 

  return (
      <div>
          <main>

              <div class="main-wrapper">
                  <h1 class="main-body-h1">VENHA CONVERSAR  
                      <span class="main-body-span"> CONOSCO! </span>
                      
                      
                  </h1>
                  
                  <h2 class="main-body-h2">De origem paulista, somos uma empresa de pessoas <br/> com paixao pelo seu trabalho, carinho pelo processo <br/> e respeito por voce!</h2>
                  <br/><br/><br/><h4 class="main-body-h4"> Fale conosco!!<br /> </h4>
                  <h3 class="main-body-h3"><i>(11) 99031-4701  //  registroteca.oficial@gmail.com</i></h3>
              </div>

          </main>
      </div>
  )
}

export default quemSomos