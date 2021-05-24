import './styles/MyWorks.scss';

import React, { useRef } from 'react';

function MyWorks() {
  let card = useRef();
  let card2 = useRef();
  let card3 = useRef();

  function cardMove1(e) {
    var l = e.nativeEvent.offsetX;
    var t = e.nativeEvent.offsetY;
    var h = card.current.offsetHeight;
    var w = card.current.offsetWidth;
    var lp = Math.abs(Math.floor((100 / w) * l) - 100);
    var tp = Math.abs(Math.floor((100 / h) * t) - 100);
    var lp2 = 50 - Math.abs(Math.floor((100 / w) * l) - 100) / 10 + 5;
    var tp2 = 50 - Math.abs(Math.floor((100 / h) * t) - 100) / 10 + 5;
    var ty = (tp - 50) / 2;
    var tx = (lp - 50) * 0.5 * -1;

    card.current.style.backgroundPosition = `${lp}% ${tp}%`;
    card.current.style.backgroundPosition += `${lp2}% ${tp2}%`;
    card.current.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
    card.current.classList.add('active');
  }
  function cardOut1(e) {
    card.current.classList.remove('active');
  }
  function cardMove2(e) {
    var l = e.nativeEvent.offsetX;
    var t = e.nativeEvent.offsetY;
    var h = card2.current.offsetHeight;
    var w = card2.current.offsetWidth;
    var lp = Math.abs(Math.floor((100 / w) * l) - 100);
    var tp = Math.abs(Math.floor((100 / h) * t) - 100);
    var lp2 = 50 - Math.abs(Math.floor((100 / w) * l) - 100) / 10 + 5;
    var tp2 = 50 - Math.abs(Math.floor((100 / h) * t) - 100) / 10 + 5;
    var ty = (tp - 50) / 2;
    var tx = (lp - 50) * 0.5 * -1;

    card2.current.style.backgroundPosition = `${lp}% ${tp}%`;
    card2.current.style.backgroundPosition += `${lp2}% ${tp2}%`;
    card2.current.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
    card2.current.classList.add('active');
  }
  function cardOut2() {
    card2.current.classList.remove('active');
  }
  function cardMove3(e) {
    var l = e.nativeEvent.offsetX;
    var t = e.nativeEvent.offsetY;
    var h = card3.current.offsetHeight;
    var w = card3.current.offsetWidth;
    var lp = Math.abs(Math.floor((100 / w) * l) - 100);
    var tp = Math.abs(Math.floor((100 / h) * t) - 100);
    var lp2 = 50 - Math.abs(Math.floor((100 / w) * l) - 100) / 10 + 5;
    var tp2 = 50 - Math.abs(Math.floor((100 / h) * t) - 100) / 10 + 5;
    var ty = (tp - 50) / 2;
    var tx = (lp - 50) * 0.5 * -1;

    card3.current.style.backgroundPosition = `${lp}% ${tp}%`;
    card3.current.style.backgroundPosition += `${lp2}% ${tp2}%`;
    card3.current.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
    card3.current.classList.add('active');
  }
  function cardOut3(e) {
    card3.current.classList.remove('active');
  }

  return (
    <div className="works" id="work">
      <div id="fade__bottom_top" />
      <main id="app">
        <h1>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-duration="500"
            className="block"
          >
            MY&nbsp;
          </div>
          <div
            id="works-main"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            data-aos-duration="500"
            className="block"
          >
            {' '}
            WORKS
          </div>
        </h1>
        <section
          className="cards"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="700"
          data-aos-anchor-placement="top-bottom"
        >
          <div
            className="card charizard"
            ref={card}
            onMouseMove={cardMove1}
            onMouseOut={cardOut1}
          >
            <h3>
              AIR <span> TUNE</span>
            </h3>
          </div>
          <div
            className="card pika"
            ref={card2}
            onMouseMove={cardMove2}
            onMouseOut={cardOut2}
          >
            <h3 style={{ color: 'black' }}>
              MUSIC <span> PLAYER</span>
            </h3>
          </div>
          <div
            className="card mew"
            ref={card3}
            onMouseMove={cardMove3}
            onMouseOut={cardOut3}
          >
            <h3>
              MY <span> PORTFOLIO</span>
            </h3>
          </div>
        </section>

        <style className="hover"></style>
      </main>
      <div id="fade__bottom_down" />
    </div>
  );
}

export default MyWorks;
