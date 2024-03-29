// 6. Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô 
// já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro 
// callback que contenha as ações a serem tomadas em caso de falha.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => Math.floor(Math.random() * 58); // maxTemperature = 58;

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

const temperatureInFahrenheit = (temperature) => 
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => 
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (onSuccess, onError) =>
  setTimeout(() => Math.random() > 0.4 ? onSuccess(getMarsTemperature()) : onError('Robot is busy'),
    messageDelay());

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
