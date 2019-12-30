import React from "react";
import ShowReviews from "./components/ShowReviews";
import MyUrlField from "./components/MyUrlField";
import Toolbar from "./components/TopToolbar";

import {
  List,
  Show,
  SimpleShowLayout,
  Datagrid,
  TextField,
  EmailField,
  ImageField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  BooleanField
} from "react-admin";

export const BusinessList = props => (
  <List {...props}>
    <Datagrid>
      <MyUrlField source="name" />
      <TextField source="phone" />
      <TextField source="cuisine" />
      <TextField source="address" />
      <TextField source="business_type" />
      <BooleanField source="approved" />
      <EditButton />
    </Datagrid>
  </List>
);

export const BusinessEdit = props => (
  <Edit actions={<Toolbar />} title="Edit business" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextInput multiline source="description" />
      <TextInput source="cuisine" />
      <TextInput source="address" />
      <TextInput source="lat" />
      <TextInput source="lng" />
      <TextInput source="business_type" />
    </SimpleForm>
  </Edit>
);

const Aside = ({ record }) => {
  if (!record) {
    return "";
  }
  return (
    <div style={{ margin: "0px 150px" }}>
      <img style={{ width: "270px" }} src={record.primaryimage} alt="" />
      <div style={{ marginTop: "15px" }}>
        {record.subImages && record.subImages.map(({ image_url }) => (
          <img
            style={{ maxWidth: "90px", height: "90px" }}
            src={image_url}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export const BusinessShow = props => (
  <Show aside={<Aside />} {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="phone" />
      <TextField source="email" />
      <TextField source="description" />
      <TextField source="cuisine" />
      <TextField source="address" />
      <TextField source="lat" />
      <TextField source="lng" />
      <TextField source="business_type" />
      <ShowReviews />
    </SimpleShowLayout>
  </Show>
);
