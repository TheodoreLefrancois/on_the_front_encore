import { Popup } from 'react-leaflet';
import { Form, Input, Label, Button } from 'reactstrap';

const PinPopup = () => {
  const handleSubmit = (event) => {
    // eslint-disable-next-line no-console
    console.log(event);
  };
  return (
    <Popup>
      <Form method="post" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <Label htmlFor="file">Select image : </Label>
          <Input
            type="file"
            name="file"
            enctype="multipart/form-data"
            accept=".jpg,.jpeg,.png"
          />
          <Button type="submit">Upload</Button>
        </div>
      </Form>
    </Popup>
  );
};

export default PinPopup;
