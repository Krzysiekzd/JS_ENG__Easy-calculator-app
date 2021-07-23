let ref = $('#screen');

/* \/ basically same as ref.text() - shortcut */
const screen = (text='') => {
    if (text){
        ref.text(text)
    }
    else{
        return ref.text()
    }

};
/* if a variable below is true, then pressing num button will override current screen value */
let is_result = true;
let first_argument = '';
let operator = '';

function num_events(event){
    if (event.target.classList.contains('num')) {
        if (screen() !== '0' && !is_result){
            screen(screen().concat(event.target.textContent))
        }
        else{
            screen(event.target.textContent);
        }

    }
    else if (event.target.id === 'C'){
        screen('0');
        operator = '';
        first_argument = '';
    }
    else if (event.target.id ==='point' && is_result) {
        screen('0.')
    }
    else if (event.target.id === 'point' && !screen().includes('.')){
        screen(screen().concat('.'))
    }

    is_result = false;

}

$('.keyboard').on(
    'click',
    (e) =>
    {if (e.target.tagName === 'BUTTON') { // if to prevent activity while clicking on div

        if (e.target.id === '2power') {
            screen(screen()**2)
            is_result = true;
        }
        else if (e.target.id === '3power') {
            screen(screen()**3)
            is_result = true;
        }
        else if (e.target.id === 'sqrt'){
            screen(Math.sqrt(parseFloat(screen())));
            is_result = true;
        }
        else if (e.target.classList.contains('binary_operator')){
            first_argument = screen();
            is_result = false;
            screen('0');
            operator = e.target.id;
        }
        else if (e.target.id === 'equals'){
            let second_arg = parseFloat(screen());
            let first_arg = parseFloat(first_argument)
            switch (operator){
                case "multiplication":
                    screen(first_arg*second_arg);
                    break;
                case "division":
                    if (second_arg){
                        screen(first_arg/second_arg);}
                    else alert('Cannot divide by 0');
                    break;
                case "plus":
                    screen(first_arg+second_arg);
                    break;
                case "minus":
                    screen(first_arg-second_arg);
                    break;

            }
            is_result = true
            first_argument = ''
            operator = ''

        }
        else {num_events(e)}

        }}
)
