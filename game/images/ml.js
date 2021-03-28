
function ready(){
    let card = Array.from(document.getElementsByClassName('card'));

    card.forEach(card => {
        card.addEventListener('click', () => (
            //game.flipCard(card);

    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
}
else {
    ready()
}