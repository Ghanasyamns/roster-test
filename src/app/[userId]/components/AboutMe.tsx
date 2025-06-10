function AboutMe({ summary }: { summary: string }) {
  return (
    <div>
      <h3 className="text-lg lg:text-xl font-semibold mb-2">About Me</h3>
      <p className="text-sm lg:text-lg text-gray-700">{summary}</p>
    </div>
  );
}

export default AboutMe;
