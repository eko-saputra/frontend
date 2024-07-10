function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            Album
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-5 m-auto my-5 text-center">
            <h3>Album Example</h3>
            <p>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks dont simply skip over it entirely.
            </p>
            <div>
              <button className="btn btn-primary mx-1">
                Main call to action
              </button>
              <button className="btn btn-secondary mx-1">
                Secondary action
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="bg-secondary text-center">
                <p className="my-5">Thumbnail</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <div className="row">
                  <div className="col">
                    <a href="#" className="btn btn-primary mx-1">
                      View
                    </a>
                    <a href="#" className="btn btn-primary mx-1">
                      Edit
                    </a>
                  </div>
                  <div className="col text-end">
                    <span className="text-muted">9min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="bg-secondary text-center">
                <p className="my-5">Thumbnail</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <div className="row">
                  <div className="col">
                    <a href="#" className="btn btn-primary mx-1">
                      View
                    </a>
                    <a href="#" className="btn btn-primary mx-1">
                      Edit
                    </a>
                  </div>
                  <div className="col text-end">
                    <span className="text-muted">9min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="bg-secondary text-center">
                <p className="my-5">Thumbnail</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <div className="row">
                  <div className="col">
                    <a href="#" className="btn btn-primary mx-1">
                      View
                    </a>
                    <a href="#" className="btn btn-primary mx-1">
                      Edit
                    </a>
                  </div>
                  <div className="col text-end">
                    <span className="text-muted">9min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white mt-5">
        <div className="container">
          <div className="row">
            <div className="col py-5">
              <div className="row">
                <div className="col">
                  Album example is © Bootstrap, but please download and
                  customize it for yourself!<br></br>
                  New to Bootstrap? Visit the homepage or read our getting
                  started guide.
                </div>
                <div className="col text-end text-primary">Back to top</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
