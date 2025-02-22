import Layout from '../../common/Layout';
import { PageBanner } from '../layouts/about';
const TransferCertificate = () => {
  // Function to handle PDF download
  const handleDownload = () => {
    // Replace this URL with your actual PDF file URL
    const pdfUrl = "assets/Transfer-Certificate.pdf"
    window.open(pdfUrl, "_blank")
  }

  return (
    <>
      <Layout>
        <PageBanner
          title="Transfer certificate"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="TC"
        />
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-lg-8">

              {/* Certificate Image */}
              <div className="mb-4">
                <img
                  src="assets/images/infrastructure/Transfer.jpg"
                  className="img-fluid border rounded shadow-sm"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-lg-12 mb-4">
                <div className="text-center">
                  <button className="btn btn-main w-100 rounded" onClick={handleDownload} type="submit">Download Certificate (PDF)</button>
                </div>
              </div>
            </div>
          </div>

          {/* CSS */}
          {/* <style>
        {`
          .btn-main:hover {
            background-color: #0056b3 !important;
            transform: translateY(-2px);
          }
          
          .container {
            padding: 40px 20px;
          }
          
          .img-fluid {
            max-width: 100%;
            height: auto;
          }
        `}
      </style> */}
        </div>
      </Layout>
    </>
  )
}

export default TransferCertificate

