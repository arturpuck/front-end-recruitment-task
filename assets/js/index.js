(function(){

    function dataIsValid(){

        let inputs = document.getElementsByClassName('user-data-input__input');
        let success = true;

        for(const input of inputs){

           if(!input.value){
              success = false;
              input.parentElement.classList.add('user-data-input--has-error');
           }
        }

        if(!success){
            alert('Pola formularza zaznaczone na czerwono są puste, proszę poprawić');
        }
    }

    document.getElementById('submit-button').addEventListener('click',dataIsValid);

})();