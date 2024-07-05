import jsPDF from "jspdf";

export const generatePDF = (policies) => {
  const doc = new jsPDF();
  doc.text("Policies", 10, 10);
  policies.forEach((policy, index) => {
    doc.text(
      `${index + 1}. ${policy.policyNumber} - ${policy.policyHolder}`,
      10,
      20 + index * 10
    );
  });
  doc.save("policies.pdf");
};
