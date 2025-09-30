export default function Team(){
    return(
        <>
             <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom text-center display-5 fw-bold">Team</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                {/* Card 1 */}
                <div className="col">
                    <div className="card shadow-sm h-100">
                    <img
                        src="https://images.unsplash.com/photo-1559718062-361155fad299?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Product Portrait"
                        className="card-img-top img-fluid"
                        style={{ objectFit: "cover", height: "400px" }}
                    />
                    <div className="card-body d-flex flex-column">
                        <h3>Founder</h3>
                        <p className="card-text">
                        Beliau Adalah Founder Bookify
                        </p>
                    </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col">
                    <div className="card shadow-sm h-100">
                    <img
                        src="https://images.unsplash.com/photo-1549473448-5d7196c91f48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="Product Portrait"
                        className="card-img-top img-fluid"
                        style={{ objectFit: "cover", height: "400px" }}
                    />
                    <div className="card-body d-flex flex-column">
                        <h3>CEO</h3>
                        <p className="card-text">
                        Beliau Adalah CEO Bookify
                        </p>
                    </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col">
                    <div className="card shadow-sm h-100">
                    <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VvfGVufDB8fDB8fHww"
                        alt="Product Portrait"
                        className="card-img-top img-fluid"
                        style={{ objectFit: "cover", height: "400px" }}
                    />
                    <div className="card-body d-flex flex-column">
                        <h3>Manager</h3>
                        <p className="card-text">
                        Beliau Adalah Manager Bookify
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}