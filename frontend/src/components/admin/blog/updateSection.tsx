import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSectionByOrder, getprofileInfo, updateSection } from '../../../api/userAction';
import { TextField, Button, Box ,Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const UpdateSection: React.FC = () => {
  const { blogId, sectionNumber } = useParams<{ blogId: string ,sectionNumber: string }>();  
  const [successMessage, setSuccessMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [content, setContent] = useState('');
  const [subtitle, setsubtitle] = useState('');
  const [order, setorder] = useState<number>(0);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const profileInfo = await getprofileInfo();
        if (profileInfo?.user?.role === 'admin') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };
    const fetchsection = async () => {
      try {
        if(blogId && sectionNumber){
          const sectionInfo = await getSectionByOrder(blogId,Number(sectionNumber));
      console.log(sectionInfo)
      setsubtitle(sectionInfo?.section?.subtitle)
      setContent(sectionInfo?.section?.content)
      setorder(sectionInfo?.section?.order)

        }
        
      } catch (error) {
        console.error('Error fetching section info:', error);
      }
    };
    fetchsection()
    fetchProfileInfo();
  }, []);

  

  const updateThisSection =async () => {
    if(blogId && sectionNumber){
        await updateSection(blogId,Number(sectionNumber), subtitle, content,order);
        setSuccessMessage('section updated successfully')
    }
  };


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', 
    marginTop: '130px' ,width: '20%',backgroundColor: '#9e9e9e',padding: '3%',margin: '6% auto -2%'}}>
      <div>
      <Typography variant="h4" align="center" gutterBottom>
                Update Section
            </Typography>
        <TextField
          type="text"
          placeholder="Enter Subtitle"
          value={subtitle}
          onChange={(e) => setsubtitle(e.target.value)} 
          variant="outlined"
          multiline
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
        fullWidth
          multiline
          rows={4}
          placeholder="Enter Content"
           value={content}
           onChange={(e) => setContent(e.target.value)}    
                 variant="outlined"
          sx={{ marginBottom: 2}}
        />
        <TextField
        fullWidth
        type="number"
        placeholder="Enter Time to Read"
        value={order}
        onChange={(e) => setorder(Number(e.target.value))}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
        <Button
          variant="contained"
          onClick={updateThisSection}
          sx={{ padding: '12px 32px', marginTop: '20px' }}
          disabled={!isAdmin}
        >
          update Section
        </Button>
      </div>
      {successMessage && <div>{successMessage}</div>}
    </Box>
  );
};

export default UpdateSection;