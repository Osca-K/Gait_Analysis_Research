import PyPDF2

pdf_path = "MECN4006 OSCA KHOLOPHA ATK9 PROJECT.pdf"
output_txt = "output.txt"

with open(pdf_path, "rb") as file:
    reader = PyPDF2.PdfReader(file)
    with open(output_txt, "w", encoding="utf-8") as out:
        for page in reader.pages:
            text = page.extract_text()
            if text:
                out.write(text)
                out.write("\n\n")

print(f"PDF text extracted to {output_txt}")
