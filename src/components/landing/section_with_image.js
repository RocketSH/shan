import React from "react"

export default function SectionWithImage({ title, content, image, position }) {
  return (
    <section className={`section_with_image section_with_image--${position}`}>
      <div className="section_with_image__image">
        <img src={image} alt="" />
      </div>
      <div className="section_with_image__content">
        <h2 className="section_with_image__title">{title}</h2>
        <div className="section_with_image__text">{content}</div>
      </div>
    </section>
  )
}
