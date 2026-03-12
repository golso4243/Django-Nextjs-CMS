interface RichTextProps {
  body: string;
}

function splitIntoParagraphs(body: string): string[][] {
  const normalized = body.replace(/\r\n?/g, "\n");

  const rawParagraphs = normalized
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter((block) => block.length > 0);

  return rawParagraphs.map((block) => block.split("\n"));
}

export function RichText({ body }: RichTextProps) {
  const paragraphs = splitIntoParagraphs(body);

  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert">
      {paragraphs.map((lines, paragraphIndex) => (
        <p key={paragraphIndex} className="mb-4">
          {lines.map((line, lineIndex) => (
            <span key={lineIndex}>
              {line}
              {lineIndex < lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

