let clickedCard = null;
let preventClick = false;
let combosFound = 0;

const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'pink',
    'cyan',
    'yellow',
    'purple'
];

const cards = [...document.querySelectorAll(.'card')];
    for (let color of colors ) {
        const cardAIndex = parseInt(Math.randon() * cards.length);
        const cardA = cards[cardAIndex];
        cards.splice(cardAIndex, 1);
        cardA.className += ` ${color}`;
        cardA.setAttribute('data-color, color');

        
        const cardBIndex = parseInt(Math.randon() * cards.length);
        const cardB = cards[cardBIndex];
        cards.splice(cardBIndex, 1);
        cardB.className += ` ${color}`;
        cardB.setAttribute('data-color, color');
         
    }

function onCardClicked (e) {
    const target = e.currentTarget;
    console.log (target.className); 
    target.className = target.className
    .replace ('color-hidden', '')
    .trim ();

}

} else if (clickedCard) {
    if (
        clickedCard.getAttribute('data-color') !==
        target.getAttribute('data-color')
    ) {
        console.log {'cards are not equal'}
    }

    }
}