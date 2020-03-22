import React from "react"
import SectionWithImage from "./section_with_image.js"

// <> equals <React.Fragment>

export default () => (
  <SectionWithImage
    title="A TRULY MEMORABLE DINING EXPERIENCE"
    content={section4Text}
    image="http://template65287.motopreview.com/mt-demo/65200/65287/mt-content/uploads/2017/10/mt-1223-home-img06.jpg"
    position="right"
  />
)

const section4Text = (
  <>
    <p>
      Only best meal, cooked by the professionals. Visiting our hotel, don’t
      forget about breakfast. We have an incredible variety of dishes.
    </p>

    <h3>Main course menu</h3>
    <div className="course_menu">
      Breakfast $25.00
      <p>Breakfast to your choice, sandwiches, cold and hot beverages.</p>
    </div>
    <div className="course_menu">
      Lunch $30.00
      <p>Bar & Grill and the perfect hangout for aprés ski cocktails.</p>
    </div>
    <div className="course_menu">
      Dinner $28.00
      <p>The grilled menu, salads, a wide choice of charcuterie and cheese.</p>
    </div>
  </>
)
