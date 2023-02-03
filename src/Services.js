function Services() {
  return (
    <div className="services">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src="data:image/jpeg;base64,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"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Web Design</h5>
              <p className="card-text">
                Web design refers to the design of websites that are displayed
                on the internet. It usually refers to the user experience
                aspects of website development.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://www.liveabout.com/thmb/ss8yMyi_nK15Dp9Vyk4bwq0ydJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/graphic-designer-job-description-and-salary-information-2061790-edit-4335087e524b4504b76ae1fea22873cf.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Graphic Designs</h5>
              <p className="card-text">
                Graphic designers create visual text and imagery concepts, by
                hand or using computer software, to communicate ideas that
                inspire, inform, or captivate consumers.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/1265041897/vector/business-team-working-together-on-web-page-design-people-building-website-interface-on.jpg?s=612x612&w=0&k=20&c=0nwzJe_VQNlN94Own93LE5pqnYG5g8E1ez7M4u0NWvk="
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Art Design Website</h5>
              <p className="card-text">
                The design in web design is not just about colors, textures,
                shapes, photography, and fonts
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://stiffentechnologies.com/wp-content/uploads/2021/11/Web-Development.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Web development is the work involved in developing a website for
                the Internet or an intranet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
