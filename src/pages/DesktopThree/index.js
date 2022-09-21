import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Grid,
  Line,
  Button,
  List,
} from "components";

const DesktopThreePage = () => {
  return (
    <>
      <Column
        className="bg-gray_100 font-lato mx-[auto] overflow-auto w-[100%]"
        compid="1:654"
        comptype="Column"
      >
        <Column
          className="items-center lg:pr-[301px] xl:pr-[345px] 2xl:pr-[388px] 3xl:pr-[465px] w-[100%]"
          compid="62"
          comptype="Column"
        >
          <Row
            className="bg-yellow_100 font-inter items-center justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] w-[100%]"
            compid="1:655"
            comptype="Row"
          >
            <Img
              src="images/img_undo.svg"
              className="3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] w-[1%]"
              compid="I1:655;137:389;13:1705"
              comptype="Image"
              alt="undo"
            />
            <Text
              className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] text-bluegray_900 uppercase w-[auto]"
              compid="I1:655;137:390"
              variant="body5"
              comptype="Text"
            >
              Fast, Easy and Free Returns
            </Text>
            <Img
              src="images/img_trucktick.svg"
              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[161px] xl:ml-[185px] 2xl:ml-[208px] 3xl:ml-[249px] my-[1px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
              compid="I1:655;137:392;13:3703"
              comptype="Image"
              alt="trucktick"
            />
            <Text
              className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] text-bluegray_900 uppercase w-[auto]"
              compid="I1:655;137:393"
              variant="body5"
              comptype="Text"
            >
              <span className="text-bluegray_900 font-inter lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                Free shipping on order above ₹1000{" "}
              </span>
              <span className="text-bluegray_900 font-inter font-normal underline lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                Learn More
              </span>
            </Text>
            <Img
              src="images/img_vuesaxlinearg.svg"
              className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[223px] xl:ml-[255px] 2xl:ml-[287px] 3xl:ml-[344px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
              compid="I1:655;137:395;13:686"
              comptype="Image"
              alt="vuesaxlinearg"
            />
            <Text
              className="font-medium 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] 3xl:mr-[105px] lg:mr-[68px] xl:mr-[78px] 2xl:mr-[88px] text-bluegray_900 uppercase w-[auto]"
              compid="I1:655;137:396"
              variant="body5"
              comptype="Text"
            >
              Secure Payments
            </Text>
          </Row>
          <header className="font-inter w-[100%]" compid="17" comptype="Header">
            <Row
              className="bg-white_A700 justify-end xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[9px] shadow-bs w-[100%]"
              compid="1:656"
              comptype="Row"
            >
              <Img
                src="images/img_logo.svg"
                className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[8%]"
                compid="I1:656;1:10418"
                comptype="Image"
                alt="logo"
              />
              <Text
                className="hover:bg-gray_800 cursor-pointer hover:font-bold hover:justify-center lg:ml-[168px] xl:ml-[192px] 2xl:ml-[216px] 3xl:ml-[259px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                compid="I1:656;1:10412"
                variant="body4"
                comptype="Text"
              >
                New arrival
              </Text>
              <Text
                className="hover:bg-gray_800 cursor-pointer hover:font-bold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                compid="I1:656;1:10413"
                variant="body4"
                comptype="Text"
              >
                Featured
              </Text>
              <Text
                className="hover:bg-gray_800 cursor-pointer hover:font-bold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                compid="I1:656;1:10414"
                variant="body4"
                comptype="Text"
              >
                Men
              </Text>
              <Text
                className="hover:bg-gray_800 cursor-pointer hover:font-bold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                compid="I1:656;1:10415"
                variant="body4"
                comptype="Text"
              >
                Women
              </Text>
              <Text
                className="hover:bg-gray_800 cursor-pointer hover:font-bold hover:justify-center lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] text-bluegray_900 hover:text-gray_500 uppercase w-[auto]"
                compid="I1:656;1:10416"
                variant="body4"
                comptype="Text"
              >
                Sale
              </Text>
              <Row
                className="bg-white_A700 border border-gray_500 border-solid items-center justify-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius6 w-[24%]"
                compid="I1:656;1:10417"
                comptype="Row"
              >
                <Img
                  src="images/img_searchnormal.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] my-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  compid="I1:656;1:10417;1:10369;1:4300"
                  comptype="Image"
                  alt="searchnormal"
                />
                <Text
                  className="hover:bg-gray_800 cursor-pointer hover:font-bold hover:justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mr-[19px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] not-italic text-gray_500 w-[auto]"
                  compid="I1:656;1:10417;1:10370"
                  variant="body4"
                  comptype="Text"
                >
                  Search for products, categories, etc
                </Text>
              </Row>
              <Stack
                className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:mb-[12px] xl:mb-[14px] 2xl:mb-[16px] 3xl:mb-[19px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] w-[9%]"
                compid="20"
                comptype="Stack"
              >
                <Row
                  className="absolute bottom-[0] items-center justify-between left-[0] p-[2px] w-[91%]"
                  compid="I1:656;1:10429"
                  comptype="Row"
                >
                  <Img
                    src="images/img_profilecircle.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                    compid="I1:656;1:10430;1:2527"
                    comptype="Image"
                    alt="profilecircle"
                  />
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[17%]"
                    compid="I1:656;1:10431;13:4922"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Img
                    src="images/img_shoppingcart.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mr-[1px] w-[16%]"
                    compid="I1:656;1:10432;1:3913"
                    comptype="Image"
                    alt="shoppingcart"
                  />
                </Row>
                <Text
                  className="hover:absolute absolute bg-gray_800 cursor-pointer hover:font-bold font-bold p-[4px] right-[0] rounded-radius4 hover:text-gray_500 text-yellow_100 top-[0] w-[23px]"
                  compid="I1:656;1:10433"
                  variant="body5"
                  comptype="Text"
                >
                  12
                </Text>
              </Stack>
            </Row>
          </header>
          <Text
            className="font-extrabold font-lato lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] text-gray_900 tracking-ls1 uppercase w-[auto]"
            compid="1:658"
            as="h6"
            variant="h6"
            comptype="Text"
          >
            SHOP BY CATAGORIES
          </Text>
          <Grid
            className="font-inter lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-6 lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[92%]"
            compid="61"
            comptype="Grid"
          >
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:660"
              style={{ backgroundImage: "url('images/img_categorycard.png')" }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="1"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:660;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop by men
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:661"
              style={{
                backgroundImage: "url('images/img_categorycard_186X200.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="2"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:661;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop by women
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:662"
              style={{
                backgroundImage: "url('images/img_categorycard_1.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="3"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:662;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop by sport
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:663"
              style={{
                backgroundImage: "url('images/img_categorycard_2.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="4"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:663;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop sports
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:664"
              style={{
                backgroundImage: "url('images/img_categorycard_3.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="5"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:664;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop new arrivals
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:665"
              style={{
                backgroundImage: "url('images/img_categorycard_4.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius24 w-[100%]"
                compid="6"
                comptype="Column"
              >
                <Text
                  className="lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[84px] xl:mt-[96px] text-center text-gray_101 uppercase w-[86%]"
                  compid="I1:665;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop collaborations
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:666"
              style={{
                backgroundImage: "url('images/img_categorycard_5.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="7"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:666;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop by men
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:667"
              style={{
                backgroundImage: "url('images/img_categorycard_6.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="8"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:667;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop by women
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:668"
              style={{
                backgroundImage: "url('images/img_categorycard_7.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="9"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:668;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop by sport
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:669"
              style={{
                backgroundImage: "url('images/img_categorycard_8.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="10"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:669;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop sports
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:670"
              style={{
                backgroundImage: "url('images/img_categorycard_9.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius24 w-[100%]"
                compid="11"
                comptype="Column"
              >
                <Text
                  className="columnshopbymen"
                  compid="I1:670;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop new arrivals
                </Text>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center rounded-radius24 w-[100%]"
              compid="1:671"
              style={{
                backgroundImage: "url('images/img_categorycard_10.png')",
              }}
              comptype="Column"
            >
              <Column
                className="bg-gradient  items-center justify-end lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius24 w-[100%]"
                compid="12"
                comptype="Column"
              >
                <Text
                  className="lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[84px] xl:mt-[96px] text-center text-gray_101 uppercase w-[86%]"
                  compid="I1:671;21:340"
                  variant="body4"
                  comptype="Text"
                >
                  Shop collaborations
                </Text>
              </Column>
            </Column>
          </Grid>
          <Stack
            className="font-tthoves lg:h-[1756px] xl:h-[2008px] 2xl:h-[2259px] 3xl:h-[2710px] w-[100%]"
            compid="19"
            comptype="Stack"
          >
            <Stack
              className="absolute bg-gray_100 border-bw6 border-solid border-white_A700 lg:h-[502px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] lg:px-[43px] xl:px-[49px] 2xl:px-[56px] 3xl:px-[67px] rounded-radius30 top-[0] w-[100%]"
              compid="1:672"
              comptype="Stack"
            >
              <Row
                className="absolute bottom-[1%] items-end justify-center right-[5%] w-[45%]"
                compid="204:719"
                comptype="Row"
              >
                <Column
                  className="items-center mb-[1px] lg:mt-[154px] xl:mt-[177px] 2xl:mt-[199px] 3xl:mt-[238px] w-[42%]"
                  compid="1:673"
                  comptype="Column"
                >
                  <Text
                    className="text-bluegray_901 uppercase w-[auto]"
                    compid="1:674"
                    variant="body6"
                    comptype="Text"
                  >
                    Scroll to Explore
                  </Text>
                  <Line
                    className="bg-bluegray_901 lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[1px]"
                    compid="1:675"
                    comptype="Line"
                  />
                </Column>
                <Column
                  className="items-center w-[33%]"
                  compid="1:698"
                  comptype="Column"
                >
                  <Img
                    src="images/img_arrows.svg"
                    className="2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[56%]"
                    compid="1:700"
                    comptype="Image"
                    alt="Arrows"
                  />
                  <Column
                    className="bg-white_A700_33 border-bw295 border-solid border-white_A700_b2 lg:h-[134px] xl:h-[154px] 2xl:h-[173px] 3xl:h-[207px] items-center justify-center lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:px-[47px] xl:px-[54px] 2xl:px-[61px] 3xl:px-[73px] rounded-radius50 lg:w-[133px] xl:w-[153px] 2xl:w-[172px] 3xl:w-[206px]"
                    compid="204:716"
                    comptype="Column"
                  >
                    <Text
                      className="2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] text-bluegray_901 uppercase w-[auto]"
                      compid="1:699"
                      variant="body2"
                      comptype="Text"
                    >
                      360°
                    </Text>
                  </Column>
                </Column>
                <Text
                  className="font-black lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mb-[53px] xl:mb-[61px] 2xl:mb-[69px] 3xl:mb-[82px] xl:mt-[107px] 2xl:mt-[121px] 3xl:mt-[145px] lg:mt-[94px] text-gray_102 text-right xl:tracking-ls2 lg:tracking-ls2 3xl:tracking-ls3 2xl:tracking-ls3 uppercase w-[24%]"
                  compid="1:690"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  Varsity
                  <br />
                  Purple
                </Text>
              </Row>
              <Stack
                className="absolute lg:h-[502px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] right-[0] w-[92%]"
                compid="204:723"
                comptype="Stack"
              >
                <Stack
                  className="absolute 3xl:h-[1198px] lg:h-[776px] xl:h-[887px] 2xl:h-[998px] right-[5%] top-[0] w-[80%]"
                  compid="204:720"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_nikeicon.svg"
                    className="absolute bottom-[46%] lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] right-[0] w-[5%]"
                    compid="1:692"
                    comptype="Image"
                    alt="NikeIcon"
                  />
                  <Stack
                    className="absolute 3xl:h-[1198px] lg:h-[776px] xl:h-[887px] 2xl:h-[998px] right-[1%] w-[99%]"
                    compid="204:718"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_group81.png"
                      className="absolute bottom-[14%] lg:h-[527px] xl:h-[603px] 2xl:h-[678px] 3xl:h-[813px] left-[0] w-[69%]"
                      compid="204:717"
                      comptype="Image"
                      alt="GroupEightyOne"
                    />
                    <Stack
                      className="absolute 3xl:h-[1198px] lg:h-[776px] xl:h-[887px] 2xl:h-[998px] right-[0] 3xl:w-[1197px] lg:w-[775px] xl:w-[886px] 2xl:w-[997px]"
                      compid="1:693"
                      comptype="Stack"
                    >
                      <div
                        className="absolute bottom-[29%] 2xl:h-[106px] 3xl:h-[127px] lg:h-[82px] xl:h-[94px] left-[9%] rotate-[4deg] rounded-radius32738 shadow-bs1 w-[66%]"
                        compid="1:694"
                        comptype="View"
                      ></div>
                      <Img
                        src="images/img_airejordannik.png"
                        className="absolute 3xl:h-[1198px] lg:h-[776px] xl:h-[887px] 2xl:h-[998px] 3xl:w-[1197px] lg:w-[775px] xl:w-[886px] 2xl:w-[997px]"
                        compid="1:695"
                        comptype="Image"
                        alt="AireJordanNik"
                      />
                    </Stack>
                  </Stack>
                </Stack>
                <Row
                  className="absolute items-center top-[25%] w-[100%]"
                  compid="204:721"
                  comptype="Row"
                >
                  <Text
                    className="font-bold text-bluegray_901 uppercase w-[auto]"
                    compid="1:703"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    03
                  </Text>
                  <Text
                    className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-white_A700 3xl:tracking-ls10 lg:tracking-ls6 xl:tracking-ls7 2xl:tracking-ls8 w-[auto]"
                    compid="1:691"
                    variant="body1"
                    comptype="Text"
                  >
                    AIR JORDAN
                  </Text>
                  <Img
                    src="images/img_pagination.svg"
                    className="lg:h-[101px] xl:h-[115px] 2xl:h-[130px] 3xl:h-[155px] lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] w-[1%]"
                    compid="1:684"
                    comptype="Image"
                    alt="Pagination"
                  />
                </Row>
              </Stack>
            </Stack>
            <Column
              className="absolute bg-white_A700 bottom-[0] font-lato justify-center lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] lg:py-[46px] xl:py-[53px] 2xl:py-[60px] 3xl:py-[72px] rounded-bl-[0] rounded-br-[0] rounded-tl-[96px] rounded-tr-[96px] w-[100%]"
              compid="13"
              comptype="Column"
            >
              <Row
                className="items-end justify-end 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] mt-[4px] w-[88%]"
                compid="34"
                comptype="Row"
              >
                <Text
                  className="leading-[normal] mb-[4px] text-black_900 2xl:tracking-ls1 xl:tracking-ls1 lg:tracking-ls1 3xl:tracking-ls2 w-[21%]"
                  compid="1:726"
                  as="h3"
                  variant="h3"
                  comptype="Text"
                >
                  Hand Picked
                  <br />
                  for You.
                </Text>
                <Text
                  className="font-bold leading-[normal] lg:ml-[326px] xl:ml-[373px] 2xl:ml-[420px] 3xl:ml-[504px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] text-gray_800 tracking-ls1 w-[33%]"
                  compid="1:727"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  {`For us, comfort isn't rocket science -`}
                  <br />
                  Ist Standard
                </Text>
                <Img
                  src="images/img_arrowsquarele.svg"
                  className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[1px] lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  compid="1:731"
                  comptype="Image"
                  alt="arrowsquarele"
                />
                <Img
                  src="images/img_arrowsquarele.svg"
                  className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  compid="1:737"
                  comptype="Image"
                  alt="arrowsquareri"
                />
              </Row>
              <Row
                className="items-center justify-end lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] rounded-radius64 w-[100%]"
                compid="1:721"
                comptype="Row"
              >
                <Img
                  src="images/img_rectangle13.png"
                  className="lg:h-[417px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] rounded-radius64 w-[55%]"
                  compid="1:722"
                  comptype="Image"
                  alt="RectangleThirteen"
                />
                <Img
                  src="images/img_rectangle14.png"
                  className="lg:h-[417px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius64 w-[31%]"
                  compid="1:723"
                  comptype="Image"
                  alt="RectangleFourteen"
                />
                <Img
                  src="images/img_rectangle15.png"
                  className="lg:h-[417px] xl:h-[477px] 2xl:h-[537px] 3xl:h-[644px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius64 w-[11%]"
                  compid="1:724"
                  comptype="Image"
                  alt="RectangleFifteen"
                />
              </Row>
              <Row
                className="justify-end lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] 2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[87px] xl:ml-[99px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[87%]"
                compid="1:741"
                comptype="Row"
              >
                <Column
                  className="pr-[3px] pt-[3px] w-[38%]"
                  compid="1:751"
                  comptype="Column"
                >
                  <Text
                    className="font-bold ml-[1px] text-gray_800 tracking-ls1 w-[auto]"
                    compid="1:754"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    The Sneakers Edit
                  </Text>
                  <Text
                    className="font-extrabold leading-[normal] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-black_900 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[94%]"
                    compid="1:755"
                    as="h2"
                    variant="h2"
                    comptype="Text"
                  >
                    White Sneakers
                    <br />
                    craze.
                  </Text>
                  <Text
                    className="leading-[132.02%] ml-[1px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] not-italic text-gray_801 tracking-ls1 w-[94%]"
                    compid="1:756"
                    variant="body3"
                    comptype="Text"
                  >
                    Ineffable fashions has a great collection of vibrant and
                    creative collection of casual wear. All of them are found in
                    many styles, patterns and sizes.
                  </Text>
                  <Row
                    className="items-center justify-end ml-[auto] xl:mt-[108px] 2xl:mt-[122px] 3xl:mt-[146px] lg:mt-[94px] w-[45%]"
                    compid="1:757"
                    comptype="Row"
                  >
                    <Button
                      className="flex 3xl:h-[106px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] items-center justify-center rounded-radius50 3xl:w-[105px] lg:w-[68px] xl:w-[78px] 2xl:w-[88px]"
                      compid="14"
                      comptype="IconButton"
                      variant="icbFillGray400"
                    >
                      <Img
                        src="images/img_group14.svg"
                        className="flex items-center justify-center"
                        alt="GroupFourteen"
                      />
                    </Button>
                    <Button
                      className="flex 3xl:h-[106px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] items-center justify-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 3xl:w-[105px] lg:w-[68px] xl:w-[78px] 2xl:w-[88px]"
                      compid="15"
                      comptype="IconButton"
                    >
                      <Img
                        src="images/img_group14.svg"
                        className="flex items-center justify-center"
                        alt="GroupFifteen"
                      />
                    </Button>
                  </Row>
                </Column>
                <Img
                  src="images/img_rectangle29.png"
                  className="lg:h-[554px] xl:h-[634px] 2xl:h-[713px] 3xl:h-[855px] rounded-radius64 w-[44%]"
                  compid="1:743"
                  comptype="Image"
                  alt="RectangleTwentyNine"
                />
                <Column
                  className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius48 w-[16%]"
                  compid="1:744"
                  comptype="Column"
                >
                  <Img
                    src="images/img_rectangle30.png"
                    className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] rounded-radius48 w-[100%]"
                    compid="1:745"
                    comptype="Image"
                    alt="RectangleThirty"
                  />
                  <Img
                    src="images/img_rectangle31.png"
                    className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius48 w-[100%]"
                    compid="1:746"
                    comptype="Image"
                    alt="RectangleThirtyOne"
                  />
                  <Img
                    src="images/img_rectangle32.png"
                    className="lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius48 w-[100%]"
                    compid="1:747"
                    comptype="Image"
                    alt="RectangleThirtyTwo"
                  />
                  <Column
                    className="bg-gray_200 border border-gray_802 border-solid items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-radius48 shadow-bs w-[100%]"
                    compid="1:748"
                    comptype="Column"
                  >
                    <Text
                      className="font-bold lg:my-[21px] xl:my-[24px] 2xl:my-[27px] 3xl:my-[32px] text-gray_900 tracking-ls1 w-[auto]"
                      compid="1:750"
                      as="h4"
                      variant="h4"
                      comptype="Text"
                    >
                      View All
                    </Text>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Stack>
          <Row
            className="bg-cover bg-repeat font-lato justify-end lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
            compid="1:764"
            style={{ backgroundImage: "url('images/img_group62.png')" }}
            comptype="Row"
          >
            <Column
              className="lg:mb-[142px] xl:mb-[162px] 2xl:mb-[183px] 3xl:mb-[219px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[34%]"
              compid="1:765"
              comptype="Column"
            >
              <Text
                className="font-extrabold text-yellow_100 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
                compid="1:766"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Our Story
              </Text>
              <Text
                className="leading-[132.02%] ml-[1px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] not-italic text-gray_101 tracking-ls1 w-[89%]"
                compid="1:767"
                variant="body3"
                comptype="Text"
              >
                Ineffable fashions has a great collection of vibrant and
                creative collection of casual wear. All of them are found in
                many styles, patterns and sizes.
              </Text>
            </Column>
            <Stack
              className="bg-black_900_bf border-bw11 border-solid border-white_A700 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mt-[117px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] lg:px-[40px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[62px] rounded-radius50 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
              compid="1:768"
              comptype="Stack"
            >
              <Img
                src="images/img_vector_45X42.svg"
                className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[28%]"
                compid="I1:770;13:8142"
                comptype="Image"
                alt="Vector One"
              />
            </Stack>
            <Row
              className="items-center justify-center lg:ml-[125px] xl:ml-[143px] 2xl:ml-[161px] 3xl:ml-[193px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[43px] lg:mt-[297px] xl:mt-[339px] 2xl:mt-[382px] 3xl:mt-[458px] rounded-radius35 w-[30%]"
              compid="1:771"
              comptype="Row"
            >
              <Button
                className="font-black lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[53%]"
                compid="1:772"
                comptype="Button"
                shape="CircleBorder35"
                size="md"
                variant="FillWhiteA700"
              >
                Watch Film
              </Button>
              <Button
                className="font-black lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[42%]"
                compid="1:775"
                comptype="Button"
                shape="CircleBorder35"
                size="md"
                variant="FillBlueA100"
              >
                Our Story
              </Button>
            </Row>
          </Row>
          <Row
            className="font-lato lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[91%]"
            compid="1:844"
            comptype="Row"
          >
            <Text
              className="font-extrabold text-black_900 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
              compid="1:843"
              as="h2"
              variant="h2"
              comptype="Text"
            >
              Also Explore
            </Text>
            <Img
              src="images/img_arrowsquarele.svg"
              className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[1062px] lg:ml-[688px] xl:ml-[787px] 2xl:ml-[885px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              compid="I1:845;1:731"
              comptype="Image"
              alt="arrowsquarele One"
            />
            <Img
              src="images/img_arrowsquarele.svg"
              className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
              compid="I1:846;1:737"
              comptype="Image"
              alt="arrowsquareri One"
            />
          </Row>
        </Column>
        <Column
          className="items-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pl-[46px] xl:pl-[53px] 2xl:pl-[60px] 3xl:pl-[72px] w-[100%]"
          compid="63"
          comptype="Column"
        >
          <List
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-4 min-h-[auto] rounded-radius20 w-[100%]"
            compid="204:767"
            comptype="List"
            orientation="horizontal"
          >
            <Stack
              className="bg-white_A700 lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] rounded-radius20 w-[100%]"
              compid="204:735"
              comptype="Stack"
            >
              <Column
                className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compid="1:789"
                comptype="Column"
              >
                <Text
                  className="leading-[normal] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_902 uppercase w-[75%]"
                  compid="1:791"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  The Streetwear
                  <br />
                  Selection
                </Text>
                <Text
                  className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rowbaggyjoggers"
                  compid="1:792"
                  comptype="Text"
                >
                  Casual Jackets
                </Text>
                <Row
                  className="items-center justify-between lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]"
                  compid="36"
                  comptype="Row"
                >
                  <Text
                    className="mt-[1px] rowbaggyjoggers"
                    compid="1:793"
                    comptype="Text"
                  >
                    Baggy Joggers
                  </Text>
                  <Text
                    className="mb-[1px] rowbaggyjoggers"
                    compid="1:795"
                    comptype="Text"
                  >
                    Sports Jackets
                  </Text>
                </Row>
                <Row
                  className="lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[93%]"
                  compid="37"
                  comptype="Row"
                >
                  <Text
                    className="mt-[2px] rowbaggyjoggers"
                    compid="1:796"
                    comptype="Text"
                  >
                    Round Caps
                  </Text>
                  <Text
                    className="mb-[2px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] rowbaggyjoggers"
                    compid="1:794"
                    comptype="Text"
                  >
                    Accessories
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_rectangle41.png"
                className="RectangleFortyOne"
                compid="1:797"
                comptype="Image"
                alt="RectangleFortyOne"
              />
            </Stack>
            <Stack
              className="bg-white_A700 lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] rounded-radius20 w-[100%]"
              compid="204:736"
              comptype="Stack"
            >
              <Column
                className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compid="204:737"
                comptype="Column"
              >
                <Text
                  className="leading-[normal] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_902 uppercase w-[75%]"
                  compid="204:739"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  The Streetwear
                  <br />
                  Selection
                </Text>
                <Text
                  className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rowbaggyjoggers"
                  compid="204:740"
                  comptype="Text"
                >
                  Casual Jackets
                </Text>
                <Row
                  className="items-center justify-between lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]"
                  compid="41"
                  comptype="Row"
                >
                  <Text
                    className="mt-[1px] rowbaggyjoggers"
                    compid="204:741"
                    comptype="Text"
                  >
                    Baggy Joggers
                  </Text>
                  <Text
                    className="mb-[1px] rowbaggyjoggers"
                    compid="204:743"
                    comptype="Text"
                  >
                    Sports Jackets
                  </Text>
                </Row>
                <Row
                  className="lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[93%]"
                  compid="42"
                  comptype="Row"
                >
                  <Text
                    className="mt-[2px] rowbaggyjoggers"
                    compid="204:744"
                    comptype="Text"
                  >
                    Round Caps
                  </Text>
                  <Text
                    className="mb-[2px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] rowbaggyjoggers"
                    compid="204:742"
                    comptype="Text"
                  >
                    Accessories
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_rectangle41.png"
                className="RectangleFortyOne"
                compid="204:745"
                comptype="Image"
                alt="RectangleFortyOne One"
              />
            </Stack>
            <Stack
              className="bg-white_A700 lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] rounded-radius20 w-[100%]"
              compid="204:746"
              comptype="Stack"
            >
              <Column
                className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compid="204:747"
                comptype="Column"
              >
                <Text
                  className="leading-[normal] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-gray_902 uppercase w-[75%]"
                  compid="204:749"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  The Streetwear
                  <br />
                  Selection
                </Text>
                <Text
                  className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rowbaggyjoggers"
                  compid="204:750"
                  comptype="Text"
                >
                  Casual Jackets
                </Text>
                <Row
                  className="items-center justify-between lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[100%]"
                  compid="46"
                  comptype="Row"
                >
                  <Text
                    className="mt-[1px] rowbaggyjoggers"
                    compid="204:751"
                    comptype="Text"
                  >
                    Baggy Joggers
                  </Text>
                  <Text
                    className="mb-[1px] rowbaggyjoggers"
                    compid="204:753"
                    comptype="Text"
                  >
                    Sports Jackets
                  </Text>
                </Row>
                <Row
                  className="lg:mb-[10px] xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[93%]"
                  compid="47"
                  comptype="Row"
                >
                  <Text
                    className="mt-[2px] rowbaggyjoggers"
                    compid="204:754"
                    comptype="Text"
                  >
                    Round Caps
                  </Text>
                  <Text
                    className="mb-[2px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[73px] 3xl:ml-[87px] rowbaggyjoggers"
                    compid="204:752"
                    comptype="Text"
                  >
                    Accessories
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_rectangle41.png"
                className="RectangleFortyOne"
                compid="204:755"
                comptype="Image"
                alt="RectangleFortyOne Two"
              />
            </Stack>
            <Stack
              className="bg-white_A700 lg:h-[539px] xl:h-[617px] 2xl:h-[694px] 3xl:h-[833px] rounded-radius20 w-[100%]"
              compid="206:777"
              comptype="Stack"
            >
              <Column
                className="absolute bg-white_A700 bottom-[0] justify-center lg:p-[28px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[43px] rounded-bl-[48px] rounded-br-[48px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                compid="206:778"
                comptype="Column"
              >
                <Text
                  className="leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] text-gray_902 uppercase w-[75%]"
                  compid="206:780"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  The Streetwear
                  <br />
                  Selection
                </Text>
                <Text
                  className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rowbaggyjoggers"
                  compid="206:781"
                  comptype="Text"
                >
                  Casual Jackets
                </Text>
                <Row
                  className="items-center justify-between lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]"
                  compid="51"
                  comptype="Row"
                >
                  <Text
                    className="rowbaggyjoggers"
                    compid="206:782"
                    comptype="Text"
                  >
                    Baggy Joggers
                  </Text>
                  <Text
                    className="rowbaggyjoggers"
                    compid="206:784"
                    comptype="Text"
                  >
                    Sports Jackets
                  </Text>
                </Row>
                <Row
                  className="items-center lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[16px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[93%]"
                  compid="52"
                  comptype="Row"
                >
                  <Text
                    className="rowbaggyjoggers"
                    compid="206:785"
                    comptype="Text"
                  >
                    Round Caps
                  </Text>
                  <Text
                    className="lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] rowbaggyjoggers"
                    compid="206:783"
                    comptype="Text"
                  >
                    Accessories
                  </Text>
                </Row>
              </Column>
              <Img
                src="images/img_rectangle41_360X424.png"
                className="RectangleFortyOne"
                compid="206:786"
                comptype="Image"
                alt="RectangleFortyOne Three"
              />
            </Stack>
          </List>
        </Column>
        <Text
          className="font-extrabold lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] text-black_900 lg:tracking-ls1 2xl:tracking-ls2 xl:tracking-ls2 3xl:tracking-ls3 w-[auto]"
          compid="1:779"
          as="h2"
          variant="h2"
          comptype="Text"
        >
          They Say it, We don't!
        </Text>
        <Column
          className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:pr-[301px] xl:pr-[345px] 2xl:pr-[388px] 3xl:pr-[465px] w-[100%]"
          compid="64"
          comptype="Column"
        >
          <Stack
            className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] w-[98%]"
            compid="21"
            comptype="Stack"
          >
            <Row
              className="absolute inset-x-[3%] items-center rounded-radius48 w-[94%]"
              compid="1:780"
              comptype="Row"
            >
              <Img
                src="images/img_rectangle52.png"
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] rounded-radius48 w-[24%]"
                compid="1:781"
                comptype="Image"
                alt="RectangleFiftyTwo"
              />
              <Img
                src="images/img_rectangle53.png"
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius48 w-[24%]"
                compid="1:784"
                comptype="Image"
                alt="RectangleFiftyThree"
              />
              <Img
                src="images/img_rectangle54.png"
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius48 w-[24%]"
                compid="1:782"
                comptype="Image"
                alt="RectangleFiftyFour"
              />
              <Img
                src="images/img_rectangle55.png"
                className="lg:h-[350px] xl:h-[401px] 2xl:h-[451px] 3xl:h-[541px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius48 w-[24%]"
                compid="1:783"
                comptype="Image"
                alt="RectangleFiftyFive"
              />
            </Row>
            <Button
              className="absolute flex 3xl:h-[106px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] inset-y-[0] items-center justify-center my-[auto] right-[0] rounded-radius50 3xl:w-[105px] lg:w-[68px] xl:w-[78px] 2xl:w-[88px]"
              compid="1:785"
              comptype="IconButton"
            >
              <Img
                src="images/img_group14.svg"
                className="flex items-center justify-center"
                alt="GroupSeventy"
              />
            </Button>
            <Button
              className="absolute flex 3xl:h-[106px] lg:h-[69px] xl:h-[79px] 2xl:h-[89px] inset-y-[0] items-center justify-center left-[0] my-[auto] rotate-[180deg] rounded-radius50 3xl:w-[105px] lg:w-[68px] xl:w-[78px] 2xl:w-[88px]"
              compid="204:768"
              comptype="IconButton"
            >
              <Img
                src="images/img_group14.svg"
                className="flex items-center justify-center"
                alt="GroupSeventyTwo"
              />
            </Button>
          </Stack>
          <Column
            className="bg-cover bg-repeat items-center lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:p-[46px] xl:p-[53px] 2xl:p-[60px] 3xl:p-[72px] w-[100%]"
            compid="1:816"
            style={{ backgroundImage: "url('images/img_group72.png')" }}
            comptype="Column"
          >
            <Text
              className="font-bold lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] text-yellow_100 tracking-ls1 w-[auto]"
              compid="1:821"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Making of a Shoe
            </Text>
            <Stack
              className="bg-black_900_bf border-bw11 border-solid border-white_A700 lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:mb-[173px] xl:mb-[198px] 2xl:mb-[223px] 3xl:mb-[267px] lg:mt-[122px] xl:mt-[139px] 2xl:mt-[157px] 3xl:mt-[188px] lg:px-[40px] xl:px-[46px] 2xl:px-[52px] 3xl:px-[62px] rounded-radius50 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
              compid="1:818"
              comptype="Stack"
            >
              <Img
                src="images/img_vector_45X42.svg"
                className="absolute lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[28%]"
                compid="I1:820;13:8142"
                comptype="Image"
                alt="Vector Two"
              />
            </Stack>
          </Column>
          <Column
            className="lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] rounded-radius24 w-[92%]"
            compid="1:822"
            comptype="Column"
          >
            <Text
              className="font-bold font-lato ml-[1px] text-gray_800 tracking-ls1 w-[auto]"
              compid="1:824"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Only @Rapidbox. Not seen anywhere else
            </Text>
            <Text
              className="font-rubik lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-black_900 uppercase w-[auto]"
              compid="1:825"
              as="h1"
              variant="h1"
              comptype="Text"
            >
              Newest in the town
            </Text>
            <Row
              className="items-center justify-between lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius24 w-[100%]"
              compid="1:826"
              comptype="Row"
            >
              <Img
                src="images/img_rectangle29.png"
                className="lg:h-[263px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[41%]"
                compid="1:827"
                comptype="Image"
                alt="RectangleFortyFour"
              />
              <Img
                src="images/img_rectangle30.png"
                className="lg:h-[263px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[24%]"
                compid="1:828"
                comptype="Image"
                alt="RectangleFortyFive"
              />
              <Img
                src="images/img_rectangle31.png"
                className="lg:h-[263px] xl:h-[301px] 2xl:h-[339px] 3xl:h-[406px] rounded-radius24 w-[32%]"
                compid="1:829"
                comptype="Image"
                alt="RectangleFortySix"
              />
            </Row>
          </Column>
          <Column
            className="bg-white_A700 items-center lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] rounded-bl-[0] rounded-br-[0] rounded-tl-[96px] rounded-tr-[96px] w-[100%]"
            compid="1:830"
            comptype="Column"
          >
            <Column
              className="items-center xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[9px] rounded-radius36 w-[49%]"
              compid="1:832"
              comptype="Column"
            >
              <Text
                className="font-black text-black_900 w-[auto]"
                compid="1:835"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Stay in Touch
              </Text>
              <Text
                className="font-bold lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] text-gray_800 tracking-ls1 w-[auto]"
                compid="1:834"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                Only @Rapidbox. Not seen anywhere else
              </Text>
              <Stack
                className="lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] rounded-radius36 w-[100%]"
                compid="1:836"
                comptype="Stack"
              >
                <Text
                  className="absolute font-bold h-[max-content] inset-y-[0] left-[5%] my-[auto] text-gray_500 tracking-ls1 w-[auto]"
                  compid="1:837"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Enter Email
                </Text>
                <Column
                  className="absolute border border-gray_500 border-solid items-end lg:pl-[348px] xl:pl-[398px] 2xl:pl-[448px] 3xl:pl-[537px] rounded-radius36 w-[100%]"
                  compid="16"
                  comptype="Column"
                >
                  <div
                    className="bg-gray_900 lg:h-[56px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius36 w-[100%]"
                    compid="1:839"
                    comptype="View"
                  ></div>
                </Column>
              </Stack>
            </Column>
          </Column>
          <footer
            className="bg-gray_903 font-inter w-[100%]"
            compid="1:840"
            comptype="Footer"
          >
            <Row
              className="items-center lg:mb-[24px] xl:mb-[28px] 2xl:mb-[32px] 3xl:mb-[38px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] 2xl:mr-[100px] 3xl:mr-[120px] lg:mr-[77px] xl:mr-[88px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[86%]"
              compid="60"
              comptype="Row"
            >
              <Column className="w-[68%]" compid="59" comptype="Column">
                <Img
                  src="images/img_logo_white_A700.svg"
                  className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[14%]"
                  compid="I1:840;60:555"
                  comptype="Image"
                  alt="logo One"
                />
                <Row
                  className="ml-[2px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] pt-[2px] w-[97%]"
                  compid="I1:840;60:515"
                  comptype="Row"
                >
                  <Column
                    className="mt-[1px] w-[26%]"
                    compid="I1:840;60:516"
                    comptype="Column"
                  >
                    <Text
                      className="font-normal text-gray_400 w-[auto]"
                      compid="I1:840;61:715;60:518"
                      variant="body5"
                      comptype="Text"
                    >
                      About Rapidbox
                    </Text>
                    <Text
                      className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;61:716;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      About Us/Out Story
                    </Text>
                    <Text
                      className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-yellow_400 underline w-[auto]"
                      compid="I1:840;61:717;60:523"
                      comptype="Text"
                    >
                      Why Rapidbox
                    </Text>
                    <Text
                      className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:524;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Founding Team
                    </Text>
                    <Text
                      className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:525;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Our Journey
                    </Text>
                    <Text
                      className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:526;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Making of Our Shoes
                    </Text>
                    <Text
                      className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:527;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      We Care - Social Causes
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:528;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Community
                    </Text>
                  </Column>
                  <Column
                    className="mt-[1px] w-[26%]"
                    compid="I1:840;60:529"
                    comptype="Column"
                  >
                    <Text
                      className="font-normal text-gray_400 w-[auto]"
                      compid="I1:840;60:530;60:518"
                      variant="body5"
                      comptype="Text"
                    >
                      Need help?
                    </Text>
                    <Text
                      className="lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:532;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Help Center
                    </Text>
                    <Text
                      className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:533;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Size Guide
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:534;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Shipping & Delivery
                    </Text>
                    <Text
                      className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:535;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Returns & Exchange
                    </Text>
                    <Text
                      className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:536;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Order Tracking
                    </Text>
                    <Text
                      className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:537;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Gift Cards
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:538;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      Site Map
                    </Text>
                  </Column>
                  <Column
                    className="mt-[1px] pb-[3px] pr-[3px] w-[26%]"
                    compid="I1:840;60:539"
                    comptype="Column"
                  >
                    <Text
                      className="font-normal text-gray_400 w-[auto]"
                      compid="I1:840;60:540;60:518"
                      variant="body5"
                      comptype="Text"
                    >
                      Our E-stores
                    </Text>
                    <Text
                      className="lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:542;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      The Sneaker Store
                    </Text>
                    <Text
                      className="lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:543;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      The Athleisure Store
                    </Text>
                    <Text
                      className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:544;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      The Sports Shoes Store
                    </Text>
                    <Text
                      className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:545;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      The Streetwear Store
                    </Text>
                    <Text
                      className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-gray_500 w-[auto]"
                      compid="I1:840;60:546;60:521"
                      variant="body4"
                      comptype="Text"
                    >
                      The Jacket Store
                    </Text>
                  </Column>
                  <Column
                    className="w-[23%]"
                    compid="I1:840;60:547"
                    comptype="Column"
                  >
                    <Text
                      className="font-normal text-gray_400 w-[auto]"
                      compid="I1:840;60:548;60:518"
                      variant="body5"
                      comptype="Text"
                    >
                      Social Media
                    </Text>
                    <Row
                      className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] pl-[1px] pt-[1px] w-[54%]"
                      compid="I1:840;61:718"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_instagram.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] mb-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                        compid="I1:840;61:718;60:551;13:5774"
                        comptype="Image"
                        alt="instagram"
                      />
                      <Text
                        className="3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] not-italic text-gray_500 w-[auto]"
                        compid="I1:840;61:718;60:552"
                        variant="body4"
                        comptype="Text"
                      >
                        Instagram
                      </Text>
                    </Row>
                    <Row
                      className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pl-[1px] py-[1px] w-[53%]"
                      compid="I1:840;60:553"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_facebook.svg"
                        className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                        compid="I1:840;60:553;60:551;13:8886"
                        comptype="Image"
                        alt="facebook"
                      />
                      <Text
                        className="3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] not-italic text-gray_500 w-[auto]"
                        compid="I1:840;60:553;60:552"
                        variant="body4"
                        comptype="Text"
                      >
                        Facebook
                      </Text>
                    </Row>
                    <Row
                      className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pl-[1px] py-[1px] w-[48%]"
                      compid="I1:840;60:554"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_youtube.svg"
                        className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[20%]"
                        compid="I1:840;60:554;60:551;13:8937"
                        comptype="Image"
                        alt="youtube"
                      />
                      <Text
                        className="3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] my-[1px] not-italic text-gray_500 w-[auto]"
                        compid="I1:840;60:554;60:552"
                        variant="body4"
                        comptype="Text"
                      >
                        Youtube
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="font-medium ml-[1px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] text-white_A700 w-[auto]"
                  compid="I1:840;60:513"
                  variant="body5"
                  comptype="Text"
                >
                  © 2022 Rapidbox®, Inc.
                </Text>
                <Text
                  className="font-normal ml-[1px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-white_A700 w-[auto]"
                  compid="I1:840;60:514"
                  variant="body5"
                  comptype="Text"
                >
                  <span className="text-white_A700 font-inter font-medium underline lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                    Privacy Policy
                  </span>
                  <span className="text-white_A700 font-inter font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                    {" "}
                    /{" "}
                  </span>
                  <span className="text-white_A700 font-inter font-medium underline lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                    Terms of Use
                  </span>
                  <span className="text-white_A700 font-inter font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                    {" "}
                    /{" "}
                  </span>
                  <span className="text-white_A700 font-inter font-medium underline lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px]">
                    Cookie Preferences
                  </span>
                </Text>
              </Column>
              <Column className="w-[32%]" compid="58" comptype="Column">
                <Text
                  className="font-normal text-yellow_400 w-[auto]"
                  compid="I1:840;60:567"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Stay in loop
                </Text>
                <Text
                  className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic text-white_A700 w-[auto]"
                  compid="I1:840;60:570"
                  variant="body4"
                  comptype="Text"
                >
                  Sign up for email updates today.
                </Text>
                <Row
                  className="bg-white_A700 items-center justify-end lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius16 w-[100%]"
                  compid="I1:840;102:331"
                  comptype="Row"
                >
                  <Img
                    src="images/img_sms.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[5%]"
                    compid="I1:840;102:332;13:2321"
                    comptype="Image"
                    alt="sms"
                  />
                  <Text
                    className="font-inter lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic text-gray_500 w-[auto]"
                    compid="I1:840;102:333"
                    variant="body4"
                    comptype="Text"
                  >
                    Enter email address
                  </Text>
                  <Button
                    className="font-medium font-rubik 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[81px] xl:ml-[93px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-center w-[23%]"
                    compid="I1:840;102:334"
                    comptype="Button"
                    shape="RoundedBorder12"
                    size="sm"
                    variant="FillYellowA400"
                  >
                    Sign up
                  </Button>
                </Row>
                <Text
                  className="font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic text-gray_500 w-[91%]"
                  compid="I1:840;60:573"
                  variant="body5"
                  comptype="Text"
                >
                  By providing your email, you agree to the Terms of Use and
                  Privacy Policy.
                </Text>
                <Text
                  className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic text-gray_500 w-[auto]"
                  compid="I1:840;60:574"
                  variant="body5"
                  comptype="Text"
                >
                  You may unsubscribe later.
                </Text>
                <Text
                  className="font-normal lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] text-gray_400 w-[auto]"
                  compid="I1:840;60:503"
                  variant="body5"
                  comptype="Text"
                >
                  Accepted Payment Methods
                </Text>
                <Row
                  className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[81%]"
                  compid="I1:840;60:504"
                  comptype="Row"
                >
                  <Stack
                    className="bg-white_A700 border-bw139 border-gray_802 border-solid lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] px-[4px] rounded-radius348 w-[10%]"
                    compid="I1:840;60:505"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_visalogo.svg"
                      className="absolute lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] inset-[0] justify-center m-[auto] w-[69%]"
                      compid="I1:840;60:505;349:1192"
                      comptype="Image"
                      alt="visalogo"
                    />
                  </Stack>
                  <Stack
                    className="bg-white_A700 border-bw139 border-gray_802 border-solid lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[4px] rounded-radius3 w-[10%]"
                    compid="I1:840;60:506"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_dinersclub.svg"
                      className="absolute lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[53%]"
                      compid="I1:840;60:506;356:1729"
                      comptype="Image"
                      alt="DinersClub"
                    />
                  </Stack>
                  <Stack
                    className="bg-blue_700 border-bw139 border-gray_802 border-solid lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[2px] rounded-radius348 w-[10%]"
                    compid="I1:840;60:507"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_amex.svg"
                      className="absolute lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] inset-[0] justify-center m-[auto] w-[81%]"
                      compid="I1:840;60:507;356:3321"
                      comptype="Image"
                      alt="AMEX"
                    />
                  </Stack>
                  <Stack
                    className="bg-white_A700 border-bw139 border-gray_802 border-solid lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[4px] rounded-radius3 w-[10%]"
                    compid="I1:840;60:508"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_mastercard.svg"
                      className="absolute lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[72%]"
                      compid="I1:840;60:508;356:6429"
                      comptype="Image"
                      alt="Mastercard"
                    />
                  </Stack>
                  <Stack
                    className="bg-white_A700 border-bw139 border-gray_802 border-solid lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[4px] rounded-radius3 w-[10%]"
                    compid="I1:840;60:509"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_maestro.svg"
                      className="absolute lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[69%]"
                      compid="I1:840;60:509;356:7909"
                      comptype="Image"
                      alt="Maestro"
                    />
                  </Stack>
                  <Stack
                    className="bg-white_A700 border-bw139 border-gray_802 border-solid lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[3px] rounded-radius3 w-[10%]"
                    compid="I1:840;60:510"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_amazon.svg"
                      className="absolute bottom-[9%] lg:h-[6px] xl:h-[7px] 2xl:h-[8px] 3xl:h-[9px] inset-x-[0] mx-[auto] w-[78%]"
                      compid="I1:840;60:510;356:26883"
                      comptype="Image"
                      alt="Amazon"
                    />
                  </Stack>
                  <Stack
                    className="bg-white_A700 border-bw139 border-gray_802 border-solid lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] px-[4px] rounded-radius3 w-[10%]"
                    compid="I1:840;60:511"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_googlepay.svg"
                      className="absolute bottom-[5%] 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] inset-x-[0] mx-[auto] w-[69%]"
                      compid="I1:840;60:511;356:14833"
                      comptype="Image"
                      alt="GooglePay"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default DesktopThreePage;
