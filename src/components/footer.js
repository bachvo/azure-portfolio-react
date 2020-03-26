import React from "react";

export default class Footer extends React.Component {
  render() {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
      <footer>
        <section className="d-flex flex-column align-items-center p-5">
          <div className="d-flex justify-content-around w-100">
            {this.props.collection.map((item) => {
              return (
                <div key={item.type}>
                  <a href={item.href} target="_blank" className="d-flex flex-column align-items-center">
                    <img src={item.imgSrc} height="50" alt={item.type}/>
                    {item.type}
                  </a>
                </div>
              );
            })}
          </div>
        </section>
        <p className="footer__copyright">©{currentYear} {this.props.fullName}</p>
    </footer>
    );
  }
}