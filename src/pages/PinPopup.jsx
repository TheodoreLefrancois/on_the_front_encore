import { Form, Input, Label, Button } from 'reactstrap';

const PinPopup = () => {
  const handleSubmit = (event) => {
    // eslint-disable-next-line no-console
    console.log(event);
  };
  return (
    <Form method="post" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <Label htmlFor="file">Select image : </Label>
        <Input type="file" name="file" accept=".jpg,.jpeg,.png" />
        <Button type="submit">Upload</Button>
      </div>
    </Form>
  );
};

export default PinPopup;
