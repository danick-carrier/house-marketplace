import { useState } from "react";

function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedprice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });

  return (
    <>
      <h1>hello</h1>
    </>
  );
}
export default CreateListing;
