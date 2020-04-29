export default class About extends React.Component {

    timeInterval = 0;


    state = {
        currTime: new Date().toString().split(' ')[4]
    };

    componentDidMount() {
        this.timeInterval = setInterval(() => {
            this.setState({currTime: new Date().toString().split(' ')[4]})
            console.log('INTERVAL')
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    };

    render() {
        return (
            <main className="about-container">
                <h1>About!</h1>
                <h3 className="clock">It's now <span className="time">{this.state.currTime}</span> and it's time to READ!</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem alias repellat ab, laboriosam est impedit at sit itaque quidem, consectetur officia. Corrupti necessitatibus id temporibus, repellendus dolores vero perferendis veritatis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae soluta aliquam molestias minus illum tempora cum voluptatem aperiam sunt, accusamus, sed recusandae id eveniet rerum porro dolor. Error, doloremque debitis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi repellat vero, exercitationem, quidem possimus accusamus sapiente, laborum qui quos saepe illo porro veritatis consequuntur harum corporis fugit? Sapiente, modi? Nostrum?</p>
                <img src="assets/img/about-img.png" alt="" />
            </main>
        )
    };
}