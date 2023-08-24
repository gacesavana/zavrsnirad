import React, { useState, useEffect } from 'react';


const images = [
  'https://content.latest-hairstyles.com/wp-content/uploads/blonde-balayage-on-dark-brown-hair-1200x900.jpg',
  'https://attachments.office.net/owa/Vana.Gacesa.00%40fesb.hr/service.svc/s/GetAttachmentThumbnail?id=AAMkADIzMTQ4ZDU3LWQwN2UtNGQzOC1hOGI3LTQ0OWVjNmMxYTUxYQBGAAAAAADq0tUOxTIWTbuB5fw4dURfBwBTo1ooaMDMQ4zdiCF78JEkAAAAAAEMAABTo1ooaMDMQ4zdiCF78JEkAALiI3HrAAABEgAQAPhBxow7WzlBmWEfZFktHvs%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiNDU2MWUyMTA5YTdiNGJhNmE5ZjAxOTNhZGJkYzAxZmYiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEBjYjcxYzRhMS03OWQzLTRlZDctYjlhMy0xOGIzNTkyZDcxYzgiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMTc0NTc5MTk3OTFcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCI1MjFhYmIxOS02MmUyLTRkZDQtYTFjMy00OWM0ZmQzZjcwMTdcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTIxOTY4MTMyODctNDAwMTI4MDE1My0xNzIyNDY4OTM2LTExNTY3NjdcIn0iLCJuYmYiOjE2OTI4MDM3NjgsImV4cCI6MTY5MjgwNDM2OCwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGNiNzFjNGExLTc5ZDMtNGVkNy1iOWEzLTE4YjM1OTJkNzFjOCIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGNiNzFjNGExLTc5ZDMtNGVkNy1iOWEzLTE4YjM1OTJkNzFjOCIsImhhcHAiOiJvd2EifQ.TrHEkaIZUejiPE0vAVrBBdMTGkDezkhsLt5KCQ8BEKfZ2bqZ5CV1ReYNK0soRz4ZYmmW1koyE4K8FilwK02fMB4R8pOwep_f7KBjuixXXC5HnVq2wxiuGNlu3wNfxMEx2XVZ9rzGF9txPr_NTWTlE0bVwqii3Sic8ADEkf1KqYBnBWaVUCjhYyrbA9QjG__wdO2p3nffuxPYl5R8q9uCa-HPON2moarnfo3ELhRz1nwFbsaGjg8ORPtEhq6JXnoce638Jc6jmeg3fhrYt3c3keVyWOe-fOdK0oiBf5fdgWXE9aO83stigVOEHwvyYNhedh_B5ceSexMPQOvmpgOavg&X-OWA-CANARY=_vybvPHEl0OW3qlKjQk--OAhinbso9sY3dGa7HcXXGYzmlm7oOIS4WkfT18D0ANbQJWXzFVE-L0.&owa=outlook.office365.com&scriptVer=20230811007.09&animation=true',
  'https://attachments.office.net/owa/Vana.Gacesa.00%40fesb.hr/service.svc/s/GetAttachmentThumbnail?id=AAMkADIzMTQ4ZDU3LWQwN2UtNGQzOC1hOGI3LTQ0OWVjNmMxYTUxYQBGAAAAAADq0tUOxTIWTbuB5fw4dURfBwBTo1ooaMDMQ4zdiCF78JEkAAAAAAEMAABTo1ooaMDMQ4zdiCF78JEkAALiI3HrAAABEgAQAHNvDWd0ZEtPpWz7FQeZ3rA%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiNDU2MWUyMTA5YTdiNGJhNmE5ZjAxOTNhZGJkYzAxZmYiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEBjYjcxYzRhMS03OWQzLTRlZDctYjlhMy0xOGIzNTkyZDcxYzgiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMTc0NTc5MTk3OTFcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCI1MjFhYmIxOS02MmUyLTRkZDQtYTFjMy00OWM0ZmQzZjcwMTdcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTIxOTY4MTMyODctNDAwMTI4MDE1My0xNzIyNDY4OTM2LTExNTY3NjdcIn0iLCJuYmYiOjE2OTI4MDM3NjgsImV4cCI6MTY5MjgwNDM2OCwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGNiNzFjNGExLTc5ZDMtNGVkNy1iOWEzLTE4YjM1OTJkNzFjOCIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGNiNzFjNGExLTc5ZDMtNGVkNy1iOWEzLTE4YjM1OTJkNzFjOCIsImhhcHAiOiJvd2EifQ.TrHEkaIZUejiPE0vAVrBBdMTGkDezkhsLt5KCQ8BEKfZ2bqZ5CV1ReYNK0soRz4ZYmmW1koyE4K8FilwK02fMB4R8pOwep_f7KBjuixXXC5HnVq2wxiuGNlu3wNfxMEx2XVZ9rzGF9txPr_NTWTlE0bVwqii3Sic8ADEkf1KqYBnBWaVUCjhYyrbA9QjG__wdO2p3nffuxPYl5R8q9uCa-HPON2moarnfo3ELhRz1nwFbsaGjg8ORPtEhq6JXnoce638Jc6jmeg3fhrYt3c3keVyWOe-fOdK0oiBf5fdgWXE9aO83stigVOEHwvyYNhedh_B5ceSexMPQOvmpgOavg&X-OWA-CANARY=QGem0iOO80mxyVCPsrP52RDy-Ybso9sYorKZJgWIyDWn2LuoAn2s8wTn26u0a8VWG0H9Bfh4L1E.&owa=outlook.office365.com&scriptVer=20230811007.09&animation=true',
  'https://attachments.office.net/owa/Vana.Gacesa.00%40fesb.hr/service.svc/s/GetAttachmentThumbnail?id=AAMkADIzMTQ4ZDU3LWQwN2UtNGQzOC1hOGI3LTQ0OWVjNmMxYTUxYQBGAAAAAADq0tUOxTIWTbuB5fw4dURfBwBTo1ooaMDMQ4zdiCF78JEkAAAAAAEMAABTo1ooaMDMQ4zdiCF78JEkAALiI3HrAAABEgAQAPmdM0rcdkRCr9PV3lsLSLA%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiNDU2MWUyMTA5YTdiNGJhNmE5ZjAxOTNhZGJkYzAxZmYiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEBjYjcxYzRhMS03OWQzLTRlZDctYjlhMy0xOGIzNTkyZDcxYzgiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMTc0NTc5MTk3OTFcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCI1MjFhYmIxOS02MmUyLTRkZDQtYTFjMy00OWM0ZmQzZjcwMTdcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTIxOTY4MTMyODctNDAwMTI4MDE1My0xNzIyNDY4OTM2LTExNTY3NjdcIn0iLCJuYmYiOjE2OTI4MDQwNzIsImV4cCI6MTY5MjgwNDY3MiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGNiNzFjNGExLTc5ZDMtNGVkNy1iOWEzLTE4YjM1OTJkNzFjOCIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGNiNzFjNGExLTc5ZDMtNGVkNy1iOWEzLTE4YjM1OTJkNzFjOCIsImhhcHAiOiJvd2EifQ.fUPnC-2rin6PeoGK5a2pV2WqjKShy3ZVvVkGLtTfKyRxli5dgw2T58Bi-D-E7QJGb85SXA6jnNueWFSt9DT4KBtVRjz99h4sKmEPr8ufkFd3eSJZ6LVAz4pOrxleP6o3THVBJjGG9KSM_VIwBf6frgX7VKa6NO290hA8-e9KGxpHxI7NUnBL2un9pqtn-6g-U3I3sgdmswo731gIZQ47-7GO7qUFQKBoMenONZ6gsXYJCQ8Atl6Zy4zjpYoWBIb90pStVe4IhmjsdWFNI_VQux8RmWzQIVziU8oxWuMxPUAVBxfxBWd71XPeAG5F3xZIM3vDz2GHELM1QVck2OkyOg&X-OWA-CANARY=6YoanYLcFk-RV4Gqma8cWKD0tpbso9sY7AECyeNIfNaMKEWk46h20ZBbBo0rNmOZJfe9wMmche4.&owa=outlook.office365.com&scriptVer=20230811007.09&animation=true',
  'https://attachments.office.net/owa/Vana.Gacesa.00%40fesb.hr/service.svc/s/GetAttachmentThumbnail?id=AAMkADIzMTQ4ZDU3LWQwN2UtNGQzOC1hOGI3LTQ0OWVjNmMxYTUxYQBGAAAAAADq0tUOxTIWTbuB5fw4dURfBwBTo1ooaMDMQ4zdiCF78JEkAAAAAAEMAABTo1ooaMDMQ4zdiCF78JEkAALiI3HrAAABEgAQAEoNnGhCZXFEt8RmpxS%2FUts%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiNDU2MWUyMTA5YTdiNGJhNmE5ZjAxOTNhZGJkYzAxZmYiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEBjYjcxYzRhMS03OWQzLTRlZDctYjlhMy0xOGIzNTkyZDcxYzgiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjExNTM4MDExMTc0NTc5MTk3OTFcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCI1MjFhYmIxOS02MmUyLTRkZDQtYTFjMy00OWM0ZmQzZjcwMTdcIixcInByaW1hcnlzaWRcIjpcIlMtMS01LTIxLTIxOTY4MTMyODctNDAwMTI4MDE1My0xNzIyNDY4OTM2LTExNTY3NjdcIn0iLCJuYmYiOjE2OTI4MDQwNzIsImV4cCI6MTY5MjgwNDY3MiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQGNiNzFjNGExLTc5ZDMtNGVkNy1iOWEzLTE4YjM1OTJkNzFjOCIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QGNiNzFjNGExLTc5ZDMtNGVkNy1iOWEzLTE4YjM1OTJkNzFjOCIsImhhcHAiOiJvd2EifQ.fUPnC-2rin6PeoGK5a2pV2WqjKShy3ZVvVkGLtTfKyRxli5dgw2T58Bi-D-E7QJGb85SXA6jnNueWFSt9DT4KBtVRjz99h4sKmEPr8ufkFd3eSJZ6LVAz4pOrxleP6o3THVBJjGG9KSM_VIwBf6frgX7VKa6NO290hA8-e9KGxpHxI7NUnBL2un9pqtn-6g-U3I3sgdmswo731gIZQ47-7GO7qUFQKBoMenONZ6gsXYJCQ8Atl6Zy4zjpYoWBIb90pStVe4IhmjsdWFNI_VQux8RmWzQIVziU8oxWuMxPUAVBxfxBWd71XPeAG5F3xZIM3vDz2GHELM1QVck2OkyOg&X-OWA-CANARY=vQZXiDk4wkCtnXGvHEsRflAbcKXso9sYjr7hhbjCJERB9PSXAqXPOIkCQT8q-BcKLHmM1h5dvug.&owa=outlook.office365.com&scriptVer=20230811007.09&animation=true'
  // Dodajte više linkova prema vašim slikama...
];

