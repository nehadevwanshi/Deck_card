function DeckConstructor(){
	deck = {};
 	deck.cards = [];  
	
	deck.newCard = function(rank, suit){
		card = {};
		card.rank = rank;
		card.suit = suit;      
		return card ; 
	}            

	deck.createDeck = function(){
		var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "J", "Q", "K");
	    var suits = new Array("Clubs", "Diamonds", "Hears", "Spades");
	    for (var i = 0; i < suits.length; i++) {
        	for (var j = 0; j < ranks.length; j++) {                  
            	//this.cards.push(deck.newCard(ranks[j], suits[i]));
            	var crad_object = {"rank": ranks[j], "suit": suits[i]}
        		this.cards.push(crad_object);    
        	}    
    	}
    	console.log(this.cards);
	}                                

	deck.shuffle = function(){
		var temp;                
		var num;
		for(var i = 0; i<num; i++){
			for(var j = 0; j< this.cards.length; j++){ 
				random = Math.floor(Math.random() * this.cards.length);   
				temp = this.cards[j];
				this.cards[j] = this.cards[random];
				this.cards[random] = temp;              
			}
		}
		console.log("cards shuffled");
	}
													
	deck.deal = function(){
		if(this.cards.length > 0){
			return this.cards.shift();  
		console.log("Cards made a deal")
		}else {
			return null;   
		} 
	}

	deck.reset = function(){
		this.createDeck();
	}

	return deck;
}

function PlayerConstrustor(name, deck){
	player = {}
		player.name = name;
		player.hand;
		player.card; 
		player.deck = deck;
		player.take_card = function(){
			this.card = this.deck.deal();
			console.log(this.card); 
		}

		player.discard_card = function(){
			this.deck.cards.unshift(this.card)  
			this.card = null;
		}

	return player;     
}

//////// Instance list ///////
var Deck = new DeckConstructor();
Deck.createDeck();

var Shuffled = new DeckConstructor();
Shuffled.shuffle();

var Card_player = new PlayerConstrustor("Jhon", Deck);
Card_player.take_card();

