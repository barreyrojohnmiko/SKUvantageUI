import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentIndex,
  setImages,
  setIsLoading,
} from '../../redux/App/action';

import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import api from '../../services/ApiService';

const LandingPageComponent = () => {
  const dispatch = useDispatch();
  const { images, currentIndex, isLoading } = useSelector(
    (state) => state.appReducers
  );

  const isMobileView = useMediaQuery('(max-width:960px)');

  const addImage = () => {
    dispatch(setIsLoading(true));

    api
      .get('/720', { responseType: 'blob' })
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);
        dispatch(setImages([...images, imageUrl]));

        if (images.length === 0) {
          dispatch(setCurrentIndex(0));
        }
      })
      .catch((error) => {
        console.error('Error fetching the image:', error);
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  const removeRandomImage = () => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const newImages = images.filter((_, index) => index !== randomIndex);
      dispatch(setImages(newImages));

      if (currentIndex >= newImages.length) {
        dispatch(setCurrentIndex(newImages.length - 1));
      }
    }
  };

  const handleNext = () => {
    dispatch(setCurrentIndex(Math.min(currentIndex + 1, images.length - 1)));
  };

  const handlePrevious = () => {
    dispatch(setCurrentIndex(Math.max(currentIndex - 1, 0)));
  };

  const getVisibleImages = () => {
    const maxVisible = isMobileView ? 3 : 6;

    if (images.length <= maxVisible) {
      return images;
    }

    const startIndex = Math.max(currentIndex - Math.floor(maxVisible / 2), 0);
    const endIndex = Math.min(startIndex + maxVisible, images.length);

    return images.slice(Math.max(endIndex - maxVisible, 0), endIndex);
  };

  const getImageOpacity = (index) => {
    return index === currentIndex ? 1 : 0.3;
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
        // bgcolor: '#fff',
        gap: '30px',
        bgcolor: '#DCD6F7'
      }}
    >
      <Typography
        sx={{ fontSize: isMobileView ? '40px' : '70px', fontWeight: '700' }}
      >
        SKUvantage
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {images.length === 0 ? (
            <Typography
              sx={{
                height: isMobileView ? '25vw' : '25vh',
                width: isMobileView ? '25vw' : '25vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #fff',
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
                      height: isMobileView ? '25vw' : '25vh',
                      width: isMobileView ? '25vw' : '25vh',
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobileView ? 'column' : 'row',
            gap: '10px',
          }}
        >
          <LoadingButton
            variant="contained"
            startIcon={<AddPhotoAlternateOutlinedIcon />}
            onClick={addImage}
            loading={isLoading}
            sx={{
              backgroundColor: '#4caf50',
              '&:hover': { backgroundColor: '#45a049' },
              '&:focus': { outline: 'none' },
              border: 'none',
            }}
          >
            Add Image
          </LoadingButton>

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
      </Box>
    </Box>
  );
};

export default LandingPageComponent;
