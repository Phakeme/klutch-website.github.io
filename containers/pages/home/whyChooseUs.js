import React from "react";
import Data from '../../../data/why-choose-us-db.json'
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
          <WhyChooseUs.Title>{Data.title}</WhyChooseUs.Title>
          <WhyChooseUs.Grid>

            <WhyChooseUs.GridItem>
              <WhyChooseUs.GridItemInner>
                <WhyChooseUs.Card>
                  <WhyChooseUs.Icon icon={<FaUserNurse />} />
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
                  <WhyChooseUs.Icon icon={<FaAward />} />
                  <WhyChooseUs.Info>
                    <span>We go the extra mile!</span>
                  </WhyChooseUs.Info>
                </WhyChooseUs.Card>
              </WhyChooseUs.GridItemInner>
            </WhyChooseUs.GridItem>

            <WhyChooseUs.GridItem>
              <WhyChooseUs.GridItemInner>
                <WhyChooseUs.Card>
                  <WhyChooseUs.Icon icon={<FaClinicMedical />} />
                  <WhyChooseUs.Info>
                    <span>We are available to speak to family</span>
                  </WhyChooseUs.Info>
                </WhyChooseUs.Card>
              </WhyChooseUs.GridItemInner>
            </WhyChooseUs.GridItem>

            <WhyChooseUs.GridItem>
              <WhyChooseUs.GridItemInner>
                <WhyChooseUs.Card>
                  <WhyChooseUs.Icon icon={<FaRegClock />} />
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
