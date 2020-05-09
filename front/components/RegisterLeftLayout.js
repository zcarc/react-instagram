import {useState, useEffect, useRef} from 'react';
import {Left, LeftContainer, Slide} from "./style/register";


const RegisterLeftLayout = () => {

    const [container, setContainer] = useState(null);
    let [curNumber, setCurNumber] = useState(0);
    const [imgs, setImgs] = useState(null);
    const leftRef = useRef(null);

    useEffect(() => {
        // console.log('useEffect...');
        // console.log('container:', container);
        // console.log('imgs:', imgs);


        let timer;

        if (!container) {
            // console.log('!container');
            setContainer(leftRef.current);

        } else if (!imgs) {
            // console.log('!imgs');
            setImgs(container.children);
        }

        if (imgs) {
            timer = setTimeout(() => {
                imgs[curNumber].classList.remove('show');

                if (imgs[curNumber].nextElementSibling) {
                    imgs[curNumber].nextElementSibling.classList.add('show');
                    setCurNumber(curNumber + 1);

                } else {
                    imgs[0].classList.add('show');
                    setCurNumber(0);
                }

            }, 6000)

        }

        return () => {
            clearTimeout(timer);
        };

    }, [container, imgs, curNumber]);

  return (
      <Left>
          <LeftContainer ref={leftRef}>
              <Slide className="show" src="../img/phone_img_01.jpg" alt=""/>
              <Slide src="../img/phone_img_02.jpg" alt=""/>
              <Slide src="../img/phone_img_03.jpg" alt=""/>
              <Slide src="../img/phone_img_04.jpg" alt=""/>
              <Slide src="../img/phone_img_05.jpg" alt=""/>
          </LeftContainer>
      </Left>
  );
};

export default RegisterLeftLayout;