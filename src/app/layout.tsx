export const metadata = {
  title: {
    absolute: "",
    default: "Hello World",
    template: "%s | Hello World",
  },
  description: "Created by Deepak",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ textAlign: "center", backgroundColor: "lightblue" }}>
          <h2>{metadata.title?.default}</h2>
        </header>
        {children}
        <footer
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "grey",
          }}
        >
          <p>{metadata.description}</p>
        </footer>
      </body>
    </html>
  );
}
