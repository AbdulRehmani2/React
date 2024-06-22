interface Testimonial {
    name: string,
    photoUrl: string,
    text: string;
}

function Testimonial({ name, photoUrl, text }: Testimonial) {

  return (
    <div className="testimonial-container">
        <img src={photoUrl} alt="" />
        <span>{text}</span>
        <i>{name}</i>
    </div>
  )
}

export default Testimonial