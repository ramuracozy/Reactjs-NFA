export default function Contact() {
    return(
        <>
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
        </>
    )
}