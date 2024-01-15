import { useState } from "react"
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {

    





 

  return (
      <div>
          <div class="step2-main-wrapper">
              
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <h1>JÁ TENHO UMA CONTA MANACÁ</h1>
                  <p>Preencha os campos abaixo com seu e-mail e senha</p>
                  <form id="login" class="new_subscriber" action="/subscribers/sign_in" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"/><input type="hidden" name="authenticity_token" value="ECAT4xzR1QusWQZAjBt6HsIiTm97ZJQzS51TgSniDb0lVej0qc3shG/Rk5dOu+ohi6CKVm/uu9ASOtONPL+tLw=="/>
                      <div class="row">
                          <div class="col-xs-12 internal">
                              <input class="input-text2" placeholder="E-mail" type="email" value="" name="subscriber[email]" id="subscriber_email"/>
          </div>
                              <div class="col-xs-12 internal bottom20">
                                  <input class="input-text2" placeholder="Senha" type="password" name="subscriber[password]" id="subscriber_password"/>
          </div>
                                  <div class="col-xs-12 internal">
                                      <a class="btn5" data-toggle="modal" data-target="#forgot-password" href="#">Esqueci minha senha</a>
                              <input type="submit" name="commit" value="ENTRAR" class="btn2" data-disable-with="ENTRAR" />
                              <br />
          </div>
        </div>
</form>    </div>
                              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                  <h1>SOU UM NOVO USUÁRIO</h1>
                                  <p>Preencha o formulário abaixo com seus dados</p>
                                  <form id="new_user" class="new_subscriber" action="/site/step01" accept-charset="UTF-8" method="post" novalidate="novalidate"><input name="utf8" type="hidden" value="✓"/><input type="hidden" name="authenticity_token" value="ECAT4xzR1QusWQZAjBt6HsIiTm97ZJQzS51TgSniDb0lVej0qc3shG/Rk5dOu+ohi6CKVm/uu9ASOtONPL+tLw=="/>
                                      <div class="row">
                                          <div class="col-xs-12 internal">
                                              <input type="text" name="subscriber[email]" value="" class="input-text2 subscriber_email" placeholder="E-mail"/>
          </div>
                                              <div class="col-xs-12 internal">
                                                  <input type="text" name="subscriber[email_confirmation]" value="" class="input-text2" placeholder="Confirme seu e-mail"/>
          </div>
                                                  <div class="col-xs-12 internal">
                                                      <input type="text" name="subscriber[telephone]" value="" class="input-text2 phone-mask" placeholder="Confirme seu telefone" maxlength="15"/>
          </div>
                                                      <div class="col-xs-12 internal">
                                                          <input type="password" name="subscriber[password]" value="" class="input-text2" placeholder="Senha"/>
          </div>
                                                          <div class="col-xs-12 internal bottom20">
                                                              <span id="password_strength"></span>
                                                          </div>
                                                          <div class="col-xs-12 internal">
                                                              <input type="button" name="continuar" value="Continuar" class="btn2"/>
          </div>
                                                          </div>
                                                          <div id="new_user_hidden_form" class="row hidden">
                                                              <div class="col-xs-12 internal">
                                                                  <select name="subscriber[nacionality]" class="select" id="nacionality">
                                                                      <option value="">Nacionalidade</option>
                                                                      <option value="brazil">Brasileiro</option>
                                                                      <option value="foreign">Estrangeiro</option>
                                                                  </select>
                                                              </div>
                                                              <div class="col-xs-12 internal">
                                                                  <select name="subscriber[document_type]" class="select" id="document_type">
                                                                      <option value="">Natureza</option>
                                                                      <option value="cpf">Pessoa Física</option>
                                                                      <option value="cnpj">Pessoa Jurídica</option>
                                                                  </select>
                                                              </div>
                                                              <div class="col-xs-12 internal">
                                                                  <input type="text" name="subscriber[name]" value="" class="input-text2" placeholder="Nome completo"/>
          </div>
                                                                  <div class="col-xs-12 internal">
                                                                      <input type="text" name="subscriber[document_number]" value="" class="input-text2 cpf-mask" placeholder="CPF"/>
          </div>
                                                                      <div class="col-xs-12 internal">
                                                                          <input type="text" name="subscriber[zipcode]" id="zipcode" value="" class="input-text2 zipcode-mask" placeholder="CEP" maxlength="9"/>
          </div>
                                                                          <div class="col-xs-12 internal">
                                                                              <input type="text" name="subscriber[address]" id="address" value="" class="input-text2" placeholder="Endereço"/>
          </div>
                                                                              <div class="col-xs-12 internal">
                                                                                  <input type="text" name="subscriber[number]" value="" class="input-text2" placeholder="Número"/>
          </div>
                                                                                  <div class="col-xs-12 internal">
                                                                                      <input type="text" name="subscriber[complement]" value="" class="input-text2" placeholder="Complemento"/>
          </div>
                                                                                      <div class="col-xs-12 internal">
                                                                                          <input type="text" name="subscriber[city]" id="city" value="" class="input-text2" placeholder="Cidade"/>
          </div>
                                                                                          <div class="col-xs-12 internal">
                                                                                              <select name="subscriber[state]" class="select" id="state">
                                                                                                  <option value="">Selecione</option>
                                                                                                  <option value="AC">Acre</option>
                                                                                                  <option value="AL">Alagoas</option>
                                                                                                  <option value="AP">Amapá</option>
                                                                                                  <option value="AM">Amazonas</option>
                                                                                                  <option value="BA">Bahia</option>
                                                                                                  <option value="CE">Ceará</option>
                                                                                                  <option value="DF">Distrito Federal</option>
                                                                                                  <option value="ES">Espirito Santo</option>
                                                                                                  <option value="GO">Goiás</option>
                                                                                                  <option value="MA">Maranhão</option>
                                                                                                  <option value="MS">Mato Grosso do Sul</option>
                                                                                                  <option value="MT">Mato Grosso</option>
                                                                                                  <option value="MG">Minas Gerais</option>
                                                                                                  <option value="PA">Pará</option>
                                                                                                  <option value="PB">Paraíba</option>
                                                                                                  <option value="PR">Paraná</option>
                                                                                                  <option value="PE">Pernambuco</option>
                                                                                                  <option value="PI">Piauí</option>
                                                                                                  <option value="RJ">Rio de Janeiro</option>
                                                                                                  <option value="RN">Rio Grande do Norte</option>
                                                                                                  <option value="RS">Rio Grande do Sul</option>
                                                                                                  <option value="RO">Rondônia</option>
                                                                                                  <option value="RR">Roraima</option>
                                                                                                  <option value="SC">Santa Catarina</option>
                                                                                                  <option value="SP">São Paulo</option>
                                                                                                  <option value="SE">Sergipe</option>
                                                                                                  <option value="TO">Tocantins</option>
                                                                                              </select>
                                                                                          </div>
                                                                                          <div class="col-xs-12 internal bottom20">
                                                                                              <input type="text" name="subscriber[country]" id="country" value="" class="input-text2" placeholder="País" readonly="true"/>
          </div>
                                                                                              <div class="col-xs-12 internal">
                                                                                                  <input type="submit" name="salvar" value="Continuar" class="btn2"/>
          </div>
                                                                                              </div>
</form>    </div>
                                                                                  </div>
      </div>
  )
}

export default Step2