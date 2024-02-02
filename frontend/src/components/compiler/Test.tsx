import React, {  useState , useEffect} from 'react';
import SphereEngineCompilersWidget from './SphereEngineCompilersWidget';
import { com } from '../../api/user';


const Compiler: React.FC = () => {
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [userCode, setUserCode] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python'); // Default language

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await com(userCode, selectedLanguage);
        setApiResponse(response.data);
      } catch (error) {
        console.error(error);
        setApiResponse('Error occurred during API call.');
      }
    };

    fetchData();
  }, [userCode, selectedLanguage]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };
  const supportedLanguages = [
    'php',
    'python',
    'c',
    'c_cpp',
    'csharp',
    'kotlin',
    'golang',
    'r',
    'java',
    'typescript',
    'nodejs',
    'ruby',
    'perl',
    'swift',
    'fortran',
    'bash',
  ];
  return (
    <div>
      <h1>Hello React with TypeScript!</h1>
      <div>
        <label htmlFor="codeInput">Enter your code:</label>
        <textarea
          id="codeInput"
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          rows={10}
          cols={50}
        />
      </div>
      <div>
        <label htmlFor="languageSelect">Select language:</label>
        <select
          id="languageSelect"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          {supportedLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      {apiResponse !== null && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>

  );
};

export default Compiler;
