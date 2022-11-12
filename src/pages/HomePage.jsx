export const HomePage = () => {

    return (
        <div className="container">
            <div className="App">
                <div className="header">
                    <div className="logo">team
                        <div className="miniSquare"></div>
                    </div>
                    <div className="href">
                        <a>Products</a>
                        <a>Services</a>
                        <a>Contact</a>
                        <a>Log in</a>
                        <button>Get Access</button>
                    </div>
                </div>
                <div className="input">
                    <p className="first">Instant collaborations for remote teams</p>
                    <p className="second">All in one for your remote team chats,
                        collaboration and track projects</p>
                    <input placeholder="  Email ">
                        {/* <button>Get early access</button> */}
                    </input>
                </div>
            </div>
        </div>

    );
}