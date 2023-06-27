import { CodeExample } from "../export";
import "./styling/style.scss";

const Carousel = () => {
  const test = "hello TAS;FLK;LSDKFA;'SLDJF ';AJDF ;LKASDJ ;ALSKDJ F;LASKD J;ALSDK JA;LKAJSDF LAKSDJF ;LAKSDJ F;LAKSDJ F;LAKSDJF ;LKASDJF ;LAKSDJ FL;KASDJ LA;KSD ASL;KD JADSAL K;JFASL;DK JAS;LKDJ AS;LDK JFA;SDLKF ASD;FL KAJSD FLAKSDJF; LASKDJF ;ALSKDJF AS;LKDF JASD;LF KJASD;FL KASDF A;SLDK J";
  return (
    <div className="Carousel__">
      <div className="Carousel__wrapper">
        <CodeExample heading="heading" example={test} />
      </div>
    </div>
  );
};
export default Carousel;
