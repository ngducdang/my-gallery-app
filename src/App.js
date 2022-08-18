import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {

  const [ selectedImg, setselectedImg ] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setselectedImg = {setselectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setselectedImg={setselectedImg}/> }
    </div>
  );
}

export default App;
