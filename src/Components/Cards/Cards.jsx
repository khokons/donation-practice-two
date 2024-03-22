import Card from "./Card";



const Cards = ({cardInfo}) => {
 

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {
                    cardInfo.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;