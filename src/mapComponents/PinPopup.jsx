import axios from 'axios';
import { useState } from 'react';
import { Popup } from 'react-leaflet';
import { Form, Input, Label, Button } from 'reactstrap';

const PinPopup = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState([]);
  const [long] = useState(50.254);
  const [lat] = useState(-2.54);
  const [roadTripId] = useState(1);

  const handleSubmit = (event) => {
    const formData = new FormData();
    // console.log(file);
    formData.append('media', file);
    const data = {
      title,
      long,
      lat,
      description,
      roadTripId,
    };
    event.preventDefault();

    axios.post('http://localhost:5000/api/v1/pin', data).then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
      axios.post(
        `http://localhost:5000/api/v1/media/${response.data.id}/file`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    });
  };

  return (
    <Popup>
      <Form
        method="post"
        enctype="multipart/form-data"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div>
          <Label htmlFor="text">Title : </Label>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <Label htmlFor="description">Description : </Label>
          <Input
            type="text"
            name="description"
            value={description}
            className="inputPopup"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="file">Select image : </Label>
          <Input
            type="file"
            name="file"
            enctype="multipart/form-data"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
        <Button type="submit">Send</Button>
      </Form>
    </Popup>
  );
};

export default PinPopup;
