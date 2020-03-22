import React from "react"
import { Link } from "gatsby"

export default () => (
  <section className="landing_section" id="section2">
    <div className="container container--fluid">
      <h2 className="landing_section__title">
        Pick a room that best suits
        <br />
        your taste and budget
      </h2>
      <div className="three columns">
        <div className="room_card">
          <img
            src="http://template65287.motopreview.com/mt-demo/65200/65287/mt-content/uploads/2017/10/mt-1223-home-img01.jpg"
            alt=""
          />
          <h3>Deluxe room</h3>
          <p className="room_card__spec">18 m2 • Balcony • Mountain view</p>
          <p className="room_card__price">
            <span className="room_card__price__amount">$200.0</span> / Night
          </p>
        </div>
        <div className="room_card">
          <img
            src="http://template65287.motopreview.com/mt-demo/65200/65287/mt-content/uploads/2017/10/mt-1223-home-img02.jpg"
            alt=""
          />
          <h3>Superior Room</h3>
          <p className="room_spec">18 m2 • Balcony • Mountain view</p>
          <p className="room_card__price">
            <span className="room_card__price__amount">$180.0</span> / Night
          </p>
        </div>
        <div className="room_card">
          <img
            src="http://template65287.motopreview.com/mt-demo/65200/65287/mt-content/uploads/2017/10/mt-1223-home-img03.jpg"
            alt=""
          />
          <h3>Standard Room</h3>
          <p className="room_spec">18 m2 • Balcony • Mountain view</p>
          <p className="room_card__price">
            <span className="room_card__price__amount">$120.0</span> / Night
          </p>
        </div>
      </div>
    </div>
  </section>
)
