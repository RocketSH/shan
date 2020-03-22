import React from "react"
import SectionWithImage from "./section_with_image"

export default () => (
  <>
    <SectionWithImage
      title="Your luxurious holiday in the mountain"
      content={leftText}
      image="http://template65287.motopreview.com/mt-demo/65200/65287/mt-content/uploads/2017/10/mt-1223-home-img04.jpg"
      position="right"
    />

    <SectionWithImage
      title="Stunning mountain resort"
      content={rightText}
      image="http://template65287.motopreview.com/mt-demo/65200/65287/mt-content/uploads/2017/10/mt-1223-home-img05.jpg"
      position="left"
    />
  </>
)

// <ContentWithTitle title="Some title" content="My content" />

const leftText = (
  <>
    <p>
      Welcome to the lavish world of our luxury mountain resort, a 5-star hotel.
      Get ready for an all year round magic trip to a world of hospitality
      enriched with activities suitable for nature lovers, families and winter
      sports fans.
    </p>
    <p>
      Natural beauty, combined with comfortable apartments of our resort will
      not leave you indifferent. Visit our hotel and spend your dream winter
      holidays in the picturesque mountains.
    </p>
  </>
)

const rightText = (
  <>
    <p>
      The spirit of the mountains is calling you to our luxurious mountain lodge
      in scenic mountains. Nestled in Colorado's Mountains, surrounded by acres
      of pristine ski terrain and majestic 14,000-foot peaks, our breathtaking
      resort exudes a chic, yet rustic charm that exudes serenity and luxury.
    </p>
    <p>
      Beautiful guestrooms and suites and private log cabins feature warm
      Western design, balconies and modern lifestyle amenities. Designed with
      soft leather furnishings, rich wood accents, and warm interiors, our
      mountain accommodations are an oasis of alpine eleganc
    </p>
  </>
)
