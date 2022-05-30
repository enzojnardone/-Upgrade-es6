// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamer = document.querySelector(".searching");
streamer.addEventListener("input", (event) => {
  const input = event.target.value.toLowerCase().trim();
  const filtered = streamers.filter((streamer) => {
    return streamer.name.toLowerCase().includes(input);
  });

  console.log(filtered);
});

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.

const button = document.querySelector(".click");

button.addEventListener("click", (event) => {
	let filtered2 = streamers.filter((streamers) => {
		if (streamers.name.toLowerCase().includes(streamer.value)) {
			return streamer;
		}
	});
	console.log(filtered2);
});