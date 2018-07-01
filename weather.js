class Weather{
    constructor(city, state){
        this.apiKey='69438399173d0dc9';
        this.city = city;
        this.state = state;
    }
    // Fetch weather From APi
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
        const responseData = await response.json();

        return responseData.current_observation;

    }
    // change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}