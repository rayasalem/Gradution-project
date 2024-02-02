import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { getAllTextSlides, getlistQustionInLesson, getprofileInfo } from '../../../../api/userAction';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { mergedArrayState } from '../../../recoilState';
import LessonSlide from '../../lessons/lessonStyle/LessonSlide';
interface ITextSlide {
  lessonId: any;
  type: string;
  order: number;
  text: string;
}
interface ITextSlideResponse {
  message: string;
  textSlides: ITextSlide[];
}
const LessonSQL = () => {
    const [userIsAddict, setuserIsAddict] = React.useState(false);
  const { LessonId } = useParams<{ LessonId: string }>();
  const [recoilMergedArray, setRecoilMergedArray] = useRecoilState(mergedArrayState as any)
    const navigate = useNavigate();
    const isTextSlideResponse = (response: any): response is ITextSlideResponse => {
      return 'message' in response && 'textSlides' in response;
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
              const profileInfo = await getprofileInfo(); 
              if (profileInfo?.user?.role === 'admin') {
                setuserIsAddict(true);
              }
          } catch (error) {
            console.error('Error fetching profile info:', error);
          }
        };
        fetchData ();
      }, []);
      useEffect(() => {
        const fetchDataForQustion = async () => {
            try {
            const Qustionresponse=  await getlistQustionInLesson(LessonId)
            const { questions } = Qustionresponse;
            const TextSlideresponse=  await getAllTextSlides(LessonId)
            if (isTextSlideResponse(TextSlideresponse)) {
              const { textSlides } = TextSlideresponse;
              const mergedArray = [...textSlides, ...questions];
              const sortedMergedArray = mergedArray.sort((a, b) => a.order - b.order);
              setRecoilMergedArray(sortedMergedArray);
            } else {
              console.error('Unexpected response format for text slides:', TextSlideresponse);
            }
          } catch (error) {
            console.error('Error :', error);
          }
        };
        fetchDataForQustion ();
      }, []);
      console.log(recoilMergedArray);
      const handleClick = async () => {
    navigate(`/DevLoom/admin/createQustion/${LessonId}`); 
};
const createTextSlide = async () => {
  navigate(`/DevLoom/admin/createTextSlide/${LessonId}`); 
};

  return (
    <Box sx={{ display: 'flex',alignItems: 'center',flexDirection: 'column',justifyContent: 'center',paddingTop:'80px'}}>

{userIsAddict && (
        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <Button
            size="small"
            aria-label="add-qustion"
            onClick={handleClick}
            sx={{ zIndex: '1', color: '#e91e63', backgroundColor: '#78909c' }}
          >
           <AddIcon />
            create new qustion
          </Button>
          <Button
            size="small"
            aria-label="add-TextSlide"
            onClick={createTextSlide}
            sx={{ zIndex: '1', color: '#e91e63', backgroundColor: '#78909c' }}
          >
            <AddIcon />
            create new TextSlide
          </Button>
        </Box>
      )}
     <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
       {(recoilMergedArray as LessonSlide[]).length > 0 && (
  <LessonSlide  slides={recoilMergedArray as LessonSlide[]} />
       )}
       </Box>
        </Box>
    
         )
          }

export default LessonSQL