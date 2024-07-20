// import React from 'react';

// const ReferAndEarn = () => {
//   return (
//     <section className="bg-gray-100 py-10">
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold mb-4">Let's Learn & Earn</h1>
//         <p className="mb-4">Get a chance to win up-to Rs. 15,000</p>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">Refer Now</button>
//       </div>
//       <div className="flex justify-center mt-10">
//         <img src="/path-to-your-image" alt="Learn & Earn" className="rounded-lg shadow-lg" />
//       </div>
//     </section>
//   );
// }

// export default ReferAndEarn;

import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import image1 from './images/image1.jpg';
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://referandearnbackend-lix1.onrender.com/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      alert('User created successfully!');
    } else {
      alert('Failed to create user');
    }
    
    handleClose();
  };

  return (
    <div className='heros'>
      <section className="bg-gray-100 py-10">
         <div className="container mx-auto text-center">
           <h1 className="text-4xl font-bold mb-4">Let's Learn & Earn</h1>
           <p className="mb-4">Get a chance to win up-to Rs. 15,000</p>
         </div>
         <div className="flex justify-center mt-10">
           {/* <img src="/path-to-your-image" alt="Learn & Earn" className="rounded-lg shadow-lg" /> */}
         </div>
      <Button onClick={handleOpen}>Refer & Earn</Button>
       </section>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Refer User
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Refer
            </Button>
          </form>
        </Box>
      </Modal>
      <div className="image">
        <img src={image1}  alt="hii" className='nimage'/> 
      </div>
    </div>
  );
}

