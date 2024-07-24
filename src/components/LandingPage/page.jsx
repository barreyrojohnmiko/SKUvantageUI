import { Box, Button, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import api from '../../services/ApiService';

const LandingPageComponent = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const addImage = () => {
    api
      .get('/1000', { responseType: 'blob' })
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);
        setImages((prevImages) => [...prevImages, imageUrl]);

        if (images.length === 0) {
          setCurrentIndex(0);
        }
      })
      .catch((error) => {
        console.error('Error fetching the image:', error);
      });
  };

  const removeRandomImage = () => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const newImages = images.filter((_, index) => index !== randomIndex);
      setImages(newImages);

      if (currentIndex >= newImages.length) {
        setCurrentIndex(newImages.length - 1);
      }
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  const getVisibleImages = () => {
    if (images.length === 0) {
      return [];
    }

    if (images.length === 1) {
      return [images[0]];
    }

    if (currentIndex === 0) {
      return [images[currentIndex], images[currentIndex + 1]];
    }

    if (currentIndex === images.length - 1) {
      return [images[currentIndex - 1], images[currentIndex]];
    }

    return [
      images[currentIndex - 1],
      images[currentIndex],
      images[currentIndex + 1],
    ];
  };

  const getImageOpacity = (index) => {
    if (images.length <= 1) {
      return 1;
    }

    if (index === currentIndex) return 1;
    return 0.5;
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <Button
          variant="contained"
          startIcon={<AddPhotoAlternateOutlinedIcon />}
          onClick={addImage}
          sx={{
            backgroundColor: '#4caf50',
            '&:hover': { backgroundColor: '#45a049' },
            '&:focus': { outline: 'none' },
            border: 'none',
          }}
        >
          Add Image
        </Button>

        <Button
          variant="contained"
          startIcon={<DeleteOutlinedIcon />}
          onClick={removeRandomImage}
          disabled={images.length === 0}
          sx={{
            backgroundColor: '#f44336',
            '&:hover': { backgroundColor: '#d32f2f' },
            '&:focus': { outline: 'none' },
            border: 'none',
          }}
        >
          Remove Random Image
        </Button>
      </Box>

      <Box
        sx={{
          mt: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {images?.length === 0 ? (
          <Typography
            sx={{
              height: '25vh',
              width: '25vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              textAlign: 'center',
              borderRadius: '7px',
            }}
          >
            No Image Found
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              sx={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                '&:focus': { outline: 'none' },
                border: 'none',
              }}
            >
              <ArrowBackIcon />
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                gap: '10px',
              }}
            >
              {getVisibleImages().map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={image}
                  alt="Random"
                  sx={{
                    height: '25vh',
                    width: '25vh',
                    opacity: getImageOpacity(images.indexOf(image)),
                    transition: 'opacity 0.3s',
                    display: 'block',
                    objectFit: 'cover',
                    borderRadius: '7px',
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              sx={{
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                '&:focus': { outline: 'none' },
                border: 'none',
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LandingPageComponent;
