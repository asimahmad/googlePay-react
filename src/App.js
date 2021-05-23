import logo from './logo.svg';
import './App.css';
import GooglePayButton from '@google-pay/button-react'
import React from 'react'

function App() {
  return (
    <div className="App">
      <h1><img src={logo} className="App-logo" alt="img"/>GooglePay React</h1>
      <hr/>
      <GooglePayButton 
      environment="TEST" 
      paymentRequest={{
        apiVersion: 2, 
        apiVersionMinor: 0,
        allowedPaymentMethods:[
        {
          type: 'CARD',
          parameters: {
            allowAuthMethods: ['PAN_ONLY', 'CRYTOGRAM_3DS'],
            allowCardNetworks: ['MASTERCARD', 'VISA']
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
        ],
        merchantInfo:{
          merchantId: '123456789123456789',
          merchantName: 'Demoer',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'total',
          totalPrice: '1',
          currencyCode: "INR",
          countryCode: 'in',
        },
        shippingAddressRequired:true,
        callbackIntents: ['PAYMENT_AUTHORIZATION'],
      }}
      onLoadPaymentData = {paymentRequest =>{
        console.log('success', paymentRequest);
      }}
      onPaymentAuthorized ={ paymenmentData =>{
        console.log('Payment is authorized', paymenmentData)
        return {transactionState: 'SUCCESS'}
      }}
      existingPaymentMethodRequired='false'
      buttonColor= 'black'
      buttonType='Buy'
       />
    </div>
  );
}

export default App;
