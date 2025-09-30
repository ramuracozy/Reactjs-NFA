export default function Hero(){
    return(
        <>
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
        </>
    )
}