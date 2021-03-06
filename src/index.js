import validator from './validator.js';

document.getElementById('screen_form').style.display= 'none';

//Seccion ocultar pantalla
const comprar = document.getElementById('btn_2');//Activo
  comprar.addEventListener('click', ()=>{
  document.getElementById('screen_form').style.display= 'flex';
  document.querySelector('.screen_cards').style.display= 'none';
})

//----SECTION BUTTON DISABLED -----

const comprarInactivo = document.getElementById('btn_1');
comprarInactivo.addEventListener('click', ()=>{
  alert('Hola 👋 actualmente no tenemos agenda, por favor intenta más tarde 😕')
});


//------SECCION DE PAGO ------

// * Input numero de tarjeta

        const form = document.querySelector('#formulario')

        form.numberTc.addEventListener('keyup', (e)=>{
          
          let input = e.target.value;

          form.numberTc.value = input

        // Eliminamos espacios en blanco
          .replace(/\s/g, '')
        //   // Eliminar las letras
          .replace(/\D/g, '')
        //   // Ponemos espacio cada cuatro numeros
          .replace(/([0-9]{4})/g, '$1')
        //   // Elimina el ultimo espaciado
          .trim();

// Reflejar de un input a otro la información y Obtener el valor del credit card input 
// con el atributo value
          

          var numberTcValue = document.getElementById('numberTc').value
          const numberCard = document.getElementById('numberCard');
          const numerMask = validator.maskify(numberTcValue);
          numberCard.value = numerMask
          numberCard.placeholder = numerMask

    })


// * Input nombre

        form.accountCard.addEventListener('keyup',(e)=>{

          let input = e.target.value;

          form.accountCard.value = input.replace(/[0-9]/g, '');

          document.getElementById('nameCard').value = input

        })

// * Input CVV
        form.CVV.addEventListener('keyup',(e)=>{

          let input = e.target.value;

          form.CVV.value = input

          // Eliminar los espacios
          .replace(/\s/g, '')
          // Eliminar las letras
          .replace(/\D/g, '');
        })



// ********************************************************
//Escuchador Ingreso número tarjeta
const inputNumberTc = document.getElementById('numberTc')
inputNumberTc.addEventListener('keyup', (e) => {
  let cardNumber = e.target.value;

  const btnPagar = document.getElementById('pagar');
  btnPagar.addEventListener('click', ()=>{
    console.log(validator.isValid(cardNumber))
    if(validator.isValid(cardNumber)){
      document.getElementById('mensaje').innerHTML = ` <b style='color:green'>Tarjeta válida! Pago procesado 👌</b><br>`
    }else{
      document.getElementById('mensaje').innerHTML = ` <b style='color:red'>Lo siento tarjeta Inválida! 🚨</b><br>`
    }
  })

})



console.log(validator);
