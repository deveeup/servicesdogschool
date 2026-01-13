import PDF_SERVICE from "../constants/pdf_service.json";

export const downloadCertificate = (id: string, name: string, day: string, month: string, year: string) => {

  return fetch(`${PDF_SERVICE.URL}/certificate?id=${id}&name=${name}&day=${day}&month=${month}&year=${year}`, {
    method: 'GET',
  })
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(url => {
      window.open(url, '_blank');
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    })
    .catch(err => {
      console.error("Error downloading certificate:", err);
      throw err;
    });
};