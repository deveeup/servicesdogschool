import PDF_SERVICE from "../constants/pdf_service.json";

export const downloadCertificate = (id: string, name: string, day: string, month: string, year: string) => {

  return fetch(`${PDF_SERVICE.URL}/certificate?id=${id}&name=${name}&day=${day}&month=${month}&year=${year}`, {
    method: 'GET',
  })
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(url => {
      const win = window.open('', '_blank');
      if (win) {
        win.document.write(`
          <html>
            <head><title>${id}-C</title></head>
            <body style="margin:0; overflow:hidden;">
              <iframe style="width:100%; height:100%; border:none;" src="${url}"></iframe>
            </body>
          </html>
        `);
      }
      // Revoke the URL after a longer delay allowing the iframe to load
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    })
    .catch(err => {
      console.error("Error downloading certificate:", err);
      throw err;
    });
};