const Body = () => {

  const [isImageExpanded, setImageExpanded] = useState(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState('');
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/api/v1/user/types");
        const data = await response.json();
        setServiceData(data);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    }

    fetchData();
  }, []);
  

  const handleImageClick = (imageUrl) => {
    setImageExpanded(true);
    setExpandedImageUrl(imageUrl);
  };

  const handleExpandedImageClick = () => {
    setImageExpanded(false);
    setExpandedImageUrl('');
  };
  return (
    <div className="body-container">
      <div className="sectionaboutus">
        <p>Dobrodošli u Frizerski salon "Angel's", gdje vaša ljepota dolazi do izražaja!</p>
      </div>

      <div className="price-list">
        <h2>Cjenik</h2>
        <ul>
          {serviceData.map((service) => (
            <li key={service.typeid}>
              <h3>{service.type_name}</h3>
              <p>{service.price}$</p>
            </li>
          ))}
          </ul>
   
      </div>


      <div className="section">
        <h2>Galerija</h2>
    <div className="gallery-container">
      {images.map((imageUrl, index) => (
        <div key={index} className="image-item">
          <img src={imageUrl} alt={`Image ${index + 1}`} 
          onClick={() => handleImageClick(imageUrl)}/>
        </div>
      ))}
      </div>
      {isImageExpanded && (
        <div className="expanded-image-overlay" onClick={handleExpandedImageClick}>
          <img src={expandedImageUrl} alt="Expanded Image" className="expanded-image" />
        </div>
      )}
    </div>
    
    </div>
  );
};

export default Body;
