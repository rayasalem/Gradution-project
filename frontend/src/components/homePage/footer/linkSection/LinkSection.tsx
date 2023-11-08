import React from 'react';
import { Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';

type LinkItem = {
  text: string;
  url: string;
};

const learningPaths: LinkItem[] = [
    { text: 'Web Developer with Angular', url: '/' },
    { text: 'Web Development', url: '/web-development' },
    { text: 'Python Developer', url: '/python-developer' },
    { text: 'Coding Foundations', url: '/coding-foundations' },
    { text: 'Data Programming', url: '/data-programming' },
  ];

  const introductionCourses: LinkItem[] = [
    { text: 'Introduction to HTML', url: '/introduction-html' },
    { text: 'Introduction to JavaScript', url: '/introduction-javascript' },
    { text: 'Introduction to CSS', url: '/introduction-css' },
    { text: 'Introduction to Java', url: '/introduction-java' },
    { text: 'Introduction to C++', url: '/introduction-c++' },
    { text: 'Introduction to Python', url: '/introduction-python' },
  ];

  const intermediateCourses: LinkItem[] = [
    { text: 'C# Intermediate', url: '/' },
    { text: 'Python Intermediate', url: '/' },
    { text: 'Java Intermediate', url: '/' },
    { text: 'C++ Intermediate', url: '/' },
    { text: 'JavaScript Intermediate', url: '/' },

    
  ];

  const communityLinks: LinkItem[] = [
    { text: 'Discuss', url: '/discuss' },
    { text: 'Code Bits', url: '/code-bits' },
    { text: 'Leaderboard', url: '/leaderboard' },
    { text: 'Blog', url: '/blog' },
  ];

const LinkSection: React.FC = () => {
  const sectionLinks = (title: string, links: LinkItem[]) => (
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h6" sx={{ color: '#fff', padding: '20px' }}>
        {title}
      </Typography>
      {links.map((link) => (
        <Typography variant="body1" sx={{ padding: '6px' }} key={link.text}>
          <Link href={link.url} sx={{ textDecoration: 'none', color: '#bac5d5' }}>
            {link.text}
          </Link>
        </Typography>
      ))}
    </Grid>
  );

  return (
    <div style={{ backgroundColor: '#18171d', padding: '20px', textAlign: 'center', minHeight: '400px' }}>
      <Grid container spacing={3}>
        {sectionLinks('Learning Paths', learningPaths)}
        {sectionLinks('Introduction Courses', introductionCourses)}
        {sectionLinks('Intermediate Courses', intermediateCourses)}
        {sectionLinks('Community', communityLinks)}
      </Grid>
    </div>
  );
};

export default LinkSection;
