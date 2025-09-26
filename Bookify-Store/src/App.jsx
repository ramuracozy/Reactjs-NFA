

function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"> 
          <div className="col-md-3 mb-2 mb-md-0"> 
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"> 
              <i className="fa-solid fa-book" style={{ color: "#74C0FC;" }}></i>
              <span className="ms-2 fs-4">Bookfiy</span>
            </a> 
          </div> 
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"> 
            <li><a href="#" className="nav-link px-2">Home</a></li> 
            <li><a href="#" className="nav-link px-2">Book</a></li> 
            <li><a href="#" className="nav-link px-2">Team</a></li> 
            <li><a href="#" className="nav-link px-2">Contact</a></li> 
          </ul> 
          <div className="col-md-3 text-end"> 
            <button type="button" className="btn btn-outline-primary me-2">Login</button> 
            <button type="button" className="btn btn-primary">Register</button> 
          </div> 
        </header> 
      </div>

      {/* Hero */}
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Sisi Tergelap Surga
            </h1>
            <p className="lead">
             Jakarta kerap menjadi pelabuhan bagi mereka yang datang membawa sekoper harapan. 
             Mereka yang siap bertaruh dengan nasibnya sendiri-sendiri.Namun, 
             kota ini selalu mampu melumat habis harapan dan menukarnya dengan keputusasaan.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                Buy
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Detail
              </button>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img 
              className="rounded-lg-3 " 
              src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg" 
              alt="Bootstrap Docs" 
              width="360"
            />
          </div>
        </div>
      </div>

      {/* Product */}
      <section className="py-5 text-center container"> 
        <div className="row py-lg-5"> 
          <div className="col-lg-6 col-md-8 mx-auto"> 
            <h1 className="fw-light">Best Seller Book</h1> 
              <p className="lead text-body-secondary">Berikut ini adalah beberapa buku yang paling di Bookify</p> 
              <p>
                <a href="#" className="btn btn-primary my-2 me-2">Views</a> 
                <a href="#" className="btn btn-secondary my-2">Other</a> 
              </p> 
            </div> 
        </div> 
      </section>
      <div className="album py-2 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg" 
                  alt="Product Portrait"
                  className="card-img-top img-fluid"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text">
                    Jakarta kerap menjadi pelabuhan bagi mereka yang datang membawa sekoper harapan.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                    </div>
                    <small className="text-body-secondary">85k IDR</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg" 
                  alt="Product Portrait"
                  className="card-img-top img-fluid"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text">
                    Jakarta kerap menjadi pelabuhan bagi mereka yang datang membawa sekoper harapan.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                    </div>
                    <small className="text-body-secondary">85k IDR</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg" 
                  alt="Product Portrait"
                  className="card-img-top img-fluid"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text">
                    Jakarta kerap menjadi pelabuhan bagi mereka yang datang membawa sekoper harapan.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                    </div>
                    <small className="text-body-secondary">85k IDR</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg" 
                  alt="Product Portrait"
                  className="card-img-top img-fluid"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text">
                    Jakarta kerap menjadi pelabuhan bagi mereka yang datang membawa sekoper harapan.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                    </div>
                    <small className="text-body-secondary">85k IDR</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg" 
                  alt="Product Portrait"
                  className="card-img-top img-fluid"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text">
                    Jakarta kerap menjadi pelabuhan bagi mereka yang datang membawa sekoper harapan.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                    </div>
                    <small className="text-body-secondary">85k IDR</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100">
                <img
                  src="https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg" 
                  alt="Product Portrait"
                  className="card-img-top img-fluid"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text">
                    Jakarta kerap menjadi pelabuhan bagi mereka yang datang membawa sekoper harapan.
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                    </div>
                    <small className="text-body-secondary">85k IDR</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
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

      {/* Contact */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Main Title */}
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold text-dark mb-0">Hubungi Kami</h1>
            </div>

            {/* Contact Cards Row */}
            <div className="row g-4">
              {/* Live Chat Card */}
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100 rounded-3">
                  <div className="card-body text-center py-5">
                    <div className="mb-3">
                      <i className="bi bi-chat-dots-fill text-primary" style={{fontSize: '3rem'}}></i>
                    </div>
                    <h3 className="h4 fw-bold text-dark mb-3">Live Chat</h3>
                    <p className="text-muted mb-4">
                      Melayani pada pukul 08:00 - 17:00 WIB
                    </p>
                    <button type="button" className="btn btn-primary btn-lg px-4 rounded-pill">
                      <i className="bi bi-chat-fill me-2"></i>
                      Chat Sekarang
                    </button>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100 rounded-3">
                  <div className="card-body text-center py-5">
                    <div className="mb-3">
                      <i className="bi bi-chat-dots-fill text-primary" style={{fontSize: '3rem'}}></i>
                    </div>
                    <h3 className="h4 fw-bold text-dark mb-3">Email</h3>
                    <p className="text-muted mb-4">
                      Alamat Email:customercare@bookify.id.co
                      Melayani pada pukul 08:00 - 17:00 WIB
                    </p>
                    <button type="button" className="btn btn-primary btn-lg px-4 rounded-pill">
                      <i className="bi bi-chat-fill me-2"></i>
                      Kirim Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div class="container"> 
        <footer class="py-3 my-4"> 
          <ul class="nav justify-content-center border-bottom pb-3 mb-3"> 
            <p text-center text-body-secondary> Created By</p>
          </ul> 
            <p class="text-center text-body-secondary">© 2025 Ramura Alias Raka Muhammad Rabbani</p> 
        </footer> 
      </div>


    </>
  )
}

export default App
