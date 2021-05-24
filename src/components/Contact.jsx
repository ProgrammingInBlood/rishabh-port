import './styles/Contact.scss';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('xeqvabae');
  let msg = '';

  if (state.succeeded) {
    msg = 'Email Sent Sucessfully';
  }

  return (
    <div>
      <div className="containerContact" id="contact">
        <div className="contactTitle">
          <h1>
            <div
              className="block"
              id="works-main"
              data-aos="zoom-in-up"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              {' '}
              GET &nbsp;{' '}
            </div>
            <div
              className="block"
              id="works-main"
              data-aos="zoom-in-up"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              {' '}
              IN &nbsp;
            </div>
            <div
              className="block span"
              id="works-main"
              data-aos="zoom-in-up"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              TOUCH
            </div>
          </h1>
        </div>
        <div
          className="contactUs"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <form onSubmit={handleSubmit}>
            <input id="name" type="text" name="name" placeholder="NAME" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <input id="email" type="email" name="email" placeholder="EMAIL" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              id="number"
              type="number"
              name="number"
              placeholder="CONTACT NUMBER (OPTIONAL)"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <textarea id="message" name="message" placeholder="MESSAGE" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
            <p> {msg} </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
