import React from "react";
import { WhyChooseUs } from "../../../components";
import {
  FaUserNurse,
  FaAward,
  FaRegClock,
  FaClinicMedical,
} from "react-icons/fa";

export function WhyChooseUsContainer() {
  return (

    <WhyChooseUs>
      <WhyChooseUs.Wrapper className="margin">
        <WhyChooseUs.Content>
          <WhyChooseUs.Title>
            Why choose Dr Kajal Lutchminarian
            </WhyChooseUs.Title>
          <WhyChooseUs.Grid>
            <WhyChooseUs.GridItem>
              <WhyChooseUs.GridItemInner>
                <WhyChooseUs.Card>
                  <WhyChooseUs.Icon>
                    <FaUserNurse size="5rem" />
                  </WhyChooseUs.Icon>
                  <WhyChooseUs.Info>
                    <span>
                      Highly qualified and passionate about what we do
                      </span>
                  </WhyChooseUs.Info>
                </WhyChooseUs.Card>
              </WhyChooseUs.GridItemInner>
            </WhyChooseUs.GridItem>
            <WhyChooseUs.GridItem>
              <WhyChooseUs.GridItemInner>
                <WhyChooseUs.Card>
                  <WhyChooseUs.Icon>
                    <FaAward size="5rem" />
                  </WhyChooseUs.Icon>
                  <WhyChooseUs.Info>
                    <span>We go the extra mile!</span>
                  </WhyChooseUs.Info>
                </WhyChooseUs.Card>
              </WhyChooseUs.GridItemInner>
            </WhyChooseUs.GridItem>
            <WhyChooseUs.GridItem>
              <WhyChooseUs.GridItemInner>
                <WhyChooseUs.Card>
                  <WhyChooseUs.Icon>
                    <FaClinicMedical size="5rem" />
                  </WhyChooseUs.Icon>
                  <WhyChooseUs.Info>
                    <span>We are available to speak to family</span>
                  </WhyChooseUs.Info>
                </WhyChooseUs.Card>
              </WhyChooseUs.GridItemInner>
            </WhyChooseUs.GridItem>
            <WhyChooseUs.GridItem>
              <WhyChooseUs.GridItemInner>
                <WhyChooseUs.Card>
                  <WhyChooseUs.Icon>
                    <FaRegClock size="5rem" />
                  </WhyChooseUs.Icon>
                  <WhyChooseUs.Info>
                    <span>Efficient and friendly service</span>
                  </WhyChooseUs.Info>
                </WhyChooseUs.Card>
              </WhyChooseUs.GridItemInner>
            </WhyChooseUs.GridItem>
          </WhyChooseUs.Grid>
        </WhyChooseUs.Content>
      </WhyChooseUs.Wrapper>
    </WhyChooseUs>
  );
}
