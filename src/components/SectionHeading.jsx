export default function SectionHeading({ eyebrow, title, intro, align = 'left', id, as: Tag = 'h2' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id}>{title}</Tag>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </div>
  )
}
