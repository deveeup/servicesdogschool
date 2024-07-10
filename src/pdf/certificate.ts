import PDF_SERVICE from "../constants/pdf_service.json";

export const downloadCertificate = (id: string, name: string) => {
  const date = new Date().getDate();

  fetch(`${PDF_SERVICE.URL}/certificate?id=${id}&name=${name}&date=${date}`, {
      method: 'GET',
  })
  .then(response => response.blob())
  .then(blob => URL.createObjectURL(blob))
  .then(url => {
      window.open(url, '_blank');
      URL.revokeObjectURL(url);
  });
};