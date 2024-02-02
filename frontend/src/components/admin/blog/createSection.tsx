import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createSection, uploadImageBlog, getprofileInfo } from '../../../api/userAction';
import { TextField, Button, Box ,Typography} from '@mui/material';


const AddSectionPage: React.FC = () => {
  const { blogId } = useParams<{blogId: string}>();
  const [sections, setSections] = useState<{ subtitle: string; content: string; imageFile: File | null ;order: number}[]>([
    { subtitle: '', content: '', imageFile: null, order: 0  },
  ]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

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

    fetchProfileInfo();
  }, []);

  const handleSubtitleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedSections = [...sections];
    updatedSections[0].subtitle = event.target.value;
    setSections(updatedSections);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedSections = [...sections];
    updatedSections[0].content = event.target.value;
    setSections(updatedSections);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type.startsWith('image/') && sections[0].imageFile === null) {
        const updatedSections = [...sections];
        updatedSections[0].imageFile = file;
        setSections(updatedSections);
      } else {
        alert('Please select an image file or only upload one image.');
      }
    }
  };
  const handleOrderChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedSections = [...sections];
    updatedSections[0].order = Number(event.target.value);
    setSections(updatedSections);
  };
  const addSection = async () => {
    if (blogId && sections[0].subtitle.trim() !== '' && sections[0].content.trim() !== '') {
      try {
        await createSection(blogId, sections[0].subtitle, sections[0].content, sections[0].order);

        if (sections[0].imageFile) {
          await uploadImageBlog(blogId, sections[0].imageFile);
          setSuccessMessage('Section added successfully!');
          const updatedSections = [{ subtitle: '', content: '',order:0, imageFile: null }];
          setSections(updatedSections);
        }
      } catch (error) {
        console.error('Failed to add section:', error);
      }
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'center', 
    marginTop: '130px' ,width: '20%',backgroundColor: '#9e9e9e',padding: '3%',margin: '6% auto -2%'}}>
      <Typography variant="h4" align="center" gutterBottom>
                Create new section
            </Typography>
      <div>
        <TextField
          type="text"
          placeholder="Enter Subtitle"
          value={sections[0].subtitle}
          onChange={handleSubtitleChange}
          variant="outlined"
          sx={{ marginBottom: 2, width: 300 }}
        />
        <TextField
          multiline
          rows={4}
          placeholder="Enter Content"
          value={sections[0].content}
          onChange={handleContentChange}
          variant="outlined"
          sx={{ marginBottom: 2, width: 300 }}
        />
        <TextField
         type="number"
         placeholder="Enter Order"
        value={sections[0].order}
        onChange={handleOrderChange}
        variant="outlined"
        sx={{ marginBottom: 2, width: 300 }}
          />
          <Box>
          <input type="file" accept="image/*" onChange={handleImageChange} />  
          </Box>
        
        <Button
          variant="contained"
          onClick={addSection}
          sx={{ padding: '12px 32px', marginTop: '20px' }}
          disabled={!isAdmin}
        >
          Add Section
        </Button>
      </div>
      {successMessage && <div>{successMessage}</div>}
    </Box>
  );
};

export default AddSectionPage;