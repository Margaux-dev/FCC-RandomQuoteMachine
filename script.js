$(document).ready(function () {
	
	let quotes = [[["Every time someone steps up and says who they are, the world becomes a better, more interesting place."], ["Captain Raymond Holt"]],
		[["If I die, turn my tweets into a book."], ["Gina Linetti"]],
		[["You should make me your campaign manager. I was born for politics! I have great hair and I love lying."], ["Gina Linetti"]],
		[["Cool, cool, cool, cool, cool. No doubt, no doubt, no doubt."], ["Jake Peralta"]],
		[["Aw, man. All the orange soda spilled out of my cereal."], ["Jake Peralta"]],
		[["God, you must have been the worst fourth grader ever."], ["Jake Peralta"]],
		[["It's such a classic Boyle trait to not recognize talent. My cousin Susan didn't know she could sing until her late 40's."], ["Charles Boyle"]],
		[["I swear, these perps are so stupid. I'd make a better criminal than any of 'em."], ["Jake Peralta"]],
		[["Fine. But in protest, I'm walking over there extremely slowly!"], ["Jake Peralta"]],
		[["I appealed to their sense of teamwork and camaraderie with a rousing speech that would put Shakespeare to shame."], ["Jake Peralta"]],
		[["We've busted murderers; we've taken down cartels. But today we face the worst New York has to offer- the Fire Department."], ["Jake Peralta"]],
		[["What kind of woman doesn't have an axe?"], ["Rosa Diaz"]],
		[["Anyone over the age of six celebrating a birthday should go to hell."], ["Rosa Diaz"]],
		[["Captain Wuntch. Good to see you. But if you’re here, who’s guarding Hades?"], ["Captain Raymond Holt"]],
		[["Stop clapping, you idiots! We gotta move, move, move!"], ["Amy Santiago"]],	
		[["I file hard. I need strong tabs."], ["Amy Santiago"]],
		[["That's why they say 'It's test time, so diaper up.'"], ["Amy Santiago"]],
		[["Tinker Bell is a loyal lieutenant and a real thorn in the side of Captain Hook."], ["Charles Boyle"]],
		[["You can't make bread with pride."], ["Charles Boyle"]],	
		[["You can hate people and still think they're hot."], ["Rosa Diaz"]],
		[["Your sadness is noted."], ["Rosa Diaz"]],
		[["Plans are plans. I'm a badass, not an anarchist."], ["Rosa Diaz"]]]

	
	function generateQuote(){
		let randomNumber = Math.floor(Math.random() * (quotes.length));
		let quote = quotes[randomNumber][0];
		let author = quotes[randomNumber][1];
		$("#text").text(quote);
		$("#author").text(author);	
	}
	
	generateQuote();	
	
	$("#new-quote").click(generateQuote);
	
	
	
});