import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function exportToPdf(targetElementId?: string, customFileName?: string): Promise<boolean> {
  try {
    let targetElement: HTMLElement | null = null;

    if (targetElementId) {
      targetElement = document.getElementById(targetElementId);
    }

    if (!targetElement) {
      // Check if CV Modal content is open first
      targetElement = (document.querySelector('.modal-print-content') as HTMLElement) ||
                      (document.querySelector('main') as HTMLElement) ||
                      document.body;
    }

    if (!targetElement) {
      try {
        window.print();
      } catch (e) {
        console.error('Print failed', e);
      }
      return false;
    }

    const fileName = customFileName || (
      document.querySelector('.modal-print-content')
        ? 'Firas_Chouchene_CV_Engineering.pdf'
        : 'Firas_Chouchene_Portfolio_Complete.pdf'
    );

    // Save scroll position
    const initialScrollY = window.scrollY;
    window.scrollTo(0, 0);

    // Temporarily ensure background color is captured properly
    const isDark = document.documentElement.classList.contains('dark');
    const originalBg = targetElement.style.backgroundColor;
    targetElement.style.backgroundColor = isDark ? '#0f172a' : '#ffffff';

    const canvas = await html2canvas(targetElement, {
      scale: 1.5, // Crisp HD PDF resolution
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: isDark ? '#0f172a' : '#ffffff',
      ignoreElements: (element) => {
        const isHidden = 
          element.classList.contains('no-print') ||
          element.classList.contains('print:hidden') ||
          element.id === 'header_cv_btn' ||
          element.id === 'mobile_menu_toggle_btn' ||
          element.id === 'back_to_top_btn' ||
          element.classList.contains('floating-social-bar');
        return isHidden;
      },
      windowWidth: Math.max(targetElement.scrollWidth, 1200),
    });

    // Restore background color and scroll position
    targetElement.style.backgroundColor = originalBg;
    window.scrollTo(0, initialScrollY);

    const imgData = canvas.toDataURL('image/jpeg', 0.92);
    const pdf = new jsPDF('p', 'mm', 'a4');

    const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 297mm

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Loop through remaining content to create multi-page PDF
    while (heightLeft > 0) {
      position -= pdfHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
    }

    // Trigger PDF File Download
    pdf.save(fileName);

    return true;
  } catch (err) {
    console.warn('html2canvas / jsPDF fallback to window.print()', err);
    try {
      window.print();
    } catch (printErr) {
      console.error('Window print execution error:', printErr);
    }
    return false;
  }
}
