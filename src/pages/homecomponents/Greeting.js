export default function Greeting (props) {
    return (
        <div className="greeting">
            <h1>Hi {props.username}! I am your personal assistant. Call me Bro.</h1>
            <h2>I'm here to help you track your growth. I aspire to do following tasks for you -</h2>
            <ul>
                <li>Help you log everything.</li>
                <li>Provide graphs, dashboards to track your progress.</li>
                <li>Smart suggestions for your improvement.</li>
                <li>Hopefully be able to listen your voice some day.</li>
            </ul>
            <h3>We're gonna start by tracking your workouts, initially. Let's see where we can go from there.</h3>
        </div>
    );
}