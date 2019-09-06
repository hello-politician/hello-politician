
const Page = ({ children }) => (
  <div>
    <script src='https://unpkg.com/react/umd/react.production.min.js' />

    <script src='https://unpkg.com/react-dom/umd/react-dom.production.min.js' />

    <script src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js' />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    />
    {children}
  </div>
)

export default Page
