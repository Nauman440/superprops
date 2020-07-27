import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Image from 'common/src/components/Image';
import Container from 'common/src/components/UI/Container';
import TiltShape from '../TiltShape';
import { BannerWrapper, DiscountWrapper, DiscountLabel, WholeModal, ModalHeader, ModalContent, CloseBtn } from './banner.style';
import BannerImage from 'common/src/assets/image/saasModern/banner-image.png';
import ModalVideo from 'react-modal-video';
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';
import Popup from 'reactjs-popup';
import Input from 'common/src/components/Input'


const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = function () {
    setIsOpen(true);
  };
  return (
    <BannerWrapper id="banner_section">
      <TiltShape />
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setIsOpen(false)}
      />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content="25% Save" />
                <Text
                  {...discountText}
                  content="for first month trail version"
                />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading
              {...title}
              content="Ultimate AI Platform For Temperature Screening and Access Control."
            />
            <Text
              {...description}
              content="The VPR Verified device is a unique solution that provides Instant Temperature Readings, Face Mask Detection and Facial Recognition combined in a small package. Ideal for Health Care, Hospitals, Nursing Homes, Manufacturing, Restaurants, Hotels, Retail and other venues looking to provide a safe employee and customer environment."
            />
            <Box {...buttonWrapper}>
              <Link href="#">
                <a>
                  <Popup
                    trigger={<Button {...fillButton} title="FREE DEMO" />}
                    modal
                  >
                    {(close) => (
                      <WholeModal>
                        <CloseBtn className="close" onClick={close}>
                          &times;
                        </CloseBtn>
                        <ModalHeader > <h1>Please Fill Out the Information Below </h1></ModalHeader>
                        <ModalContent className="content">
                          <form
                            name="contact"
                            method="POST"
                            data-netlify-honeypot="bot-field"
                            // onSubmit={handleSubmit}
                          >
                             <input type="hidden" name="bot-field" />
                             <input type="hidden" name="contact" value="contact" /> 
                            <p>
                              <label>
                                <Input inputType="text" name={"name"} label="Enter your full name"/>
                              </label>
                            </p>
                            <p>
                              <label>
                               <Input inputType="email" name={"email"} label="Email"/>
                              </label>
                            </p>
                            <p>
                              <label>
                                <Input inputType="textarea" name={"message"} label="Please enter your message"/>
                              </label>
                            </p>
                            <p>
                              <Button title="Send" />
                            </p>
                          </form>
                        </ModalContent>
                      </WholeModal>
                    )}
                  </Popup>
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Button
                    onClick={openModal}
                    {...button}
                    title="WATCH VIDEO"
                    icon={<Icon icon={ic_play_circle_filled} size={30} />}
                    iconPosition="left"
                  />
                </a>
              </Link>
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <Image src={BannerImage} alt="banner image" />
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px'
  },
  title: {
    fontSize: ['24px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center'
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center'
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span'
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px'
  },
  button: {
    type: 'button',
    fontSize: ['13px', '14px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto'
  }
};

export default BannerSection;
