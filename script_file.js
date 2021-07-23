const screen = $('#screen')
let action = 'num_input'


$('.keyboard').on(
    'click',
    (e) =>
    {if (e.target.tagName === 'BUTTON') {

        if (e.target.classList.contains('num') && action === 'num_input') {
            if (screen.text() !== '0') {
                screen.text(screen.text().concat(e.target.textContent))
            }
            else {
                screen.text(e.target.textContent)
            }

        }
        else if (e.target.id === 'C'){
            screen.text('0')
        }
        else if (e.target.id === 'point' && !screen.text().includes('.')){
            screen.text(screen.text().concat('.'))
        }





        }}
)
