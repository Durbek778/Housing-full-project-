import React from "react";
import { Container } from "./styles";
import { Button } from "../Generic/Button/Button";
import { useMutation } from "react-query";
import { useHttp } from "../../hooks/useHttp";
import { useNavigate } from "react-router-dom";
import Information from "./Information";
import Additional from "./Additional";
import Price from "./Price";
import Location from "./Location";
import Media from "./Media";
import Amenities from "./Amenities";
import SelectEnergyClass from "./Select Energy Class";

export const AddHouse = () => {
  const body = {
    address: "123 Baliqchi street",
    attachments: [
      {
        imgPath:
          "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
      },
      {
        imgPath:
          "https://4.imimg.com/data4/VB/HM/MY-8857856/3bhk-low-price-brand-new-house-home-loan-available-500x500.jpg",
      },
      {
        imgPath: "https://i.ytimg.com/vi/qEZlJLclBuk/maxresdefault.jpg",
      },
      {
        imgPath:
          "https://www.fancypantshomes.com/wp-content/uploads/2018/11/house-porn-homes-reddit-favorite-e1543461563739.jpg",
      },
    ],
    categoryId: 2,
    city: "Baliqchi",
    componentsDto: {
      additional: "New Apartment Nice Wiew",
      airCondition: true,
      courtyard: true,
      furniture: true,
      gasStove: true,
      internet: true,
      tv: true,
    },
    country: "Uzbekistan",
    description: "yalqov",
    favorite: true,
    homeAmenitiesDto: {
      additional: "Greenville",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: true,
      school: true,
      stadium: true,
      subway: true,
      superMarket: true,
    },
    houseDetails: {
      area: 1200,
      bath: 5,
      beds: 4,
      garage: 1,
      room: 12,
      yearBuilt: 1800,
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: "Mukhammad Ali",
    price: 7.5,
    region: "string",
    salePrice: 2.8,
    status: true,
    zipCode: "365448",
  };

  const { request } = useHttp();

  const navigate = useNavigate();

  const { mutate } = useMutation(() =>
    request({ url: "/v1/houses", token: true, method: "POST", body })
  );

  const submit = () => {
    mutate("", {
      onSuccess: (res) => {
        if (res?.success) {
          navigate("/profile/properties");
        }
      },
      onError: (res) => {},
    });
  };

  return (
    <Container>
      <Information />
      <Additional />
      <Price />
      <Location />
      <Media />
      <Amenities />
      <SelectEnergyClass />
      <Button
        ml={775}
        onClick={submit}
        mt={20}
        width={"280px"}
        type={"primary"}
      >
        Submit
      </Button>
    </Container>
  );
};
export default AddHouse;
